import { beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '../App'
import { act } from 'react'

const mockInputValues = vi.fn()

vi.mock("../components/page/ClockingPage", () => ({
    default: ({inputValues}) => {
        mockInputValues(inputValues)
        return <p>{`ClockingPage Mock`}</p>
    }
}))

vi.mock("../components/page/InfoPage", () => ({
    default: () => 
        <p>InfoPage Mock</p>
}))

vi.mock("../components/NavigationPanel", () => ({
    default: ({isFirstPage, setIsFirstPage}) => 
        <button 
            onClick={() => setIsFirstPage(!isFirstPage)}
        >
            NavigationPanel Mock
        </button>
}))

describe("App tests", () => {
    beforeEach(() => {
        localStorage.clear()
        vi.spyOn(Storage.prototype, "getItem")
        vi.spyOn(Storage.prototype, "setItem")
    })

    it("full render test", () => {
        render(
            <App/>
        )

        expect(screen.getByText('ClockingPage Mock')).toBeInTheDocument()
        expect(screen.queryByText('InfoPage Mock')).not.toBeInTheDocument()
        expect(screen.getByText('NavigationPanel Mock')).toBeInTheDocument()
        expect(mockInputValues).toHaveBeenCalledWith([
            {value: '', setValue: expect.any(Function)},
            {value: '', setValue: expect.any(Function)},
            {value: '', setValue: expect.any(Function)}
        ])
    })

    it("validate page switch when NavigationPanel is clicked", () => {
        render(
            <App/>
        )
        act(() => {
            screen.getByRole('button', {name: 'NavigationPanel Mock'}).click()
        })

        expect(screen.queryByText('ClockingPage Mock')).not.toBeInTheDocument()
        expect(screen.getByText('InfoPage Mock')).toBeInTheDocument()
    })

    it("validate correct localStorage data when start with empty localStorage data", () => {
        render(
            <App/>
        )
        
        expect(localStorage.setItem).toHaveBeenCalledWith("phone-number", "")
        expect(localStorage.setItem).toHaveBeenCalledWith("employee-number", "")
        expect(localStorage.setItem).toHaveBeenCalledWith("work-number", "")
    })

    it("validate correct localStorage data when start with some localStorage data", () => {
        localStorage.setItem('phone-number', '123456789')
        localStorage.setItem('employee-number', '123456')
        localStorage.setItem('work-number', '101')
        render(
            <App/>
        )
        
        expect(localStorage.setItem).toHaveBeenCalledWith("phone-number", "123456789")
        expect(localStorage.setItem).toHaveBeenCalledWith("employee-number", "123456")
        expect(localStorage.setItem).toHaveBeenCalledWith("work-number", "101")

        expect(localStorage.getItem).toHaveBeenCalledWith("phone-number")
        expect(localStorage.getItem).toHaveBeenCalledWith("employee-number")
        expect(localStorage.getItem).toHaveBeenCalledWith("work-number")
    })
})