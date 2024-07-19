import ReactStars from "react-rating-stars-component";
import { useOutletContext } from "react-router-dom";

function ProductDisplay() {
  const [searchresult] = useOutletContext();

  return (
    <div>
      {searchresult?.length === 0 ? null : (
        <div className="flex flex-col gap-5 py-10 pl-64">
          {searchresult.map((product) => (
            <div key={product.asin} className="flex items-center">
              <div className="relative flex h-[303px] w-[280px] min-w-[279px] justify-center bg-[rgb(247,247,247)] pt-7">
                <img
                  src={product.product_photo}
                  alt="product image"
                  className="h-[217px] w-[177px]"
                />
                <span
                  className={` ${
                    !product.is_amazon_choice ? "hidden" : ""
                  } text-md absolute left-0 top-0 bg-[rgb(0,47,54)] px-3 text-white`}
                >
                  Amazon&apos;s{" "}
                  <span className="text-orange-400">
                    <i>Choice</i>
                  </span>
                </span>
              </div>
              <div className="flex flex-col gap-2 px-6">
                <h1 className="w-[600px] font-bold">{product.product_title}</h1>
                <span className="flex items-center gap-2">
                  <ReactStars
                    count={5}
                    size={24}
                    isHalf={true}
                    value={product.product_star_rating}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="rgb(255,164,29)"
                    edit={false}
                  />{" "}
                  <span className="text-blue-500">
                    {product.product_num_ratings}
                  </span>
                </span>
                <span className="text-md text-[rgb(86,89,89)]">
                  {product.sales_volume}
                </span>

                <span className="flex items-center gap-2">
                  <span className="text-xl">{product.product_price}</span>
                  <span className="text-sm text-[rgb(86,89,89)]">
                    M.R.P: <s className="">{product.product_original_price}</s>
                  </span>
                </span>
                {/* <span className={`${product.is_prime ? "" : "hidden"} `}>
                  <img width="50px" height={"15px"} src={isPrime} alt="" />
                </span> */}
                <div className="h-[80px] pt-5">
                  {product?.addtocart ? (
                    <span className="flex items-center gap-3">
                      <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-sky-500 pb-1 font-semibold text-white hover:cursor-pointer">
                        -
                      </span>
                      <span className="flex h-[30px] w-[30px] items-center justify-center rounded-sm border border-black bg-[rgb(247,247,247)] text-black">
                        {product?.quantity ? product.quantity : "0"}
                      </span>
                      <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-sky-500 pb-1 font-semibold text-white hover:cursor-pointer">
                        +
                      </span>
                    </span>
                  ) : (
                    <button
                      //   onClick={() => handleAddToCart(product)}
                      className="w-[150px] cursor-pointer rounded-lg border-b-[4px] border-yellow-600 bg-yellow-500 px-6 py-2 text-white brightness-100 transition-all hover:-translate-y-[1px] hover:border-b-[6px] hover:brightness-110 active:translate-y-[2px] active:border-b-[2px] active:brightness-90"
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProductDisplay;
