import BasicInfo from "../user-input/BasicInfo"
import WorkInfo from "../user-input/WorkInfo"

export default function InfoPage({inputValues}){
    const [phoneNumberObj, employeeNumberObj, workNumberObj] = inputValues
    return (
        <>
            <div>
                <BasicInfo 
                    phoneNumber={phoneNumberObj.value} 
                    setPhoneNumber={phoneNumberObj.setValue} 
                    employeeNumber={employeeNumberObj.value} 
                    setEmployeeNumber={employeeNumberObj.setValue}
                />
            </div>
            <div>
                <WorkInfo workNumber={workNumberObj.value} setWorkNum={workNumberObj.setValue}/>
            </div>
        </>
    )
}