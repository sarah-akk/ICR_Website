import Button from "../../components/Button";
import services from "../../assets/services.svg";

const ServicesWebDesign = () => {
  return (
    <div className="bg-slate-100 flex justify-center gap-5 p-5 max-lg:flex-col">
      <img
        src={services}
        alt=""
        className="border border-dashed border-gray-500 max-lg:w-2/3 mx-auto"
      />
      <div className="flex flex-col gap-5 justify-evenly">
        <h1 className="font-bold text-2xl">
          Five free services we offer you that will make you design an online
          store now:
        </h1>
        <ol className="list-decimal	ml-10 text-lg">
          <li>Create a paid domain of your choice.</li>
          <li>Create your own paid online store design.</li>
          <li>
            Our technical support team is waiting for your inquiries around the
            clock to solve problems at any time.
          </li>
          <li>
            We provide you with complete security and confidentiality in dealing
            by giving you a security certificate.
          </li>
          <li>
            We work to adapt your content to search engines (SEO); to appear to
            users in the first stores
          </li>
        </ol>
        <Button text="Order the offer Now" color="primary" />
      </div>
    </div>
  );
};

export default ServicesWebDesign;
