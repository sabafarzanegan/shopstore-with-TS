import React, { useEffect, useState } from "react";
import Button from "./Button";
import { getProduct } from "@/utils";
import { TPRODUCTS } from "@/Types/servicets";
import { useShoppingCartContext } from "@/Context/AppContext";
import { Link } from "react-router-dom";
interface Icartitem {
  id: number | string;
  qty: number | string;
}

function CartItem({ id, qty }: Icartitem) {
  const { handleIncreaseProduct, handlerDecreaseProduct, deleteProductItem } =
    useShoppingCartContext();
  const [products, setProducts] = useState<TPRODUCTS>({});
  useEffect(() => {
    getProduct(id).then((result) => setProducts(result));
  }, []);
  return (
    <>
      <div className="flex items-center gap-4 mb-4 mt-6 ">
        <Link to={`/products/${id}`}>
          <img src={products.img} alt="" className=" rounded-md w-24" />
        </Link>
        <h1 className="text-sm md:text-xl line-clamp-2 md:line-clamp-1 font-vazir">
          {products.title}
        </h1>
        <div className="flex items-center justify-between gap-x-4">
          <Button
            color="secoundary"
            size="sm"
            rounded="sm"
            className="font-vazir"
            onClick={() => {
              handleIncreaseProduct(id);
            }}>
            +
          </Button>
          <span className="font-vazir font-semibold text-md">{qty}</span>
          <Button
            color="danger"
            size="sm"
            rounded="sm"
            className="font-vazir"
            onClick={() => {
              handlerDecreaseProduct(id);
            }}>
            -
          </Button>
          <Button
            size="sm"
            rounded="sm"
            onClick={() => {
              deleteProductItem(id);
            }}
            className="font-vazir hover:bg-red-600 transition-all duration-150 hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </Button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
