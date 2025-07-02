import React from 'react';

const Home: React.FC = () => {
  return (
    <div>
      <section className="hero bg-light p-5 text-center">
        <h2>Welcome to Wallcare & Waterproofing</h2>
        <p>Your trusted partner in wall treatment, waterproofing, and dampness solutions.</p>
      </section>

      <section className="about my-5">
        <h3>About Us</h3>
        <p>We specialize in treating deteriorated walls, waterproofing, and dampness prevention to protect your property.</p>
      </section>

      <section className="services my-5">
        <h3>Our Services</h3>
        <ul>
          <li><a href="/services#wall-treatment">Wall Treatment</a></li>
          <li><a href="/services#waterproofing">Waterproofing</a></li>
          <li><a href="/services#dampness-prevention">Dampness Prevention</a></li>
        </ul>
      </section>

      <section className="projects my-5">
        <h3>Our Projects</h3>
        <p>Explore our portfolio of successful projects.</p>
        <a href="/projects" className="btn btn-primary">View Projects</a>
      </section>

      <section className="blog my-5">
        <h3>Latest Blog Posts</h3>
        <p>Stay informed with our latest articles on wall care and waterproofing.</p>
        <a href="/blog" className="btn btn-primary">Visit Blog</a>
      </section>
    </div>
  );
};

export default Home;
