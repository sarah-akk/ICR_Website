interface StoreProps {
  img: string;
  text: string;
  title?: string;
}

const Store = ({ img, text, title }: StoreProps) => {
  return (
    <div
      className={`flex ${
        title ? "lg:flex-col" : ""
      } gap-5 items-center max-md:justify-center max-md:flex-col-reverse`}
    >
      <div className="flex flex-col gap-3">
        {title && <h1 className="font-bold text-xl">{title}</h1>}
        <p className="text-gray-700 text-lg">{text}</p>
      </div>
      <img
        src={img}
        alt=""
        className={`${title ? "w-full" : ""} max-md:w-full h-60`}
      />
    </div>
  );
};

export default Store;
