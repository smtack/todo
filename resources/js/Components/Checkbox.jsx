export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                `rounded-sm border-gray-300 shadow-xs accent-purple-500 ` +
                className
            }
        />
    );
}
