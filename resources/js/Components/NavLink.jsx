import { Link } from '@inertiajs/react';

export default function NavLink({
    active = false,
    className = '',
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={
                'h-10 mt-3 inline-flex items-center px-2 pt-1 text-sm font-medium rounded-md leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'bg-purple-600 text-white focus:border-indigo-700'
                    : 'border-transparent text-gray-500 hover:bg-purple-600 hover:text-white focus:border-gray-300 focus:text-white-700') +
                className
            }
        >
            {children}
        </Link>
    );
}
