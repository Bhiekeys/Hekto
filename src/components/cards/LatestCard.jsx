/** @format */

import { Link } from 'react-router-dom';

const LatestCard = ({ item }) => {
  const { id, image, productName, price, discount } = item;
  return (
    <div className=" mb-10 mx-4 sm:mx-0 overflow-hidden  ">
      <Link to={`/postdetails/${id}`}>
        <div className="w-[310px] h-[280px] grid justify-center items-center bg-[#F6F7FB]">
          <div className="transition duration-300 ease-in-out hover:scale-110">
            <img src={image} className="w-[150px]" />
          </div>
        </div>

        <div className="flex justify-between">
          <h5 className="text-[#151875] text-[16px] font-[500]">
            {productName}
          </h5>
          <div className="flex gap-3">
            <h5 className="text-[#151875] text-[12px]">${price}</h5>
            <h5 className="text-[#FB2448] text-[12px]">${discount}</h5>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LatestCard;
