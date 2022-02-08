import React, { FC } from 'react';
import './Button.scss';
import cn from 'clsx';

export interface ButtonProps {
    color?: 'primary' | 'secondary';
    className?: string;
    size?: 's' | 'lg';
    disabled?: boolean;
    children: string;
    type?: 'button' | 'submit';
    fullWidth?: boolean;
    to?: string;
    href?: string;
    onClick?: () => void;
    iconLeft?: string;
    iconRight?: string;
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  const {
    color = 'primary', className, disabled, type = 'button', size, fullWidth, onClick, href, iconLeft, iconRight,
  } = props;

  const handleClick = () => {
    if (disabled) return;
    if (!onClick) return;
    onClick();
  };
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={
            cn(
              'button',
              className,
              color,
              size,
              fullWidth ? 'fullwidth' : '',
              disabled ? 'disabled' : '',
            )
        }
      >
        {iconLeft && <img src={iconLeft} className="button_iconLeft" alt="" />}
        {children}
        {iconRight && <img src={iconRight} className="button_iconRight" alt="" />}
      </a>
    );
  }

  return (
    <button
      className={
            cn(
              'button',
              className,
              color,
              size,
              fullWidth ? 'fullwidth' : '',
            )
        }
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {iconLeft && <img src={iconLeft} className="button_iconLeft" alt="" />}
      {children}
      {iconRight && <img src={iconRight} className="button_iconRight" alt="" />}
    </button>
  );
};

export default Button;
