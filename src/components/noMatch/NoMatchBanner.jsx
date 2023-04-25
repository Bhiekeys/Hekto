import React from 'react'

const NoMatchBanner = () => {
  return (
    <div className="pt-[100px]">
      <div className="bg-[#F6F5FF] px-1 md:px-0 py-20 text-center lg:text-left lg:pl-[230px]">
        <h2 className="text-[#101750] text-[38px] font-[600]">404 Not Found</h2>
        <p className="font-[500]">
          Home . Pages . <span className="text-[#FB2E86]">404 Not Found</span>
        </p>
      </div>
    </div>
  );
}

export default NoMatchBanner