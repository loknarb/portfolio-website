import React from 'react';
import FullLine from './FullLine';

const LineGroup: React.FC<{ length: 'w-20' | 'w-1/3' | 'w-[5.5rem]' }> = ({ length }) => {
  return (
    <>
      <FullLine className={`${length} border-yellow-200`} />
      <FullLine className={`${length} border-pink-300`} />
      <FullLine className={`${length} border-green-300`} />
    </>
  );
};

export default LineGroup;
