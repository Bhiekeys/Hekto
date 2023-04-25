/** @format */
import useGetDataType from '../../hooks/useGetDataType';
import LatestCard from '../cards/LatestCard';
const Latest = () => {
  const data = useGetDataType('latest');

  return (
    <div className="">
      <div className="grid justify-center items-center text-center mb-12">
        <h2 className="font-semibold text-[#1A0B5B] mb-5 text-[30px] sm:text-[42px]">
          Latest Products
        </h2>
        <ul className="flex justify-center gap-4 flex-wrap sm:gap-10 text-[18px] text-[#151875] font-[500]">
          <li className="">New Arrival</li>
          <li>Best Seller</li>
          <li>Featured</li>
          <li>Special Offer</li>
        </ul>
      </div>
      <div className="flex justify-center gap-8 flex-wrap items-center">
        {data?.slice(0, 3).map((item) => {
          return <LatestCard key={item.id} item={item} />;
        })}
      </div>
      <div className="flex justify-center gap-8 flex-wrap items-center">
        {data?.slice(3, 6).map((item) => {
          return <LatestCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Latest;
