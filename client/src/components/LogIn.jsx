import { gql, useMutation } from "@apollo/client";
import auth from "../utils/auth";
import { toast } from "react-toastify";

const mutation = gql`
  mutation Mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        name
      }
    }
  }
`;

function LogIn() {
  const [login] = useMutation(mutation);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const email = event.target.elements.email.value;
      const password = event.target.elements.password.value;
      const response = await login({ variables: { email, password } });
      if(response.data.login.token){
        auth.login(response.data.login.token);
      }else{
        toast("Invalid email or password", { type: "error", theme: "colored" });
      }
    } catch (error) {
      console.log(error);
      toast("Invalid email or password", { type: "error", theme: "colored" });
    }
  }
  return (
    <div className="bg-yellow-200 w-full md:w-8/12 p-2 flex flex-col items-center">
      <h1 className="text-xl">Sign In</h1>
      <p>Already a Member? Enter your email and password below</p>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <input
          name="email"
          className="w-10/12 p-2 my-2"
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
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
  );
}

export default LogIn;
