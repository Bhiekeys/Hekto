/** @format */

import React from 'react';
import { Link } from 'react-router-dom';
import useGetDataType from '../../hooks/useGetDataType';
const Categories = () => {
  const data = useGetDataType('mini');

  return (
    <div>
      <div className="py-20">
        <h2 className="text-center font-semibold text-[#1A0B5B] mb-12 text-[30px] sm:text-[42px]">
          Top Categories
        </h2>
        <div className="flex justify-center px-4 md:px-0 flex-wrap gap-6 items-center">
          {data?.map((item) => {
            return (
              <div key={item.id} className="overflow-hidden">
                <div className="grid relative shadow-sm rounded-full justify-center items-center bg-[#F6F7FB] w-[245px] h-[240px] ">
                  <div className="">
                    <img src={item.image} />
                  </div>
                  <div className="absolute w-full rounded-full hover:border-b-[6px] hover:border-l-[6px] hover:border-[#9877E7] hover:cursor-pointer h-full bg-[#F7F7F7]/10 -bottom-10 hover:bottom-0 opacity-0 hover:opacity-100 transition-all duration-300">
                    <div className="flex justify-center h-full items-center">
                      <Link to={`/postdetails/${item.id}`}>
                        <button className="bg-[#08D15F] py-1 rounded-sm px-2 text-[12px] mt-48 text-white">
                          View Shop
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="text-center bg-white ">
                  <h2 className="text-[#151875] text-[20px] font-semibold py-2">
                    {item.productName}
                  </h2>
                  {/* <div className="flex justify-center">
                    <img src={item.colors} />
                  </div> */}
                  <p className="text-[#151875] text-[16px] font-semibold">
                    ${item.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categories;
