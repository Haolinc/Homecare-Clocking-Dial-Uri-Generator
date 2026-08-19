import { workNumberList } from "../../data"
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
        const baseClassName = 'h-14 w-full text-2xl text-center'
        const className = isSelected ? baseClassName + ' bg-blue-400 text-white': baseClassName + ' bg-gray-200'
        return (
            <button 
                className={className}
                onClick={() => setProperWorkNum(isSelected, text)}
            >{text}</button>
        )
    }
    
    return (
        <div className='p-3'>
            <LabelText text={'工作项目代号'}/>
            {
                workNumberList.map(workNumInfo => {
                    return (
                        <div key={workNumInfo.name}>
                            <div className='p-3'>
                                <LabelText text={workNumInfo.name}/>
                            </div>
                            <div className='w-full max-w-md mx-auto grid grid-cols-3 gap-3'>
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
            <div className='pt-10'>
                <FunctionalButton text='重置所有工作代号' onClick={() => setWorkNum(null)}/>
            </div>
            
        </div>
    )
}