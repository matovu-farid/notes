import React from "react";

const Button = ({ onClick, children, disabled = false, icon }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className=" gap-2 m-2 inline-flex items-center rounded-md border border-transparent bg-gray-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-none"
    >
      <span>{icon}</span>

      {children}
    </button>
  );
};

export default Button;
