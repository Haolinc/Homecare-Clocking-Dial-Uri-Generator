vi.mock('../../../service', () => ({
  default: vi.fn().mockResolvedValue(undefined),
}));

import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import NumberGenerate from '../../../components/clocking/NumberGenerate'

const generatedNumber = '2121564654,,,,1,,416546,,,1'

describe("NumberGenerate Component tests", () => {
    it("full render test", () => {
        render(
            <NumberGenerate 
                generatedNumber={generatedNumber}
            />
        )

        expect(screen.getByText('生成号码')).toBeInTheDocument()
        expect(screen.getByText(generatedNumber)).toBeInTheDocument()
        expect(screen.getByText('复制号码')).toBeInTheDocument()
    })
})