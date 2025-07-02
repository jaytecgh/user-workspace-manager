import React from 'react';

const Services: React.FC = () => {
  return (
    <div>
      <h2>Our Services</h2>
      <section id="wall-treatment" className="my-4">
        <h3>Wall Treatment</h3>
        <p>We provide expert treatment for deteriorated walls to restore and protect your property.</p>
      </section>
      <section id="waterproofing" className="my-4">
        <h3>Waterproofing</h3>
        <p>Our waterproofing solutions prevent water ingress and damage to your buildings.</p>
      </section>
      <section id="dampness-prevention" className="my-4">
        <h3>Dampness Prevention</h3>
        <p>We offer effective dampness prevention treatments to maintain healthy walls and interiors.</p>
      </section>
    </div>
  );
};

export default Services;
