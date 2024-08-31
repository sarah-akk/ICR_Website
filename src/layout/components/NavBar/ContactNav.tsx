import phone from "../../../assets/phone.png";
import email from "../../../assets/email.png";
import faceBook from "../../../assets/faceBook.png";
import linkedIn from "../../../assets/linkedIn.png";
import tweeter from "../../../assets/tweeter.png";

const ContactNav = () => {
  return (
    /* Desktop*/
    <>
      <div className="hidden md:flex bg-blue-900  h-10 w-full top-0 right-0 items-center  text-white pl-16 pr-16 justify-between">
        <div className="flex flex-row gap-28">
          <div className="flex flex-row gap-2 text-sm">
            <img src={phone} className="w-5 h-5" />
            <p>+963-987 654 321</p>
          </div>
          <div className="flex flex-row gap-2">
            <img src={email} className="w-5 h-4.5" />
            <p>IdeaCodeReality.ICR@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <img src={faceBook} />
          <img src={linkedIn} />
          <img src={tweeter} />
        </div>
      </div>

      {/*mobile*/}
      <div className="md:hidden bg-blue-900 flex h-14 w-full top-0 right-0 items-center  text-white  justify-between p-3">
        <div className="flex flex-col ">
          <div className="flex flex-row gap-2 text-xs">
            <img src={phone} className="w-3 h-3" />
            <p>+963-987 654 321</p>
          </div>
          <hr className="border-t-1 m-1 border-gray-200 " />
          <div className="flex flex-row gap-2 text-xs justify-center items-center">
            <img src={email} className="w-3 h-2.5" />
            <p>IdeaCodeReality.ICR@gmail.com</p>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <img src={faceBook} />
          <img src={linkedIn} />
          <img src={tweeter} />
        </div>
      </div>
    </>
  );
};

export default ContactNav;
