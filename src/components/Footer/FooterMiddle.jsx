import { middleList } from "../../constants";
import FooterMiddleList from "./FooterMiddleList";
// import  from "../../assets";
import { bdFlag, logo } from "../../assets";
const FooterMiddle = () => {
  return (
    <div className="w-full bg-amazon_light text-white">
      <div className="w-full border-b-[1px] border-gray-500 p-10">
        <div className="mx-auto max-w-5xl text-gray-300">
          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:place-items-center md:items-start lgl:grid-cols-4">
            {middleList.map((item) => {
              return (
                <FooterMiddleList
                  key={item._id}
                  title={item.title}
                  listItems={item.listItems[0].listData}
                />
              );
            })}
          </div>
        </div>
      </div>
      {/* bottom part  */}
      <div className="flex w-full items-center justify-center gap-6 py-6">
        <div>
          <img className="w-20 pt-3" src={logo} alt="logo" />
        </div>
        <div className="flex gap-2">
          <p className="flex cursor-pointer items-center justify-center gap-1 border border-gray-500 px-2 py-1 duration-200 hover:border-amazon_yellow">
            English
          </p>
        </div>
        <div className="flex cursor-pointer items-center justify-center gap-1 border border-gray-500 px-2 py-1 duration-200 hover:border-amazon_yellow">
          <img src={bdFlag} className="w-6" alt="flagimg" />
          <p>Bangladesh</p>
        </div>
      </div>
    </div>
  );
};

export default FooterMiddle;
