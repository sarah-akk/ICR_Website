import { useState } from "react";
import PageTitle from "../../components/PageTitle";
import ReactSwiper from "../../components/ReactSwiper/ReactSwiper";
import Button from "../../components/Button";
import SectionTitle from "../../components/SectionTitle";
import StoreDesign from "./StoreDesign";
import { FaCirclePlay } from "react-icons/fa6";
import webDesign from "../../assets/web-design.svg";
import videoPoster from "../../assets/video-poster.svg";
import cost from "../../assets/cost.svg";
import Faq from "./Faq";
import ServicesWebDesign from "./ServicesWebDesign";
import OurWorkWebDesign from "./OurWorkWebDesign";
import CostCard from "./CostCard";

const storeDesigns = [
  {
    title: "Simple store design",
    price: 123456000,
    times: "Just once",
    specs: [
      "5 GB Hosting",
      "Arabic Language",
      "Free Advertising Campaign Management",
      "Live Chat Program with Customers",
      "Free Problem Solving Guarantee for 6 Months",
      "500 GB Bandwidth",
      "Domain of your choice com-net",
      "Installing an SSL Security Certificate",
      "Design a Professional Private Store",
      "Design a Professional Private Logo",
      "SMS Alerts",
      "Design Internal Pages",
      "Full Control of the Site from A to Z",
      "Add Sections and Products to Your Store for a Trial",
      "Free Innovative Marketing Consultations and Tips",
      "Mail Campaign to 50,000 Active Emails",
      "Archiving the Store in Search Engines",
      "Store Statistics to Know Your Visitors",
      "PayPal Electronic Payment Gateways",
      "MasterCard and Visa Payment Gateway",
      "Sadad Payment Gateway",
      "Add Saudi Banks",
      "Add Any Payment Method You Want",
      "Professional Shopping Cart",
      "Easily Convert Currencies",
      "View Customer Payment Reports",
      "Strong Protection and 24/7 Support",
      "Add the Site to Search Engines",
      "Firewall to Protect Against Hackers",
      "Renew 500 SAR Annually",
    ],
  },
  {
    title: "Simple store design",
    price: 123456000,
    times: "Just once",
    specs: [
      "5 GB Hosting",
      "Arabic Language",
      "Free Advertising Campaign Management",
      "Live Chat Program with Customers",
      "Free Problem Solving Guarantee for 6 Months",
      "500 GB Bandwidth",
      "Domain of your choice com-net",
      "Installing an SSL Security Certificate",
      "Design a Professional Private Store",
      "Design a Professional Private Logo",
      "SMS Alerts",
      "Design Internal Pages",
      "Full Control of the Site from A to Z",
      "Add Sections and Products to Your Store for a Trial",
      "Free Innovative Marketing Consultations and Tips",
      "Mail Campaign to 50,000 Active Emails",
      "Archiving the Store in Search Engines",
      "Store Statistics to Know Your Visitors",
      "PayPal Electronic Payment Gateways",
      "MasterCard and Visa Payment Gateway",
      "Sadad Payment Gateway",
      "Add Saudi Banks",
      "Add Any Payment Method You Want",
      "Professional Shopping Cart",
      "Easily Convert Currencies",
      "View Customer Payment Reports",
      "Strong Protection and 24/7 Support",
      "Add the Site to Search Engines",
      "Firewall to Protect Against Hackers",
      "Renew 500 SAR Annually",
    ],
  },
  {
    title: "Simple store design",
    price: 123456000,
    times: "Just once",
    specs: [
      "5 GB Hosting",
      "Arabic Language",
      "Free Advertising Campaign Management",
      "Live Chat Program with Customers",
      "Free Problem Solving Guarantee for 6 Months",
      "500 GB Bandwidth",
      "Domain of your choice com-net",
      "Installing an SSL Security Certificate",
      "Design a Professional Private Store",
      "Design a Professional Private Logo",
      "SMS Alerts",
      "Design Internal Pages",
      "Full Control of the Site from A to Z",
      "Add Sections and Products to Your Store for a Trial",
      "Free Innovative Marketing Consultations and Tips",
      "Mail Campaign to 50,000 Active Emails",
      "Archiving the Store in Search Engines",
      "Store Statistics to Know Your Visitors",
      "PayPal Electronic Payment Gateways",
      "MasterCard and Visa Payment Gateway",
      "Sadad Payment Gateway",
      "Add Saudi Banks",
      "Add Any Payment Method You Want",
      "Professional Shopping Cart",
      "Easily Convert Currencies",
      "View Customer Payment Reports",
      "Strong Protection and 24/7 Support",
      "Add the Site to Search Engines",
      "Firewall to Protect Against Hackers",
      "Renew 500 SAR Annually",
    ],
  },
];

