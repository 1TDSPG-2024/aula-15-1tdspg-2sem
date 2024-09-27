// declarar interface pro contexto

import { createContext, ReactNode, useContext, useState } from "react";

interface ThemeContextTipo {
  tema: string;
  mudarTema: () => void;
}

// declarar o valor inicial do contexto
const ThemeContext = createContext<ThemeContextTipo | undefined>(undefined);

export const usaTema = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("O UsaTema está sendo utilizado por Themeprovider!");
  }
};

export default function ThemeProvider({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState("light");

  const mudarTema = () => {
    setTema((prevTema) => (prevTema === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ tema, mudarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}
