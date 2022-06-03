import React from 'react';

const H2Simple: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ className, children, ...rest }) => {
  return (
    <h2
      className={
        className
          ? `text-2xl font-bold font-body -tracking-wider ${className}`
          : 'text-2xl font-bold font-body -tracking-wider'
      }
      {...rest}>
      {children}
    </h2>
  );
};

export default H2Simple;
