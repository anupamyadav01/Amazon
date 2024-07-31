import PropTypes from "prop-types";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useDispatch, useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../../redux/slices/amazonSlice";
import { useNavigate } from "react-router-dom";

const Products = ({ productsData }) => {
  const navigate = useNavigate();
  const userInfo = useSelector((state) => state.amazonReducer.user);
  // const products = useSelector((state) => state.amazon.products);
  const dispatch = useDispatch();
  return (
    <div className="mx-auto grid max-w-screen-2xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2 xl:grid-cols-4 xl:gap-4">
      {productsData.map((item) => (
        <div
          key={item.id}
          className="relative z-30 flex h-auto flex-col gap-4 border-[1px] border-gray-200 bg-white py-6 shadow-none duration-200 hover:cursor-pointer hover:border-transparent hover:shadow-testShadow"
        >
          <span className="absolute right-2 top-2 text-xs capitalize italic text-gray-500">
            {item.category}
          </span>
          {/* ========== Product Image Start here ============== */}
          <div className="group relative flex h-auto w-full items-center justify-center">
            <img
              className="h-64 w-52 object-contain"
              src={item.image}
              alt="ProductImg"
            />
            {/* ================== Product mini drop down Start here ============ */}
            <ul className="absolute -bottom-[160px] flex h-36 w-full flex-col items-end justify-center gap-2 bg-gray-100 duration-700 group-hover:bottom-0">
              <li className="productLi">
                Compare
                <span>
                  <ApiIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Cart
                <span>
                  <ShoppingCartIcon />
                </span>
              </li>
              <li className="productLi">
                View Details{" "}
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Wish List{" "}
                <span>
                  <FavoriteIcon />
                </span>
              </li>
            </ul>
            {/* ================== Product mini drop down End here ============== */}
          </div>
          {/* ========== Product Image End here ================ */}
          {/* ========== Product Info Start here =============== */}
          <div className="z-10 flex flex-col gap-1 bg-white px-4">
            <div className="flex items-center justify-between">
              <h2 className="font-titleFont text-lg font-medium tracking-wide text-amazon_blue">
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm font-semibold text-gray-600">
                ${item.price}
              </p>
            </div>
            <div>
              <p className="text-sm">{item.description.substring(0, 100)}</p>
              <div className="flex text-yellow-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <div className="mt-4 flex w-full items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  className="w-full rounded-md border border-yellow-500 bg-gradient-to-tr from-yellow-400 to-yellow-200 px-4 py-1.5 font-titleFont text-base font-medium duration-200 hover:border-yellow-700 hover:from-yellow-300 hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500"
                  onClick={() => {
                    if (userInfo) {
                      toast.success("Item added to cart", {
                        position: "top-right",
                        duration: 1000,
                      });
                      setTimeout(() => {
                        dispatch(
                          addToCart({
                            id: item.id,
                            title: item.title,
                            description: item.description,
                            price: item.price,
                            category: item.category,
                            image: item.image,
                            quantity: 1,
                          }),
                        );
                      }, 1300);
                    } else {
                      toast.error("Please login first", {
                        position: "top-right",
                        duration: 1000,
                      });
                      setTimeout(() => {
                        navigate("/signin");
                      }, 2000);
                    }
                  }}
                >
                  Add to Cart
                </button>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="h-8 w-8 rounded-md border border-yellow-500 bg-gradient-to-tr from-yellow-400 to-yellow-200 font-titleFont text-base font-medium duration-200 hover:border-yellow-700 hover:from-yellow-300 hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500"
                  onClick={() => dispatch(decrementQuantity(item.id))}
                >
                  -
                </button>
                <button className="h-8 w-8 rounded-md border border-yellow-500 bg-gradient-to-tr from-yellow-400 to-yellow-200 font-titleFont text-base font-medium duration-200 hover:border-yellow-700 hover:from-yellow-300 hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500">
                  0
                </button>
                <button
                  className="h-8 w-8 rounded-md border border-yellow-500 bg-gradient-to-tr from-yellow-400 to-yellow-200 font-titleFont text-base font-medium duration-200 hover:border-yellow-700 hover:from-yellow-300 hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500"
                  onClick={() => dispatch(incrementQuantity(item.id))}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Toaster />
    </div>
  );
};

Products.propTypes = {
  productsData: PropTypes.array,
};

export default Products;
