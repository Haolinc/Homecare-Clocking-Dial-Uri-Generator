import LabelText from "../common/LableText";

export default function ClockingInfo({phoneNumber, employeeNumber, workNumber}){
    const textClassName = 'text-md pb-2'
    const upperSectionClassName = 'w-1/2 flex flex-col justify-center items-center border'
    return (
        <>
            <div className="w-full flex flex-row">
                <div className={upperSectionClassName}>
                    <LabelText text='电话号码'/>
                    <p className={textClassName}>{phoneNumber}</p>
                </div>
                <div className={upperSectionClassName}>
                    <LabelText text='员工号码'/>
                    <p className={textClassName}>{employeeNumber}</p>
                </div>
            </div>
            <div className="border">
                <LabelText text='工作代号'/>
                <p className={textClassName}>{workNumber}</p>
            </div>
        </>
    )
}