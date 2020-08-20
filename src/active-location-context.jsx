import React, { useState, useContext } from "react";

const ActiveLocationContext = React.createContext();

export const useActiveLocation = () => {
  return useContext(ActiveLocationContext);
}

const ActiveLocationProvider = ({children}) => {
  const [activeLocation, setActiveLocation] = useState();

  return (
    <ActiveLocationContext.Provider value={{
      activeLocation,
      setActiveLocation
    }}>
      {children}
    </ActiveLocationContext.Provider>
  )
}

export default ActiveLocationProvider;