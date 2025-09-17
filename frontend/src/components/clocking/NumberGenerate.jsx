import { copyToClipboard } from "../../service"
import LabelText from "../common/LableText"
import FunctionalButton from "../common/FunctionalButton"

export default function NumberGenerateSection({generatedNumber}){
    return (
        <>
            <div>
                <LabelText text='生成号码'/>
                <p className='p-2 break-all' id="generated-number">{generatedNumber}</p>
                <FunctionalButton text='复制号码' onClickFunction={() => copyToClipboard()}></FunctionalButton>
            </div>
        </>
    )
}