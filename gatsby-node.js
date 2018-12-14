const componentWithMDXScope = require("gatsby-mdx/component-with-mdx-scope");
const path = require("path")
const {createFilePath} = require("gatsby-source-filesystem")


exports.onCreateNode = ({node, getNode, actions}) =>{
    const {createNodeField} = actions
    if (node.internal.type === 'Mdx') {
        const route = createFilePath({node, getNode, basePath:'posts'})
        createNodeField({
            node,
            name: 'route',
            value: route
        })
    }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allMdx {
                edges {
                    node {
                        fields {
                            route
                        }
                        id
                        parent {
                            ... on File {
                                name
                                sourceInstanceName
                            }
                        }
                        code {
                            scope
                        }
                    }
                }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        result.data.allMdx.edges.forEach(({ node }) => {
          createPage({
            path: node.fields.route,
            component: componentWithMDXScope(
              path.resolve("./src/components/post-layout.js"),
              node.code.scope
            ),
            context: { 
                id: node.id, 
                postRoute: node.fields.route
            }
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  })
  if(stage === "build-html"){
    actions.setWebpackConfig({
      module:{
        rules: [
          {
            test: /cld-video-player/,
            use: loaders.null()
          },
          {
            test: /cloudinary-video-player/,
            use: loaders.null()
          }
        ]
      }
    })
  }
}