/** @format */

import { useContext } from 'react';
import { CartContext } from '../../store/cartContext';
import { useNavigate } from 'react-router-dom';
const CartCal = () => {
  const cart = useContext(CartContext);
  const navigate = useNavigate()
  const Payment = () => {
    localStorage.clear();
   navigate('/order')
  }
  return (
    <div className="pt-[65px] grid justify-center p-0 ">
      <h2 className="text-[#1D3178] text-center pb-5 font-bold text-[20px]">
        Cart Totals
      </h2>
      <div className="bg-[#F4F4FC] p-10">
        <div className="flex text-[#1D3178] border-2 gap-28 border-[#F4F4FC] border-b-[#E8E6F1]">
          <h2 className="font-semibold text-[18px]">Subtotals:</h2>
          <p className="font-[500]">${cart.totalPrice}</p>
        </div>
        <div className="flex text-[#1D3178] border-2 gap-36 border-[#F4F4FC] pt-10 border-b-[#E8E6F1]">
          <h2 className="font-semibold">Totals:</h2>
          <p className="font-[500]">${cart.totalPrice}</p>
        </div>
        <div className="flex items-center gap-2 py-6">
          <input type="checkbox" className="accent-[#19D16F]" />
          <p className="text-[#8A91AB] text-[12px]">
            Shipping & taxes calculated at checkout
          </p>
        </div>
        <button
          onClick={Payment}
          className="bg-[#19D16F] font-medium text-[14px] text-[#fff] py-2 rounded-sm w-full">
          Proceed To Checkout
        </button>
      </div>
      <h2 className="text-[#1D3178] text-center py-5 font-bold text-[20px]">
        Calculate Shopping
      </h2>
      <div className="bg-[#F4F4FC] p-10">
        <div className=" text-[#C5CBE3] leading-7 ">
          <h2 className="font-semibold border-2 gap-28 border-[#F4F4FC] border-b-[#E8E6F1] text-[14px]">
            Bangladesh
          </h2>
          <h2 className="font-semibold border-2 my-4 gap-28 border-[#F4F4FC] text-[14px] border-b-[#E8E6F1]">
            Mirpur Dhaka - 1200
          </h2>
          <h2 className="font-semibold border-2 gap-28 border-[#F4F4FC] text-[14px] border-b-[#E8E6F1]">
            Mirpur Dhaka - 1200
          </h2>
        </div>

        <button
          type="submit"
          className="bg-[#FB2E86] font-[400] text-[16px] mt-7 text-[#fff] py-2 px-6 rounded-sm ">
          Calculate Shiping
        </button>
      </div>
    </div>
  );
};

export default CartCal;
