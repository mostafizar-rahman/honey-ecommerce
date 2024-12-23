import React from 'react';

const DeliverySection: React.FC = () => {
  return (
    <section className="mb-6">
      <div className='grid grid-cols-1 md:grid-cols-12 '>
      <span className="w-16 h-16 font-normal text-4xl flex items-center justify-center bg-[#D9D9D9] opacity-[0.6] rounded-full md:col-span-1 ">
          1
        </span>
   
      <div className='grid grid-cols-1 gap-2 col-span-11 pl-6 pt-3'>

 
     
      <h2 className="text-3xl font-semibold font-roboto mb-6 opacity-[0.7]">
       
        Delivery
      </h2>
      
      <div className="grid grid-cols-3 gap-4 text-xl font-medium font-roboto">
        <select className="border-2 border-[#999] p-6 rounded-2xl cols-span-1 ">
          <option >Lebanon</option>
        </select>
        <select className="border-2 border-[#999] p-6 rounded-2xl col-span-2">
          <option >Lebanon</option>
        </select>
      </div>
      <div className='text-xl font-normal font-roboto'>
      <input
        type="text"
        placeholder="Area, Block, Street, Home, Floor, Flat *"
        className="border-2 border-[#999] p-6 w-full rounded-2xl mt-4 "
      />
     </div>
</div>
</div>
    </section>
  );
};

export default DeliverySection;
