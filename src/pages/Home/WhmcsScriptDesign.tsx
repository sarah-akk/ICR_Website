import React from "react";
import asset2 from "../../assets/asset2.png";

const WhmcsScriptDesign = () => {
  return (
    /* Desktop*/
    <>
      <div className="hidden md:flex flex-row mr-20 ml-20 mt-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center">
            <div className="h-14 w-1 bg-blue-800 mr-4"></div>
            <p className="text-3xl font-bold text-black">Whmcs script design</p>
          </div>

          <p className="text-xl pr-10">
            Whmcs script design We provide design, hosting, and advertising
            services, and we support displaying all your ideas, offers, and
            services and displaying them professionally on your website through
            the distinctive whmcs script design.
          </p>
          <button className="rounded-xl w-1/2 p-2 text-white bg-blue-800  shadow-gray-400 shadow-md">
            Great details see the features
          </button>
        </div>
        <img src={asset2} />
      </div>
      <div className="w-full h-px bg-gray-300 "></div>

      {/*mobile*/}
      <div className="md:hidden  flex-col m-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center">
            <div className="h-10 w-1 bg-blue-800 mr-4"></div>
            <p className="text-xl font-bold text-black">Whmcs script design</p>
          </div>
          <img src={asset2} />

          <p className="text-sm text-center">
            Whmcs script design We provide design, hosting, and advertising
            services, and we support displaying all your ideas, offers, and
            services and displaying them professionally on your website through
            the distinctive whmcs script design.
          </p>
          <button className="rounded-xl  text-sm text-white bg-blue-800  h-10 shadow-gray-400 shadow-md">
            Great details see the features
          </button>
        </div>
      </div>
    </>
  );
};

export default WhmcsScriptDesign;
