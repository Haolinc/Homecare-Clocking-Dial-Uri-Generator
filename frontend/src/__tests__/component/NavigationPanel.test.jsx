import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import NavigationPanel from '../../components/NavigationPanel'

describe('NavigationPanel Component tests', () => {
    const setIsFirstPage = vi.fn()
    const selectedColor = 'bg-blue-200'
    const unselectedColor = 'bg-gray-200'

    it('full render test', () => {
        render(
            <NavigationPanel
                isFirstPage={true}
                setIsFirstPage={setIsFirstPage}
            />
        )

        const clockingText = screen.getByText('打钟')
        const infoText = screen.getByText('员工信息')

        expect(clockingText).toBeInTheDocument()
        expect(infoText).toBeInTheDocument()

        clockingText.parentElement.click()
        
        expect(setIsFirstPage).toBeCalledTimes(1)
        expect(setIsFirstPage).toBeCalledWith(true)

        infoText.parentElement.click()

        expect(setIsFirstPage).toBeCalledTimes(2)
        expect(setIsFirstPage).toBeCalledWith(false)
    })

    it('validate color when isFirstPage', () => {
        render(
            <NavigationPanel
                isFirstPage={true}
                setIsFirstPage={setIsFirstPage}
            />
        )
        expect(screen.getByText('打钟').parentElement).toHaveClass(selectedColor)
        expect(screen.getByText('员工信息').parentElement).toHaveClass(unselectedColor)
    })

    it('validate color when NOT isFirstPage', () => {
        render(
            <NavigationPanel
                isFirstPage={false}
                setIsFirstPage={setIsFirstPage}
            />
        )
        expect(screen.getByText('打钟').parentElement).toHaveClass(unselectedColor)
        expect(screen.getByText('员工信息').parentElement).toHaveClass(selectedColor)
    })
})