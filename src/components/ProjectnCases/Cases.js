import React from 'react';

const Cases = ({ img, alt, title, text, url }) => {
  return (
    <article>
      <img src={img} alt={alt} />
      <h3>{title}</h3>
      <a href={url}>
        {text}
        <i className="fa-solid fa-arrow-right"></i>
      </a>
    </article>
  );
};

export default Cases;
