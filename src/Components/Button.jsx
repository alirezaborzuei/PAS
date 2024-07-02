import React from 'react';

function Button({ children, className, onClick, disabled }) {
  return (
    <button
      className={`w-60 h-16 rounded-xl flex justify-center items-center bg-blue font-bold cursor-pointer ${className}`}
      onClick={onClick}
      disabled={disabled}
    >

      {children}
    </button>
  );
}

export default Button;