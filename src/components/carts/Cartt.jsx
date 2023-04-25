/** @format */

import React from 'react';
import { useContext } from 'react';
import { CartContext } from '../../store/cartContext';
import CartCal from './CartCal';
import { Link } from 'react-router-dom';

const Cartt = () => {
  const {
    cartItems,
    handleDecreaseQuantity,
    handleIncreaseQuantity,
    handleClearCart,
  } = useContext(CartContext);

  return (
    <div className="lg:flex justify-center px-2 sm:px-0 items-center gap-10 pb-40">
      <div className="grid justify-center">
        <div className="flex pt-16 justify-center gap-32">
          <div className="grid justify-center items-center">
            <table>
              <thead className="text-left md:text-[20px] text-[#1D3178]">
                <tr className="">
                  <th className="md:w-[250px] pb-5">Product</th>
                  <th className="md:w-[120px] pb-5">price</th>
                  <th className="md:w-[135px] px-5 sm:px-0 pb-5">Quantity</th>
                  <th className=" pb-5">Total</th>
                </tr>
              </thead>
              {cartItems?.map((product) => {
                const { id, productName, image, price, quantity } = product;
                return (
                  <tbody key={id} className="">
                    <tr className=" border-white text-[14px] font-semibold border-2 border-b-[#E1E1E4]">
                      <td className="sm:flex gap-3 pb-3 items-center ">
                        <img
                          src={image}
                          className="sm:w-[80px] w-[60px] mt-7 bg-slate-100"
                        />
                        <div>
                          <h2 className="font-[500] md:text-[14px] text-[13px]">
                            {productName}
                          </h2>
                          <p className="text-[#15245E] text-[12px]">Size Xl</p>
                        </div>
                      </td>
                      <td className="pb-3 text-[#15245E] text-[14px]">
                        ${price}
                      </td>
                      <td className="pb-3 px-5 sm:px-0">
                        <button
                          onClick={() => handleDecreaseQuantity(product)}
                          className=" bg-[#BEBFC2] text-[12px] px-2">
                          -
                        </button>
                        <span className="sm:px-2 bg-[#BEBFC2] text-[12px] py-[1px] ">
                          {quantity}
                        </span>
                        <button
                          onClick={() => handleIncreaseQuantity(product)}
                          className=" bg-[#BEBFC2] text-[12px] px-2">
                          +
                        </button>
                      </td>
                      <td className="pb-3 text-[14px] text-[#15245E]">
                        ${price * quantity}
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>

        <div className="flex pt-20 justify-between">
          <Link to="/">
            <button className="bg-[#FB2E86] text-[16px] py-1 rounded-sm px-1 sm:px-2 text-white">
              Update Cart
            </button>
          </Link>

          <button
            disabled={cartItems.length === 0}
            onClick={handleClearCart}
            className="bg-[#FB2E86] text-[16px] py-1 rounded-sm px-[15px] sm:px-2 text-white">
            Clear Cart
          </button>
        </div>
      </div>
      <CartCal />
    </div>
  );
};

export default Cartt;
