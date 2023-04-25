/** @format */

import React from 'react';
import clock from '../../assets/clock.png';
import completed from '../../assets/completed.png';
import checklist from '../../assets/checklist.png';
import com from '../../assets/com.png';
import { Link } from 'react-router-dom';
const OrderComplete = () => {
  return (
    <div className="pt-[100px]">
      <div className="bg-[#F6F5FF] px-1 md:px-0 py-20 text-center lg:text-left lg:pl-[230px]">
        <h2 className="text-[#101750] text-[38px] font-[600]">
          Order Completed
        </h2>
        <p className="font-[500]">
          Home . Pages . <span className="text-[#FB2E86]">Order Completed</span>
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-20 items-center lg:gap-16 sm:gap-5 py-16 justify-center">
        <div className="md:mb-28 sm:mb-48 ">
          <img src={clock} />
        </div>

        <div className="lg:w-[45%] sm:w-[55%] px-3 sm:px-0 text-center">
          <div className="flex justify-center">
            <img src={completed} />
          </div>
          <h2 className="text-[#101750] text-[36px] font-[600]">
            Your Order Is Completed!
          </h2>
          <p className="text-[16px] pt-3 text-[#8D92A7]">
            Thank you for your order! Your order is being processed and will be
            completed within 3-6 hours. You will receive an email confirmation
            when your order is completed.
          </p>
          <Link to="/">
            <button className="bg-[#FB2E86] font-[400] text-[16px] mt-7 text-[#fff] py-2 px-6 rounded-sm ">
              Continue Shipping
            </button>
          </Link>
        </div>
        <img src={checklist} className="sm:mt-72 " />
      </div>
      <div className="flex justify-center my-12">
        <img src={com} alt="" />
      </div>
    </div>
  );
};

export default OrderComplete;
