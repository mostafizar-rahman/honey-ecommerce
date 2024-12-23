
import logo from "images/logo.png";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-6 bg-white p-6 rounded-md shadow-lg">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src={logo}
            alt="Meem Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

        {/* Form Section */}
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
          <div className="text-right">
            <a
              href="#"
              className="text-blue-500 hover:underline text-sm font-medium"
            >
              Forgot Password
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition font-semibold"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-4"></div>

        {/* Register Section */}
        <p className="text-center text-sm text-gray-600">
          Don’t Have An Account?{" "}
          <a href="#" className="text-blue-500 hover:underline font-medium">
            Register Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
