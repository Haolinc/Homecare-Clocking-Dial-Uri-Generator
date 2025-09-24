import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import WarningText from '../../../components/clocking/WarningText'

const validPhoneNumber = '1234567890'
const invalidPhoneNumber = '123456789'
const validEmployeeNumber = '123456'
const invalidEmployeeNumber = '12345'
const validWorkNumber = '101, 102'
const invalidWorkNumber = ''

describe("WarningText Component tests", () => {
    it("full render test", () => {
        render(
            <WarningText 
                phoneNumber={validPhoneNumber} 
                employeeNumber={validEmployeeNumber} 
                workNumber={validWorkNumber}
            />
        )

        expect(screen.queryByText('请前往[员工信息]输入10位数电话号码')).not.toBeInTheDocument()
        expect(screen.queryByText('请前往[员工信息]输入6位数员工代号')).not.toBeInTheDocument()
        expect(screen.queryByText('请前往[员工信息]选择至少1组工作代号')).not.toBeInTheDocument()
    })

    it("validate phone number warning text when given invalid phone number", () => {
        render(
            <WarningText 
                phoneNumber={invalidPhoneNumber} 
                employeeNumber={validEmployeeNumber} 
                workNumber={validWorkNumber}
            />
        )

        expect(screen.getByText('请前往[员工信息]输入10位数电话号码')).toBeInTheDocument()
        expect(screen.queryByText('请前往[员工信息]输入6位数员工代号')).not.toBeInTheDocument()
        expect(screen.queryByText('请前往[员工信息]选择至少1组工作代号')).not.toBeInTheDocument()
    })

    it("validate employee number warning text when given invalid employee number", () => {
        render(
            <WarningText 
                phoneNumber={validPhoneNumber} 
                employeeNumber={invalidEmployeeNumber} 
                workNumber={validWorkNumber}
            />
        )

        expect(screen.queryByText('请前往[员工信息]输入10位数电话号码')).not.toBeInTheDocument()
        expect(screen.getByText('请前往[员工信息]输入6位数员工代号')).toBeInTheDocument()
        expect(screen.queryByText('请前往[员工信息]选择至少1组工作代号')).not.toBeInTheDocument()
    })

    it("validate work number warning text when given invalid work number", () => {
        render(
            <WarningText 
                phoneNumber={validPhoneNumber} 
                employeeNumber={validEmployeeNumber} 
                workNumber={invalidWorkNumber}
            />
        )

        expect(screen.queryByText('请前往[员工信息]输入10位数电话号码')).not.toBeInTheDocument()
        expect(screen.queryByText('请前往[员工信息]输入6位数员工代号')).not.toBeInTheDocument()
        expect(screen.getByText('请前往[员工信息]选择至少1组工作代号')).toBeInTheDocument()
    })

    it("validate phone & employee number warning text when given invalid phone & employee number", () => {
        render(
            <WarningText 
                phoneNumber={invalidPhoneNumber} 
                employeeNumber={invalidEmployeeNumber} 
                workNumber={validWorkNumber}
            />
        )

        expect(screen.getByText('请前往[员工信息]输入10位数电话号码')).toBeInTheDocument()
        expect(screen.getByText('请前往[员工信息]输入6位数员工代号')).toBeInTheDocument()
        expect(screen.queryByText('请前往[员工信息]选择至少1组工作代号')).not.toBeInTheDocument()
    })

    it("validate phone & work number warning text when given invalid phone & work number", () => {
        render(
            <WarningText 
                phoneNumber={invalidPhoneNumber} 
                employeeNumber={validEmployeeNumber} 
                workNumber={invalidWorkNumber}
            />
        )

        expect(screen.getByText('请前往[员工信息]输入10位数电话号码')).toBeInTheDocument()
        expect(screen.queryByText('请前往[员工信息]输入6位数员工代号')).not.toBeInTheDocument()
        expect(screen.getByText('请前往[员工信息]选择至少1组工作代号')).toBeInTheDocument()
    })

    it("validate employee & work number warning text when given invalid employee & work number", () => {
        render(
            <WarningText 
                phoneNumber={validPhoneNumber} 
                employeeNumber={invalidEmployeeNumber} 
                workNumber={invalidWorkNumber}
            />
        )

        expect(screen.queryByText('请前往[员工信息]输入10位数电话号码')).not.toBeInTheDocument()
        expect(screen.getByText('请前往[员工信息]输入6位数员工代号')).toBeInTheDocument()
        expect(screen.getByText('请前往[员工信息]选择至少1组工作代号')).toBeInTheDocument()
    })

    it("validate all number warning text when given invalid all number", () => {
        render(
            <WarningText 
                phoneNumber={invalidPhoneNumber} 
                employeeNumber={invalidEmployeeNumber} 
                workNumber={invalidWorkNumber}
            />
        )

        expect(screen.getByText('请前往[员工信息]输入10位数电话号码')).toBeInTheDocument()
        expect(screen.getByText('请前往[员工信息]输入6位数员工代号')).toBeInTheDocument()
        expect(screen.getByText('请前往[员工信息]选择至少1组工作代号')).toBeInTheDocument()
    })    
})