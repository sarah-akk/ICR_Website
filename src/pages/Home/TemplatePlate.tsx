import React from "react";
import asset3 from "../../assets/asset3.png";
import verify from "../../assets/verify.png";
import blue from "../../assets/Ellipseblue.png";

const TemplatePlate = () => {
  return (
    /* Desktop*/
    <>
      <div className="hidden md:flex flex-row justify-between mr-20 ml-20 mt-20">
        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center">
            <div className="h-14 w-1 bg-blue-800 mr-4"></div>
            <p className="text-3xl font-bold text-black">Template plate</p>
            <img src={verify} className="ml-5"></img>
          </div>
          <p className="text-xl pr-10">
            Professional settings for a professional template.
          </p>
          <img src={blue} className="w-60 -translate-x-36"></img>
        </div>
        <img src={asset3}></img>
      </div>
      <div className="w-full h-px bg-gray-300 "></div>

      {/*mobile*/}
      <div className="md:hidden flex-col m-4 ">
        <div className="flex flex-col gap-10">
          <div className="flex flex-row items-center">
            <div className="h-10 w-1 bg-blue-800 mr-4"></div>
            <p className="text-xl font-bold text-black">Template plate</p>
            <img src={verify} className="ml-3 w-5"></img>
          </div>
          <p className="text-sm ">
            Professional settings for a professional template.
          </p>
        </div>
        <img src={asset3}></img>
      </div>
    </>
  );
};

export default TemplatePlate;
