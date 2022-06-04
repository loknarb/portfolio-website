import React from 'react';

const AtLogo = ({ height, width, color, className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className ? className : 'w-7 h-7'}
    viewBox='0 0 28 28'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M13.5 0C6.04125 0 0 6.04125 0 13.5C0 19.4737 3.86437 24.5194 9.23062 26.3081C9.90562 26.4263 10.1587 26.0212 10.1587 25.6669C10.1587 25.3463 10.1419 24.2831 10.1419 23.1525C6.75 23.7769 5.8725 22.3256 5.6025 21.5662C5.45062 21.1781 4.7925 19.98 4.21875 19.6594C3.74625 19.4062 3.07125 18.7819 4.20188 18.765C5.265 18.7481 6.02437 19.7437 6.2775 20.1487C7.4925 22.1906 9.43313 21.6169 10.2094 21.2625C10.3275 20.385 10.6819 19.7944 11.07 19.4569C8.06625 19.1194 4.9275 17.955 4.9275 12.7913C4.9275 11.3231 5.45062 10.1081 6.31125 9.16313C6.17625 8.82562 5.70375 7.44187 6.44625 5.58562C6.44625 5.58562 7.57688 5.23125 10.1587 6.96938C11.2387 6.66563 12.3863 6.51375 13.5338 6.51375C14.6813 6.51375 15.8288 6.66563 16.9088 6.96938C19.4906 5.21438 20.6213 5.58562 20.6213 5.58562C21.3638 7.44187 20.8913 8.82562 20.7563 9.16313C21.6169 10.1081 22.14 11.3062 22.14 12.7913C22.14 17.9719 18.9844 19.1194 15.9806 19.4569C16.47 19.8787 16.8919 20.6888 16.8919 21.9544C16.8919 23.76 16.875 25.2113 16.875 25.6669C16.875 26.0212 17.1281 26.4431 17.8031 26.3081C23.1356 24.5194 27 19.4569 27 13.5C27 6.04125 20.9587 0 13.5 0Z'
      fill={color ? color : 'white'}
    />
  </svg>
);

export default AtLogo;