import React from "react";
import { NavLink } from "react-router-dom";
import Container from "./Container";
import { useShoppingCartContext } from "@/Context/AppContext";

function Navbar() {
  const { getTotalQty } = useShoppingCartContext();
  return (
    <>
      <Container>
        <div className="flex items-center justify-between shadow-xl rounded-md p-4 ">
          <h3 className="font-lale text-2xl">sabaShop</h3>
          <ul className="font-vazir font-semibold text-lg flex items-center gap-x-6">
            <li>
              <NavLink to="/">خانه </NavLink>
            </li>
            <li>
              <NavLink to="/store">فروشگاه </NavLink>
            </li>
          </ul>
          <div>
            <NavLink to="/cart">
              <div className="relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                  />
                </svg>
                {getTotalQty === 0 ? (
                  ""
                ) : (
                  <span className="absolute -top-4 -right-6 flex items-center justify-center font-vazir text-md text-white bg-green-500 font-semibold border border-white  px-2 py-0 rounded-3xl ">
                    {getTotalQty}
                  </span>
                )}
              </div>
            </NavLink>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Navbar;
