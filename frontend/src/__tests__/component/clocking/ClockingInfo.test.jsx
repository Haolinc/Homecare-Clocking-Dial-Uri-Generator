import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ClockingInfo from '../../../components/clocking/ClockingInfo'

const phoneNumber = '1234567890'
const invalidPhoneNumber = '123456789'
const employeeNumber = '123456'
const workNumber = '101, 102'

describe("ClockingInfo Component tests", () => {
    it("full render test", () => {
        render(
            <ClockingInfo 
                phoneNumber={phoneNumber} 
                employeeNumber={employeeNumber} 
                workNumber={workNumber}
            />
        )

        expect(screen.getByText('呼叫号码')).toBeInTheDocument()
        expect(screen.getByText('(123) 456-7890')).toBeInTheDocument()
        expect(screen.getByText('员工号码')).toBeInTheDocument()
        expect(screen.getByText(employeeNumber)).toBeInTheDocument()
        expect(screen.getByText('工作项目代号')).toBeInTheDocument()
        expect(screen.getByText(workNumber)).toBeInTheDocument()
        
    })

    it("verify phone number text when given non 10 digit phone number", () => {
        render(
            <ClockingInfo 
                phoneNumber={invalidPhoneNumber} 
                employeeNumber={employeeNumber} 
                workNumber={workNumber}
            />
        )
        
        expect(screen.getByText(invalidPhoneNumber)).toBeInTheDocument()
    })

    it("verify phone & employee & work number text when given empty numbers", () => {
        const { container } = render(
            <ClockingInfo 
                phoneNumber='' 
                employeeNumber=''
                workNumber=''
            />
        )
        
        expect(container.querySelector('#phone-number-text').textContent).toBe('空白')
        expect(container.querySelector('#employee-number-text').textContent).toBe('空白')
        expect(container.querySelector('#work-number-text').textContent).toBe('空白')
    })    
})