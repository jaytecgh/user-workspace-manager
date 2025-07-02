import React from 'react';

const Blog: React.FC = () => {
  return (
    <div>
      <h2>Blog</h2>
      <article className="mb-4">
        <h3>Understanding Wall Deterioration</h3>
        <p>Learn about the causes of wall deterioration and how to prevent it.</p>
        <a href="#">Read more</a>
      </article>
      <article className="mb-4">
        <h3>Effective Waterproofing Techniques</h3>
        <p>Explore the best waterproofing methods to protect your property.</p>
        <a href="#">Read more</a>
      </article>
      <article className="mb-4">
        <h3>Preventing Dampness in Buildings</h3>
        <p>Tips and solutions for dampness prevention in residential and commercial buildings.</p>
        <a href="#">Read more</a>
      </article>
    </div>
  );
};

export default Blog;
