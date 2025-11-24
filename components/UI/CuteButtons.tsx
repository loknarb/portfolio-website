import React from 'react';

const CuteButtons: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    type: 'close' | 'minimize' | 'zoom';
  }
> = ({ color, type, ...rest }) => {
  let border: string;
  let backgroundColor: string;
  let position: string;
  if (type == 'close') {
    backgroundColor = 'bg-red-400';
    border = 'border-red-500';
    position = '6px';
  } else if (type == 'minimize') {
    backgroundColor = 'bg-yellow-400';
    border = 'border-yellow-500';
    position = '11px';
  } else {
    backgroundColor = 'bg-green-400';
    border = 'border-green-500';
    position = '16px';
  }
  return (
    <div
      className={`shadow-sm shadow-black mx-1 inline-block rounded-[50%] h-[10px] w-[10px] relative border ${backgroundColor} ${border} ${position}`}
      aria-hidden="true"
      {...rest}
    />
  );
};

export default CuteButtons;
