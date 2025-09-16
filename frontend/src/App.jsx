import './App.css'
import TopSectionText from './components/clocking/TopSectionText.jsx'
import FunctionalButton from './components/common/FunctionalButton.jsx'
import { checkIn, checkOut, copyToClipboard } from "./service.js"
import LabelText from './components/common/LableText.jsx'
import { useEffect, useState } from 'react'
import InfoPage from './components/page/InfoPage.jsx'

function App() {
  const [generatedNumber, setGeneratedNumber] = useState(null)
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phone-number'))
  const [employeeNumber, setEmployeeNumber] = useState(localStorage.getItem('employee-number'))
  const [workNumber, setWorkNum] = useState(localStorage.getItem('work-number'))
  const inputValues = [
    {value: phoneNumber, setValue: setPhoneNumber},
    {value: employeeNumber, setValue: setEmployeeNumber},
    {value: workNumber, setValue: setWorkNum}
  ]

  useEffect(() => {
    localStorage.setItem('phone-number', phoneNumber)
    localStorage.setItem('employee-number', employeeNumber)
    localStorage.setItem('work-number', workNumber)
  }, [phoneNumber, employeeNumber, workNumber])

  return (
    <>
      <div>
        <div>
          <TopSectionText/>
        </div>
        <div>
          <InfoPage inputValues={inputValues}/>
        </div>
        <div>
          <FunctionalButton text='上班' onClickFunction={() => { setGeneratedNumber(checkIn(phoneNumber, employeeNumber)) }}></FunctionalButton>
        </div>
        <div>
          <FunctionalButton text='下班' onClickFunction={() => { setGeneratedNumber(checkOut(phoneNumber, employeeNumber, workNumber)) }}></FunctionalButton>
        </div>
        { generatedNumber &&
          <>
            <div>
            <LabelText text='生成号码'/>
            <p className='p-2' id="generated-number">{generatedNumber}</p>
            <FunctionalButton text='复制号码' onClickFunction={() => copyToClipboard()}></FunctionalButton>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default App
