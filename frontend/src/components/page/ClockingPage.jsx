import ClockingButtons from "../clocking/ClockingButtons";
import ClockingInfo from "../clocking/ClockingInfo";
import NumberGenerateSection from "../clocking/NumberGenerate";
import TopSectionText from "../clocking/TopSectionText";
import { useState } from 'react'
import WarningText from "../clocking/WarningText";

export default function ClockingPage({inputValues}){
    const [phoneNumberObj, employeeNumberObj, workNumberObj] = inputValues
    const [generatedNumber, setGeneratedNumber] = useState(null)
    const [phoneNumber, employeeNumber, workNumber] = [phoneNumberObj.value, employeeNumberObj.value, workNumberObj.value]
    return (
        <>
            <div>
                <TopSectionText/>
            </div>
            <div>
                <ClockingInfo
                    phoneNumber={phoneNumber}
                    employeeNumber={employeeNumber}
                    workNumber={workNumber}
                />
            </div>
            <div className="p-3">
                <WarningText
                    phoneNumber={phoneNumber}
                    employeeNumber={employeeNumber}
                    workNumber={workNumber}
                />
            </div>
            <div className='p-3'>
                <ClockingButtons 
                    phoneNumber={phoneNumber}
                    employeeNumber={employeeNumber}
                    workNumber={workNumber}
                    setGeneratedNumber={setGeneratedNumber}
                />
            </div>
            <div>
                { generatedNumber &&
                    <NumberGenerateSection generatedNumber={generatedNumber}/>
                }
            </div>
        </>
    )
}