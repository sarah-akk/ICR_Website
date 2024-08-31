import React from "react";
import asset4 from "../../assets/asset4.png";
import Rectangle from "../../assets/towRectanglebig.png";

const CompanyWebsiteDesign = () => {
  return (
    /* Desktop*/
    <>
      <div className="hidden md:flex flex-col items-center justify-center mt-10 gap-10">
        <div className="flex flex-col items-center justify-center gap-10">
          <p className="text-3xl font-bold text-black">
            Company website design
          </p>
          <div className="w-96 h-1 bg-blue-800 mr-4"></div>
          <p className="text-lg text-center pr-10 w-1/2">
            We offer the best website design offers for your own company; To
            increase the number of customers on the company’s website and
            develop your business; To achieve more success.
          </p>
        </div>
        <div className="flex flex-row gap-10 items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-40 w-1/3">
            <div className="flex flex-col gap-4 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <img src={Rectangle} className="absolute -translate-y-60" />
              <h3 className="text-xl font-semibold text-center">
                Mobile Compatibility
              </h3>
              <p className="text-lg text-center">
                Your site is compatible with smartphones, tablets, and all
                international browsers
              </p>
            </div>
            <div className="flex flex-col gap-4 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-center">
                Arabic Control Panel
              </h3>
              <p className="text-lg text-center">
                A simple, complete Arabic control panel to fully control the
                content.
              </p>
            </div>
          </div>

          {/* Image */}
          <img src={asset4} alt="Description of image" className="" />

          {/* Right Column */}
          <div className="flex flex-col gap-40 w-1/3">
            <div className="flex flex-col gap-4 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-center">
                Mobile Compatibility
              </h3>
              <p className="text-lg text-center">
                Your site is compatible with smartphones, tablets, and all
                international browsers
              </p>
            </div>
            <div className="flex flex-col gap-4 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
              <h3 className="text-xl font-semibold text-center">
                Arabic Control Panel
              </h3>
              <p className="text-lg text-center">
                A simple, complete Arabic control panel to fully control the
                content.
              </p>
            </div>
            <img
              src={Rectangle}
              className="absolute right-0 translate-y-40 translate-x-20"
            />
          </div>
        </div>
        <div className="w-full h-px bg-gray-300 "></div>
      </div>

      {/*mobile*/}
      <div className="md:hidden flex-col items-center justify-center  gap-10">
        <div className="flex flex-col items-center justify-center gap-5">
          <p className="text-lg font-bold text-black">Company website design</p>
          <div className="w-80 h-0.5 bg-blue-800 "></div>
          <p className="text-sm text-center ">
            We offer the best website design offers for your own company; To
            increase the number of customers on the company’s website and
            develop your business; To achieve more success.
          </p>
        </div>
        <div className="flex flex-col gap-10 items-center mt-10">
          {/* Left row */}
          <div className="flex flex-row gap-10 p-4">
            <div className="flex flex-col gap-4 ">
              <h3 className="text-lg font-semibold text-center">
                Mobile Compatibility
              </h3>
              <p className="text-sm text-center">
                Your site is compatible with smartphones, tablets, and all
                international browsers
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-center">
                Arabic Control Panel
              </h3>
              <p className="text-sm text-center">
                A simple, complete Arabic control panel to fully control the
                content.
              </p>
            </div>
          </div>

          {/* Image */}
          <img src={asset4} alt="Description of image" className="h-80" />

          {/* Right row */}
          <div className="flex flex-row gap-10 p-4 ">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-center">
                Mobile Compatibility
              </h3>
              <p className="text-sm text-center">
                Your site is compatible with smartphones, tablets, and all
                international browsers
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-lg font-semibold text-center">
                Arabic Control Panel
              </h3>
              <p className="text-sm text-center">
                A simple, complete Arabic control panel to fully control the
                content.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-gray-300 "></div>
      </div>
    </>
  );
};

export default CompanyWebsiteDesign;
