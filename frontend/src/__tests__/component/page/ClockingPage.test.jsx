vi.mock("../../../components/clocking/TopSectionText", () => ({
    default: () => 
        <p>TopSectionText Mock</p>
}))

vi.mock("../../../components/clocking/ClockingInfo", () => ({
    default: ({phoneNumber, employeeNumber, workNumber}) =>
        <p>{`ClockingInfo Mock: ${phoneNumber}, ${employeeNumber}, ${workNumber}`}</p>

}))

vi.mock("../../../components/clocking/WarningText", () => ({
    default: () => 
        <p>WarningText Mock</p>
}))

vi.mock("../../../components/clocking/ClockingButtons", () => ({
    default: ({setGeneratedNumber}) => (
        <div>
            <button onClick={() => setGeneratedNumber('123')}>ClockingButtons Mock</button>
        </div>
    )
}))

vi.mock("../../../components/clocking/NumberGenerate", () => ({
    default: ({generatedNumber}) => (
        <div>
            <p>{`NumberGenerateSection Mock: ${generatedNumber}`}</p>
        </div>
    )
}))

import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import ClockingPage from '../../../components/page/ClockingPage'

describe("ClockingPage Component tests", () => {
    const validInputValues = [
        {value: "1234567890"},
        {value: "123456"},
        {value: "101, 102"}
    ]

    it("full render test", () => {
        render(
            <ClockingPage inputValues={validInputValues}/>
        )

        expect(screen.getByText('TopSectionText Mock')).toBeInTheDocument()
        expect(screen.getByText('ClockingInfo Mock: 1234567890, 123456, 101, 102')).toBeInTheDocument()
        expect(screen.getByText('WarningText Mock')).toBeInTheDocument()
        expect(screen.getByRole('button', {name: 'ClockingButtons Mock'})).toBeInTheDocument()
        expect(screen.queryByText('NumberGenerateSection Mock: 123')).not.toBeInTheDocument()
    })

    it("verify NumberGenerateSection is called after button click", async () => {
        render(
            <ClockingPage inputValues={validInputValues}/>
        )
        await userEvent.click(screen.getByRole('button', {name: 'ClockingButtons Mock'}))
        
        expect(screen.getByText('NumberGenerateSection Mock: 123')).toBeInTheDocument()
    })
})