import React from "react";
import Container from "@/components/Container";
import { CardItem } from "@/components/CardItem";
import { Link } from "react-router-dom";

function Store() {
  return (
    <>
      <Container>
        <h1 className="font-vazir text-2xl text-bold mt-4 mb-3">
          جدیدترین محصولات
        </h1>
        <div className="flex items-center justify-center gap-x-3 flex-wrap gap-y-2">
          <Link to={`/products/${1}`}>
            <CardItem />
          </Link>
          <Link to={`/products/${2}`}>
            <CardItem />
          </Link>{" "}
          <Link to={`/products/${3}`}>
            <CardItem />
          </Link>{" "}
          <Link to={`/products/${4}`}>
            <CardItem />
          </Link>{" "}
          <Link to={`/products/${5}`}>
            <CardItem />
          </Link>{" "}
          <Link to={`/products/${6}`}>
            <CardItem />
          </Link>{" "}
          <Link to={`/products/${7}`}>
            <CardItem />
          </Link>
        </div>
      </Container>
    </>
  );
}

export default Store;
