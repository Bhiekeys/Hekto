/** @format */

import time from '../../assets/time.png';
import wood from '../../assets/wood.png';
import { Link } from 'react-router-dom';

import useGetDataType from '../../hooks/useGetDataType';
const Trending = () => {
  const trendingData = useGetDataType('trending');
  const sitData = useGetDataType('sit');

  return (
    <div className="mt-20 px-5 md:px-0">
      <h2 className="text-center font-semibold text-[#1A0B5B] mb-12 text-[30px] sm:text-[42px]">
        Trending Products
      </h2>
      <div className="flex justify-center gap-6 flex-wrap ">
        {trendingData?.map((data) => {
          return (
            <div
              key={data.id}
              className="bg-white w-[230px] px-3 pt-3 pb-6 shadow-[0px_1px_20px_1px_rgba(49,32,138,0.05)] transition duration-300 ease-in-out hover:scale-110">
              <Link to={`/postdetails/${data.id}`}>
                <img src={data.image} />
                <div className="text-center leading-10 mt-6">
                  <h2 className="text-[#151875] font-semibold text-[16px]">
                    {data.productName}
                  </h2>
                  <div className="flex justify-center items-center gap-2">
                    <h3 className="text-[#151875] text-[14px] font-[500]">
                      ${data.price}
                    </h3>
                    <h3 className="text-[#151875] text-[14px] line-through opacity-50">
                      ${data.discount}
                    </h3>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex flex-wrap gap-6 justify-center mt-10">
        <div className="bg-[#FFF6FB] rounded-md pt-5 pl-7 w-[80%] md:w-[26.3%] md:h-[240px]">
          <h2 className="text-[#151875] font-semibold text-[26px]">
            23% off in all products
          </h2>
          <a
            href="#"
            className="text-[#FB2E86] font-[450] text-[16px] border-b border-[#FB2E86]">
            Show Now
          </a>
          <div className="flex justify-end">
            <img src={time} className="md:w-[11vw]" />
          </div>
        </div>
        <div className="bg-[#EEEFFB] rounded-md  pl-7 w-[80%] pb-9 md:pb-0  md:h-[240px] md:w-[26.3%]">
          <h2 className="text-[#151875] pt-5 font-semibold text-[26px]">
            23% off in all products
          </h2>
          <a
            href="#"
            className="text-[#FB2E86] text-[16px] font-[450] border-b border-[#FB2E86]">
            View Collection
          </a>
          <div className="flex justify-end">
            <img src={wood} className="md:w-[15vw]" />
          </div>
        </div>
        <div className="grid justify-center gap-5  ">
          {sitData?.map((data) => {
            return (
              <div
                key={data.id}
                className="flex justify-center gap-3 items-center">
                <div className="bg-[#F5F6F8] py-3 px-6">
                  <img src={data.image} className="w-[40px]" />
                </div>
                <div>
                  <h2 className="text-[#151875] text-[16px] font-[500]">
                    {data.productName}
                  </h2>
                  <p className="text-[#151875] text-[12px] line-through font-[500]">
                    ${data.price}
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

export default Trending;
