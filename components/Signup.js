import { useRef } from "react";

const SignUp = ({ onSubmit, onSwitchSign }) => {
  const fullNameRef = useRef(null);
  const ageRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    onSubmit("/users", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      name: fullNameRef.current.value,
      age: ageRef.current.value,
    });
  };

  return (
    <div className="max-w-sm mt-7">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col my-2">
          <label htmlFor="InputFullName">Full Name</label>
          <input
            ref={fullNameRef}
            className="px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="text"
            id="InputFullName"
            placeholder="Enter full name"
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="InputAge">Age</label>
          <input
            ref={ageRef}
            className="px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="number"
            id="InputAge"
            placeholder="Enter age"
          />
        </div>
        <div className="flex flex-col my-2">
          <label htmlFor="InputEmail1">Email address</label>
          <input
            ref={emailRef}
            className="px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="email"
            id="InputEmail1"
            placeholder="Enter email"
          />
          <small className="text-gray-500">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="flex flex-col">
          <label htmlFor="InputPassword1">Password</label>
          <input
            ref={passwordRef}
            className="px-2 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            type="password"
            id="InputPassword1"
            placeholder="Password"
          />
        </div>
        <button className="px-4 py-1 mt-8 font-bold text-white bg-green-600 rounded-lg hover:cursor-pointer">
          Sign Up
        </button>
        <small className="self-center mt-4 text-gray-500">
          Do you have an account?{" "}
          <span
            onClick={() => onSwitchSign(true)}
            className="text-blue-500 hover:cursor-pointer"
          >
            Sign in
          </span>
        </small>
      </form>
    </div>
  );
};

export default SignUp;
