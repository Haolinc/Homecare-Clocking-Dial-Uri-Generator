export default function LabelText({text}){
    const className = 'text-xl p-3'
    return (
        <>
            <p className={className}>{text}</p>
        </>
    )
}