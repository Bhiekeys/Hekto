/** @format */

import Header from '../components/header/Header'
import Header2 from '../components/header/Header2'
import NoMatchBanner from '../components/noMatch/NoMatchBanner';
import NotFound from '../components/noMatch/NotFound';
import Footer from '../components/footer/Footer'
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
