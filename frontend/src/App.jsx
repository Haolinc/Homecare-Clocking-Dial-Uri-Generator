import './App.css'
import { useEffect, useState } from 'react'
import InfoPage from './components/page/InfoPage.jsx'
import ClockingPage from './components/page/ClockingPage.jsx'
import NavigationPanel from './components/NavigationPanel.jsx'

function App() {
  const [phoneNumber, setPhoneNumber] = useState(localStorage.getItem('phone-number'))
  const [employeeNumber, setEmployeeNumber] = useState(localStorage.getItem('employee-number'))
  const [workNumber, setWorkNum] = useState(localStorage.getItem('work-number'))
  const [isFirstPage, setIsFirstPage] = useState(true)
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
          {
            isFirstPage ?
            <ClockingPage inputValues={inputValues}/>
            : <InfoPage inputValues={inputValues}/>
          }
        </div>
        <div className='w-full h-20'/>
        <NavigationPanel setIsFirstPage={setIsFirstPage}/>
      </div>
    </>
  )
}

export default App
