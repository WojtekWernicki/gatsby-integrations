import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

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

const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 30px;
  justify-items: center;
  padding: 0 30px;
  margin: 0 auto;
`;

const IndexPage = ({ data: { posts } }) => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Grid>
      {posts.edges.map(edge => (
        <Excerpt post={edge} />
      ))}
    </Grid>
  </Layout>
);

export default IndexPage
