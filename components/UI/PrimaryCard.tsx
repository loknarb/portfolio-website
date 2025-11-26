import clsx from 'clsx';
import React from 'react';

const PrimaryCard: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'w-full flex flex-col items-center p-4 border rounded border-zinc-600 bg-foregroundNoise dark dark:text-zinc-200 dark:text-zinc-300',
        className
      )}>
      {children}
    </div>
  );
};

export default PrimaryCard;
