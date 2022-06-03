import React from 'react';

const ParagraphSimple: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>
> = ({ className, children, ...rest }) => {
  return (
    <p className={className ? `text-l font-body ${className}` : 'text-l font-body'} {...rest}>
      {children}
    </p>
  );
};

export default ParagraphSimple;
