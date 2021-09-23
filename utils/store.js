import { createContext, useState } from "react";

export const StoreContext = createContext(null);

function Provider({ children }) {
  const [user, setUser] = useState({ name: "", email: "" });

  const store = {
    usr: [user, setUser],
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
}

export default Provider;
