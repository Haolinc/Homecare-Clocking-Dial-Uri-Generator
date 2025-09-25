import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import BasicInfo from '../../../components/user-input/BasicInfo'
import userEvent from '@testing-library/user-event'
import { useState } from 'react'

describe("BasicInfo Component tests", () => {
    const validPhoneNumber = '1234567890'
    const validEmployeeNumber = '123456'
    it("full render test", () => {
        const { container } = render(
            <BasicInfo
                phoneNumber={validPhoneNumber}
                setPhoneNumber={() => {}}
                employeeNumber={validEmployeeNumber}
                setEmployeeNumber={() => {}}
            />
        )

        expect(screen.getByText('呼叫号码')).toBeInTheDocument()
        expect(container.querySelector("#phone-number").value).toBe(validPhoneNumber)
        expect(screen.getByText('员工号码')).toBeInTheDocument()
        expect(container.querySelector("#employee-number").value).toBe(validEmployeeNumber)
    })

    function NumericInputWrapper(){
        const [dummyPhone, setDummyPhone] = useState('')
        const [dummyEmployee, setDummyEmployee] = useState('')
        return <BasicInfo
            phoneNumber={dummyPhone}
            setPhoneNumber={setDummyPhone}
            employeeNumber={dummyEmployee}
            setEmployeeNumber={setDummyEmployee}
        />
    }

    it("validate numeric input values when type inproper character and exceeding input limit", async () => {
        const { container } = render(
            <NumericInputWrapper/>
        )
        const phoneInput = container.querySelector("#phone-number")
        const employeeInput = container.querySelector("#employee-number")

        await userEvent.type(phoneInput, "123abc45678901")
        await userEvent.type(employeeInput, "123abc4567")

        expect(phoneInput).toHaveValue('1234567890')
        expect(employeeInput).toHaveValue('123456')
    })
})