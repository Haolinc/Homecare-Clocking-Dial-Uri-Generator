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
            onBeforeInput={(e) => {
                if (!/^[0-9]$/.test(e.data)) {
                    e.preventDefault()
                }
            }}
            onInput={(ele) => setValue(ele.target.value)}
        />
    )
}