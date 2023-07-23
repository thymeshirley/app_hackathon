import React from "react";

const Button = ({ disabled, onClick }) => {
  return (
    <button
      id="submit-button"
      className={`mt-4 px-4 py-2 rounded text-white ${
        disabled ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-700"
      }`}
      disabled={disabled}
      onClick={onClick}
    >
      Submit
    </button>
  );
};

export default Button;
