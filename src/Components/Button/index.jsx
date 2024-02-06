import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded-md" };
const variants = {
  fill: {
    red_400: "bg-red-400 text-gray-50",
    teal_500: "bg-teal-500 text-gray-50",
    gray_100_01: "bg-gray-100_01 text-blue_gray-900",
    teal_50: "bg-teal-50 text-green-700",
    teal_500_19: "bg-teal-500_19",
    gray_100: "bg-gray-100 text-blue_gray-900",
    gray_100_99: "bg-gray-100_99 text-blue_gray-900",
    green_700: "bg-green-700 text-gray-50",
    white_A700: "bg-white-A700 text-blue_gray-900",
    yellow_900_19: "bg-yellow-900_19",
    yellow_900: "bg-yellow-900 text-gray-50",
  },
  outline: { blue_gray_500: "border border-blue_gray-500 border-solid" },
};
const sizes = {
  xs: "p-[5px]",
  sm: "p-2",
  md: "py-3",
  lg: "p-[13px]",
  xl: "p-4",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "red_400",
    "teal_500",
    "gray_100_01",
    "teal_50",
    "teal_500_19",
    "gray_100",
    "gray_100_99",
    "green_700",
    "white_A700",
    "yellow_900_19",
    "yellow_900",
    "blue_gray_500",
  ]),
};

export { Button };