const websiteDesignSections = [
  { id: 0, text: "E-commerce" },
  { id: 1, text: "Talabat website" },
  { id: 2, text: "E-commerce" },
  { id: 3, text: "Talabat website" },
  { id: 4, text: "E-commerce" },
  { id: 5, text: "Talabat website" },
  { id: 6, text: "E-commerce" },
  { id: 7, text: "Talabat website" },
  { id: 8, text: "E-commerce" },
  { id: 9, text: "Talabat website" },
];

const costs = [
  {
    img: cost,
    title: "Low costs..",
    text: "Once you create a professional online store, you do not need to think about a place to display your products, nor about hiring workers, nor do you need to open many branches to reach the largest number of customers.",
  },
  {
    img: cost,
    title: "Low costs..",
    text: "Once you create a professional online store, you do not need to think about a place to display your products, nor about hiring workers, nor do you need to open many branches to reach the largest number of customers.",
  },
  {
    img: cost,
    title: "Low costs..",
    text: "Once you create a professional online store, you do not need to think about a place to display your products, nor about hiring workers, nor do you need to open many branches to reach the largest number of customers.",
  },
  {
    img: cost,
    title: "Low costs..",
    text: "Once you create a professional online store, you do not need to think about a place to display your products, nor about hiring workers, nor do you need to open many branches to reach the largest number of customers.",
  },
  {
    img: cost,
    title: "Low costs..",
    text: "Once you create a professional online store, you do not need to think about a place to display your products, nor about hiring workers, nor do you need to open many branches to reach the largest number of customers.",
  },
];

const faqs = [
  {
    id: 1,
    question: "Can I get my money back?",
    answer:
      "Yes, you can get it if the work has not started or if you do not like the proof without making any modifications to it.",
  },
  {
    id: 2,
    question: "Can I get my money back?",
    answer:
      "Yes, you can get it if the work has not started or if you do not like the proof without making any modifications to it.",
  },
  {
    id: 3,
    question: "Can I get my money back?",
    answer:
      "Yes, you can get it if the work has not started or if you do not like the proof without making any modifications to it.",
  },
];

