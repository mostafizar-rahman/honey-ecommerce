import React from 'react';

const OrderSummary: React.FC = () => {
  return (
   
   <aside className="relative max-w-sm bg-[#F2F2F2] border border-gray-200 rounded-xl  px-4 pt-6 pb-24 shadow-sm">
  {/* Checkbox */}
  <div className="flex items-start mb-8">
    <input
      id="terms"
      type="checkbox"
      className="w-4 h-4 mt-1  border-gray-300 rounded focus:ring-[#47B5CC]"
    />
    <label htmlFor="terms" className="ml-2 text-lg md:text-xl text-gray-700">
      Select this check box to accept the{" "}
      <a href="#" className="text-[#47B5CC] underline">
        terms and conditions
      </a>
    </label>
  </div>

  {/* Order Summary */}
  <h2 className="text-lg md:text-xl font-bold mb-4">Order Summary</h2>

  {/* Details */}
  <div className="text-lg md:text-xl font-normal space-y-4">
    <div className="flex justify-between">
      <span className="text-[#47B5CC]">Product quantity:</span>
      <span>1 items (s)</span>
    </div>
    <div className="flex justify-between">
      <span className="text-[#47B5CC]">Amount:</span>
      <span>$89</span>
    </div>
    <div className="flex justify-between">
      <span className="text-[#47B5CC]">Gross weight</span>
      <span>50 gm</span>
    </div>
  </div>

  {/* Divider */}
  <hr className="my-4 border-gray-300" />

  {/* Total */}
  <div className="flex justify-between text-xl font-normal">
    <span className="text-[#47B5CC]">Other total</span>
    <span className="font-bold">$89</span>
  </div>

  {/* Divider */}
  <hr className="my-4 border-gray-300" />

  {/* Button */}
  <button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-lg  md:text-xl font-semibold w-9/12 md:w-3/5  px-2 py-3 text-[#47B5CC] border-3 border-[#47B5CC] rounded-2xl hover:bg-[#47B5CC] hover:text-white transition">
    Continue Shopping
  </button>



    </aside>
   
  );
};

export default OrderSummary;
