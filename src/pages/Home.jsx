
import Header from '../components/header/Header';
import Header2 from '../components/header/Header2';
import Banner from '../components/home/Banner';
import Featured from "../components/home/Featured"
import Latest from '../components/home/Latest';
import Support from '../components/home/Support';
import Features from '../components/home/Features';
import Trending from '../components/home/Trending'
import Discount from '../components/home/Discount';
import Categories from '../components/home/Catergories'
import Subscribe from '../components/home/Subscribe';
import Blogs from '../components/home/Blogs';
import Footer from '../components/footer/Footer';
const Home = () => {
  return (
    <>
      <div className='scroll-smooth'>
        <Header />
        <Header2 />
        <Banner />
        <Featured />
        <Latest />
        <Support />
        <Features />
        <Trending />
        <Discount />
        <Categories />
        <Subscribe />
        <Blogs />
        <Footer />
      </div>
    </>
  );
};

export default Home;
