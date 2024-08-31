import { IconType } from "react-icons";
import SectionTitle from "../../components/SectionTitle";

interface FooterListProps {
  title: string;
  listElements: string[];
  icon: IconType;
}

const FooterList = ({ title, listElements, icon: Icon }: FooterListProps) => {
  return (
    <div className="flex flex-col gap-3">
      <SectionTitle title={title} icon={Icon} />
      <ul className="list-disc list-inside ml-5">
        {listElements.map((e) => (
          <li>{e}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterList;
