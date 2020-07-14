import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

const StyledImage = styled(Image)`
  img,
  picture {
    width: 100%;
    height: auto;
  }
`;

const Excerpt = ({ post }) => (
  <>
    <Link to={`/${post.node.slug}`}>
      <StyledImage
        fixed={post.node.featured_media.localFile.sharp.fixed}
        sizes={{ ...post.node.featured_media.localFile.sharp.fixed, aspectRatio: 16 / 9 }}
      />
      <h2>{post.node.title}</h2>
    </Link>
    <div dangerouslySetInnerHTML={{
      __html: post.node.excerpt
    }} />
  </>
);

export default Excerpt;
