import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import PastEvents from '../components/past-events';
import ContactUs from '../components/contact-us';

export default props => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <PastEvents />
    <ContactUs />
  </Layout>
);
