import { useContext, useState } from "react";
import { StoreContext } from "../../utils/store";
import { useRouter } from "next/router";

import SignIn from "../../components/Singin";
import SignUp from "../../components/Signup";

import tasksAPI from "../../utils/TaskAPI";

const AuthPage = () => {
  const {
    usr: [user, setUser],
  } = useContext(StoreContext);
  const [isRegistered, setIsRegistered] = useState(true);
  const router = useRouter();

  const handleSubmit = async (url, userData) => {
    try {
      const response = await tasksAPI.post(url, userData);
      const {
        token,
        user: { name, email },
      } = response.data;

      localStorage.setItem("token", token);
      setUser({ name, email });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container px-4 pt-24 mx-auto">
      <h2>Welcome to</h2>
      <h1 className="text-4xl font-bold">
        My<span className="text-green-600">Tasks</span>
      </h1>
      {isRegistered ? (
        <SignIn onSubmit={handleSubmit} onSwitchSign={setIsRegistered} />
      ) : (
        <SignUp onSubmit={handleSubmit} onSwitchSign={setIsRegistered} />
      )}
    </div>
  );
};

export default AuthPage;
