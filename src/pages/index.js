import React from "react"
import Layout from '../components/layout'
import './index.css'
import { graphql, Link } from "gatsby";
import VideoPlayer from "../components/VideoPlayer"
// import { node } from "prop-types";

export default ({data}) => {
    const posts = data.allMdx.edges
    // console.log(posts)
    return (
        <Layout>
            <div>
                <header>
                    <h2>Let's place video memes here!</h2>
                </header>
                <div>
                    {posts.map(({node}, index)=> (
                        <Link to={node.fields.route} style={{textDecoration:'none', color:  'inherit'}} key={index}>
                            <div className="post-item">
                                <h3 className="post-title">{node.frontmatter.title}</h3>
                                <p className="post-excerpt">{node.excerpt}</p>
                                <p className="post-date">{node.frontmatter.date}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </Layout>
    )
}
export const query = graphql`
    query PageList{
        allMdx(sort: { fields: [frontmatter___date], order: DESC }){
            edges{
                node{
                    fields {
                        route
                    }
                    frontmatter{
                        title
                        date
                    }
                    timeToRead
                    excerpt
                }
            }
        }
    }

`
