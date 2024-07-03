import React, { ComponentPropsWithRef } from "react";

type TColor = "primary" | "secoundary" | "danger" | "warning" | "success";
type TSize = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl";
type TRounded = "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full";
type TButton = ComponentPropsWithRef<"button"> & {
  color?: TColor;
  size?: TSize;
  rounded?: TRounded;
};

function Button({ children, color, size, rounded, style, ...rest }: TButton) {
  return (
    <button
      style={{
        ...style,
        ...checkColor(color),
        ...checkSize(size),
        ...checkRounded(rounded),
      }}
      {...rest}>
      {children}
    </button>
  );
}

export default Button;

function checkColor(color?: TColor) {
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

function checkSize(size?: TSize) {
  if (size === "sm") {
    return { padding: "8px 12px" };
  } else if (size === "md") {
    return { padding: "12px 16px" };
  } else if (size === "lg") {
    return { padding: "16px 20px" };
  } else if (size === "xl") {
    return { padding: "20px 24px" };
  } else if (size === "2xl") {
    return { padding: "24px 28px" };
  } else if (size === "3xl") {
    return { padding: "28px 32px" };
  }
}

function checkRounded(rounded?: TRounded) {
  if (rounded === "sm") {
    return { borderRadius: "10px" };
  } else if (rounded === "md") {
    return { borderRadius: "14px" };
  } else if (rounded === "lg") {
    return { borderRadius: "18px" };
  } else if (rounded === "xl") {
    return { borderRadius: "22px" };
  } else if (rounded === "2xl") {
    return { borderRadius: "24px" };
  } else if (rounded === "3xl") {
    return { borderRadius: "28px" };
  } else if (rounded === "full") {
    return { borderRadius: "100%" };
  }
}
