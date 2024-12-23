import React from 'react';

const NotesSection: React.FC = () => {
  return (
    <section className='py-10'>
      <h2 className="text-3xl font-medium font-sans mb-6">Customer's notes</h2>

      <textarea
  className="w-full h-32 p-4 border-2 border-[#999] rounded-2xl resize-none focus:outline-none focus:ring-2  focus:ring-[#47B5CC]"
 placeholder="Customer's notes"
></textarea>

    </section>
  );
};

export default NotesSection;
