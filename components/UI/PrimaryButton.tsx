import React from 'react';

const PrimaryButton: React.FC<
  React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ onClick, className, children, ...rest }) => {
  return (
    <button
      className={` transition-all border border-zinc-600 border-opacity-20 duration-500 rounded my-3 px-2 py-2 flex hover:scale-105 flex-col bg-transparent hover:shadow-md shadow-zinc-200 ${
        className ? className : ''
      }`}
      onClick={onClick ? onClick : () => {}}
      {...rest}>
      {children}
    </button>
  );
};

export default PrimaryButton;
