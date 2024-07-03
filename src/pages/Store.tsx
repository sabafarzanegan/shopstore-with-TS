import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import { CardItem } from "@/components/CardItem";
import { Link } from "react-router-dom";
import { getAllProduct } from "@/utils";
import { TPRODUCTS } from "@/Types/servicets";

function Store() {
  const [products, setProducts] = useState<TPRODUCTS[]>([]);
  useEffect(() => {
    getAllProduct().then((result) => setProducts(result));
  }, []);
  return (
    <>
      <Container>
        <h1 className="font-vazir text-2xl text-bold mt-4 mb-3">
          جدیدترین محصولات
        </h1>
        <div className="w-full flex items-center justify-center gap-x-3 flex-wrap gap-y-2">
          {products.map((product) => (
            <Link key={product.id} to={`/products/${product.id}`}>
              <CardItem {...product} />
            </Link>
          ))}
        </div>
      </Container>
    </>
  );
}

export default Store;
