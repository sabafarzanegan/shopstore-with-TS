import { TPRODUCTS } from "@/Types/servicets";
import { createContext, useContext, useState } from "react";

export const AppContext = createContext<CARTSHOP>({} as CARTSHOP);

type TChidren = {
  children: React.ReactNode;
};
type CARTSHOP = {
  cartItems: CartProduct[];
  handleIncreaseProduct: (id: number | string) => void;
  handlerDecreaseProduct: (id: number | string) => void;
  getQtyNumber: (id: number | string) => number | string;
  deleteProductItem: (id: number | string) => void;
  getTotalQty: number | string;
};
export type CartProduct = {
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

  const handlerDecreaseProduct = (id: number | string) => {
    setCartItems((currentProduct) => {
      let selectedItem = currentProduct.find((item) => item.id === id);
      if (selectedItem.qty === 1) {
        return currentProduct.filter((item) => item.id !== id);
      } else {
        return currentProduct.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getQtyNumber = (id: number | string) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const deleteProductItem = (id: string | number) => {
    setCartItems((currentProduct) => {
      return currentProduct.filter((item) => item.id !== id);
    });
  };

  const getTotalQty = cartItems.reduce(
    (totalqty, item) => totalqty + item.qty,
    0
  );
  return (
    <AppContext.Provider
      value={{
        cartItems,
        handleIncreaseProduct,
        handlerDecreaseProduct,
        getQtyNumber,
        deleteProductItem,
        getTotalQty,
      }}>
      {children}
    </AppContext.Provider>
  );
}
