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

  const menu = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div className="w-full max-w-7xl mx-auto relative">
      <nav className="flex items-center justify-between p-5 border-b">
        <div className="flex items-center gap-10">
          <div className="flex items-center gap-3">
            <button className="block lg:hidden">
              <img
                src="/icon-menu.svg"
                onClick={() =>
                  document.getElementById("menu").classList.remove("hidden") &
                  document.getElementById("overlay").classList.remove("hidden")
                }
              />
            </button>
            <img src="/logo.svg" />
          </div>
          <ul className="lg:flex items-center text-darkGrayishBlue hidden">
            {menu.map((list, index) => (
              <li
                key={index}
                className="cursor-pointer hover:bg-paleOrange rounded-lg hover:text-orange p-4"
              >
                {list}
              </li>
            ))}
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

      {/* Mobile menu */}
      <ul
        id="menu"
        className="absolute top-5 h-full bg-white p-5 w-[70%] z-20 hidden"
      >
        <button
          onClick={() =>
            document.getElementById("menu").classList.add("hidden") &
            document.getElementById("overlay").classList.add("hidden")
          }
        >
          <img src="/icon-close.svg" className="mb-5" />
        </button>
        {menu.map((list, index) => (
          <li
            key={index}
            className="font-bold cursor-pointer hover:bg-paleOrange rounded-lg hover:text-orange p-4"
          >
            {list}
          </li>
        ))}
      </ul>

      <div
        id="overlay"
        className="w-full h-full absolute top-0 bg-white bg-opacity-75 z-10 hidden"
      ></div>

      <div
        id="cart"
        className="w-full lg:max-w-sm lg:m-3 shadow-xl p-5 rounded-xl divide-y absolute lg:right-0 bg-white hidden"
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
          <div className="py-16 text-center font-semibold text-darkGrayishBlue">
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>

      <main className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 w-full lg:w-[90%] mx-auto py-0 pb-5 lg:py-24">
        <section className="flex flex-col items-center justify-center gap-10">
          <img src={isImg} className="lg:rounded-xl rounded-none" />
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
        <section className="px-5">
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
                <img
                  src="/icon-plus.svg"
                  onClick={() => setCount(count + 1) & setMessage("")}
                />
              </button>
              <button
                onClick={() => {
                  if (count > 0) {
                    document.getElementById("cart").classList.remove("hidden");
                  } else {
                    setMessage("Please add the quantity of the product!");
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
