import { twMerge } from 'tailwind-merge';

export function Card({ className, children, ...props }) {
    return (
        <div
            className={twMerge(
                'bg-white rounded-xl border-2 border-secondary p-6 shadow-sm',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
