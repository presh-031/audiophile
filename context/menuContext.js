import { createContext, useState } from "react";

export const Menu = createContext(null);

function Context({ children }) {
  const [menu, setMenu] = useState();

  return <Menu.Provider value={{ menu, setMenu }}>{children}</Menu.Provider>;
}

export default Context;
