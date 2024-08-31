import SectionTitle from "../../../components/SectionTitle";
import img from "../../../assets/blog-image.png";
import WebsiteCard from "./WebsiteCard";
import Button from "../../../components/Button";

interface WebsiteDesign {
  id: number;
  img: string;
  title: string;
  description: string;
}

const websites: WebsiteDesign[] = [
  {
    id: 1,
    img,
    title: "Design an online auction website",
    description:
      "Designing an Online Auction Website: A Comprehensive Guide to Creating a Successful Auction Website In today's world of technology, designing...",
  },
  {
    id: 2,
    img,
    title: "Design an online auction website",
    description:
      "Designing an Online Auction Website: A Comprehensive Guide to Creating a Successful Auction Website In today's world of technology, designing...",
  },
  {
    id: 3,
    img,
    title: "Design an online auction website",
    description:
      "Designing an Online Auction Website: A Comprehensive Guide to Creating a Successful Auction Website In today's world of technology, designing...",
  },
];

const Websites = () => {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle title="Websites Design" />
      <div className="flex flex-wrap justify-between gap-x-5 gap-y-10 w-[95%] mx-auto">
        {websites.map((w) => (
          <WebsiteCard
            img={w.img}
            title={w.title}
            description={w.description}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button text="More web designs" shadow={true} color="secondary" />
      </div>
    </div>
  );
};

export default Websites;
