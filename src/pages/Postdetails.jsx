/** @format */

import { useContext } from 'react';
import Header from '../components/Header/Header';
import Header2 from '../components/Header/Header2';
import ProductBanner from '../components/Productpage/ProductBanner';
import { useParams } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';
import { AiOutlineHeart } from 'react-icons/ai';
import Description from '../components/Productpage/Description';
import Related from '../components/Productpage/Related';
import Footer from '../components/Footer/Footer';
import com from '../assets/com.png';
import NoMatch from './NoMatch';
import { CartContext } from '../store/cartContext';
import useGetDataType from '../hooks/useGetDataType';

const Postdetails = () => {
  const { handleAddToCart } = useContext(CartContext);
  const allProducts = useGetDataType('all');
  const { id } = useParams();

  const product =
    allProducts?.length &&
    allProducts.find((data) => {
      return data.id == id;
    });

  if (!product) return <NoMatch />;

  const onAddToCartClick = () => {
    handleAddToCart(product);
  };

  const { image, productName, discount, price, quantity, about } = product;

  const isAddedToCart = quantity > 0;
  return (
    <>
      <Header />
      <Header2 />
      <ProductBanner />
      <div className="bg-white py-[100px] grid justify-center">
        <div className="shadow-[0_5px_40px_-17px_rgba(0,0,0,0.3)] py-7 mx-8 lg:mx-0 w-fit sm:gap-10 grid sm:flex items-center justify-center ">
          <div className="flex justify-center sm:grid">
            <img src={image} className="sm:w-[20vw] w-[50%]" />
          </div>
          <div className="sm:w-[50%] w-[100%] text-center sm:text-left">
            <h2 className="text-[#0D134E] font-semibold mb-2 mt-12 text-[32px]">
              {productName}
            </h2>
            <div className="flex gap-2 items-center justify-center sm:justify-start text-center">
              <AiFillStar className="text-[orange]" />
              <AiFillStar className="text-[orange]" />
              <AiFillStar className="text-[orange]" />
              <AiFillStar className="text-[orange]" />
              <AiFillStar className="text-[orange]" />
              <h1 className="text-[#151875] font-medium">(22)</h1>
            </div>
            <div className="flex py-2 gap-6 justify-center sm:justify-start">
              <h2 className="text-[#151875] font-medium">${price}</h2>
              <h2 className="text-[#FB2E86] line-through font-medium">
                ${discount}
              </h2>
            </div>
            <div className='px-10 sm:px-0'>
              <h2 className="text-[#0D134E] text-[18px] font-medium">Color</h2>
              <p className="text-[#A9ACC6] text-[17px]">{about}</p>
              <div className="text-[#151875] flex my-4 sm:ml-[90px] justify-center sm:justify-start items-center gap-5 font-medium">
                <button
                  type="button"
                  disabled={isAddedToCart}
                  onClick={onAddToCartClick}>
                  Add{isAddedToCart ? 'ed' : ''} To Cart
                </button>
                <AiOutlineHeart />
              </div>
            </div>
            <div className="leading-9 grid justify-center sm:justify-start">
              <h2 className="text-[#151875] font-medium">Categories:</h2>
              <h2 className="text-[#151875] font-medium">Tags</h2>
              <div className="flex gap-5">
                <h2 className="text-[#151875] font-medium">Share</h2>
                <div className="flex py-1 gap-3">
                  <img src={facebook} alt="fb" className="h-[19px] mt-2" />
                  <img src={instagram} alt="ig" className="h-[19px] mt-2" />
                  <img src={twitter} alt="tw" className="h-[19px] mt-2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Description />
      <Related />
      <div className="flex justify-center my-28">
        <img src={com} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Postdetails;
