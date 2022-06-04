import React from 'react';

const FullLine: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ className, ...rest }) => {
  return <div className={`border-b ${className ? className : 'border-b-white'}`} {...rest}></div>;
};

export default FullLine;
