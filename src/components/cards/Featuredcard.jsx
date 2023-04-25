/* eslint-disable react/prop-types */
/** @format */

import { useContext } from 'react';
import { BsCart2, BsFillCartCheckFill } from 'react-icons/bs';
import { AiOutlineHeart } from 'react-icons/ai';
import { SlMagnifierAdd } from 'react-icons/sl';
import { Link } from 'react-router-dom';
import { CartContext } from '../../store/cartContext';

const FeaturedCard = ({ item = {} }) => {
  const { handleAddToCart } = useContext(CartContext);
  const { id, image, productName,  colors, price, quantity } = item;
  const isAddedToCart = quantity > 0;

  const onCartClick = () => {
    handleAddToCart(item);
  };

  return (
    <div className="shadow-lg relative overflow-hidden">
      <div className="grid justify-center items-center bg-[#F6F7FB] w-[230px] h-[240px] ">
        <div className="">
          <img src={image} />
        </div>
      </div>
      <div className="text-center bg-white ">
        <h2 className="text-[#FB2E86] text-[16px] font-semibold py-2">
          {productName}
        </h2>
        <div className="flex justify-center">
          <img src={colors} />
        </div>
        <h2 className="text-[#151875] text-[14px] font-semibold py-2">
          code-Y523201
        </h2>
        <p className="text-[#151875] text-[14px] font-semibold">${price}</p>
      </div>
      <div className="absolute w-full h-full bg-[#F7F7F7]/10 -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
        <div className="flex flex-col">
          <div className="flex items-center gap-5 pl-1">
            {isAddedToCart ? (
              <div
                style={{
                  pointerEvents: 'none',
                }}
                className="bg-[#EEEFFB] p-3 rounded-full">
                <BsFillCartCheckFill className="text-[#2F1AC4]" />
              </div>
            ) : (
              <div
                onClick={onCartClick}
                className="bg-[#EEEFFB]  p-3 rounded-full cursor-pointer">
                <BsCart2 className="text-[#2F1AC4]" />
              </div>
            )}
            <AiOutlineHeart className="text-[#1389FF] text-lg" />
            <SlMagnifierAdd className="text-[#1389FF]" />
          </div>
          <div className="flex justify-center">
            <Link to={`/postdetails/${id}`}>
              <button className="mt-[160px] text-[12px] text-[#fff] font-[450] px-3 py-[5px] bg-[#08D15F]">
                View Details
              </button>
            </Link>
          </div>
          <div className="text-center bg-[#2F1AC4] mt-2 pb-2 ">
            <h2 className="text-[#fff] text-[16px] font-semibold py-2">
              {productName}
            </h2>
            <div className="flex justify-center">
              <img src={colors} />
            </div>
            <h2 className="text-[#fff] text-[14px] font-semibold py-2">
              code-Y523201
            </h2>
            <p className="text-[#fff] text-[14px] font-semibold">${price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
