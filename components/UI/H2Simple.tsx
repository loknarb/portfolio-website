import React from 'react';

const H2Simple: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>
> = ({ className, children, ...rest }) => {
  return (
    <h2
      className={
        className
          ? `text-2xl desktop:text-4xl tablet:ml-2 ml-4 font-bold font-display -tracking-wider ${className}`
          : 'text-2xl desktop:text-4xl tablet:ml-2 ml-4 font-bold font-display -tracking-wider'
      }
      {...rest}>
      {children}
    </h2>
  );
};

export default H2Simple;
