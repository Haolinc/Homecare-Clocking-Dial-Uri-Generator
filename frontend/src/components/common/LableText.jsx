export default function LabelText({text}){
    const className = 'text-xl p-2'
    return (
        <>
            <p className={className}>{text}</p>
        </>
    )
}