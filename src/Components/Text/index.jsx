import React from "react";

const sizeClasses = {
  txtInterSemiBold14Bluegray900: "font-inter font-semibold",
  txtInterMedium14Yellow900: "font-inter font-medium",
  txtInterRegular14Gray500: "font-inter font-normal",
  txtInterMedium14Gray50: "font-inter font-medium",
  txtInterSemiBold14: "font-inter font-semibold",
  txtInterSemiBold14Black900: "font-inter font-semibold",
  txtInterBold16: "font-bold font-inter",
  txtInterRegular14Bluegray900: "font-inter font-normal",
  txtInterSemiBold24: "font-inter font-semibold",
  txtInterMedium16: "font-inter font-medium",
  txtInterMedium16Yellow900: "font-inter font-medium",
  txtInterSemiBold16: "font-inter font-semibold",
  txtInterMedium14: "font-inter font-medium",
  txtInterMedium14Bluegray500: "font-inter font-medium",
  txtInterMedium14Black900: "font-inter font-medium",
  txtZonaProBold20: "font-bold font-zonapro",
  txtInterMedium14Gray900: "font-inter font-medium",
  txtInterSemiBold20: "font-inter font-semibold",
  txtInterRegular12: "font-inter font-normal",
  txtInterRegular14: "font-inter font-normal",
  txtInterRegular16: "font-inter font-normal",
  txtInterMedium14Bluegray900: "font-inter font-medium",
};

const Text = ({ children, className = "", size, as, ...restProps }) => {
  const Component = as || "p";

  return (
    <Component
      className={`text-left ${className} ${size && sizeClasses[size]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
