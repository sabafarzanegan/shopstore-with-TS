import Button from "@/components/Button";
import Container from "@/components/Container";
import React from "react";

function ProductPage() {
  return (
    <>
      <Container>
        <div className="flex flex-wrap-reverse md:flex-nowrap items-center mt-4 justify-between">
          <div className="font-vazir ">
            <h1 className=" text-2xl mb-2  text-bold">
              آموزش Next.js بصورت پروژه محور
            </h1>
            <p className="w-[80%] text-xl">
              نکست یه فریمورک مبتنی بر ری‌اکت هست که امروزه تو بازار کار یکی از
              مهم‌ترین تکنولوژی‌ها برای توسعه دهنده های ری‌اکت به حساب میاد.
              نکست رو میشه مکمل ری‌اکت دونست.
            </p>
            <div className="flex flex-wrap items-center justify-between mt-20 p-6">
              <span className="flex items-center gap-x-1 font-lale text-2xl">
                <span>400000</span>
                <span className="text-lg font-semibold">تومان</span>
              </span>
              <Button
                size="lg"
                rounded="md"
                color="secoundary"
                className="font-vazir">
                افزودن به سبد خرید
              </Button>
            </div>
          </div>

          <img
            src="https://sabzlearn.ir/wp-content/uploads/2023/12/ezgif.com-jpg-to-webp-converted-4-1-768x432.webp"
            alt=""
            className="w-full mb-4 md:w-[60%] rounded-lg"
          />
        </div>
      </Container>
    </>
  );
}

export default ProductPage;
