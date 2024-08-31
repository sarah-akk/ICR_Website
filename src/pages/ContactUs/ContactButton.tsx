import { IconType } from "react-icons";

interface ContactButtonProps {
  text: string;
  icon: IconType;
  isPrimary: boolean;
}

const ContactButton = ({ text, icon: Icon, isPrimary }: ContactButtonProps) => {
  return (
    <button
      className={`${
        isPrimary ? "bg-primary text-white" : "bg-slate-200"
      } rounded-lg shadow-lg shadow-gray-500 flex gap-2 mx-auto px-5 w-full py-3 items-center justify-center`}
    >
      <Icon color={`${isPrimary ? "white" : "#37539C"}`} size={25} />
      <p>{text}</p>
    </button>
  );
};

export default ContactButton;
