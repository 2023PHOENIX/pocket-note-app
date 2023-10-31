import React from "react";
import { useState } from "react";
import { createContext } from "react";

export const formContext = createContext();

 function FormProvider({ children }) {
  const [showForm, setForm] = useState(false);

  const toggleForm = () => {
    setForm(!showForm);
  };

  return (
    <formContext.Provider value={{ showForm, toggleForm }}>
      {children}
    </formContext.Provider>
  );
}

export default FormProvider