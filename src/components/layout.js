import React from "react"
import {Link, StaticQuery, graphql} from 'gatsby'
import "./layout.css"

export default ({children})=> (
    <StaticQuery
    query={graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `}
    render={data => (
        <div>
            <div className="nav">
                <Link to={'/'} style={{textDecoration: 'none', color: 'inherit'}}>
                    <h1>{data.site.siteMetadata.title}</h1>
                </Link>
            </div>
            
            <div className="child">
                {children}
            </div>
        </div>
    )}
    />
)