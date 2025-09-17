import LabelText from "../common/LableText";

export default function ClockingInfo({phoneNumber, employeeNumber, workNumber}){
    return (
        <>
            <div className="w-full flex flex-row">
                <div className="w-1/2 flex flex-col justify-center items-center border">
                    <LabelText text='电话号码'/>
                    <p className="p-3">{phoneNumber}</p>
                </div>
                <div className="w-1/2 flex flex-col justify-center items-center border">
                    <LabelText text='员工号码'/>
                    <p className="p-3">{employeeNumber}</p>
                </div>
            </div>
            <div className="border">
                <LabelText text='工作代号'/>
                <p className="p-3">{workNumber}</p>
            </div>
        </>
    )
}