/** @format */

import { useContext } from 'react';
import useGetDataType from '../../hooks/useGetDataType';
import { CartContext } from '../../store/cartContext';
const Features = () => {
  const { handleAddToCart } = useContext(CartContext);
  const uniqueItem = useGetDataType('unique');

  if (!uniqueItem?.length) {
    return null;
  }

  const { image, productName, price, quantity } = uniqueItem[0];
  const isAddedToCart = quantity > 0;

  const onAddToCartClick = () => {
    handleAddToCart(uniqueItem[0]);
  };

  return (
    <div className="md:flex-row flex flex-col-reverse pt-10 md:pt-0 justify-center bg-[#F1F0FF] items-center">
      <div className="md:w-[33vw] flex justify-center items-center">
        <img src={image} />
      </div>
      <div className="md:w-[36%] px-5 text-center lg:text-left">
        <h2 className="text-[#151875] font-semibold mb-2 lg:mb-7 text-[35px] md:text-[2.5vw]">
          Unique Features Of leatest & Trending Poducts
        </h2>
        <ul className="text-[#ACABC3] text-[16px]">
          <li> All frames constructed with hardwood solids and laminates</li>
          <li className="lg:py-3 py-1">
            Reinforced with double wood dowels, glue, screw - nails corner
            blocks and machine nails
          </li>
          <li>Arms, backs and seats are structurally reinforced</li>
        </ul>
        <div className="flex justify-center lg:justify-start items-center mt-2 lg:mt-7 gap-3">
          {}
          <button
            onClick={onAddToCartClick}
            disabled={isAddedToCart}
            className="bg-[#FB2E86] hover:bg-[#ff4495] text-[17px] rounded-sm px-2 py-1 lg:py-2 lg:px-4 text-white lg:font-[500]">
            Add{isAddedToCart ? 'ed' : ''} To Cart
          </button>
          <div>
            <h5 className="text-[#151875] text-[14px] lg:font-[500]">
              {productName}
            </h5>
            <h5 className="text-[#151875] text-[14px] lg:font-[500]">
              ${price}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
