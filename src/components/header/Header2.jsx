/** @format */


import Hekto from '../../assets/Hekto.png';
import { FiSearch, FiUser } from 'react-icons/fi';
import { AiOutlineMenu, AiOutlineHeart } from 'react-icons/ai';
import { useState } from 'react';
import { BsCart2 } from 'react-icons/bs';
import { GrClose } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import { useContext,  useEffect} from 'react';
import { CartContext } from '../../store/cartContext';

const Header2 = () => {
  const cart = useContext(CartContext);
   const [login, setLogin] = useState(false);
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow((prev) => !prev);
  };

  const Logout = () => {
    localStorage.clear();
    location.href = '/';
  };
  useEffect(() => {
    let log = window.localStorage.getItem('Login');
    setLogin(log);
  }, []);


  return (
    <div className="fixed z-50 flex items-center justify-between bg-white lg:gap-[155px] md:justify-center w-full py-4 mt-8">
      <div className="md:hidden ml-3 md:ml-0">
        {show ? (
          <GrClose className="text-[30px] " onClick={showHandler} />
        ) : (
          <AiOutlineMenu className="text-[30px]" onClick={showHandler} />
        )}
      </div>

      {show && (
        <nav className="grid absolute bg-white left-0 top-[60px] w-[100%] pl-4 py-2">
          <ul className="grid gap-5 pr-5 ">
            <li className="cursor-pointer">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FB2E86] font-bold'
                    : 'text-[#0D0E43] font-semibold'
                }>
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink
                to="/pages"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FB2E86] font-bold'
                    : 'text-[#0D0E43] font-semibold'
                }>
                Pages
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FB2E86] font-bold'
                    : 'text-[#0D0E43] font-semibold'
                }>
                Products
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FB2E86] font-bold'
                    : 'text-[#0D0E43] font-semibold'
                }>
                Blog
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FB2E86] font-bold'
                    : 'text-[#0D0E43] font-semibold'
                }>
                Shop
              </NavLink>
            </li>
            <li className="cursor-pointer">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FB2E86] font-bold'
                    : 'text-[#0D0E43] font-semibold'
                }>
                Contact
              </NavLink>
            </li>
            <li className="flex items-center">
              {login ? (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#FB2E86] font-bold'
                      : 'text-[#0D0E43] font-semibold'
                  }
                  onClick={Logout}>
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    isActive
                      ? 'text-[#FB2E86] font-bold'
                      : 'text-[#0D0E43] font-semibold'
                  }>
                  Login
                </NavLink>
              )}

              <FiUser />
            </li>
            <li className="flex items-center">
              <NavLink
                to="/wishlist"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FB2E86] font-bold'
                    : 'text-[#0D0E43] font-semibold'
                }>
                Wishlist
              </NavLink>
              <AiOutlineHeart />
            </li>
            <li className="flex justify-center">
              <NavLink
                to="/cart"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FB2E86] font-bold'
                    : 'text-[#0D0E43] font-semibold'
                }>
                <span className="relative">
                  <BsCart2 className="text-2xl" />
                  <span className="absolute top-[-30%] left-4 text-[#fff] rounded-full px-2 bg-[#FB2E86] text-[12px]">
                    {cart.cartItems?.length}
                  </span>
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      )}

      <div className="flex gap-12">
        <div className="ml-12 mr-3 md:mr-0 md:ml-0">
          <NavLink to="/">
            <img src={Hekto} alt="" />
          </NavLink>
        </div>
        <div className="hidden md:flex gap-12 items-center">
          <ul className="flex gap-5 items-center">
            <li className="cursor-pointer text-[16px]">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FB2E86] font-medium'
                    : 'text-[#0D0E43] hover:text-[#FB2E86] '
                }>
                Home
              </NavLink>
            </li>
            <li className="cursor-pointer text-[16px]">
              <NavLink
                to="/pages"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FB2E86] font-medium'
                    : 'text-[#0D0E43] hover:text-[#FB2E86] '
                }>
                Pages
              </NavLink>
            </li>
            <li className="cursor-pointer text-[16px]">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FB2E86] font-medium'
                    : 'text-[#0D0E43] hover:text-[#FB2E86]'
                }>
                Products
              </NavLink>
            </li>
            <li className="cursor-pointer text-[16px]">
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FB2E86] font-medium'
                    : 'text-[#0D0E43] hover:text-[#FB2E86] '
                }>
                Blog
              </NavLink>
            </li>
            <li className="cursor-pointer text-[16px]">
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FB2E86]  font-medium'
                    : 'text-[#0D0E43] hover:text-[#FB2E86] '
                }>
                Shop
              </NavLink>
            </li>
            <li className="cursor-pointer text-[16px]">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? 'text-[#FB2E86] font-medium'
                    : 'text-[#0D0E43] hover:text-[#FB2E86] '
                }>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="hidden sm:flex items-center sm:mr-3 md:mr-0">
        <input type="text" className="border py-1 outline-0" />
        <div className="py-[9px] px-3 bg-[#FB2E86] ">
          <FiSearch className="text-white " />
        </div>
      </div>
    </div>
  );
};

export default Header2;
