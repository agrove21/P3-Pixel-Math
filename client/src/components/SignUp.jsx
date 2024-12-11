import { gql, useMutation } from "@apollo/client";
import auth from "../utils/auth";

const mutation = gql`
  mutation Mutation($name: String!, $email: String!, $password: String!) {
    addUser(name: $name, email: $email, password: $password) {
      token
      user {
        email
        name
      }
    }
  }
`;

function SignUp() {
  const [addUser, { data }] = useMutation(mutation);
  async function handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const password = event.target.elements.password.value;
    const response = await addUser({ variables: { name, email, password } });
    auth.login(response.data.addUser.token);
  }

  return (
    <div className="bg-blue-300 w-4/12 p-2 flex flex-col items-center">
      <h1 className="text-xl">Sign Up</h1>
      <p>Not yet a Member?</p>
      <form
        onSubmit={handleSubmit}
        className="w-full flex flex-col items-center"
      >
        <input
          name="name"
          className="w-10/12 p-2 my-2"
          type="text"
          placeholder="Name"
        />
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
