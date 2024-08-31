import Applications from "./Applications/Applications";
import Articles from "./Articles/Articles";
import ElectronicMarketing from "./ElectronicMarketing/ElectronicMarketing";
import OnlineStores from "./OnlineStores/OnlineStores";
import StoresSEO from "./StoresSEO/StoresSEO";
import Websites from "./Websites/Websites";

const Blogs = () => {
  return (
    <div className="p-10 flex flex-col gap-10">
      <Articles />
      <Applications />
      <Websites />
      <ElectronicMarketing />
      <OnlineStores />
      <StoresSEO />
    </div>
  );
};

export default Blogs;
