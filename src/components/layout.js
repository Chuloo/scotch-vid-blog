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
// export default ({ children }) => (
//     <StaticQuery
//       query={graphql`
//         query {
//           site {
//             siteMetadata {
//               title
//             }
//           }
//         }
//       `
//       }
//       render={data => (
//         <div
//           className={css`
//             margin: 0 auto;
//             max-width: 700px;
//             padding: ${rhythm(2)};
//             padding-top: ${rhythm(1.5)};
//           `}
//         >
//           <Link to={`/`}>
//             <h3
//               className={css`
//                 margin-bottom: ${rhythm(2)};
//                 display: inline-block;
//                 font-style: normal;
//               `}
//             >
//               {data.site.siteMetadata.title}
//             </h3>
//           </Link>
//           <Link
//             to={`/about/`}
//             className={css`
//               float: right;
//             `}
//           >
//             About
//           </Link>
//           {children}
//         </div>
//       )}
//     />
//   )