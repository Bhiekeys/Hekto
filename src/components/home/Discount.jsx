/** @format */


import { FcCheckmark } from 'react-icons/fc';
import shop from '../../assets/shop.png';
const Discount = () => {
  return (
    <div className=" mt-24">
      <div>
        <h2 className="text-center font-semibold text-[#1A0B5B] text-[30px] sm:text-[42px]">
          Discount Item
        </h2>
        <ul className="flex justify-center gap-4 flex-wrap pt-5 sm:gap-10 text-[18px] text-[#151875] font-[500]">
          <li className="text-[#FB2E86] border-b border-[#FB2E86]">
            Wood Chair .
          </li>
          <li>Plastic Chair</li>
          <li>Sofa Colletion</li>
        </ul>
      </div>
      <div className="md:flex grid justify-center gap-4 px-10 lg:px-0 items-center ">
        <div className="lg:w-[37%] text-center md:text-left">
          <h2 className="text-[#151875] pt-5 text-[21px] lg:text-[35px] font-[600] ">
            20% Discount Of All Products
          </h2>
          <p className="text-[#FB2E86] py-3 text-[21px] lg:text-[21px]">
            Eams Sofa Compact
          </p>
          <p className="text-[#ACABC3] leading-8 lg:text-[17px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <div className="md:flex md:justify-start justify-center grid py-6 md:gap-6">
            <div className="leading-8">
              <div className="flex items-center gap-2">
                <FcCheckmark />
                <h2 className="text-[#ACABC3] lg:text-[16px]">
                  Material expose like metals
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <FcCheckmark />
                <h2 className="text-[#ACABC3] lg:text-[16px]">
                  Simple neutral colours.
                </h2>
              </div>
            </div>
            <div className="leading-8">
              <div className="flex items-center text-white gap-2">
                <FcCheckmark />
                <h2 className="text-[#ACABC3] lg:text-[16px]">
                  Clear lines and geomatric figures
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <FcCheckmark />
                <h2 className="text-[#ACABC3] lg:text-[16px]">
                  Material expose like metals
                </h2>
              </div>
            </div>
          </div>
          <div>
            <button className="bg-[#FB2E86] hover:bg-[#ff4495] text-[17px] rounded-sm px-2 py-1 lg:py-2 lg:px-7 text-white lg:font-[400]">
              Shop Now
            </button>
          </div>
        </div>
        <div className="lg:w-[36%]">
          <img src={shop} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Discount;
