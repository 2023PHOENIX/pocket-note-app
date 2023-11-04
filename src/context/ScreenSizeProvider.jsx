import { useCallback } from "react";
import { createContext, useState } from "react";

export const screenContext = createContext();

const ScreenSizeProvider = ({ children }) => {
  const [isMobile, setMobile] = useState(window.innerWidth <= 900);
// ! memo the function.
  const updateWidth = useCallback(() => {
    setMobile(window.innerWidth <= 900);
  }, []);
  return (
    <screenContext.Provider value={{ isMobile, updateWidth }}>
      {children}
    </screenContext.Provider>
  );
};

export default ScreenSizeProvider;
