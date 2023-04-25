/** @format */
import { useContext, useState, useEffect } from 'react';

import { BiEnvelope } from 'react-icons/bi';
import { TbPhoneCall } from 'react-icons/tb';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { AiOutlineHeart } from 'react-icons/ai';
import { BsCart2 } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { CartContext } from '../../store/cartContext';

const Header = () => {
  const [login, setLogin] = useState(false);
  const cart = useContext(CartContext);
 
 const Logout = () => {
   localStorage.clear();
   location.href='/'
  };
  useEffect(() => {
    let log = window.localStorage.getItem('Login');
    setLogin(log);
  }, []);

  return (
    <div>
      <div className="flex justify-evenly z-50 py-1 bg-[#7E33E0] text-white w-full fixed">
        <div className="flex gap-2 sm:gap-10">
          <div className="flex items-center gap-1">
            <BiEnvelope />
            <h5>mhhasanul@gmail.com</h5>
          </div>
          <div className="flex gap-1 items-center">
            <TbPhoneCall />
            <h5>(12345)67890</h5>
          </div>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4 items-center">
            <li className="flex items-center">
              English <MdOutlineKeyboardArrowDown />
            </li>
            <li className="flex items-center">
              USD <MdOutlineKeyboardArrowDown />
            </li>

            <li className="flex items-center">
              {login ? (
                <NavLink to="/login" onClick={Logout}>
                  Logout
                </NavLink>
              ) : (
                <NavLink to="/login">Login</NavLink>
              )}
              <FiUser />
            </li>
            <li className="flex items-center">
              <NavLink to="/wishlist">Wishlist</NavLink> <AiOutlineHeart />
            </li>
            <li>
              <Link to="/cart">
                <span className="relative">
                  <BsCart2 />
                  <span className="absolute top-[-40%] left-3 text-[#fff] rounded-full px-1 bg-[#FB2E86] text-[12px]">
                    {cart.cartItems?.length}
                  </span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
