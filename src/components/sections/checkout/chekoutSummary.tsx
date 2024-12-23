import React from "react";
import { useState } from "react";

const CheckoutSummary: React.FC = () => {
  // Mock product data
  const product = {
    name: "Pure Natural Honey",
    code: "j974-1",
    price: 89,
    quantity: 1,
    image: "/images/products/details/honey-jars-1.png", // Replace with your product image
  };
  const [hasValue, setHasValue] = useState(false);

  return (
    <section className="pt-4 pb-6 pl-20 bg-white mb-6 rounded-xl ">
      <header className="bg-[#F7F8F9] flex justify-between items-center p-5 mb-6 rounded-2xl">
        <h2 className="text-lg font-medium">Your order</h2>
        <button
          className="text-gray-500 hover:text-gray-800"
          title="Edit order details"
          aria-label="Edit order details"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M13.0001 1.8999H4.90015C3.24329 1.8999 1.90015 3.24305 1.90015 4.8999V21.0999C1.90015 22.7568 3.24329 24.0999 4.90014 24.0999H21.1001C22.757 24.0999 24.1001 22.7568 24.1001 21.0999V12.9999"
              stroke="#51526C"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              d="M18.1856 2.41421C18.9667 1.63317 20.233 1.63316 21.0141 2.41421L23.4889 4.88909C24.27 5.67014 24.27 6.93647 23.4889 7.71751L13.4919 17.7146C13.3265 17.88 13.1083 17.9822 12.8753 18.0033L8.59734 18.3922C7.9754 18.4488 7.45437 17.9278 7.51091 17.3058L7.89981 13.0278C7.92099 12.7948 8.02318 12.5767 8.1886 12.4113L18.1856 2.41421Z"
              stroke="#51526C"
              strokeWidth="3"
            />
            <path
              d="M16 4.75L16.3858 5.71457C17.0973 7.49329 18.5067 8.90268 20.2854 9.61417L21.25 10"
              stroke="#51526C"
              strokeWidth="1.2"
              strokeLinecap="square"
            />
          </svg>
        </button>
      </header>

      <div className=" pb-4 mb-8">
        <table className="w-full text-sm text-center ">
          <tbody>
            <tr className="align-middle">
              {/* Product Image */}
              <td className="w-20">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              </td>

              {/* Product Name and Code */}
              <td className="pl-2 text-left">
                <h3 className="font-semibold text-xl mb-3">{product.name}</h3>
                <p className="text-gray-600 text-xl">
                  Product code: <span className="ml-2">{product.code}</span>
                </p>
              </td>

              {/* Price */}
              <td className="text-center text-xl px-4">
                <p className="text-[#565555] font-normal mb-3">Price</p>
                <p className="font-semibold">${product.price}</p>
              </td>

              {/* Quantity */}
              <td className="text-center text-xl px-4">
                <p className="text-[#565555] font-normal mb-3">Qty</p>
                <p className="font-semibold">{product.quantity}</p>
              </td>

              {/* Total Amount */}
              <td className="text-center text-xl pl-6">
                <p className="text-[#565555] font-normal mb-3">Amount</p>
                <p className="font-semibold">${product.price * product.quantity}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>


      <div>
        <h3 className="text-3xl font-medium mb-4">Shipping Methods</h3>
        <p className="text-red-600 my-5">Please enter the correct address</p>
        <div className="grid grid-cols-3 gap-4">

        <div className="relative col-span-1">
   
      <input
        type="text"
        id="date"
        className={` w-full p-6 border-2 border-gray-300 rounded-2xl text-black focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-transparent`}

        onChange={(e) => setHasValue(!!e.target.value)}
      />
      <span
        className={` absolute left-3  -translate-y-[-116%] pointer-events-none text-black text-base transition-all duration-100 ease-in-out ${
          hasValue ?'translate-y-[-50%] opacity-0'
        : 'translate-y-[50%] opacity-100'
        }`}
      >
        Date <span className="text-red-600">*</span>
      </span>
    </div>

          <div className="col-span-2">
      
            <select
              id="shipping"
              className="w-full p-6 border-2 border-gray-300 rounded-2xl"
            >
              <option value="">
                Available shipping intervals are not found
              </option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSummary;
