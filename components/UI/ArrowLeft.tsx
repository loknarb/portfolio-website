const ArrowLeft = ({ color, className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className ? className : 'w-6 h-6 stroke-zinc-900 dark:stroke-zinc-50'}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    stroke={color}
    strokeWidth='2'
    {...props}>
    <path strokeLinecap='round' strokeLinejoin='round' d='M7 16l-4-4m0 0l4-4m-4 4h18' />
  </svg>
);

export default ArrowLeft;
