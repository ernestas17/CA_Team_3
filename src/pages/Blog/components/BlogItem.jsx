import React from 'react';
import { StyledBlogItem } from './BlogItem.style';

const BlogItem = ({ image, posted, title, content }) => {
  console.log(image);
  return (
    <StyledBlogItem>
      <div className="imageWrapper">
        <img src={require(`../images/${image}`)} alt="" />
      </div>
      <p className="posted">{posted}</p>
      <p className="title1">{title}</p>
      <p className="body2">{content}</p>
    </StyledBlogItem>
  );
};

export default BlogItem;
