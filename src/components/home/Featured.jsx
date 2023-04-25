

import useGetDataType from '../../hooks/useGetDataType';
import FeaturedCard from '../cards/Featuredcard';

const Featured = () => {
  const data = useGetDataType();

  return (
    <div className="py-20 px-5 md:px-0">
      <h2 className="text-center font-semibold text-[#1A0B5B] mb-12 text-[30px] sm:text-[42px]">
        Featured Products
      </h2>
      <div className="flex justify-center flex-wrap gap-6 items-center">
        {data?.map((item) => {
          return <FeaturedCard key={item.id} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Featured;
