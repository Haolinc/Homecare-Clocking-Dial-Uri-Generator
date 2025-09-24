import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import TopSectionText from '../../../components/clocking/TopSectionText'

describe("TopSectionText Component tests", () => {
    it("full render test", () => {
        render(
            <TopSectionText/>
        )

        expect(screen.getByText('1. 打卡时请按住屏幕保持光亮')).toBeInTheDocument()
        expect(screen.getByText('2. 如超过11组工作代号， 请复制并储存生成出现的号码进入手机备忘录')).toBeInTheDocument()
    })
})