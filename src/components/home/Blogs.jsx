/** @format */

import vector1 from '../../assets/vector1.png';
import vector2 from '../../assets/vector2.png';
import roomData from '../../mocks/room-data';

const Blogs = () => {
  
  return (
    <div className="mb-28">
      <h2 className="text-center font-semibold text-[#1A0B5B] mb-12 mt-10 text-[30px] sm:text-[40px]">
        Latest Blog
      </h2>
      <div className="flex justify-center px-5 sm:px-0 items-center gap-7 flex-wrap ">
        {roomData.map((data) => (
          <div key={data.id} className="shadow-lg w-[310px]  ">
            <img src={data.image} className="h-[px]" />
            <div className="w-[px] pl-4 pb-4">
              <div className="flex pt-4 gap-8">
                <div className="flex gap-1 items-center">
                  <img src={vector1} className="h-[15px]" />
                  <p className="text-[#151875] text-[14px] font-[500]">
                    {data.type}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <img src={vector2} className="h-[13px]" />
                  <p className="text-[#151875] text-[14px] font-[500]">
                    {data.date}
                  </p>
                </div>
              </div>
              <h1 className="text-[#151875] py-5 text-[18px] font-bold">
                {data.roomTitle}
              </h1>
              <p className="text-[#72718F] font-[450] text-[16px] leading-7">
                {data.text}
              </p>
              <button
                type="button"
                className="text-[#151875] mt-4 underline text-[16px]">
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
