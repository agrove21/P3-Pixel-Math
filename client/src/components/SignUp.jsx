function SignUp() {
  return (
    <div className="bg-blue-300 w-4/12 p-2 flex flex-col items-center">
      <h1 className="text-xl">Sign Up</h1>
      <p>Not yet a Member?</p>
      <form className="w-full flex flex-col items-center">
        <input className="w-10/12 p-2 my-2" type="text" placeholder="Name" />
        <input className="w-10/12 p-2 my-2" type="email" placeholder="Email" />
        <input
          className="w-10/12 p-2 my-2"
          type="password"
          placeholder="Password"
        />
        <button
          className="w-10/12 p-2 my-2 bg-violet-600 text-white font-bold"
          type="submit"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
