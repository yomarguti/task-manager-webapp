import { useRef } from "react";

const SignIn = ({ onSubmit, onSwitchSign }) => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit("/users/login", {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <div className="max-w-sm mt-7">
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <div className="flex flex-col my-2">
          <label htmlFor="InputEmail1">Email address</label>
          <input
            ref={emailRef}
            className="input-form"
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
            className="input-form"
            type="password"
            id="InputPassword1"
            placeholder="Password"
          />
        </div>
        <button className="btn btn-green">Sign in</button>
        <small className="self-center mt-4 text-gray-500">
          Don't you have an account?{" "}
          <span
            onClick={() => onSwitchSign(false)}
            className="text-blue-500 hover:cursor-pointer"
          >
            Sign up
          </span>
        </small>
      </form>
    </div>
  );
};

export default SignIn;
