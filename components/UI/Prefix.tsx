import React from 'react';

const PrefixCode: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
    type: '$' | '>' | ' ';
    beforeColor?: string;
  }
> = ({ id, type, className, children, ...rest }) => {
  return (
    <div className='flex align-top'>
      <div
        id={id}
        className={`${type === ' ' ? 'mr-4' : 'mr-2'} ${className ? className : 'text-zinc-500'}`}>
        {type}
      </div>
      <code id={id} {...rest}>
        {children}
      </code>
    </div>
  );
};

export default PrefixCode;
before: '${"text-zinc-500"}';
