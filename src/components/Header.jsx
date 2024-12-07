import { useState } from "react";

const Header = () => {
  const [isImg, setIsImg] = useState("/image-product-1.jpg");
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");
  const price = 125;

  const images = [
    "/image-product-1.jpg",
    "/image-product-2.jpg",
    "/image-product-3.jpg",
    "/image-product-4.jpg",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto relative">
      <nav className="flex items-center justify-between p-5 border-b">
        <div className="flex items-center gap-10">
          <img src="/logo.svg" />
          <ul className="lg:flex items-center gap-8 text-darkGrayishBlue hidden">
            <li className="cursor-pointer hover:text-orange hover:font-medium">
              Collections
            </li>
            <li className="cursor-pointer hover:text-orange hover:font-medium">
              Men
            </li>
            <li className="cursor-pointer hover:text-orange hover:font-medium">
              Women
            </li>
            <li className="cursor-pointer hover:text-orange hover:font-medium">
              About
            </li>
            <li className="cursor-pointer hover:text-orange hover:font-medium">
              Contact
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-8">
          <button
            onClick={() =>
              document.getElementById("cart").classList.toggle("hidden")
            }
            className="relative"
          >
            <img src="/icon-cart.svg" />
            <small className="bg-orange px-1 absolute -top-2 text-xs text-white rounded-full">
              {count}
            </small>
          </button>
          <img
            src="image-avatar.png"
            className="hover:ring-2 ring-orange rounded-full cursor-pointer size-10 md:size-12"
          />
        </div>
      </nav>

      <div
        id="cart"
        className="w-full max-w-sm shadow-xl p-5 rounded-xl divide-y absolute right-0 bg-white mx-3 hidden"
      >
        <h1 className="text-lg font-semibold pb-4">Cart</h1>
        {count > 0 ? (
          <div>
            <section className="flex items-center justify-between mt-5">
              <img src="/image-product-1-thumbnail.jpg" className="size-12" />
              <div className="text-darkGrayishBlue">
                <p>Fall Limited Edition Sneakers</p>
                <p>
                  $125.00 x {count}{" "}
                  <span className="font-bold">${price * count}</span>
                </p>
              </div>
              <button>
                <img src="icon-delete.svg" onClick={() => setCount(0)} />
              </button>
            </section>
            <button className="bg-orange w-full p-4 rounded-xl text-lg font-semibold mt-5">
              Checkout
            </button>
          </div>
        ) : (
          <div className="py-8 text-center font-medium text-darkGrayishBlue">
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>

      <main className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-5 w-full lg:w-[90%] mx-auto py-10 lg:py-24">
        <section className="flex flex-col items-center justify-center gap-10">
          <img src={isImg} className="rounded-xl" />
          <div className="flex items-center gap-5">
            {images.map((image) => (
              <img
                onClick={() => setIsImg(image)}
                src={image}
                className="size-16 xl:size-24 lg:size-20  rounded-xl cursor-pointer hover:border-2 border-orange"
              />
            ))}
          </div>
        </section>
        <section className="">
          <h1 className="text-lg font-semibold text-darkGrayishBlue">
            SNEAKER COMPANY
          </h1>
          <h2 className="mt-5 text-3xl md:text-5xl font-bold text-veryDarkBlue">
            Fall Limited Edition Sneakers
          </h2>
          <p className="text-darkGrayishBlue mt-8 leading-7">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they'll withstand everything
            the weather can offer.
          </p>
          <div className="flex items-center lg:items-start lg:flex-col mt-8 justify-between">
            <strong className="flex items-center text-2xl md:text-3xl">
              $<span className="mr-3">125.00</span>
              <span className="text-white bg-veryDarkBlue px-3 py-0.5 rounded-lg text-base">
                50%
              </span>
            </strong>
            <p className="line-through text-darkGrayishBlue mt-2">$250.00</p>
          </div>

          <div className="mt-5 flex flex-col gap-2">
            <div className="flex flex-col lg:flex-row items-center gap-5">
              <button className="flex items-center justify-between w-full lg:w-1/4 rounded-xl bg-lightGrayishBlue p-3">
                <img
                  src="/icon-minus.svg"
                  onClick={() => {
                    if (count > 0) {
                      setCount(count - 1);
                    }
                  }}
                />
                <p>{count}</p>
                <img src="/icon-plus.svg" onClick={() => setCount(count + 1)} />
              </button>
              <button
                onClick={() => {
                  if (count > 0) {
                    document.getElementById("cart").classList.remove("hidden");
                    setMessage("");
                  } else {
                    setMessage("Please select the quantity of the product!");
                  }
                }}
                className="flex items-center justify-center gap-5 bg-orange w-full lg:w-1/2 p-3 rounded-xl"
              >
                <img src="/icon-cart.svg" />
                <span className="font-semibold text-lg">Add to cart</span>
              </button>
            </div>
            <small className="text-red-500">{message}</small>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Header;
