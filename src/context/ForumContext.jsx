import { createContext, useContext } from 'react';

export const ForumContext = createContext();

export const ForumContextProvider = ({ children }) => {
  return <ForumContext.Provider value={{}}>{children}</ForumContext.Provider>;
};

export const useForum = () => {
  return useContext(ForumContext);
};
