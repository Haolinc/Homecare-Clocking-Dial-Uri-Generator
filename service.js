function checkIn(){
    const onClockUriCode = getFullOnClockUriCode()
    const decodedUriCode = decodeURIComponent(onClockUriCode).substring(4)
    document.getElementById("generated-number").innerHTML = decodedUriCode
    window.location.href = onClockUriCode
    console.log(getFullOnClockUriCode())
}

function checkOut(){
    const offClockUriCode = getFullOffClockUriCode()
    const decodedUriCode = decodeURIComponent(offClockUriCode).substring(4)
    if (decodedUriCode.length < 100)
        window.location.href = offClockUriCode
    document.getElementById("generated-number").innerHTML = decodedUriCode
    console.log(getFullOffClockUriCode())
}


async function copyToClipboard(){
    const generatedNumber = document.getElementById("generated-number").innerHTML
    console.log(generatedNumber)
    try {
        await navigator.clipboard.writeText(generatedNumber);
        alert("已复制生成号码!");
    } catch (err) {
        console.error("错误: ", err);
        alert("复制生成号码失败。");
  }
}


function getFullOnClockUriCode() {
    const phoneNumber = document.getElementById("phone-number").value
    const employeeNumber = document.getElementById("employee-number").value
    return `tel:${phoneNumber}` + pause(8) + "1" + pause(4) + employeeNumber + pause(6) + "1"
}

function getFullOffClockUriCode() {
    const workNumberStr = document.getElementById("work-number").value
    const employeeNumber = document.getElementById("employee-number").value
    const phoneNumber = document.getElementById("phone-number").value
    return `tel:${phoneNumber}` + pause(8) + "2" + pause(4) + employeeNumber + pause(6) + "1" + pause(4) + processWorkNumString(workNumberStr)
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

window.onload = function () {
    loadInput('phone-number')
    loadInput('employee-number')
    loadInput('work-number')
}

function loadInput(elementId){
    const element = document.getElementById(elementId)
    const storageItem = localStorage.getItem(elementId)
    if (storageItem)
        element.value = storageItem
}

function saveInput(elementId){
    const element = document.getElementById(elementId);
    localStorage.setItem(elementId, element.value)
}