import React from 'react';

const PrimaryCard: React.FC<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children }) => {
  return (
    <div className='flex flex-col items-center p-4 border rounded border-zinc-600 bg-foregroundNoise'>
      {children}
    </div>
  );
};

export default PrimaryCard;
