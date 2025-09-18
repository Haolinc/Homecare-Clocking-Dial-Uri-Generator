export default function LabelText({text}){
    const className = 'text-xl pb-2 font-bold'
    return (
        <>
            <p className={className}>{text}</p>
        </>
    )
}