export default function WarningText({phoneNumber, employeeNumber, workNumber}){
    const className = 'text-red-500 text-md'
    return (
        <>
            {
                phoneNumber.length !== 10 &&
                <p className={className}>请前往[员工信息]输入10位数电话号码</p>
            }
            {
                employeeNumber.length !== 6 &&
                <p className={className}>请前往[员工信息]输入6位数员工代号</p>
            }
            {
                workNumber === '' &&
                <p className={className}>请前往[员工信息]选择至少1组工作代号</p>
            }
        </>
    )
}