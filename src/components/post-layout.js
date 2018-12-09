import React from "react"
import Layout from '../components/layout'
import { graphql, StaticQuery } from "gatsby";
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

// export default ()=>(
//     <StaticQuery
//         query= {graphql`
//             query PostQuery($route: String!){
//                 mdx(fields: {route: {eq: $route}}){
//                     frontmatter{
//                         title
//                     }
//                     rawBody
//                     internal{
//                         content
//                     }
//                     code{
//                         body
//                         scope
//                     }
//                 }
//             }
//         `}
//         render={data=>{
//             const post = data.mdx
//             console.log(post)
//             return (
//                 <Layout>
//                     <div>
//                         <header>
//                             <h1 className="article-title"></h1>
//                         </header>
//                         <div>
//                             <MDXRenderer>{post.code.body}</MDXRenderer>
                            
//                         </div>
//                     </div>
//                 </Layout>
//             )
//         }}
//     />
// )

export default ({data}) => {
    console.log(data)
    // const post = data
    return (
        <Layout>
            <div>
                <header>
                    <h1 className="article-title"></h1>
                </header>
            
                <div>
                  <MDXRenderer>{data.mdx.code.body}</MDXRenderer>
                </div>
            </div>
        </Layout>
    )
}

export const pageQuery = graphql`
    query ($postRoute: String!) {
        mdx(fields: {route: {eq: $postRoute}}){
                frontmatter{
                    title
                }
                fields{
                    route
                }
                rawBody
                internal{
                    content
                }
                code{
                    body
                    scope
                }
        }
    }
`
