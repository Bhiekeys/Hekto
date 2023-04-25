/** @format */

import React from 'react';
import Hekto from '../../assets/Hekto.png';
import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import instagram from '../../assets/instagram.png';
const Footer = () => {
  return (
    <div>
      <div className="grid md:flex justify-center gap-10 pl-3  bg-[#EEEFFB] py-16">
        <div className=" text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <img src={Hekto} />
          </div>
          <div className="pt-8">
            <input
              type="text"
              className="outline-none text-[16px] pl-2 bg-[#fff] py-2 placeholder:text-[#8A8FB9]"
              placeholder="Enter Email Address"
            />
            <button
              className="bg-[#FB2E86] text-[16px] rounded-sm px-2 py-2 lg:py-2 lg:px-7 text-white lg:font-[400]"
              type="button">
              Sign Up
            </button>
          </div>
          <h2 className="text-[#8A8FB9] text-[16px] mt-4 py-1">Contact Info</h2>
          <p className="text-[#8A8FB9] text-[16px]">
            17 Princess Road, London, Greater London NW1 8JR, UK
          </p>
        </div>

        <ul className="text-[#8A8FB9] text-[16px] md:text-left text-center leading-8">
          <li className="text-[18px] text-[#000000] pb-4 font-semibold">
            Categories
          </li>
          <li>Laptops & Computers</li>
          <li>Cameras & Photography</li>
          <li>Smart Phones & Tablets</li>
          <li>Video Games & Consoles</li>
          <li>Waterproof Headphones</li>
        </ul>

        <ul className="text-[#8A8FB9] text-[16px] md:text-left text-center  leading-8">
          <li className="text-[18px] text-[#000000] pb-4 font-semibold">
            Customer Care
          </li>
          <li>My Account</li>
          <li>Discount</li>
          <li>Returns</li>
          <li>Orders History</li>
          <li>Order Tracking</li>
        </ul>

        <ul className="text-[#8A8FB9] text-[16px] md:text-left text-center  leading-8">
          <li className="text-[18px] text-[#000000] pb-4 font-semibold">
            Pages
          </li>
          <li>Blog</li>
          <li>Browse the Shop</li>
          <li>Category</li>
          <li>Pre-Built Pages</li>
          <li>Visual Composer Elements</li>
          <li>WooCommerce Pages</li>
        </ul>
      </div>
      <div className="flex flex-wrap justify-around  bg-[#E7E4F8]">
        <h2 className="text-[#9DA0AE] text-[16px] py-3 font-[600]">
          ©Webecy - All Rights Reserved
        </h2>
        <div className="flex py-3 gap-3">
          <img src={facebook} alt="fb" />
          <img src={instagram} alt="ig" />
          <img src={twitter} alt="tw" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
