import './App.css'
import TopSectionText from './components/TopSectionText'
import FunctionalButton from './components/FunctionalButton.jsx'
import { saveInput, checkIn, checkOut, copyToClipboard } from "./service.js"
import LabelText from './components/LableText.jsx'
import NumericInput from './components/NumericInput.jsx'
import { useState } from 'react'

function App() {
  const [generatedNumber, setGeneratedNumber] = useState(null)
  return (
    <>
      <div >
          <div>
              <TopSectionText/>
          </div>
          <div>
            <LabelText text='呼叫号码'/>
            <NumericInput id='phone-number' maxLength='10'/>
          </div>
          <div>
            <LabelText text='员工号码'/>
            <NumericInput id='employee-number' maxLength='6'/>
          </div>
          <div>
            <LabelText text='工作代号 (例子: 101, 102, 103):'/>
              <textarea className='border border-solid p-1' rows="7" cols="50" id="work-number" name="work-number" onInput={() => saveInput('work-number')}></textarea>
          </div>
          <div>
            <FunctionalButton text='上班' onClickFunction={() => { setGeneratedNumber(checkIn()) }}></FunctionalButton>
          </div>
          <div>
            <FunctionalButton text='下班' onClickFunction={() => { setGeneratedNumber(checkOut()) }}></FunctionalButton>
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
