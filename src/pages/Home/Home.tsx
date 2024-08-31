import ICRFoundation from "./ICRFoundation";
import Products from "./Products";
import OnlineStore from "./OnlineStore";
import TechnicalSupport from "./TechnicalSupport";
import PersonalWebsiteDesign from "./PersonalWebsiteDesign";
import WhmcsScriptDesign from "./WhmcsScriptDesign";
import TemplatePlate from "./TemplatePlate";
import CompanyWebsiteDesign from "./CompanyWebsiteDesign";
import Features from "./Features";
import Cards from "./Cards";
import Achievements from "./Achievements";

const Home = () => {
  return (
    <div className="flex flex-col overflow-hidden relative">
      <ICRFoundation />
      <Products />
      <OnlineStore />
      <TechnicalSupport />
      <PersonalWebsiteDesign />
      <WhmcsScriptDesign />
      <TemplatePlate />
      <CompanyWebsiteDesign />
      <Features />
      <Cards />
      <Achievements />
    </div>
  );
};

export default Home;
