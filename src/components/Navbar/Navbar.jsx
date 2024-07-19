import { logo } from "../../assets";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { allItems } from "../../constants";
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import HeaderBottom from "./HeaderBottom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [showAll, setShowAll] = useState(false);
  const products = useSelector((state) => state.amazon.products);
  //   const navigate = useNavigate();
  //   const search = async () => {
  //     await call();
  //     navigate("/productdisplay");
  //   };

  return (
    <div className="sticky top-0 z-50 w-full">
      <div className="flex w-full items-center gap-4 bg-amazon_blue px-4 py-3 text-white">
        {/* logo image  */}
        <Link to="/">
          <div className="headerHover">
            <img className="mt-2 w-24" src={logo} alt="logo" />
          </div>
        </Link>
        {/* logo ends  */}
        {/* location icon  */}
        <div className="headerHover hidden mdl:inline-flex">
          <LocationOnIcon className="text-white" />
          <p className="flex flex-col text-sm font-light text-lightText">
            Deliver to{" "}
            <span className="-mt-1 text-sm font-semibold text-whiteText">
              India
            </span>
          </p>
        </div>
        {/* location icon ends here  */}
        {/* search bar starts */}
        <div className="relative hidden h-10 flex-grow rounded-md lgl:flex">
          <span
            onClick={() => setShowAll((prev) => !prev)}
            className="flex h-full w-14 cursor-pointer items-center justify-center rounded-bl-md rounded-tl-md border-2 bg-gray-200 font-titleFont text-sm text-amazon_blue duration-300 hover:bg-gray-300"
          >
            All
            <span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {showAll && (
            <div>
              <ul className="absolute left-0 top-10 z-50 h-80 w-56 flex-col gap-1 overflow-x-hidden overflow-y-scroll border-[1px] border-amazon_blue bg-white p-2 text-black">
                {/* <li className="cursor-pointer border-b-[1px] border-b-transparent font-titleFont text-sm tracking-wide duration-200 hover:border-b-amazon_blue">
                  All Department
                </li> */}
                {allItems.map((item) => (
                  <li
                    className="cursor-pointer border-b-[1px] border-b-transparent font-titleFont text-sm tracking-wide duration-200 hover:border-b-amazon_blue"
                    key={item.id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            // onChange={(e) => setQuery(e.target.value)}
            // value={query}
            type="text"
            className="h-full flex-grow border-none px-2 text-base text-amazon_blue outline-none"
          />
          <span
            // onClick={search}
            className="flex h-full w-12 cursor-pointer items-center justify-center rounded-br-md rounded-tr-md bg-amazon_yellow text-amazon_blue duration-300 hover:bg-[#f3a847]"
          >
            <SearchIcon />
          </span>
        </div>
        {/* search bar ends */}
        {/* signin starts here  */}
        <Link to="/signin">
          <div className="headerHover flex flex-col items-start justify-center">
            <p className="text-sm font-light text-white mdl:text-xs mdl:text-lightText">
              Hello, Sign in
            </p>
            <p className="-mt-1 hidden text-sm font-semibold text-whiteText mdl:inline-flex">
              Account & Lists{" "}
              <span>
                <ArrowDropDownOutlinedIcon />
              </span>
            </p>
          </div>
        </Link>
        {/* signin ends here */}
        {/* return and orders starts here */}
        <div className="headerHover hidden flex-col items-start justify-center mdl:flex">
          <p className="text-xs font-light text-lightText">Returns</p>
          <p className="-mt-1 text-sm font-semibold text-whiteText">& Orders</p>
        </div>{" "}
        <Link to="/chatwithai">
          <div className="headerHover hidden flex-col items-start justify-center mdl:flex">
            <p className="text-xs font-light text-lightText">Talk to</p>
            <p className="-mt-1 ml-3 text-sm font-semibold text-whiteText">
              AI
            </p>
          </div>
        </Link>
        {/* return and orders ends here */}
        {/* cart icon starts here */}
        <Link to="/cart">
          <div className="headerHover relative flex items-start justify-center">
            <ShoppingCartIcon />
            <p className="mt-3 text-xs font-semibold text-whiteText">
              Cart{" "}
              <span className="absolute -top-1 left-6 flex h-4 items-center justify-center rounded-full bg-[#f3a847] p-1 text-xs font-semibold text-amazon_blue">
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
          </div>
        </Link>
        {/* cart icon ends here */}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Navbar;
