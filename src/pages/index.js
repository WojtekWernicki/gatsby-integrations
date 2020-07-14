import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import Excerpt from '../components/post-excerpt';
import SEO from '../components/seo';

export const query = graphql`
  query {
    posts: allWordpressPost(limit: 3, sort: {fields: date, order: DESC}) {
      edges {
        node {
          author {
            name
          }
          date(fromNow: true)
          excerpt
          slug
          title
          categories {
            name
          }
          featured_media {
            localFile {
              sharp: childImageSharp {
                fixed(width: 640, height: 400) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;

const IndexPage = ({ data: { posts } }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {posts.edges.map(edge => (
        <Excerpt post={edge} />
      ))}
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
);

export default IndexPage
