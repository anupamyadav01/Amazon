import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SideNavContent from "./SideNavContent";

const HeaderBottom = () => {
  const [sideBar, setSideBar] = useState(false);
  const ref = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSideBar(false);
      }
    });
  }, [ref, setSideBar]);

  // console.log(ref);
  return (
    <div className="flex h-[36px] w-full items-center bg-amazon_light px-4 text-white">
      {/* list items starts  */}
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSideBar((prev) => !prev)}
          className="headerHover flex items-center gap-1"
        >
          <MenuIcon />
          All
        </li>
        <li className="headerHover hidden md:inline-flex">
          Today&apos;s Deals
        </li>
        <li className="headerHover hidden md:inline-flex">Customer Service</li>
        <li className="headerHover hidden md:inline-flex">Gift Cards</li>
        <li className="headerHover hidden md:inline-flex">Registry</li>
        <li className="headerHover hidden md:inline-flex">Sell</li>
      </ul>
      {/* list items ends */}
      {/* Side nav starts here  */}
      {sideBar && (
        <div className="fixed left-0 top-0 h-screen w-full bg-amazon_blue bg-opacity-80 text-black">
          <div className="relative h-full w-full">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="scroll relative h-full w-[80%] overflow-x-hidden overflow-y-scroll border border-black bg-white md:w-[350px]"
            >
              <div className="sticky left-0 top-0 flex w-full items-center gap-4 bg-amazon_light px-6 py-2 text-white">
                <AccountCircleIcon />
                <h3 className="tranking font-titleFont text-lg font-bold">
                  Hello, Sign In
                </h3>
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop by Departements"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />{" "}
              <SideNavContent
                title="Programs and Features"
                one="Gift Cart"
                two="Amazon Live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Settings"
                one="Your Account"
                two="Customer Servies"
                three="User Settings"
              />
            </motion.div>
            <span
              onClick={() => setSideBar((prev) => !prev)}
              className="md:left[360px] absolute left-[340px] top-0 flex h-10 w-10 cursor-pointer items-center justify-center text-white duration-300 hover:text-white"
            >
              <CloseIcon fontSize="large" />
            </span>
          </div>
        </div>
      )}
      {/* Side nav ends here  */}
    </div>
  );
};

export default HeaderBottom;
