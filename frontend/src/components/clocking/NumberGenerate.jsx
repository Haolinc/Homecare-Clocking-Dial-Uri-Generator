import { copyToClipboard } from "../../service"
import LabelText from "../common/LableText"
import FunctionalButton from "../common/FunctionalButton"
import { useRef } from "react"

export default function NumberGenerateSection({generatedNumber}){
    const gnereatedNumberRef = useRef(null)
    return (
        <>
            <div className="border">
                <LabelText text='生成号码'/>
                <p ref={gnereatedNumberRef} className='p-2 break-all' id="generated-number">{generatedNumber}</p>
                <FunctionalButton text='复制号码' onClick={() => copyToClipboard(gnereatedNumberRef.current.innerHTML)}></FunctionalButton>
            </div>
        </>
    )
}