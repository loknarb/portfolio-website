import React from 'react';
import FullLine from './FullLine';

const LineGroup: React.FC<{ length: 'w-20' | 'w-1/3' | 'w-[5.5rem]' }> = ({ length }) => {
  return (
    <div className='flex flex-row w-full dark:bg-transparent bg-zinc-700 rounded-full p-[2px]'>
      <FullLine className={`${length} border-yellow-200`} />
      <FullLine className={`${length} border-pink-300`} />
      <FullLine className={`${length} border-green-300`} />
    </div>
  );
};

export default LineGroup;
