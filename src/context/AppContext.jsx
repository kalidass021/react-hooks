import { createContext } from 'react';

// 1. creating the context
export const AppContext = createContext();

const ContextProvider = ({children}) => {
  const phone = '+12 34567890';
  const name = 'Kalidass';
  return (
    <AppContext.Provider value={{phone, name}}>{children}</AppContext.Provider>
  );
};


export default ContextProvider;