import clsx from 'clsx';
import React from 'react';

const AtLogo = ({ className, ...rest }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={clsx('w-7 h-7 stroke-white stroke-2', className)}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}>
    <path d='M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207' />
  </svg>
);

export default AtLogo;
