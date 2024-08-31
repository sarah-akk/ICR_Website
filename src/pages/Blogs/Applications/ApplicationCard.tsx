import logo from "../../../assets/logo.svg";
import icon from "../../../assets/application-icon.svg";
import Button from "../../../components/Button";

interface ApplicationCardProps {
  img: string;
  title: string;
  description: string;
  designer: string;
}

const ApplicationCard = ({
  img,
  title,
  description,
  designer,
}: ApplicationCardProps) => {
  return (
    <div className="relative flex gap-5 p-5 rounded-lg md:shadow-lg md:shadow-gray-400 max-md:flex-col max-md:bg-slate-100">
      <img
        src={icon}
        alt=""
        className="absolute bottom-0 right-0 max-md:hidden"
      />
      <img src={img} alt="" />
      <div className="flex flex-col gap-5 justify-between">
        <h1 className="font-bold text-xl">{title}</h1>
        <div className="flex gap-2 items-center">
          <img
            src={logo}
            alt=""
            className="border border-black p-1 rounded-full w-10"
          />
          <h2 className="font-semibold">{designer}</h2>
        </div>
        <p className="w-2/3 max-lg:w-full">{description}</p>
        <Button text="Read more" />
      </div>
    </div>
  );
};

export default ApplicationCard;
