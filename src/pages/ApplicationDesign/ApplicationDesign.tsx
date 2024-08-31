import Products from "../Home/Products";
import OnlineStore from "../Home/OnlineStore";
import TechnicalSupport from "../Home/TechnicalSupport";
import PersonalWebsiteDesign from "../Home/PersonalWebsiteDesign";
import WhmcsScriptDesign from "../Home/WhmcsScriptDesign";
import TemplatePlate from "../Home/TemplatePlate";
import CompanyWebsiteDesign from "../Home/CompanyWebsiteDesign";
import Features from "../Home/Features";
import Cards from "../Home/Cards";
import Achievements from "../Home/Achievements";
import Title from "./Title";

const ApplicationDesign = () => {
  return (
    <div className="flex flex-col overflow-hidden relative">
      <Title />
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

export default ApplicationDesign;
