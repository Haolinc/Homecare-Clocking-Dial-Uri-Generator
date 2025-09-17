import FunctionalButton from "../common/FunctionalButton"
import { checkIn, checkOut } from "../../service"

export default function ClockingButtons({phoneNumber, employeeNumber, workNumber, setGeneratedNumber}){
    return (
        <>
            <div>
                <FunctionalButton text='上班' onClickFunction={() => { setGeneratedNumber(checkIn(phoneNumber, employeeNumber)) }}></FunctionalButton>
            </div>
            <div>
                <FunctionalButton text='下班' onClickFunction={() => { setGeneratedNumber(checkOut(phoneNumber, employeeNumber, workNumber)) }}></FunctionalButton>
            </div>
        </>
    )
}