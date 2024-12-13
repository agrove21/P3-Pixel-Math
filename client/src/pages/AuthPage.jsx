import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";

function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col items-center p-5">
      <div className="w-full flex justify-start items-center">
        <img className="w-14" src="/logo.png" alt="PixelMath logo" />
        <h1 className="text-2xl ml-3">
          <span className="font-black">PIXEL</span>MATH
        </h1>
      </div>
      <div className="min-h-[85vh] w-full flex items-center justify-center">
        <div className="w-full md:w-[80%] border-slate-900 border-2 flex flex-col md:flex-row">
          <LogIn />
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
