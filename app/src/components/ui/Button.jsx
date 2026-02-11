import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export const Button = forwardRef(({
    className,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    children,
    ...props
}, ref) => {
    const variants = {
        primary: 'bg-primary text-white hover:bg-[#152e42] shadow-sm',
        secondary: 'bg-transparent border-2 border-accent text-primary hover:bg-softBlue',
        outline: 'bg-transparent border-2 border-secondary text-primary hover:bg-gray-50',
        ghost: 'bg-transparent text-primary hover:bg-gray-100',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-6 py-3 text-lg',
    };

    return (
        <button
            ref={ref}
            className={twMerge(
                clsx(
                    'inline-flex items-center justify-center rounded-xl font-bold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed',
                    variants[variant],
                    sizes[size],
                    fullWidth && 'w-full',
                    className
                )
            )}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';
