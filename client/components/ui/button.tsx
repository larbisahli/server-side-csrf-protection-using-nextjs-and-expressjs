import React, { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  variant?: 'normal' | 'outline' | 'custom';
  size?: 'big' | 'medium' | 'small';
  active?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      variant = 'normal',
      size = 'medium',
      children,
      active,
      loading = false,
      disabled = false,
      ...rest
    } = props;

    return (
      <button
        aria-pressed={active}
        data-variant={variant}
        ref={ref}
        className="px-5 py-0 h-12 inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-gray-200"
        disabled={disabled}
        {...rest}
      >
        {children}
        {loading && (
          <span
            className={
              'h-4 w-4 ms-2 rounded-full border-2 border-transparent border-t-2 animate-spin'
            }
            style={{
              borderTopColor: variant === 'outline' ? 'currentColor' : '#ffffff'
            }}
          />
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
