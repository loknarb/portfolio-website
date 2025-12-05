const CloseIcon = ({ color, className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    className={className ? className : 'w-7 h-7 stroke-zinc-900 dark:stroke-zinc-50'}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    stroke={color}
    strokeWidth='2'
    {...props}>
    <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
  </svg>
);

export default CloseIcon;
