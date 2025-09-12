function checkIn(){
    window.location.href = getFullOnClockUriCode()
    console.log(getFullOnClockUriCode())
}

function checkOut(){
    window.location.href = getFullOffClockUriCode()
    console.log(getFullOffClockUriCode())
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