import { TPRODUCTS } from "@/Types/servicets";
import { createContext, useContext, useState } from "react";

export const AppContext = createContext<CARTSHOP>({} as CARTSHOP);

type TChidren = {
  children: React.ReactNode;
};
type CARTSHOP = {
  cartItems: CartProduct[];
  handleIncreaseProduct: (id: number | string) => void;
};
type CartProduct = {
  id: number | string;
  qty: number;
};

export const useShoppingCartContext = () => {
  return useContext(AppContext);
};

export function AppProvider({ children }: TChidren) {
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);
  const handleIncreaseProduct = (id: number | string) => {
    setCartItems((currentProduct) => {
      let selectedItem = currentProduct.find((item) => item.id === id);

      if (!selectedItem) {
        return [...currentProduct, { id: id, qty: 1 }];
      } else {
        return currentProduct.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  return (
    <AppContext.Provider value={{ cartItems, handleIncreaseProduct }}>
      {children}
    </AppContext.Provider>
  );
}
