vi.mock("../../../components/user-input/BasicInfo", () => ({
    default: ({phoneNumber, setPhoneNumber, employeeNumber, setEmployeeNumber}) => 
        <div
            data-testid='basicInfo'
            data-phone={phoneNumber}
            data-employee={employeeNumber}
            onClick={() => {
                setPhoneNumber('123456788')
                setEmployeeNumber('123455')
            }}
        />
}))

vi.mock("../../../components/user-input/WorkInfo", () => ({
    default: ({workNumber, setWorkNum}) => 
        <div
            data-testid='workInfo'
            data-work={workNumber}
            onClick={() => setWorkNum('102')}
        />
}))

import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import InfoPage from '../../../components/page/InfoPage'

describe("InfoPage Component tests", () => {
    const mockSetPhone = vi.fn()
    const mockSetEmployee = vi.fn()
    const mockSetWork = vi.fn()

    const validInputValues = [
        {value: "1234567890", setValue: mockSetPhone},
        {value: "123456", setValue: mockSetEmployee},
        {value: "101, 102", setValue: mockSetWork}
    ]

    it("full render test", () => {
        render(
            <InfoPage inputValues={validInputValues}/>
        )

        const basicInfo = screen.getByTestId('basicInfo')
        const workInfo = screen.getByTestId('workInfo')

        expect(basicInfo).toHaveAttribute('data-phone', '1234567890')
        expect(basicInfo).toHaveAttribute('data-employee', '123456')
        expect(workInfo).toHaveAttribute('data-work', '101, 102')

        basicInfo.click()
        workInfo.click()

        expect(mockSetPhone).toBeCalledWith('123456788')
        expect(mockSetEmployee).toBeCalledWith('123455')
        expect(mockSetWork).toBeCalledWith('102')
    })

})