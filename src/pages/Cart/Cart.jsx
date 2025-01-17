import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
} from "../../redux/slices/amazonSlice";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const products = useSelector((state) => state.amazonReducer.products);
  const user = useSelector((state) => state.amazonReducer.user);
  const dispatch = useDispatch();
  console.log(products);
  const calculateTotalPrice = () => {
    return products.reduce(
      (acc, item) => acc + item.product_price.slice(1) * item.quantity,
      0,
    );
  };

  return (
    <div className="w-full bg-gray-100 p-4">
      {products.length !== 0 ? (
        <div className="container mx-auto grid h-auto grid-cols-5 gap-4">
          {user ? (
            <div className="col-span-4 h-full w-full bg-white px-4">
              <div className="flex items-center justify-between border-b-[1px] border-b-gray-400 py-3 font-titleFont">
                <h2 className="text-3xl font-medium">Shopping Cart</h2>
              </div>
              {/* products start here */}
              <div>
                {products.map((item) => (
                  <div
                    key={item.asin}
                    className="flex w-full items-center gap-6 border-b-[1px] border-b-gray-300 p-4"
                  >
                    <div className="flex w-full items-center gap-6">
                      <div className="w-1/5">
                        <img
                          className="h-44 w-full object-contain"
                          src={item.product_photo}
                          alt=""
                        />
                      </div>
                      <div className="w-3/5">
                        <h2 className="text-lg font-semibold">
                          {item.product_title}
                        </h2>
                        <h2 className="pr-10 text-sm">{item.sales_volume}</h2>
                        <p className="text-base">
                          Unit Price:{" "}
                          <span className="font-semibold">
                            {item.product_price}
                          </span>
                        </p>
                        <div className="flex w-24 items-center justify-center gap-1 rounded-md bg-[#f0f2f2] py-1 text-center drop-shadow-lg">
                          <p>Qty:</p>
                          <p
                            onClick={() =>
                              dispatch(decrementQuantity(item.asin))
                            }
                            className="cursor-pointer rounded-md bg-gray-200 px-1 duration-300 hover:bg-gray-400"
                          >
                            -
                          </p>
                          <p>{item.quantity}</p>
                          <p
                            onClick={() =>
                              dispatch(incrementQuantity(item.asin))
                            }
                            className="cursor-pointer rounded-md bg-gray-200 px-1 duration-300 hover:bg-gray-400"
                          >
                            +
                          </p>
                        </div>
                        <button
                          onClick={() => {
                            toast.success("Item Deleted", {
                              position: "top-right",
                            });
                            dispatch(deleteItem(item.asin));
                          }}
                          className="mt-2 w-36 rounded-lg bg-red-500 py-1 text-white duration-300 hover:bg-red-700 active:bg-red-900"
                        >
                          Delete Item
                        </button>
                      </div>
                      <div>
                        <p className="font-titleFont text-lg font-semibold">
                          $
                          {(
                            parseFloat(item.product_price.slice(1)) *
                            item.quantity
                          ).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center p-5">
                <button
                  onClick={() => {
                    toast.success("Your cart is Empty", {
                      position: "top-right",
                    });
                    dispatch(resetCart());
                  }}
                  className="mt-2 w-36 rounded-lg bg-red-600 py-1 text-white duration-300 hover:bg-red-700 active:bg-red-800"
                >
                  {products.length === 0 ? <p>Cart is Empty</p> : "Clear Cart"}
                </button>
              </div>
            </div>
          ) : (
            <div>Please login to add to cart</div>
          )}
          <div className="col-span-1 h-full w-full bg-white px-4">
            <div>
              <p className="col-span-1 flex h-full w-full flex-col items-center bg-white p-4">
                <span>
                  <CheckCircleIcon className="rounded-full bg-white text-green-500" />
                </span>
                Your order qualifies for FREE Shipping Choose this option at
                Checkout. See details...
              </p>
            </div>
            <div>
              <p className="flex items-center justify-center px-10 font-semibold">
                Total:{" "}
                <span className="text-lg font-bold">
                  ${calculateTotalPrice().toFixed(2)}
                </span>
              </p>
            </div>
            <button className="to mt-3 w-full rounded-md border border-yellow-500 bg-gradient-to-tr from-yellow-400 to-yellow-200 py-1.5 font-titleFont text-base font-medium duration-200 hover:border-yellow-700 hover:from-yellow-300 hover:to-yellow-400 active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500">
              Proceed to Pay
            </button>
          </div>
        </div>
      ) : (
        <div className="flex w-full items-center justify-center">
          <div>
            <img
              className="rounded-xl"
              src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
              alt=""
            />
          </div>
          <div className="flex w-96 flex-col items-center rounded-md bg-white p-4">
            <h1 className="font-titleFont text-xl font-bold">
              Your Cart feels lonely.
            </h1>
            <p className="text-center text-sm">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <button className="mt-6 cursor-pointer rounded-md bg-yellow-400 px-8 py-2 font-titleFont text-lg font-semibold hover:bg-yellow-500 active:bg-yellow-700">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default Cart;
