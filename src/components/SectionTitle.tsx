import { IconType } from "react-icons";

interface SectionTitleProps {
  title: string;
  icon?: IconType;
}

const SectionTitle = ({ title, icon: Icon }: SectionTitleProps) => {
  return (
    <div className="w-full flex gap-2 items-center">
      <div className="bg-primary w-1 h-12" />
      <h1 className="text-2xl font-bold">{title}</h1>
      {Icon && <Icon size={30} color="#37539C" />}
    </div>
  );
};

export default SectionTitle;
