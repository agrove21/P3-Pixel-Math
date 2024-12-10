import { Link } from "react-router-dom";
import Header from "../components/Header";

function Home() {
    return (
      <div className="min-h-screen flex flex-col items-center p-5 bg-gray-100">
        {/* Header Component */}
        {/* <Header /> */}
  
        {/* Logo and Title */}
        <div className="w-full flex justify-start items-center mb-8">
          <img className="w-14" src="/logo.png" alt="PixelMath logo" />
          <h1 className="text-2xl ml-3">
            <span className="font-black">PIXEL</span>MATH
          </h1>
        </div>
  
        {/* Buttons */}
        <div className="flex flex-col items-center mt-10">
          <h2 className="text-xl mb-5">Welcome to PixelMath</h2>
          <p className="text-lg mb-5">Choose your adventure: Take on a challenge or create your own masterpiece!</p>
          <div className="flex space-x-6">
            {/* Button to Challenge Page */}
            <Link
              to="/challenge"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition"
            >
              Start a Challenge
            </Link>
  
            {/* Button to PixelScreen Page */}
            <Link
              to="/custom"
              className="px-6 py-3 bg-violet-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Design Your Own
            </Link>
          </div>
        </div>
      </div>
    );
  }

export default Home;
