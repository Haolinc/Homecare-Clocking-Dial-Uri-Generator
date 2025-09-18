export default function FunctionalButton ({text, onClickFunction, ...props}) {
    const className = 'w-50 h-10 text-black bg-gradient-to-r from-green-200 via-green-200 to-green-200 hover:bg-gradient-to-br font-medium text-lg px-5 py-2.5 text-center me-2 mb-2'
    return (
        <button 
            type="button"
            className={className}
            onClick={onClickFunction}
            {...props}
        >
            {text}
        </button>
    )
}