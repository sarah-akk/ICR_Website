import SectionTitle from "../../../components/SectionTitle";
import ElectronicMarketingSection from "./ElectronicMarketingSection";
import { FaBagShopping } from "react-icons/fa6";
import img from "../../../assets/marketing.png";

interface ElectronicMarketing {
  id: number;
  title: string;
  img: string;
  description: string;
}

const marketing: ElectronicMarketing[] = [
  {
    id: 1,
    title: "The cost of constructing a padel tennis court",
    img,
    description:
      "The cost of constructing a padel tennis court. Learn about the cost of constructing a padel tennis court and the most important factors on which this cost depends, in addition to presenting the details of the rules and laws of this international sport, the difference between padel tennis and regular tennis, the history of this game, and also the most important special tournaments...",
  },
  {
    id: 2,
    title: "The cost of constructing a padel tennis court",
    img,
    description:
      "The cost of constructing a padel tennis court. Learn about the cost of constructing a padel tennis court and the most important factors on which this cost depends, in addition to presenting the details of the rules and laws of this international sport, the difference between padel tennis and regular tennis, the history of this game, and also the most important special tournaments...",
  },
];

const ElectronicMarketing = () => {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle title="Electronic Marketing" icon={FaBagShopping} />
      <div className="flex flex-col gap-20">
        {marketing.map((m, i) => (
          <ElectronicMarketingSection
            title={m.title}
            description={m.description}
            img={m.img}
            reverse={i % 2 === 1 ? true : false}
          />
        ))}
      </div>
    </div>
  );
};

export default ElectronicMarketing;
