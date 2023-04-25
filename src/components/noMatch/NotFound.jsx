/** @format */
import com from '../../assets/com.png';
import not from '../../assets/noMatch.png';
import { Link } from 'react-router-dom';
const NotFound = () => {
  return (
    <>
      <div className="grid justify-center">
        <img src={not} alt="" />
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button className="bg-[#FB2E86] font-[400] text-[16px] text-[#fff] py-2 px-6 rounded-sm ">
            Back To Home
          </button>
        </Link>
      </div>
      <div className="flex justify-center my-28">
        <img src={com} alt="" />
      </div>
    </>
  );
};

export default NotFound;
