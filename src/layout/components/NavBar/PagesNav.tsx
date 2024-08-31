import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.svg";
import button from "../../../assets/button.png";

const PagesNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* Desktop */}
      <nav className="hidden md:flex bg-slate-100 w-full h-20 items-center  shadow-md">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 w-auto m-16" />
        </div>

        {/* Navigation Links */}
        <div className="flex  justify-between mx-auto flex-wrap w-[80%]">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold transition duration-300"
                : "text-gray-700 hover:text-blue-500 transition duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/web-design"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold transition duration-300"
                : "text-gray-700 hover:text-blue-500 transition duration-300"
            }
          >
            Website Design
          </NavLink>
          <NavLink
            to="/application-design"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold transition duration-300"
                : "text-gray-700 hover:text-blue-500 transition duration-300"
            }
          >
            Application Design
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold transition duration-300"
                : "text-gray-700 hover:text-blue-500 transition duration-300"
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/our-work"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold transition duration-300"
                : "text-gray-700 hover:text-blue-500 transition duration-300"
            }
          >
            Our Work
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 font-bold transition duration-300"
                : "text-gray-700 hover:text-blue-500 transition duration-300"
            }
          >
            Contact Us
          </NavLink>
        </div>
      </nav>

      {/* Mobile */}
      <div className="md:hidden p-2">
        <div className="flex flex-row items-center justify-between">
          <img
            src={button}
            alt="Menu Button"
            className="h-14 w-auto m-2 cursor-pointer"
            onClick={toggleMenu}
          />
          <img src={logo} alt="Logo" className="h-10 w-auto m-2" />
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="flex flex-col space-y-2 mt-4 p-4 bg-slate-100 rounded shadow-lg">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold transition duration-300"
                  : "text-gray-700 hover:text-blue-500 transition duration-300"
              }
              onClick={toggleMenu} // Close the menu when a link is clicked
            >
              Home
            </NavLink>
            <NavLink
              to="/web-design"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold transition duration-300"
                  : "text-gray-700 hover:text-blue-500 transition duration-300"
              }
              onClick={toggleMenu} // Close the menu when a link is clicked
            >
              Website Design
            </NavLink>
            <NavLink
              to="/application-design"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold transition duration-300"
                  : "text-gray-700 hover:text-blue-500 transition duration-300"
              }
              onClick={toggleMenu} // Close the menu when a link is clicked
            >
              Application Design
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold transition duration-300"
                  : "text-gray-700 hover:text-blue-500 transition duration-300"
              }
              onClick={toggleMenu} // Close the menu when a link is clicked
            >
              Blogs
            </NavLink>
            <NavLink
              to="/our-work"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold transition duration-300"
                  : "text-gray-700 hover:text-blue-500 transition duration-300"
              }
              onClick={toggleMenu} // Close the menu when a link is clicked
            >
              Our Work
            </NavLink>
            <NavLink
              to="/contact-us"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 font-bold transition duration-300"
                  : "text-gray-700 hover:text-blue-500 transition duration-300"
              }
              onClick={toggleMenu} // Close the menu when a link is clicked
            >
              Contact Us
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
};

export default PagesNav;
