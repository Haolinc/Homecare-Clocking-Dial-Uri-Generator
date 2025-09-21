import { beforeAll, afterAll, describe, expect, it, vi } from 'vitest'
import { getCheckInUriCode, getCheckOutUriCode, copyToClipboard, validateWorkNumFromStorage } from '../service'
import { workNumberList } from '../data'


const phoneNumber = '1234567890'
const employeeNumber = '123456'
const shortLengthWorkNumber = ['101', '102'].join(", ")
const fullLengthWorkNumber = workNumberList.flatMap((item) => item.numbers).join(", ")

describe("Service Function Tests", () => {
    beforeAll(() => {
        Object.defineProperty(navigator, 'clipboard', {
            value: {
                readText: vi.fn(() => Promise.resolve('mocked content')),
                writeText: vi.fn(() => Promise.resolve()),
            },
            writable: true,
        })
        vi.stubGlobal("alert", vi.fn());
    })

    afterAll(() => {
        vi.clearAllMocks()
        vi.unstubAllGlobals()
    });

    it('checkIn', () => { 
        expect(getCheckInUriCode(phoneNumber, employeeNumber)).toEqual(
            {
                decodedUriCode: "1234567890,,,,1,,123456,,,1",
                encodedUriCode: "tel:1234567890%2C%2C%2C%2C1%2C%2C123456%2C%2C%2C1",
            }
        )
    })

    it('checkOut', () => { 
        expect(getCheckOutUriCode(phoneNumber, employeeNumber, shortLengthWorkNumber)).toEqual(
            {
                decodedUriCode: "1234567890,,,,2,,123456,,,1,,101#,,102#,,000#",
                encodedUriCode: "tel:1234567890%2C%2C%2C%2C2%2C%2C123456%2C%2C%2C1%2C%2C101%23%2C%2C102%23%2C%2C000%23",
            }
        )
        expect(getCheckOutUriCode(phoneNumber, employeeNumber, fullLengthWorkNumber)).toEqual(
            {
                decodedUriCode: "1234567890,,,,2,,123456,,,1,,100#,,101#,,102#,,103#,,106#,,107#,,108#,,109#,,110#,,111#,,112#,,113#,,114#,,115#,,116#,,117#,,201#,,202#,,203#,,204#,,205#,,206#,,207#,,208#,,300#,,301#,,302#,,305#,,306#,,311#,,409#,,410#,,411#,,413#,,500#,,501#,,502#,,506#,,508#,,509#,,511#,,514#,,000#",
                encodedUriCode: "tel:1234567890%2C%2C%2C%2C2%2C%2C123456%2C%2C%2C1%2C%2C100%23%2C%2C101%23%2C%2C102%23%2C%2C103%23%2C%2C106%23%2C%2C107%23%2C%2C108%23%2C%2C109%23%2C%2C110%23%2C%2C111%23%2C%2C112%23%2C%2C113%23%2C%2C114%23%2C%2C115%23%2C%2C116%23%2C%2C117%23%2C%2C201%23%2C%2C202%23%2C%2C203%23%2C%2C204%23%2C%2C205%23%2C%2C206%23%2C%2C207%23%2C%2C208%23%2C%2C300%23%2C%2C301%23%2C%2C302%23%2C%2C305%23%2C%2C306%23%2C%2C311%23%2C%2C409%23%2C%2C410%23%2C%2C411%23%2C%2C413%23%2C%2C500%23%2C%2C501%23%2C%2C502%23%2C%2C506%23%2C%2C508%23%2C%2C509%23%2C%2C511%23%2C%2C514%23%2C%2C000%23",
            }
        )
    })

    it('copyToClipboard', () => {
        const decodedUriCode = '1232313112,,,,2,,414545,,,1,,100#,,101#,,102#,,103#,,106#,,107#,,108#,,109#,,110#,,111#,,112#,,113#,,000#'

        copyToClipboard(decodedUriCode)

        expect(navigator.clipboard.writeText).toHaveBeenLastCalledWith(decodedUriCode)
        expect(navigator.clipboard.writeText).toBeCalledTimes(1)
    })

    it('validateWorkNumFromStorage', () => {
        const validWorkNum = "101, 202"
        const invalidWorkNum = "123,4,5,6,213, 21 123zijx 12,3123 asdn123, 123,"
        const partialValidWorkNum = "123,4,5,6,213, 21 123zijx 12,3123 asdn123, 123, 101, 202, 1238989asd 123"
        const duplicatedWorkNum = "101, 101, 202, 303"
        const emptyWorkNum = ""

        expect(validateWorkNumFromStorage(validWorkNum)).toEqual("101, 202")
        expect(validateWorkNumFromStorage(invalidWorkNum)).toEqual("")
        expect(validateWorkNumFromStorage(partialValidWorkNum)).toEqual("101, 202")
        expect(validateWorkNumFromStorage(duplicatedWorkNum)).toEqual("101, 202")
        expect(validateWorkNumFromStorage(emptyWorkNum)).toEqual("")
    })
})
