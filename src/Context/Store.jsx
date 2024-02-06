import React, { useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const Mystore = createContext();

const Store = ({ children }) => {
  const [name, setName] = useState('Ankit');
  return (
    <Mystore.Provider value={{ name, setName }}>{children}</Mystore.Provider>
  );
};

export const MyStore = () => {
  return useContext(Mystore);
};

export default Store;
