import Button from "../../components/Button";

interface StoreDesignProps {
  title: string;
  price: number;
  specs: string[];
  times: string;
}

const StoreDesign = ({ title, price, specs, times }: StoreDesignProps) => {
  return (
    <div className="bg-slate-100 flex flex-col gap-3 p-5 w-[30%] max-lg:w-[48%] max-md:w-[95%] mx-auto rounded-xl">
      <h2 className="font-bold text-2xl text-center">{title}</h2>
      <h1 className="text-primary font-bold text-3xl text-center">
        {price} S.Y
      </h1>
      <p className="mx-auto">- {times} -</p>
      <ul className="list-disc list-inside">
        {specs.map((s) => (
          <li>{s}</li>
        ))}
      </ul>
      <div className="flex justify-center">
        <Button text="Order Now" color="primary" />
      </div>
    </div>
  );
};

export default StoreDesign;
