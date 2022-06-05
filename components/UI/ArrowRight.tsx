const ArrowRight = ({ color, className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className ? className : 'w-6 h-6'}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    stroke={color ? color : 'white'}
    strokeWidth='2'
    {...props}>
    <path strokeLinecap='round' strokeLinejoin='round' d='M17 8l4 4m0 0l-4 4m4-4H3' />
  </svg>
);

export default ArrowRight;
