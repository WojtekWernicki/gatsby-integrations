import React from 'react';
import { graphql } from 'gatsby';

export const query = graphql`
  query ($slug: String!) {
    wordpressPost(slug: {eq: $slug}) {
      author {
        name
      }
      content
      date(fromNow: true)
      excerpt
      slug
      categories {
        name
      }
      title
    }
  }
`;

export default ({ data: { wordpressPost } }) => (
  <div dangerouslySetInnerHTML={{
    __html: wordpressPost.content
  }} />
);
