/** @format */

import rect from '../../assets/rect.png';
import com from '../../assets/com.png';
const Subscribe = () => {
  return (
    <div>
      <div
        className="py-20 grid justify-center bg-cover"
        style={{
          backgroundImage: `url(${rect})`,
        }}>
        <h2 className="text-[#151875] text-center px-2 sm:px-0 mb-6 pt-5 text-[21px] lg:text-[32px] font-[600] ">
          Get Leatest Update By Subscribe <br /> 0ur Newslater
        </h2>

        <div className="flex justify-center">
          <button className="bg-[#FB2E86] rounded-sm px-2 py-1 lg:py-2 lg:px-7 text-white lg:font-[400]">
            Shop Now
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-12">
        <img src={com} alt="" />
      </div>
    </div>
  );
};

export default Subscribe;
