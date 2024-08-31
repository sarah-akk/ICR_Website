import { RiWhatsappFill } from "react-icons/ri";

const WhatsAppButton = () => {
  return (
    <div className="z-10 cursor-pointer fixed bottom-32 right-5 rounded-full bg-slate-100 p-2">
      <RiWhatsappFill size={60} color="#25d366" />
    </div>
  );
};

export default WhatsAppButton;
