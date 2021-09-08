import Head from "next/head";
import { useContext } from "react";
import { useRouter } from "next/router";
import { StoreContext } from "../utils/store";

import TaskManager from "../components/TaskManager";

import taskAPI from "../utils/TaskAPI";

const Home = () => {
  const {
    usr: [user],
  } = useContext(StoreContext);
  const router = useRouter();

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
    <>
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
      <TaskManager />
    </>
  );
};

export default Home;
