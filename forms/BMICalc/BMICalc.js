btnCalcBMI.onclick=function(){
  let h1 = parseInt(inptHeight.value)
  let h12 = parseInt(inptHeightFeet.value)
  let newh12 = h12*12
  let totalHeight = parseInt(h1 + newh12)
  let imperialHeight= (totalHeight*totalHeight)
  let newh1 = (totalHeight * 0.0254)
  let newTotalHeight = (newh1*newh1)
  let w1 = parseInt(inptWeight.value)
  let imperialTotal= w1/imperialHeight
  let BMI = imperialTotal*703
  let neww1 =  (w1*0.453592)
  let notBMI = parseInt(neww1/newh1)
  lblResult.value = (`Your BMI is: ${BMI}`)
  
if (BMI < 18.5) {
  lblDiagnoses.value = (`Your BMI is considered to be UNDERWEIGHT`)
} else if  (BMI => 18.5 || BMI <= 24.9) {
  lblDiagnoses.value = (`Your BMI is considered to be NORMAL`)
} else if  (BMI => 25 || BMI <= 29.9) {
  lblDiagnoses.value = (`Your BMI is considered to be OVERWEIGHT`)
} else if  (BMI > 30) { 
  lblDiagnoses.value = (`Your BMI is considered to be OBESE`)
} else {
  (`I do not know your BMI`) 
  }
}

btnRest.onclick=function(){
  inptHeight.value = " " 
  inptHeightFeet.value = " " 
  inptWeight.value = " " 
  lblDiagnoses.value = " "
  lblResult.value = " "
}
