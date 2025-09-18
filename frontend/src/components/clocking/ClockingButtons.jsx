import FunctionalButton from "../common/FunctionalButton"
import { checkIn, checkOut } from "../../service"

export default function ClockingButtons({phoneNumber, employeeNumber, workNumber, setGeneratedNumber}){
    const isValid = phoneNumber.length === 10 && employeeNumber.length === 6 && workNumber !== ''
    return (
        <>
            <div>
                <FunctionalButton disabled={!isValid} text='上班' onClickFunction={() => { setGeneratedNumber(checkIn(phoneNumber, employeeNumber)) }}></FunctionalButton>
            </div>
            <div>
                <FunctionalButton disabled={!isValid} text='下班' onClickFunction={() => { setGeneratedNumber(checkOut(phoneNumber, employeeNumber, workNumber)) }}></FunctionalButton>
            </div>
        </>
    )
}