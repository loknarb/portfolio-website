import React from 'react';

const LinkedInLogo = ({
  color,
  secondColor,
  className,
  ...rest
}: React.SVGProps<SVGSVGElement> & { secondColor?: typeof color }) => (
  <svg
    className={className ? className : 'w-7 h-7'}
    viewBox='0 0 28 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...rest}>
    <rect className={className ? className : 'w-7 h-7'} rx='9' fill={color ? color : 'white'} />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M15.1631 12.5754V12.5345C15.1547 12.5482 15.1431 12.5619 15.1359 12.5754H15.1631Z'
      fill={secondColor ? secondColor : 'black'}
    />
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 0V28H28V0H0ZM8.70905 23.2617H4.55483V10.7634H8.70905V23.2617ZM6.63194 9.0576H6.60449C5.21095 9.0576 4.30769 8.09754 4.30769 6.89754C4.30769 5.6712 5.23735 4.73834 6.65914 4.73834C8.08123 4.73834 8.95514 5.6712 8.98234 6.89754C8.98234 8.09754 8.08123 9.0576 6.63194 9.0576ZM23.6923 23.2617H19.537V16.5751C19.537 14.8956 18.9366 13.7492 17.4327 13.7492C16.2841 13.7492 15.6016 14.5211 15.3009 15.2688C15.1916 15.5359 15.1631 15.9071 15.1631 16.2817V23.2617H11.007C11.007 23.2617 11.0626 11.936 11.007 10.7635H15.1631V12.5345C15.7153 11.6849 16.7007 10.4701 18.9081 10.4701C21.6426 10.4701 23.6923 12.2559 23.6923 16.0946V23.2617Z'
      fill={secondColor ? secondColor : 'black'}
    />
  </svg>
);

export default LinkedInLogo;
