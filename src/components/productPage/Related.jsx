/** @format */

import React from 'react';
import Data from '../../mocks/product-data';
import { useState, useEffect } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import useGetDataType from '../../hooks/useGetDataType';
const Related = () => {
  const relatedData = useGetDataType('related');
  return (
    <div className="grid justify-center mt-20">
      <h2 className="font-semibold text-[#1A0B5B] text-center lg:text-left mb-10 text-[40px]">
        Related Products
      </h2>
      <div className="flex justify-center gap-5 flex-wrap items-center">
        {relatedData?.map((data) => {
          return (
            <div key={data.id} className="">
              <Link to={`/postdetails/${data.id}`}>
                <div className="">
                  <img src={data.image} />
                </div>

                <div className="leading-7 pt-2 ">
                  <div className="flex justify-between">
                    <h2 className="text-[#151875] text-[16px] font-semibold">
                      {data.productName}
                    </h2>
                    <div className="flex items-center">
                      <AiFillStar className="text-[orange]" />
                      <AiFillStar className="text-[orange]" />
                      <AiFillStar className="text-[orange]" />
                      <AiFillStar className="text-[orange]" />
                      <AiFillStar className="text-[orange]" />
                    </div>
                  </div>

                  <p className="text-[#151875] text-[13px] font-semibold">
                    ${data.price}
                  </p>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Related;
