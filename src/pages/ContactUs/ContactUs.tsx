import PageTitle from "../../components/PageTitle";
import ContactButton from "./ContactButton";
import { FaPhoneAlt } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div>
      <div className="flex flex-col gap-4">
        <PageTitle title="Communication methods" />
        <p className="w-1/3 max-md:w-[95%] text-gray-800 mx-auto text-center">
          This is the only approved method we have, and we do not have any other
          methods: “WhatsApp number through direct chat.”
        </p>
      </div>
      <div className="flex flex-col gap-5 py-10 w-[90%] mx-auto contact-bg">
        <div className="w-1/3 mx-auto max-md:w-full">
          <ContactButton
            icon={FaPhoneAlt}
            isPrimary={true}
            text="Direct connection"
          />
        </div>
        <div className="flex justify-between w-full flex-wrap gap-5">
          <div className="w-1/3  max-md:w-full">
            <ContactButton
              icon={IoMdMail}
              isPrimary={false}
              text="admin@mrhbaa.com"
            />
          </div>
          <div className="w-1/3 max-md:w-full">
            <ContactButton
              icon={BiSolidMessageDetail}
              isPrimary={false}
              text="Live chat"
            />
          </div>
        </div>
        <div className="w-1/3 mx-auto  max-md:w-full">
          <ContactButton icon={FaWhatsapp} isPrimary={true} text="WhatsApp" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
