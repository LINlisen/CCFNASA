import React, { createContext, useState } from "react";

export const PhotoContext = createContext();

// Make a Provider
export const PhotoProvider = ({ children }) => {
  const [photouri, setphotouri] = useState('');
  const store = {
    photouriState: [photouri, setphotouri],
  };
  return (
    <PhotoContext.Provider value={store}>{children}</PhotoContext.Provider>
  );
};