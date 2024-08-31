import React from "react";
import corner1 from "../../assets/corner1.png";
import corner2 from "../../assets/corner2.png";
import Rectangle from "../../assets/Rectangle.png";
import string from "../../assets/string.png";
import technicalsupport from "../../assets/Technicalsupport.png";

const TechnicalSupport = () => {
  return (
    /* Desktop*/
    <>
      <div className="hidden md:flex  flex-col gap-10 overflow-hidden items-center justify-center">
        <div className="flex flex-row h-20 items-center justify-center">
          <img src={corner2} className="translate-y-2" />
          <p className="text-2xl font-bold">Technical support</p>
          <img src={corner1} className="-translate-y-2" />
          <img src={string} className="-translate-y-2 absolute right-0" />
        </div>
        <img src={technicalsupport} />

        <div className=" flex w-11/12 h-32 m-10 shadow-slate-400 shadow-xl bg-slate-100 items-center justify-center transform transition-transform duration-300 ease-in-out hover:scale-105">
          <p className="text-center">
            If you would like fast, professional technical support; Marhaba
            website provides you with continuous and direct technical support.
          </p>
          <img
            src={Rectangle}
            className=" absolute right-0 -translate-x-20 -translate-y-10"
          />
          <img
            src={Rectangle}
            className=" absolute right-0 -translate-x-24 -translate-y-8"
          />
          <img
            src={Rectangle}
            className=" absolute left-0 translate-x-20 -translate-y-10"
          />
          <img
            src={Rectangle}
            className=" absolute left-0 translate-x-24 -translate-y-8"
          />
        </div>
      </div>

      {/*mobile*/}
      <div className="md:hidden flex-col gap-10 overflow-hidden items-center justify-center">
        <div className="flex flex-row h-20 w-full items-center justify-center">
          <img src={corner2} className="translate-y-2 w-10" />
          <p className="text-sm font-bold">Technical support</p>
          <img src={corner1} className="-translate-y-2 w-10" />
        </div>
        <img src={technicalsupport} />

        <div className=" flex  m-10 shadow-slate-400 shadow-xl bg-slate-100 items-center justify-center">
          <p className="p-10 text-sm align-middle text-center">
            If you would like fast, professional technical support; Marhaba
            website provides you with continuous and direct technical support.
          </p>
          <img
            src={Rectangle}
            className=" absolute right-0 -translate-x-10 -translate-y-16"
          />
          <img
            src={Rectangle}
            className=" absolute right-0 -translate-x-14 -translate-y-14"
          />
          <img
            src={Rectangle}
            className=" absolute left-0 translate-x-10 -translate-y-16"
          />
          <img
            src={Rectangle}
            className=" absolute left-0 translate-x-14 -translate-y-14"
          />
        </div>
      </div>
    </>
  );
};
export default TechnicalSupport;
