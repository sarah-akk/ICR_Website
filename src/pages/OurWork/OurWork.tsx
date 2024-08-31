import PageTitle from "../../components/PageTitle";
import ContactButton from "../ContactUs/ContactButton";
import { FaEye } from "react-icons/fa";
import img from "../../assets/taxi.png";
import centerImg from "../../assets/center-our-work.svg";

const OurWork = () => {
  return (
    <div className="flex flex-col gap-10">
      <PageTitle title="latest achievements" />
      <div className="ourwork-bg">
        <div className="w-[90%] mx-auto flex justify-between flex-wrap gap-5 py-10">
          <div className="flex flex-col gap-y-5 w-[30%] max-md:w-full">
            <img src={img} alt="" />
            <img src={img} alt="" />
          </div>
          <div className="flex flex-col items-center gap-y-5 justify-center w-1/4 max-md:w-full">
            <img src={centerImg} />
            <p>
              Something that means a lot of work, ideas and relationship. “We
              work the way you want.”
            </p>
          </div>
          <div className="flex flex-col gap-y-5 w-[30%] max-md:w-full">
            <img src={img} alt="" />
            <img src={img} alt="" />
          </div>
          <div className="flex justify-between gap-5 flex-wrap w-full">
            <img src={img} alt="" className="w-[30%] max-md:w-full" />
            <img src={img} alt="" className="w-[30%] max-md:w-full" />
            <img src={img} alt="" className="w-[30%] max-md:w-full" />
          </div>
        </div>
        <div className="w-1/3 max-md:w-[90%] mx-auto">
          <ContactButton
            text="See old achievements"
            isPrimary={true}
            icon={FaEye}
          />
        </div>
      </div>
    </div>
  );
};

export default OurWork;
