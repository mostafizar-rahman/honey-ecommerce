import React from 'react';
import DeliverySection from '../components/sections/checkout/DeliverySection';
import CustomerSection from '../components/sections/checkout/CustomerSection';
import OrderSummary from '../components/sections/checkout/OrderSummary';
import PaymentMethods from '../components/sections/checkout/PaymentMethods';
import CheckoutSummary from '@/components/sections/checkout/chekoutSummary';

const CheckoutForm: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
      <header className="flex justify-between items-center mb-10 gap-4 md:gap-0">
        <button className="text-[#47B5CC] text-lg md:text-3xl font-roboto font-semibold border-3 border-[#47B5CC] px-3 py-2 md:px-6 md:py-3 hover:bg-[#47B5CC] hover:text-white rounded-2xl">
          Continue to Shopping
        </button>
        <button className="flex justify-around items-center gap-4 bg-[#47B5CC] text-lg md:text-3xl text-white font-roboto font-semibold border-3 border-[#47B5CC]  px-3 py-2 md:px-6 md:py-3 hover:bg-white hover:text-[#47B5CC] rounded-2xl">
            <span className=''>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-10 md:h-10" viewBox="0 0 43 42" fill="none">
              <path d="M21.5 38.5C23.7986 38.5028 26.075 38.0515 28.1986 37.1718C30.3222 36.2922 32.251 35.0016 33.8743 33.3743C35.5016 31.751 36.7922 29.8222 37.6718 27.6986C38.5515 25.575 39.0028 23.2986 39 21C39.0028 18.7015 38.5515 16.425 37.6718 14.3014C36.7922 12.1779 35.5016 10.249 33.8743 8.62576C32.251 6.9984 30.3222 5.70783 28.1986 4.82819C26.075 3.94855 23.7986 3.49718 21.5 3.50001C19.2015 3.49718 16.925 3.94855 14.8014 4.82819C12.6779 5.70783 10.749 6.9984 9.12576 8.62576C7.4984 10.249 6.20783 12.1779 5.32819 14.3014C4.44855 16.425 3.99718 18.7015 4.00001 21C3.99718 23.2986 4.44855 25.575 5.32819 27.6986C6.20783 29.8222 7.4984 31.751 9.12576 33.3743C10.749 35.0016 12.6779 36.2922 14.8014 37.1718C16.925 38.0515 19.2015 38.5028 21.5 38.5Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round" />
              <path d="M14.5 21L19.75 26.25L30.25 15.75" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
            </svg></span>
            Checkout
        </button>
      </header>
          
      <div className='grid grid-cols-3 gap-8 '>
        <div className='grid grid-cols-1 col-span-2 gap-2 order-last md:order-first'> 
    <h1 className="text-4xl font-semibold pt-16 pb-6 text-center md:text-left">Checkout</h1>
          <DeliverySection />
          <CustomerSection />
          <CheckoutSummary />
          <PaymentMethods />
        
        </div>

        <div className='col-span-3 md:col-span-1 pt-0  md:pt-10 order-first md:order-last'>
          <OrderSummary />
        </div>
      </div>

    </div>
  );
};

export default CheckoutForm;
