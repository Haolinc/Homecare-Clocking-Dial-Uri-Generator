export default function FunctionalButton ({text, ...props}) {
    const className = 'w-50 h-12 text-white bg-blue-500 disabled:bg-gray-200 disabled:text-black text-lg text-center mb-3 font-bold'
    return (
        <button 
            type="button"
            className={className}
            {...props}
        >
            {text}
        </button>
    )
}