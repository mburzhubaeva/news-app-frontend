import React from 'react';

import imageNotAvailable from '../../assets/images/not_available.jpg';

const styles = {
  width: '100px',
  height: '100px',
  marginRight: '10px'
};

const PostThumbnail = props => {
  let image = imageNotAvailable;

  if(props.image) {
    image = 'http://localhost:8000/uploads/' + props.image;
  }

  return <img src={image} style={styles} className="image-thumbnail" alt="Product"/>;
};

export default PostThumbnail;