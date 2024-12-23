import React from 'react';

const CustomerSection: React.FC = () => {
  return (
    <section className="mb-6">
      <div className='grid grid-cols-12 '>
      <span className="w-16 h-16 font-normal text-4xl flex items-center justify-center bg-[#D9D9D9] opacity-[0.6] rounded-full col-span-1 ">
          2
        </span>
        <div className='col-span-11  pl-6 '>
      <div className="flex justify-between items-center mb-8">
      <h2 className="text-3xl font-semibold font-roboto  opacity-[0.7]">
    
        Customer
      </h2>
        <button className="text-3xl font-semibold font-roboto border-3 border-[#47B5CC] px-4 py-3 hover:bg-[#47B5CC] text-[#47B5CC] hover:text-white rounded-2xl">
          Sign In
        </button>
      </div>
      <div className="grid grid-cols-4 gap-4 items-center">
        <input
          type="text"
          placeholder="Full Name *"
          className="col-span-2 border-2 border-[#999] p-6 rounded-2xl"
        />
        
        <div className="flex col-span-2 gap-4">
        <span className=" border-2 border-[#999] rounded-2xl">
      <select
        className="p-6 focus:outline-none"
        defaultValue="+961"
      >
        <option value="+961">+961</option>
        <option value="+1">+1</option>
        <option value="+44">+44</option>
        <option value="+91">+91</option>
        {/* Add more country codes as needed */}
      </select>
    </span>
          <input
            type="text"
            placeholder="Phone *"
            className="border-2 border-[#999] p-6 w-full rounded-2xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        <input
          type="email"
          placeholder="E-Mail *"
          className="col-span-4 border-2 border-[#999] p-6 rounded-2xl"
        />
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
  <div className="flex col-span-4">
    <span className=" border-2 border-[#999] rounded-2xl">
      <select
        className="p-6  focus:outline-none"
        defaultValue="+961"
      >
        <option value="+961">+961</option>
        <option value="+1">+1</option>
        <option value="+44">+44</option>
        <option value="+91">+91</option>
        {/* Add more country codes as needed */}
      </select>
    </span>
    <input
      type="text"
      placeholder="Second phone NO"
      className="border-2 border-[#999] p-6 w-full rounded-2xl ml-2"
    />
  </div>
</div>

</div>
</div>
      <hr className="bg-[rgba(0,0,0,0.50)] my-6" />
    </section>
  );
};

export default CustomerSection;
