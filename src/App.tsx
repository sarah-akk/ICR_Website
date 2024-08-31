import { Route, Routes } from "react-router-dom";
import Blogs from "./pages/Blogs/Blogs";
import Footer from "./layout/Footer/Footer";
import ContactUs from "./pages/ContactUs/ContactUs";
import OurWork from "./pages/OurWork/OurWork";
import WebsiteDesign from "./pages/WebDesign/WebsiteDesign";
import ApplicationDesign from "./pages/ApplicationDesign/ApplicationDesign";
import WhatsAppButton from "./layout/WhatsAppButton";
import ChatButton from "./layout/ChatFloatingButton/ChatButton";
import Navbar from "./layout/components/NavBar/Navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="flex flex-col gap-5">
      <WhatsAppButton />
      <ChatButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="web-design" element={<WebsiteDesign />} />
        <Route path="application-design" element={<ApplicationDesign />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="our-work" element={<OurWork />} />
      </Routes>
      <hr className="border-t-gray-400" />
      <Footer />
    </div>
  );
}

export default App;
