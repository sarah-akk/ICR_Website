import React from "react";
import corner1 from "../../assets/corner1.png";
import corner2 from "../../assets/corner2.png";
import asset1 from "../../assets/asset1.png";
import Rectangle from "../../assets/towRectangle.png";

const PersonalWebsiteDesign = () => {
  return (
    /* Desktop*/
    <>
      <div className="hidden md:flex mt-10  flex-col gap-10 overflow-hidden items-center justify-center">
        <div className="flex flex-row h-20 items-center justify-center">
          <img src={corner2} className="translate-y-2" />
          <p className="text-2xl font-bold">Personal website design</p>
          <img src={corner1} className="-translate-y-2" />
        </div>
        <div className="flex flex-row gap-20">
          <div className=" flex flex-col w-1/2 m-10 shadow-slate-400 shadow-xl bg-slate-100 items-center justify-center ">
            <p className="p-10 text-center">
              If you aim to support your own business; It is best to launch a
              website to showcase your services. Marhaba website helps you
              design and prepare your own website professionally. To build your
              brand and reach your customers in a way that supports credibility
              and raises the quality of your services to truly compete.
            </p>
            <button className="rounded-2xl text-white bg-blue-800 w-1/2 p-2  shadow-gray-400 shadow-md">
              Great details see the features
            </button>
            <img
              src={Rectangle}
              className=" absolute translate-x-80 translate-y-36"
            />
          </div>
          <img src={asset1} />
        </div>
        <div className="w-full h-px bg-gray-300 "></div>
      </div>

      {/*mobile*/}
      <div className="md:hidden mt-10  flex-col gap-10 overflow-hidden items-center justify-center">
        <div className="flex flex-row h-20 items-center justify-center">
          <img src={corner2} className="translate-y-2 w-10" />
          <p className="text-sm font-bold">Personal website design</p>
          <img src={corner1} className="-translate-y-2 w-10" />
        </div>
        <div className="flex flex-col items-center">
          <div className=" flex flex-col p-4 m-10 shadow-slate-400 shadow-xl bg-slate-100 items-center justify-center ">
            <p className="p-5 text-center text-sm">
              If you aim to support your own business; It is best to launch a
              website to showcase your services. Marhaba website helps you
              design and prepare your own website professionally. To build your
              brand and reach your customers in a way that supports credibility
              and raises the quality of your services to truly compete.
            </p>
            <button className="rounded-xl text-white bg-blue-800 p-3 sm:p-4 md:p-5 text-sm sm:text-xs md:text-xs md:w-40  h-fit shadow-gray-400 shadow-md transition-all duration-300 hover:bg-blue-700">
              Great details see the features
            </button>
          </div>
          <img src={asset1} className="w-2/3" />
        </div>
        <div className="w-full h-px bg-gray-300 mt-10"></div>
      </div>
    </>
  );
};

export default PersonalWebsiteDesign;
