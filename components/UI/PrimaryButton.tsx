import React from 'react';

const PrimaryButton: React.FC<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ onClick, className, children, ...rest }) => {
  return (
    <button
      className={`hover:bg-zinc-800 transition-all duration-500 rounded my-3 px-2 py-2 flex hover:scale-105 flex-col bg-transparent placeholder:${
        className ? className : ''
      }`}
      onClick={onClick}
      {...rest}>
      {children}
    </button>
  );
};

export default PrimaryButton;
