"use client";

import { createContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [login, setLogin] = useState(false);

  return (
    <AppContext.Provider value={{ login }}>{children}</AppContext.Provider>
  );
};
