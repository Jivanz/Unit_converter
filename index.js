// javascript

let numEl = document.getElementById("num-el")
let lenghtEl = document.getElementById("lenght-el")
let volumeEl = document.getElementById("volume-el")
let massEl = document.getElementById("mass-el")


function convert() {
    
    let meterToFeet = numEl.value * 3.28084 
    let feetToMeter = numEl.value / 3.28084
    let meterToFeetResult = numEl.value + " Meters = " + meterToFeet.toFixed(3) + " Feet"
    let feetToMeterResult = numEl.value + " Feet = " + feetToMeter.toFixed(3) + " Meters"
    lenghtEl.textContent = meterToFeetResult + " | " + feetToMeterResult
    
    let literToGallon = numEl.value * 0.264172
    let gallonToLiter = numEl.value / 0.264172
    let literToGallonResult = numEl.value + " Liters = " + literToGallon.toFixed(3) + " Gallons"
    let gallonToLiterResult = numEl.value + " Gallons = " + gallonToLiter.toFixed(3) + " Liters"
    volumeEl.textContent = literToGallonResult + " | " + gallonToLiterResult
    
    let kilogramToPound = numEl.value * 2.20462
    let poundToKilogram = numEl.value / 2.20462
    let kilogramToPoundResult = numEl.value + " Kilograms = " + kilogramToPound.toFixed(3) + " Pounds"
    let poundToKilogramResult = numEl.value + " Pounds = " + poundToKilogram.toFixed(3) + " Kilograms"
    massEl.textContent = kilogramToPoundResult + " | " + poundToKilogramResult
}

