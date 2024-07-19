import PropTypes from "prop-types";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const SideNavContent = ({ title, one, two, three }) => {
  return (
    <div className="border-b-[1px] border-b-gray-300 py-3">
      <h3 className="mb-1 px-6 font-titleFont text-lg font-semibold">
        {title}
      </h3>
      <ul className="text-sm">
        <li className="flex cursor-pointer items-center justify-between px-6 py-2 hover:bg-zinc-200">
          {one}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>{" "}
        <li className="flex cursor-pointer items-center justify-between px-6 py-2 hover:bg-zinc-200">
          {two}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>{" "}
        <li className="flex cursor-pointer items-center justify-between px-6 py-2 hover:bg-zinc-200">
          {three}
          <span>
            <KeyboardArrowRightIcon />
          </span>
        </li>
      </ul>
    </div>
  );
};

SideNavContent.propTypes = {
  title: PropTypes.string,
  one: PropTypes.string,
  three: PropTypes.string,
  two: PropTypes.string,
};

export default SideNavContent;
