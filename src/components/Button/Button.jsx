import React from "react";
import classNames from "classname";

const Button = (props) => {
  const { children, className, ...rest } = props;
  return (
    <button
      className={classNames(
        "text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-3 text-center",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
