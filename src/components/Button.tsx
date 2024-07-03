import React, { ComponentPropsWithRef } from "react";

type TColor = "primary" | "secoundary" | "danger" | "warning" | "success";
type TButton = ComponentPropsWithRef<"button"> & {
  color?: TColor;
};

function Button({ children, color, style, ...rest }: TButton) {
  console.log(checkColor(color));
  return (
    <button style={{ ...style, ...checkColor(color) }} {...rest}>
      {children}
    </button>
  );
}

export default Button;

function checkColor(color: TColor) {
  if (color === "primary") {
    return { backgroundColor: "#1d4ed8", color: "white" };
  } else if (color === "secoundary") {
    return { backgroundColor: "#16a34a", color: "white" };
  } else if (color === "danger") {
    return { backgroundColor: "#dc2626", color: "white" };
  } else if (color === "warning") {
    return { backgroundColor: "#fbbf24", color: "white" };
  } else if (color === "success") {
    return { backgroundColor: "#f97316", color: "white" };
  }
}
