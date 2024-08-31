import SectionTitle from "../../../components/SectionTitle";
import { HiOutlineShoppingCart } from "react-icons/hi";
import img from "../../../assets/store-img.png";
import OnlineStoresSection from "./OnlineStoresSection";
import Button from "../../../components/Button";

interface Store {
  id: number;
  img: string;
  text: string;
}

const stores: Store[] = [
  {
    id: 1,
    img,
    text: "What are the benefits of e-commerce and the importance of owning an online store in 2022?",
  },
  {
    id: 2,
    img,
    text: "What are the benefits of e-commerce and the importance of owning an online store in 2022?",
  },
  {
    id: 3,
    img,
    text: "What are the benefits of e-commerce and the importance of owning an online store in 2022?",
  },
  {
    id: 4,
    img,
    text: "What are the benefits of e-commerce and the importance of owning an online store in 2022?",
  },
];

const OnlineStores = () => {
  return (
    <div className="flex flex-col gap-10">
      <SectionTitle title="Online stores" icon={HiOutlineShoppingCart} />
      <div className="w-[95%] mx-auto online-bg flex justify-between gap-x-5 gap-y-10 flex-wrap">
        {stores.map((s) => (
          <OnlineStoresSection img={s.img} text={s.text} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button text="More online stores" shadow={true} color="primary" />
      </div>
    </div>
  );
};

export default OnlineStores;
