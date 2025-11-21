import React from "react";
import taskStore from "./TaskStore";

export const StoreContext = React.createContext(taskStore);

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  return (
    <StoreContext.Provider value={taskStore}>{children}</StoreContext.Provider>
  );
};
export const useStore = () => {
  const store = React.useContext(StoreContext);
  return store;
};
