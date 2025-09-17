import FunctionalButton from "../common/FunctionalButton"
import LabelText from "../common/LableText"

export default function WorkInfo({workNumber, setWorkNum}){
    const workNumberArr = workNumber ? workNumber.split(', ') : []

    function setProperWorkNum(isSelected, targetWorkNum) {
        if (isSelected) {
            setWorkNum(workNumberArr.filter((workNum) => workNum !== targetWorkNum).join(', '))
        }
        else {
            workNumberArr.push(targetWorkNum)
            setWorkNum(workNumberArr.sort((a, b) => a - b).join(", "))
        }
    }

    function WorkNumButton({text, isSelected = false}){
        const baseClassName = 'h-12 w-24 text-2xl text-center p3'
        const className = isSelected ? baseClassName + ' bg-gradient-to-r from-blue-200 via-blue-200 to-gray-200': baseClassName
        return (
            <button 
                className={className}
                onClick={() => setProperWorkNum(isSelected, text)}
            >{text}</button>
        )
    }
    
    const workNumberList = [
        {name: "Personal Care Tasks", numbers: ['100', '101', '102', '103', '106', '107', '108', '109', '110', '111', '112', '113', '114', '115', '116', '117']},
        {name: "Nutrition", numbers: ['201', '202', '203', '204', '205', '206', '207', '208']},
        {name: "Acitivity", numbers: ['300', '301', '302', '305', '306', '311']},
        {name: "House Keeping", numbers: ['409', '410', '411', '413', '500', '501']},
        {name: "Special Need", numbers: ['502', '506', '508', '509', '511', '514']}
    ]

    return (
        <div className='p-3'>
            <LabelText text={'工作代号'}/>
            {
                workNumberList.map(workNumInfo => {
                    return (
                        <div key={workNumInfo.name}>
                            <div className='p-3'>
                                <LabelText text={workNumInfo.name}/>
                            </div>
                            <div className='w-full grid grid-cols-3 gap-4'>
                                {
                                    workNumInfo.numbers.map(number => 
                                        <WorkNumButton key={number} text={number} isSelected={workNumberArr.includes(number)}/>
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }
            <div className='p-5'>
                <FunctionalButton text='重置所有工作代号' onClickFunction={() => setWorkNum(null)}/>
            </div>
            
        </div>
    )
}