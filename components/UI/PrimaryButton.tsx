import React, { ElementType } from 'react';

interface PrimaryButtonProps extends React.HTMLAttributes<HTMLElement> {
  as?: ElementType;
  onClick?: React.MouseEventHandler<HTMLElement>;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  as: Tag = 'button',
  onClick,
  className,
  children,
  ...rest
}) => {
  return (
    <Tag
      className={` transition-all border border-zinc-600 border-opacity-20 duration-500 rounded px-2 py-2 flex hover:scale-105 flex-col bg-transparent hover:shadow-md shadow-zinc-200 ${
        className ? className : ''
      }`}
      onClick={onClick}
      {...rest}>
      {children}
    </Tag>
  );
};

export default PrimaryButton;
