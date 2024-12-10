import { Link } from "react-router-dom";
import auth from "../utils/auth";

function Header() {
  return (
    <header className="p-4 text-black flex justify-between items-center">
      <div className="w-full flex justify-start items-center">
        <img className="w-14" src="/logo.png" alt="PixelMath logo" />
        <h1 className="text-2xl ml-3">
          <span className="font-black">PIXEL</span>MATH
        </h1>
      </div>
      <nav className="container mx-auto flex justify-end items-center">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-black hover:text-gray-500 font-medium">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/library"
              className="text-black hover:text-gray-500 font-medium"
            >
              Library
            </Link>
          </li>
          <li>
            <button
              onClick={() => auth.logout()} // Pass a valid function here
              className="text-black hover:text-gray-500 font-medium"
            >
              Log Out
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
