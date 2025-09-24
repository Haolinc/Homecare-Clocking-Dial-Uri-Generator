import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import WorkInfo from '../../../components/user-input/WorkInfo'
import { workNumberList } from '../../../data'

describe('WorkInfo Component tests', () => {
    const someWorkNumber = '101, 102'
    const someWorkNumberArr = someWorkNumber.split(', ')
    const emptyWorkNumber = ''
    const selectedClassName = 'bg-blue-400 text-white'
    const unselectedClassName = 'bg-gray-200'

    it('full render test', () => {
        render(
            <WorkInfo
                workNumber={someWorkNumber}
                setWorkNum={() => {}}
            />
        )

        expect(screen.getByText('工作项目代号')).toBeInTheDocument()
        const buttons = screen.getAllByRole('button').filter((html) => html.textContent !== '重置所有工作代号')
        workNumberList.forEach((workNumObj) => {
            expect(screen.getByText(workNumObj.name)).toBeInTheDocument()
            workNumObj.numbers.forEach((number) => {
                expect(buttons.find((btn) => btn.textContent === number)).toBeInTheDocument()
            })
        })
        expect(screen.getByText('重置所有工作代号')).toBeInTheDocument()
    })

    it('verify all buttons are NOT selected when NO work number is given', () => {
        render(
            <WorkInfo
                workNumber={emptyWorkNumber}
                setWorkNum={() => {}}
            />
        )

        const buttons = screen.getAllByRole('button').filter((html) => html.textContent !== '重置所有工作代号')
        workNumberList.flatMap((obj) => obj.numbers).forEach(number => 
            expect(buttons.find((btn) => btn.textContent === number)).toHaveClass(unselectedClassName)
        )
    })

    it('verify button is selected when work number is given', () => {
        render(
            <WorkInfo
                workNumber={someWorkNumber}
                setWorkNum={() => {}}
            />
        )
        
        someWorkNumberArr.forEach(number => 
            expect(screen.getByRole('button', {name: number})).toHaveClass(selectedClassName)
        )
    })

    it('verify workNumber is sorted when button is selected', () => {
        const mockSetWorkNum = vi.fn()
        render(
            <WorkInfo
                workNumber={someWorkNumber}
                setWorkNum={mockSetWorkNum}
            />
        )

        const button = screen.getByRole('button', {name: '100'})
        button.click()
        
        expect(mockSetWorkNum).toBeCalledWith(`100, ${someWorkNumber}`)
    })

    it('verify workNumber is removed when button is unselected', () => {
        const mockSetWorkNum = vi.fn()
        render(
            <WorkInfo
                workNumber={someWorkNumber}
                setWorkNum={mockSetWorkNum}
            />
        )

        const button = screen.getByRole('button', {name: '101'})
        button.click()
        
        expect(mockSetWorkNum).toBeCalledWith('102')
    })
})