const WebsiteDesign = () => {
  const [faqsIds, setFaqsIds] = useState<number[]>([]);

  const [id, setId] = useState(0);

  return (
    <div className="flex flex-col gap-10">
      <PageTitle title="Website Design" />
      <div className="flex gap-10 px-10 max-md:flex-col max-md:gap-3">
        <h2 className="text-secondary text-lg font-semibold">
          Buy and sell sites
        </h2>
        <span className="bg-primary w-1 max-md:hidden"></span>
        <h2 className="text-[#232323] text-lg font-semibold">
          Content management sites
        </h2>
      </div>
      <ReactSwiper data={websiteDesignSections} id={id} setId={setId} />
      <div className="web-design-bg flex flex-col gap-10">
        <div className="flex items-center justify-center gap-5 w-[80%] mx-auto max-lg:flex-col-reverse max-lg:w-[95%]">
          <p className="font-semibold text-lg">
            Everything you need to know about designing an online store.. Are
            you thinking of creating an online store and don't know where to
            start?!
          </p>
          <img src={webDesign} alt="" />
        </div>
        <div className="w-[90%] mx-auto flex flex-col gap-5">
          <h2 className="text-center font-bold text-xl">
            You think… and ICR, you implement your online store
          </h2>
          <p className="text-lg">
            You don't need skills to get an online store design! Marhaba Company
            is the core, providing you with the best offers and services to
            create a distinctive online store; So that you have a unique
            interface that increases the number of your customers, design an
            online store through us in a few minutes and control it with ease,
            and start displaying your products now, and we are with you step by
            step so that you are in the forefront.
          </p>
          <p className="text-lg">
            Recently, online selling has become of great importance, especially
            after the Corona pandemic, which made homes our dens, and moving and
            traveling became more difficult.
          </p>
          <p className="text-lg">
            And you know that promoting the product or commodity is the most
            important thing to complete the sales process, so the more you
            choose successful promotion methods, the better your product appears
            and the easier the sales process is; Therefore, you must use
            (electronic marketing) that contributes to displaying your products
            in a wonderful way and providing an overview of them and their
            benefits, quality, price, and how to use them... etc., as you can
            display an infinite number of your goods; Which allows the customer
            to choose what he likes from them.
          </p>
          <Button text="Order the offer Now" color="primary" shadow={true} />
        </div>
      </div>
      <div className="w-[90%] mx-auto flex flex-col gap-10">
        <div className="relative">
          <video
            src=""
            poster={videoPoster}
            controls
            className="mx-auto"
          ></video>
          <FaCirclePlay
            size={50}
            color="gray"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-sm:w-8 max-sm:h-8"
            cursor={"pointer"}
          />
        </div>
        <div>
          <SectionTitle title="What is an online store?" />
          <p className="text-lg">
            Designing an online store is a website that we create for you,
            allowing you to display all your products, whatever they may be, and
            helping you grow your business effortlessly, and making it easy for
            the buyer to find his requests while at home. E-commerce, whether
            via mobile phones or the Internet, is what is purchased
            electronically while you are at home without the need to go out, at
            any time of the day, and at the lowest costs.
          </p>
        </div>
        <div>
          <SectionTitle title="What is an online store?" />
          <p className="text-lg">
            The advantages of creating an online store are increasing day after
            day, which helps in strengthening e-commerce. E-commerce is one of
            the fastest growing methods of selling, as it has achieved huge
            profits and amazing results in the labor market in the recent
            period, which made most people prefer to use it because of its
            advantages that make it better than direct dealing, as attested by
            many consumers on the ground.
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex justify-around gap-5 flex-wrap">
            {costs.map((c) => (
              <CostCard title={c.title} text={c.text} img={c.img} />
            ))}
          </div>
        </div>
        <Button text="Order the offer Now" color="primary" shadow={true} />
      </div>
      <ServicesWebDesign />
      <div className="flex flex-col gap-5 w-[90%] mx-auto">
        <div className="flex flex-col gap-3">
          <SectionTitle title="What you need to create your online store!" />
          <p className="text-lg">
            Conduct a feasibility study for the design of the online store that
            you will establish, and determine the approximate profit margin of
            the project. Is it worth the risk and starting it! Consider the
            market requirements to know which specialty the market lacks and
            focus your thinking on it.
            <br />
            Determine the product that you want to sell? And know where you will
            get it from? And what are the places that display products at better
            prices?
            <br />
            Contract with a company specialized in designing online stores to
            design your store with high quality that makes it unique from other
            stores.
          </p>
        </div>
        <h1 className="font-bold text-lg">
          "You just have to take the step to start... by designing an online
          store and we will design for you with unparalleled professionalism"
        </h1>
        <p className="text-lg">
          Design your online store now with ease, as starting your project -
          whatever the type of your products - through the online store that we
          will design specifically for you; opens up many sources of livelihood
          and horizons of expansion for you better than those stores with
          limited benefit, and to keep pace with the era of speed in which we
          live now, and reach the largest number of customers around the world.
        </p>
        <Button text="Order the offer Now" color="primary" />
      </div>
      <div className="flex flex-col gap-5 justify-center">
        <h1 className="text-secondary text-center text-2xl font-bold">
          Cost of designing an online store
        </h1>
        <p className="w-2/3 text-center mx-auto">
          A professional online store design price simulator has been programmed
          to give you the highest benefit at the lowest price (determine the
          cost of your store now)
        </p>
        <div className="flex justify-evenly gap-3 flex-wrap">
          {storeDesigns.map((s) => (
            <StoreDesign
              title={s.title}
              price={s.price}
              specs={s.specs}
              times={s.times}
            />
          ))}
        </div>
        <OurWorkWebDesign />
      </div>
      <div className="flex flex-col gap-5 w-[90%] mx-auto">
        <h1 className="font-bold text-4xl text-center">FAQs</h1>
        <div className="flex flex-col gap-y-5 w-2/3 mx-auto max-md:w-full">
          {faqs.map((f) => (
            <Faq
              question={f.question}
              answer={f.answer}
              faqsIds={faqsIds}
              setFaqsIds={setFaqsIds}
              id={f.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesign;
