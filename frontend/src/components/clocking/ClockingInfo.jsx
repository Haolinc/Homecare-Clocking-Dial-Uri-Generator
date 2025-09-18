import LabelText from "../common/LableText";

export default function ClockingInfo({phoneNumber, employeeNumber, workNumber}){
    const textClassName = 'text-md pb-2'
    const upperSectionClassName = 'w-1/2 flex flex-col justify-center items-center border'
    const processedPhoneNumber = processPhoneNumber(phoneNumber)

    function processPhoneNumber(phoneNumber){
        let processed = phoneNumber
        if (phoneNumber.length >= 10)
            processed = `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`
        return processed
    }

    return (
        <>
            <div className="w-full flex flex-row">
                <div className={upperSectionClassName}>
                    <LabelText text='电话号码'/>
                    <p className={textClassName}>{processedPhoneNumber === '' ? '空白' : processedPhoneNumber}</p>
                </div>
                <div className={upperSectionClassName}>
                    <LabelText text='员工号码'/>
                    <p className={textClassName}>{employeeNumber === '' ? '空白' : employeeNumber}</p>
                </div>
            </div>
            <div className="border">
                <LabelText text='工作代号'/>
                <p className={textClassName}>{workNumber === '' ? '空白' : workNumber}</p>
            </div>
        </>
    )
}