import React from 'react'
import Link from 'gatsby-link'

import '../styles/blog-listing.css';

export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div>
      <p>Hey there! Thanks for checking out my blog! If you haven't already be sure to check out my main website <a onClick={() => window.open('http://azbo400.github.io')} href="">here</a></p>
      <div className="blog-posts">
        {posts 
          .filter(post => post.node.frontmatter.title.length > 0)
          .map(({node: post}) => {
            return (
              <div className="blog-post-preview" key={post.id}>
                <h1>
                  <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h1>
                <h2>{post.frontmatter.date}</h2>
                <p>{post.excerpt}</p>
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`;