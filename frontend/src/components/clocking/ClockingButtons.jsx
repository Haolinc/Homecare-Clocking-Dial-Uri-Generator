import FunctionalButton from "../common/FunctionalButton"
import { getCheckInUriCode, getCheckOutUriCode } from "../../service"

export default function ClockingButtons({phoneNumber, employeeNumber, workNumber, setGeneratedNumber}){
    function checkIn(){
        const uriCodes = getCheckInUriCode(phoneNumber, employeeNumber)
        setGeneratedNumber(uriCodes.decodedUriCode)
        window.location.href = uriCodes.encodedUriCode
    }

    function checkOut(){
        const uriCodes = getCheckOutUriCode(phoneNumber, employeeNumber, workNumber)
        setGeneratedNumber(uriCodes.decodedUriCode)
        if (uriCodes.decodedUriCode.length <= 100)
            window.location.href = uriCodes.encodedUriCode
    }

    const isValid = phoneNumber.length === 10 && employeeNumber.length === 6 && workNumber !== ''
    return (
        <>
            <div>
                <FunctionalButton disabled={!isValid} text='上班' onClick={() => checkIn()}></FunctionalButton>
            </div>
            <div>
                <FunctionalButton disabled={!isValid} text='下班' onClick={() => checkOut()}></FunctionalButton>
            </div>
        </>
    )
}