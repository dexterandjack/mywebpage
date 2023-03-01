let height
let neck
let waist
let weight
let bodyFat
let BMI
let FFMI


function calculate() {

    document.querySelector(".container").style.display = "none"
    document.querySelector(".container2").style.display = "block"
    document.querySelector(".container3").style.display = "block"

    weight = document.getElementById("weight").value
    height = document.getElementById("height").value
    waist = document.getElementById("waist").value
    neck = document.getElementById("neck").value
    bodyFat = Math.floor(495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450)
    // bodyFat = Math.floor(495 / (1.0324 - 0.19077 * Math.log10(waist - neck) + 0.15456 * Math.log10(height)) - 450)
    let LBM = Math.floor((1 - (bodyFat / 100)) * weight)
    let BMR = Math.floor(370 + (21.6 * LBM))
    let TDEE

    console.log(bodyFat)
    
    if (document.getElementById("Activity").value == "1-3 hours weekly") {
        TDEE = BMR * 1.2
    } else if (document.getElementById("Activity").value == "4-6 hours weekly") {
        TDEE = BMR * 1.35
    } else {
        TDEE = BMR * 1.5
    }

    document.getElementById("heightR").innerHTML = height + " cm"
    document.getElementById("weightR").innerHTML = weight + " kg"
    document.getElementById("neckR").innerHTML = neck + " cm"
    document.getElementById("waistR").innerHTML = waist + " cm"

    document.getElementById("ActivityLvl").innerHTML = document.getElementById("Activity").value

    document.getElementById("BMR").innerHTML = BMR + " kcal"
    document.getElementById("TDEE").innerHTML = TDEE + " kcal"
    document.getElementById("BodyFatPercentage").innerHTML = "~ " + bodyFat + " %"
    document.getElementById("BodyFatKG").innerHTML = "~ " + (weight - LBM).toFixed(2) + " kg"

    if (document.getElementById("Diet").value == "Lose Weight") {
        cutDiet()
    } else if (document.getElementById("Diet").value == "Maintain Weight") {
        maintainDiet()
    } else {
        gainDiet()
    }

    BMI = (weight / ((height/100) ** 2)).toFixed(2)
    FFMI = ((weight * (1 - (bodyFat/100))) / ((height/100) ** 2)).toFixed(2)

    document.getElementById("BMI").innerHTML = BMI
    document.getElementById("FFMI").innerHTML = FFMI

    colorTable()

}

function cutDiet() {

    let protein = 2.4 * weight
    let carb = 2 * weight
    let fat = 0.4 * weight
    protein = protein.toFixed(2)
    carb = carb.toFixed(2)
    fat = fat.toFixed(2)

    document.getElementById("DietName").innerHTML = "Lose Weight"
    document.getElementById("Protein").innerHTML = protein + " g of protein"
    document.getElementById("Carb").innerHTML = carb + " g of carbs"
    document.getElementById("Fat").innerHTML = fat + " g of fats"

}

function maintainDiet() {
   
    let protein = 2 * weight
    let carb = 2.8 * weight
    let fat = 0.7 * weight
    protein = protein.toFixed(2)
    carb = carb.toFixed(2)
    fat = fat.toFixed(2)

    document.getElementById("DietName").innerHTML = "Maintain Weight"
    document.getElementById("Protein").innerHTML = protein + " g of protein"
    document.getElementById("Carb").innerHTML = carb + " g of carbs"
    document.getElementById("Fat").innerHTML = fat + " g of fats"

}

function gainDiet() {

    let protein = 2 * weight
    let carb = 4 * weight
    let fat = 0.8 * weight
    protein = protein.toFixed(2)
    carb = carb.toFixed(2)
    fat = fat.toFixed(2)
    calorie = calorie.toFixed(2)

    document.getElementById("DietName").innerHTML = "Gain Weight"
    document.getElementById("Protein").innerHTML = protein + " g of protein"
    document.getElementById("Carb").innerHTML = carb + " g of carbs"
    document.getElementById("Fat").innerHTML = fat + " g of fats"
}

function colorTable() {
    //BMI Table
    if (BMI < 16) {
        document.querySelector(".tb1tr1").style.backgroundColor = "lightgreen"
    } else if (BMI >= 16 && BMI <= 17 ) {
        document.querySelector(".tb1tr2").style.backgroundColor = "lightgreen"
    } else if (BMI >= 17 && BMI <= 18.5 ) {
        document.querySelector(".tb1tr3").style.backgroundColor = "lightgreen"
    } else if (BMI >= 18.5 && BMI <= 25 ) {
        document.querySelector(".tb1tr4").style.backgroundColor = "lightgreen"
    } else if (BMI >= 25 && BMI <= 30 ) {
        document.querySelector(".tb1tr5").style.backgroundColor = "lightgreen"
    } else if (BMI >= 30 && BMI <= 35 ) {
        document.querySelector(".tb1tr6").style.backgroundColor = "lightgreen"
    } else if (BMI >= 35 && BMI <= 40 ) {
        document.querySelector(".tb1tr7").style.backgroundColor = "lightgreen"
    } else if (BMI > 40){
        document.querySelector(".tb1tr8").style.backgroundColor = "lightgreen"
    } else {

    }
    //End BMI Table

    //FFMI Table
    if (FFMI < 18) {
        document.querySelector(".tb2tr1").style.backgroundColor = "lightgreen"
    } else if (FFMI >= 18 && FFMI <=20) {
        document.querySelector(".tb2tr2").style.backgroundColor = "lightgreen"
    } else if (FFMI >= 20 && FFMI <=21) {
        document.querySelector(".tb2tr3").style.backgroundColor = "lightgreen"
    } else if (FFMI >= 21 && FFMI <=23) {
        document.querySelector(".tb2tr4").style.backgroundColor = "lightgreen"
    } else if (FFMI >= 23 && FFMI <=25){
        document.querySelector(".tb2tr5").style.backgroundColor = "lightgreen"
    } else if (FFMI > 25) {
        document.querySelector(".tb2tr6").style.backgroundColor = "lightgreen"
    } else {

    }
    //End FFMI Table

    //BodyFat Table
    if (bodyFat <=6) {
        document.querySelector(".tb3tr1").style.backgroundColor = "lightgreen"
    } else if (bodyFat >= 6 && bodyFat <= 14) {
        document.querySelector(".tb3tr2").style.backgroundColor = "lightgreen"
    } else if (bodyFat >= 14 && bodyFat <= 18) {
        document.querySelector(".tb3tr3").style.backgroundColor = "lightgreen"
    } else if (bodyFat >= 18 && bodyFat <= 25) {
        document.querySelector(".tb3tr4").style.backgroundColor = "lightgreen"
    } else if (bodyFat >= 25){
        document.querySelector(".tb3tr5").style.backgroundColor = "lightgreen"
    } else {
        
    }
    //End BodyFat Table
}