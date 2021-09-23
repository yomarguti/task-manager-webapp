import Head from "next/head";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "../utils/store";

import taskAPI from "../utils/TaskAPI";

const Header = () => {
  const {
    usr: [user, setUser],
  } = useContext(StoreContext);
  const router = useRouter();

  useEffect(() => {
    if (user.name) return;

    taskAPI
      .get("/users/me")
      .then((response) => {
        const { name, email } = response.data;
        setUser({ name, email });
      })
      .catch((e) => {
        console.log("Error: ", e);
      });
  }, []);

  const handleLogout = async () => {
    try {
      await taskAPI.post("/users/logout");
      localStorage.removeItem("token");
      router.push("/auth");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="container px-4 pt-12 mx-auto">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl font-bold">
        My<span className="text-green-600">Tasks</span>
      </h1>
      <div className="flex items-center justify-between px-1">
        <p className="italic text-gray-600 ">{user.name}</p>
        <button onClick={handleLogout} className="text-sm btn btn-red">
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
