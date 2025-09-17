import ClockingButtons from "../clocking/ClockingButtons";
import NumberGenerateSection from "../clocking/NumberGenerate";
import TopSectionText from "../clocking/TopSectionText";
import { useState } from 'react'

export default function ClockingPage({inputValues}){
    const [phoneNumberObj, employeeNumberObj, workNumberObj] = inputValues
    const [generatedNumber, setGeneratedNumber] = useState(null)
    
    return (
        <>
            <div>
                <TopSectionText/>
            </div>
            <div>
                <ClockingButtons 
                    phoneNumber={phoneNumberObj.value}
                    employeeNumber={employeeNumberObj.value}
                    workNumber={workNumberObj.value}
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