

function LogIn() {
  return (
    <div className="bg-yellow-200 w-8/12 p-2 flex flex-col items-center">
        <h1 className="text-xl">Sign In</h1>
        <p>Already a Member? Enter your email and password below</p>
        <form className="w-full flex flex-col items-center">
            <input
            className="w-10/12 p-2 my-2"
            type="email"
            placeholder="Email"
            />
            <input
            className="w-10/12 p-2 my-2"
            type="password"
            placeholder="Password"
            />
            <button
            className="w-10/12 p-2 my-2 bg-blue-600 text-white font-bold"
            type="submit"
            >
            Log In
            </button>
        </form>
    </div>
  )
}

export default LogIn