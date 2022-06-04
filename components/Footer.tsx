import React from 'react';

const Footer = () => {
  return (
    <div className='h-20 flex flex-row mt-20'>
      <div className='flex-auto flex-grow-[35] w-[35%] flex items-center p-4 shadow-md'>
        <h2 className='font-mono text-l -tracking-wide'>still curious?</h2>
      </div>
      <div className='flex-auto flex-grow-[65] w-[65%] flex flex-col items-center justify-center bg-zinc-50 text-zinc-900 shadow-sm shadow-zinc-50 px-2 '>
        <h2 className='font-mono text-2xl -tracking-wide underline-offset-4 underline'>
          lets talk
        </h2>
        <p className='font-body text-sm'>
          <a href='mailto:contact@s-brum.com' target={'_blank'}>
            contact@s-brum.com →
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
