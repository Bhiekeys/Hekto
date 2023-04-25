/** @format */

import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
const Description = () => {
  return (
    <div className="flex bg-[#F9F8FE] px-8 md:px-0 py-20 justify-center">
      <div className="">
        <ul className="flex md:gap-10 justify-center flex-wrap font-medium gap-4 text-[23px] text-[#151875]">
          <li className="underline">Description</li>
          <li>Additional Info</li>
          <li>Reviews</li>
          <li>Video</li>
        </ul>
        <div className="md:w-[82vw] text-center md:text-left">
          <h2 className="font-medium mt-10 text-[22px] text-[#151875]">
            Varius tempor.
          </h2>
          <p className="text-[#A9ACC6] mt-2 leading-7">
            Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor
            ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris
            varius ac est bibendum. Scelerisque a, risus ac ante. Velit
            consectetur neque, elit, aliquet. Non varius proin sed urna, egestas
            consequat laoreet diam tincidunt. Magna eget faucibus cras justo,
            tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla
            lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui,
            massa viverr .
          </p>
          <h2 className="font-medium mt-4 text-[22px] text-[#151875]">
            More details
          </h2>
          <div className="leading-7 mt-2">
            <div className="flex gap-1 items-center">
              <BsArrowRight />
              <p className="text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <BsArrowRight />
              <p className="text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <BsArrowRight />
              <p className="text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
            <div className="flex gap-1 items-center">
              <BsArrowRight />
              <p className="text-[#A9ACC6]">
                Aliquam dis vulputate vulputate integer sagittis. Faucibus ds
                diam arcu, nulla lobortis justo netus dis. Eu in fringilla
                vulputate nunc nec. Dui, massa viverr .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
