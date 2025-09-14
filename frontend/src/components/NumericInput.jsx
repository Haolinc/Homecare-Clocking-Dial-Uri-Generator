import { saveInput } from '@/service.js'
export default function NumericInput({id, maxLength}){
    const className = 'border border-gray-600 p-1'
    return (
        <input className = {className} id={id} type="numericInput" maxLength={maxLength} onInput={() => saveInput(id)}/>
    )
}