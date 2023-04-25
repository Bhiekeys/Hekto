/** @format */


import supportData from '../../mocks/support-data';

const Support = () => {
  return (
    <div className="mb-32 px-5 md:px-0">
      <h2 className="text-center font-semibold text-[#1A0B5B] mb-12 text-[30px] sm:text-[42px]">
        What Shopex Offer!
      </h2>
      <div className="flex justify-center gap-5 flex-wrap items-center ">
        {supportData.map((item) => {
          return (
            <div
              key={item.id}
              className="w-[235px] text-center shadow-[0px_2px_20px_2px_rgba(49,32,138,0.05)] px-4 py-12 transition duration-300 ease-in-out hover:scale-110">
              <div className="flex justify-center">
                
                <img src={item.image} alt="" />
              </div>
              <h2 className="text-[#151875] pt-3 pb-4 font-semibold text-[22px]">
                {item.supportTitle}
              </h2>
              <p className="text-[#1A0B5B] text-[16px] font-[400]">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Support;
