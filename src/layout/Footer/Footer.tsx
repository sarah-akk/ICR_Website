import FooterList from "./FooterList";
import { FaMobileAlt } from "react-icons/fa";
import { CiLaptop } from "react-icons/ci";
import { HiUserGroup } from "react-icons/hi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const lists = [
  {
    title: "Mobile application design",
    elements: [
      "Mobile application design",
      "Programming an application such as Uber and Careem",
      "Design an application such as Messenger",
      "Design an application like Haraj",
      "Design and programming a medical application",
      "Design an application such as HungerStation",
    ],
    icon: FaMobileAlt,
  },
  {
    title: "Website design",
    elements: [
      "Online store design",
      "Design a website like Haraj",
      "Hotel reservation website design",
      "Create a website like olx",
      "Marriage website design",
      "Snapchat add-ons script",
    ],
    icon: CiLaptop,
  },
  {
    title: "Help & Contact Us",
    elements: [
      "Contact us",
      "Who are we?",
      "User Agreement",
      "Blog",
      "Sitemap",
    ],
    icon: HiUserGroup,
  },
];

const socialMedia = [
  {
    name: "facebook",
    icon: FaFacebook,
    link: "https://www.google.com",
  },
  {
    name: "X",
    icon: RiTwitterXLine,
    link: "https://www.google.com",
  },
  {
    name: "linked-in",
    icon: FaLinkedin,
    link: "https://www.google.com",
  },
  {
    name: "youtube",
    icon: FaYoutube,
    link: "https://www.google.com",
  },
];

const Footer = () => {
  return (
    <footer>
      <div className="flex gap-3 justify-between p-10 flex-wrap gap-y-10 ">
        {lists.map((l) => (
          <FooterList title={l.title} listElements={l.elements} icon={l.icon} />
        ))}
      </div>
      <div className="footer-bg flex flex-col justify-end gap-10 py-5 items-center h-[35vh]">
        <ul className="justify-center  flex gap-4">
          {socialMedia.map((s) => (
            <li>
              <a href={s.link}>
                <s.icon color="white" size={40} />
              </a>
            </li>
          ))}
        </ul>
        <p className="text-lg text-white">&copy; 2024 All Rights Reserved </p>
      </div>
    </footer>
  );
};

export default Footer;
