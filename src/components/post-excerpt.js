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

const GridEl = styled.div`
  width: 100%;
`;

const Excerpt = ({ post }) => (
  <GridEl>
    <Link to={`/${post.node.slug}`}>
      <StyledImage
        fixed={post.node.featured_media.localFile.sharp.fixed}
        sizes={{ ...post.node.featured_media.localFile.sharp.fixed, aspectRatio: 16 / 9 }}
      />
      <h2>{post.node.title}</h2>
    </Link>
    <div>Written by {post.node.author.name} {post.node.date}</div>
    <div dangerouslySetInnerHTML={{
      __html: post.node.excerpt
    }} />
  </GridEl>
);

export default Excerpt;
