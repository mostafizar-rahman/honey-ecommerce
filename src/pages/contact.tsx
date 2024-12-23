
const ContactUs = () => {
  return (
    <div className="bg-secondary text-center py-8">
      {/* Contact Us Header */}
      <h1 className="text-4xl font-bold text-white mb-8">Contact US</h1>

      {/* Form Section */}
      <div className="bg-white py-8 px-6 rounded-md shadow-md mx-auto max-w-lg">
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 border rounded-md placeholder:text-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-md placeholder:text-gray-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full p-3 border rounded-md placeholder:text-gray-500"
          />
          <textarea
            placeholder="Comment"
            rows={4}
            className="w-full p-3 border rounded-md placeholder:text-gray-500"
          />
          <button
            type="submit"
            className="bg-secondary text-white font-semibold py-3 px-6 rounded-md w-full hover:bg-secondary-dark transition"
          >
            Send Message &gt;
          </button>
        </form>
      </div>

      {/* Latest Products Section */}
      <div className="my-16">
        <h2 className="text-3xl font-bold text-muted mb-6">Latest Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="p-4 border rounded-md shadow-sm text-left space-y-3"
            >
              <img
                src={`https://via.placeholder.com/150?text=Product+${i + 1}`}
                alt={`Product ${i + 1}`}
                className="w-full rounded-md"
              />
              <h3 className="font-bold text-xl">$89 Vacuum Cleaner</h3>
              <p className="text-gray-500">
                Minmax, Vacuum Cleaner Strong suction...
              </p>
              <button className="bg-primary text-white py-2 px-4 rounded-md">
                Show Product
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="bg-white py-8 text-muted">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Meem Home Logo */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Meem Home</h3>
            <div className="flex space-x-4">
              {/* Social Icons */}
              <span>📱</span>
              <span>📘</span>
              <span>📷</span>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Have a question?</h4>
            <p>📍 Mejdlaya - Tripoli, Lebanon</p>
            <p>📞 +961 76 591 765</p>
            <p>✉️ info@email</p>
          </div>
        </div>
        <p className="text-center mt-8 text-xs">
          This site is protected by recaptcha and the Google Privacy Policy and
          Terms of Service apply. <br />
          Meme Home 2024 Copyright
        </p>
      </footer>
    </div>
  );
};

export default ContactUs;
