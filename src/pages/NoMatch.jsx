/** @format */

import React from 'react';
import Header from '../components/Header/Header'
import Header2 from '../components/Header/Header2'
import NoMatchBanner from '../components/NoMatch/NoMatchBanner';
import NotFound from '../components/NoMatch/NotFound';
import Footer from '../components/Footer/Footer'
const NoMatch = () => {
  return (
    <div>
      <Header />
      <Header2 />
      <NoMatchBanner />
      <NotFound />
      <Footer/>
    </div>
  );
};

export default NoMatch;
