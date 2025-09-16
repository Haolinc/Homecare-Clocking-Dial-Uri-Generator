export default function NumericInput({id, maxLength, value, setValue}){
    const className = 'border border-gray-600 p-1'
    return (
        <input 
            className = {className} 
            id={id} 
            type="numericInput" 
            maxLength={maxLength} 
            value = {value ? value : ''} 
            onInput={(ele) => setValue(ele.target.value)}
        />
    )
}