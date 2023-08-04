import clsx from 'clsx';
import React from 'react';

const PrimaryCard: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'flex flex-col items-center p-4 border rounded border-zinc-600 bg-foregroundNoise',
        className
      )}>
      {children}
    </div>
  );
};

export default PrimaryCard;
