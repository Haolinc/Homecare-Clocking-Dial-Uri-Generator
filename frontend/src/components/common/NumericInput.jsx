export default function NumericInput({id, maxLength, value, setValue}){
    const className = 'border border-gray-600 p-1'
    return (
        <input 
            className = {className} 
            id={id} 
            type="text"
            inputMode="numeric"
            maxLength={maxLength} 
            value = {value ? value : ''} 
            onChange={(e) => {
                setValue(e.target.value.replace(/\D/g, ''))
            }}
        />
    )
}