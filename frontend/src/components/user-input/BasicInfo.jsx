import LabelText from "../common/LableText"
import NumericInput from "../common/NumericInput"

export default function BasicInfo({phoneNumber, setPhoneNumber, employeeNumber, setEmployeeNumber}){
    return (
        <>
            <div className='p-3'>
                <LabelText text='呼叫号码'/>
                <NumericInput id='phone-number' maxLength='10' value={phoneNumber} setValue={setPhoneNumber}/>
            </div>
            <div className='p-3'>
                <LabelText text='员工号码'/>
                <NumericInput id='employee-number' maxLength='6' value={employeeNumber} setValue={setEmployeeNumber}/>
            </div>
        </>
    )
}