;

const AboutUs = () => {
  return (
    <div className="bg-teal-300 pb-10 ">
      {/* About Us Section */}
      <section className="text-center py-10 bg-[#47B5CC] rounded-b-2xl">
        <h1 className="text-3xl font-bold text-white mb-6">About US</h1>
        <p className="text-lg text-teal-900 max-w-3xl mx-auto">
          We are a group of companies that manage multiple specialized websites
          that aim to provide diverse and distinct services. Our platform
          allows you to display and add your information easily, which helps
          you enhance your digital presence and reach the AOS audience.
        </p>
      </section>

      {/* What We Offer Section */}
      <section className="text-center py-10 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What we offer</h2>
        <div className="space-y-4 text-teal-800">
          <p>
            <a
              href="#"
              className="font-semibold underline decoration-teal-500 hover:text-teal-600"
            >
              Add your information
            </a>
            : Easily add your details to our platforms and reach thousands of
            users daily.
          </p>
          <p>
            <span className="font-semibold">Business support</span>: We provide
            a comprehensive platform that helps companies and individuals
            promote their services and products.
          </p>
          <p>
            <span className="font-semibold">Managing multiple sites</span>:
            Through our wide network of websites, we ensure that your
            information reaches a diverse audience.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="text-center py-10 bg-teal-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our mission</h2>
        <p className="text-teal-800 max-w-3xl mx-auto">
          Our goal is to create an inclusive digital society that connects
          companies with individuals and promotes meaningful participation
          through reliable and integrated platforms.
        </p>
      </section>

      {/* How to Join Section */}
      <section className="text-center py-10 bg-white">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">How to join?</h2>
        <p className="text-teal-800 max-w-3xl mx-auto">
          Start by filling out the registration form on our website. Our team
          is here to help you, ensuring that your information is added smoothly
          and effectively.
        </p>
      </section>

   
    </div>
  );
};

export default AboutUs;
