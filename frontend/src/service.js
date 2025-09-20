import { workNumberList } from "./data"

export function getCheckInUriCode(phoneNumber, employeeNumber){
    const uriCode = getFullOnClockUriCode(phoneNumber, employeeNumber)
    return {
        decodedUriCode: decodeURIComponent(uriCode).substring(4), 
        encodedUriCode: uriCode
    }
}

export function getCheckOutUriCode(phoneNumber, employeeNumber, workNumber){
    const uriCode = getFullOffClockUriCode(phoneNumber, employeeNumber, workNumber)
    return {
        decodedUriCode: decodeURIComponent(uriCode).substring(4), 
        encodedUriCode: uriCode
    }
}


export async function copyToClipboard(){
    const generatedNumber = document.getElementById("generated-number").innerHTML
    try {
        await navigator.clipboard.writeText(generatedNumber);
        alert("已复制生成号码!");
    } catch (err) {
        console.error("错误: ", err);
        alert("复制生成号码失败。");
  }
}

export function validateWorkNumFromStorage(workNumber, setWorkNum){
    const givenWorkNumArr = workNumberList.flatMap(item => item.numbers)
    const validWorkNumber = workNumber
                                .split(', ')
                                .filter(number => givenWorkNumArr.includes(number))
                                .sort((a, b) => a - b)
                                .join(', ')
    setWorkNum(validWorkNumber)
}


function getFullOnClockUriCode(phoneNumber, employeeNumber) {
    return `tel:${phoneNumber}` + pause(8) + "1" + pause(4) + employeeNumber + pause(6) + "1"
}

function getFullOffClockUriCode(phoneNumber, employeeNumber, workNumber) {
    return `tel:${phoneNumber}` + pause(8) + "2" + pause(4) + employeeNumber + pause(6) + "1" + pause(4) + processWorkNumString(workNumber)
}

function pound() {
    return encodeURIComponent("#")
}

function processWorkNumString(workNumStr) {
    const workNumList = workNumStr.trim().split(", ")
    workNumList.push("000")
    return workNumList.join(pound() + pause(4)) + pound()
}

function pause(second) {
    var result = "";
    for(var i = 0; i < second/2; i++){
        result += ","
    }
    return encodeURIComponent(result)
}