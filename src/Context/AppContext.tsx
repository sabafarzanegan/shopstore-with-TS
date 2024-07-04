import { TPRODUCTS } from "@/Types/servicets";
import { createContext, useContext, useState } from "react";

export const AppContext = createContext<CARTSHOP>({} as CARTSHOP);

type TChidren = {
  children: React.ReactNode;
};
type CARTSHOP = {
  cartItems: CartProduct[];
};
type CartProduct = {
  id: number;
  qty: number;
};

export const useShoppingCartContext = () => {
  return useContext(AppContext);
};

export function AppProvider({ children }: TChidren) {
  const [cartItems, setCartItems] = useState<CARTSHOP[]>([]);
  return (
    <AppContext.Provider value={{ cartItems }}>{children}</AppContext.Provider>
  );
}
