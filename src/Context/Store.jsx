import React, { useReducer, useState } from 'react';
import { useContext } from 'react';
import { createContext } from 'react';

const Mystore = createContext();

const Store = ({ children }) => {
  const [name, setName] = useState('Ankit');
  const initialState = { email: '' };
  const reducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_EMAIL':
        return {
          ...state,
          email: action.payload,
        };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Mystore.Provider value={{ name, setName, state, dispatch }}>
      {children}
    </Mystore.Provider>
  );
};

export const MyStore = () => {
  return useContext(Mystore);
};

export default Store;
