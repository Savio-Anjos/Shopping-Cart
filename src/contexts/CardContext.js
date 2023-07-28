import { useState, createContext } from "react";

export const CardContext = createContext({});

function CardProvider({ children }) {
  const [cart, setCart] = useState([]);

  return (
    <CardContext.Provider
      value={{
        cart,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}

export default CardProvider;
