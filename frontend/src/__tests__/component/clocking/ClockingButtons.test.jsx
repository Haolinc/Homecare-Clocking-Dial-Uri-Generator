import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import ClockingButtons from '../../../components/clocking/ClockingButtons'

const validPhoneNumber = '1234567890'
const invalidPhoneNumber = '123456789'
const validEmployeeNumber = '123456'
const invalidEmployeeNumber = '12345'
const validWorkNumber = '101, 102'
const invalidWorkNumber = ''

describe("ClockingButtons Component tests", () => {
    it("full render test", () => {
        render(
            <ClockingButtons 
                phoneNumber={validPhoneNumber} 
                employeeNumber={validEmployeeNumber} 
                workNumber={validWorkNumber}
                setGeneratedNumber={() => {}}
            />
        )

        expect(screen.getByText('上班')).toBeEnabled()
        expect(screen.getByText('下班')).toBeEnabled()
    })

    it("verify disabled button when INVALID phone number", () => {
        render(
            <ClockingButtons 
                phoneNumber={invalidPhoneNumber} 
                employeeNumber={validEmployeeNumber} 
                workNumber={validWorkNumber}
                setGeneratedNumber={() => {}}
            />
        )

        expect(screen.getByText('上班')).toBeDisabled()
        expect(screen.getByText('下班')).toBeDisabled()
    })

    it("verify disabled button when INVALID employee number", () => {
        render(
            <ClockingButtons 
                phoneNumber={validPhoneNumber} 
                employeeNumber={invalidEmployeeNumber} 
                workNumber={validWorkNumber}
                setGeneratedNumber={() => {}}
            />
        )

        expect(screen.getByText('上班')).toBeDisabled()
        expect(screen.getByText('下班')).toBeDisabled()
    })

    it("verify disabled button when INVALID work number", () => {
        render(
            <ClockingButtons 
                phoneNumber={validPhoneNumber} 
                employeeNumber={validEmployeeNumber} 
                workNumber={invalidWorkNumber}
                setGeneratedNumber={() => {}}
            />
        )

        expect(screen.getByText('上班')).toBeDisabled()
        expect(screen.getByText('下班')).toBeDisabled()
    })

    it("verify check in and check out function when clicked", () => {
        const mockSetGeneratedNumber = vi.fn()
        render(
            <ClockingButtons 
                phoneNumber={validPhoneNumber} 
                employeeNumber={validEmployeeNumber} 
                workNumber={validWorkNumber}
                setGeneratedNumber={mockSetGeneratedNumber}
            />
        )
        const checkInButton = screen.getByText('上班')
        const checkOutButton = screen.getByText('下班')

        checkInButton.click()
        
        expect(mockSetGeneratedNumber).toBeCalledWith('1234567890,,,,1,,123456,,,1')

        checkOutButton.click()

        expect(mockSetGeneratedNumber).toBeCalledWith('1234567890,,,,2,,123456,,,1,,101#,,102#,,000#')
    })
})