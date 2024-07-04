import Button from "@/components/Button";
import Container from "@/components/Container";
import React, { useEffect, useState } from "react";
import { getProduct } from "@/utils";
import { useParams } from "react-router-dom";
import { TPRODUCTS } from "@/Types/servicets";
import { useShoppingCartContext } from "@/Context/AppContext";

function ProductPage() {
  const { handleIncreaseProduct, cartItems } = useShoppingCartContext();
  console.log(cartItems);

  const [productData, setProductData] = useState<TPRODUCTS>([]);
  const param = useParams<{ id: string }>();

  useEffect(() => {
    getProduct(param.id as string).then((result) => setProductData(result));
  }, []);
  return (
    <>
      <Container>
        <div className="flex flex-wrap-reverse md:flex-nowrap items-center mt-4 justify-between">
          <div className="font-vazir ">
            <h1 className=" text-2xl mb-2  font-bold">{productData.title}</h1>
            <p className="w-[80%] text-xl">{productData.desc}</p>
            <div className="flex flex-wrap items-center justify-between mt-20 p-6">
              <span className="flex items-center gap-x-1 font-lale text-2xl">
                <span>{productData.price}</span>
                <span className="text-lg font-semibold">تومان</span>
              </span>
              <Button
                size="lg"
                rounded="md"
                color="secoundary"
                className="font-vazir"
                onClick={() => {
                  handleIncreaseProduct(param.id);
                }}>
                افزودن به سبد خرید
              </Button>
            </div>
          </div>

          <img
            src={productData.img}
            alt=""
            className="w-full  mb-4 md:w-96 md:h-96 rounded-lg"
          />
        </div>
      </Container>
    </>
  );
}

export default ProductPage;
