export default function FunctionalButton ({text, onClickFunction}) {
    const className = 'w-50 h-10 text-black bg-gradient-to-r from-gray-200 via-gray-200 to-gray-200 hover:bg-gradient-to-br font-medium text-lg px-5 py-2.5 text-center me-2 mb-2'
    return (
        <button 
            type="button"
            className={className}
            onClick={onClickFunction}
        >
            {text}
        </button>
    )
}