import React from 'react';

// presentational Gif component
const Gif = props => (
  <li className="gif-wrap">
    <img src={props.url} alt=""/>
  </li>
);

export default Gif;