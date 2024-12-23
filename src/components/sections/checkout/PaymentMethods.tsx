import React from 'react';
import whish from 'images/payment/whish.png'
import NotesSection from './NotesSection';

const PaymentMethods: React.FC = () => {
  return (
    <section className="mb-6">
      <div className='grid grid-cols-12'>
      <span className="w-16 h-16 font-normal text-4xl flex items-center justify-center bg-[#D9D9D9] opacity-[0.6] rounded-full col-span-1 ">
          3
        </span>
        <div className='col-span-11 pl-6' >
      <h2 className="text-3xl font-semibold font-roboto  opacity-[0.7] py-4">
     
        Payment methods
      </h2>
      <div className="space-y-6 py-5">
        {/* Wish Money */}
        <label
          className="flex items-center justify-between border-2 border-[#999] rounded-2xl p-4 shadow-sm hover:shadow-md cursor-pointer transition focus-within:ring-2 focus-within:ring-[#47B5CC]"
        >
          <div className="flex items-center gap-4">
            <img
              src={whish}
              alt="Wish Money Logo"
              className="w-20 h-10  bg-cover bg-no-repeat py-1"
            />
            <span className="font-semibold text-xl">Wish Money</span>
          </div>
          <input
            type="radio"
            name="payment"
            className="w-5 h-5 text-[#47B5CC] focus:ring-[#47B5CC] accent-[#47B5CC]"
          />
          
        </label>

        {/* Cash on Delivery */}
        <label
          className="flex items-center justify-between border-2 border-[#999] rounded-2xl p-4 shadow-sm hover:shadow-md cursor-pointer transition focus-within:ring-2 focus-within:ring-[#47B5CC]"
        >
          <div className="flex items-center gap-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="60" height="38" viewBox="0 0 60 38" fill="none">
  <rect x="1.325" y="1.5" width="57.35" height="35" rx="1" stroke="#51526C" stroke-width="1.2"/>
  <mask id="path-2-inside-1_2110_2764" fill="white">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9996 31.25C35.3499 31.25 39.6871 25.7655 39.6871 19C39.6871 12.2345 35.3499 6.75 29.9996 6.75C24.6494 6.75 20.3121 12.2345 20.3121 19C20.3121 25.7655 24.6494 31.25 29.9996 31.25ZM35.0534 26V23.6191H31.7617V12H29.6589L24.575 14.4741V14.5546L25.1872 16.283H25.2937L28.887 14.9956V23.6191H25.2937V26H35.0534Z"/>
  </mask>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M29.9996 31.25C35.3499 31.25 39.6871 25.7655 39.6871 19C39.6871 12.2345 35.3499 6.75 29.9996 6.75C24.6494 6.75 20.3121 12.2345 20.3121 19C20.3121 25.7655 24.6494 31.25 29.9996 31.25ZM35.0534 26V23.6191H31.7617V12H29.6589L24.575 14.4741V14.5546L25.1872 16.283H25.2937L28.887 14.9956V23.6191H25.2937V26H35.0534Z" fill="#51526C"/>
  <path d="M35.0534 23.6191H36.2534V22.4191H35.0534V23.6191ZM35.0534 26V27.2H36.2534V26H35.0534ZM31.7617 23.6191H30.5617V24.8191H31.7617V23.6191ZM31.7617 12H32.9617V10.8H31.7617V12ZM29.6589 12V10.8H29.3824L29.1338 10.921L29.6589 12ZM24.575 14.4741L24.0499 13.3951L23.375 13.7236V14.4741H24.575ZM24.575 14.5546H23.375V14.7608L23.4439 14.9552L24.575 14.5546ZM25.1872 16.283L24.0561 16.6836L24.3392 17.483H25.1872V16.283ZM25.2937 16.283V17.483H25.5021L25.6984 17.4127L25.2937 16.283ZM28.887 14.9956H30.087V13.291L28.4823 13.8659L28.887 14.9956ZM28.887 23.6191V24.8191H30.087V23.6191H28.887ZM25.2937 23.6191V22.4191H24.0937V23.6191H25.2937ZM25.2937 26H24.0937V27.2H25.2937V26ZM38.4871 19C38.4871 25.3806 34.4399 30.05 29.9996 30.05V32.45C36.2599 32.45 40.8871 26.1504 40.8871 19H38.4871ZM29.9996 7.95C34.4399 7.95 38.4871 12.6194 38.4871 19H40.8871C40.8871 11.8496 36.2599 5.55 29.9996 5.55V7.95ZM21.5121 19C21.5121 12.6194 25.5593 7.95 29.9996 7.95V5.55C23.7394 5.55 19.1121 11.8496 19.1121 19H21.5121ZM29.9996 30.05C25.5593 30.05 21.5121 25.3806 21.5121 19H19.1121C19.1121 26.1504 23.7394 32.45 29.9996 32.45V30.05ZM33.8534 23.6191V26H36.2534V23.6191H33.8534ZM31.7617 24.8191H35.0534V22.4191H31.7617V24.8191ZM30.5617 12V23.6191H32.9617V12H30.5617ZM29.6589 13.2H31.7617V10.8H29.6589V13.2ZM25.1001 15.5531L30.184 13.079L29.1338 10.921L24.0499 13.3951L25.1001 15.5531ZM25.775 14.5546V14.4741H23.375V14.5546H25.775ZM26.3183 15.8823L25.7061 14.1539L23.4439 14.9552L24.0561 16.6836L26.3183 15.8823ZM25.2937 15.083H25.1872V17.483H25.2937V15.083ZM28.4823 13.8659L24.8889 15.1533L25.6984 17.4127L29.2917 16.1253L28.4823 13.8659ZM30.087 23.6191V14.9956H27.687V23.6191H30.087ZM25.2937 24.8191H28.887V22.4191H25.2937V24.8191ZM26.4937 26V23.6191H24.0937V26H26.4937ZM35.0534 24.8H25.2937V27.2H35.0534V24.8Z" fill="#51526C" mask="url(#path-2-inside-1_2110_2764)"/>
  <path d="M6.31463 9.80192C5.53327 10.0942 4.70537 10.2722 3.8625 10.3296L3.8625 3.85H11.1591C11.091 4.56848 10.9009 5.2756 10.5932 5.94655C10.2 6.80384 9.62188 7.58698 8.88841 8.24946C8.15483 8.91205 7.28072 9.44047 6.31463 9.80192Z" fill="#51526C" stroke="#51526C" stroke-width="1.2"/>
  <path d="M53.685 9.80192C54.4664 10.0942 55.2943 10.2722 56.1371 10.3296L56.1371 3.85H48.8405C48.9086 4.56848 49.0987 5.2756 49.4064 5.94655C49.7996 6.80384 50.3777 7.58698 51.1112 8.24946C51.8448 8.91205 52.7189 9.44047 53.685 9.80192Z" fill="#51526C" stroke="#51526C" stroke-width="1.2"/>
  <path d="M6.31463 28.1981C5.53327 27.9058 4.70537 27.7278 3.8625 27.6704L3.8625 34.15H11.1591C11.091 33.4315 10.9009 32.7244 10.5932 32.0534C10.2 31.1962 9.62188 30.413 8.88841 29.7505C8.15483 29.0879 7.28072 28.5595 6.31463 28.1981Z" fill="#51526C" stroke="#51526C" stroke-width="1.2"/>
  <path d="M53.685 28.1981C54.4664 27.9058 55.2943 27.7278 56.1371 27.6704L56.1371 34.15H48.8405C48.9086 33.4315 49.0987 32.7244 49.4064 32.0534C49.7996 31.1962 50.3777 30.413 51.1112 29.7505C51.8448 29.0879 52.7189 28.5595 53.685 28.1981Z" fill="#51526C" stroke="#51526C" stroke-width="1.2"/>
</svg>
            <span className="font-semibold text-xl">Cash on Delivery</span>
          </div>
          <input
            type="radio"
            name="payment"
            className="w-5 h-5 text-[#47B5CC] focus:ring-[#47B5CC] accent-[#47B5CC]"
          />
        </label>
        <NotesSection />
      </div>
      </div>
      </div>
    </section>
  );
};

export default PaymentMethods;
