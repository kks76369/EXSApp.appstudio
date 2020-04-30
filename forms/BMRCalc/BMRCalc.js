/*
btnCalcBMR.onclick=function(){
  let weight = parseInt(inptWeight2.value)
  let heightFt = parseInt(inptHeight2ft.value)
  var gender = ['male','female'] 
  let heightIn = parseInt(inptHeight2in.value)
  let age = parseInt(inptAge.value) 
  
  let maleCalcWeight = weight * 6.32
  let maleCalcHeight = ((heightFt*12) + heightIn) * 12.7
  let maleCalcAge = age*6.8
  let maleBMR = 66 + maleCalcWeight + maleCalcHeight - maleCalcAge
  
   let femaleCalcWeight = weight * 4.35
  let femaleCalcHeight = ((heightFt*12) + heightIn) * 4.7
  let femaleCalcAge = age * 4.7
  let femaleBMR = 655 + femaleCalcWeight + femaleCalcHeight - femaleCalcAge
  
BMRCalc.onshow=function(){
  drpGender.clear()
  for (i = 0; i <= gender.length - 1; i++) 
        drpGender.addItem(gender[i])
} 
 
drpGender.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    
switch(s) {
    case "female":
      lblResults2.value = ("Your BMR is:"+ femaleBMR)
      break
    case "male":
      lblResults2.value = ("Your BMR is:" + maleBMR)
      break
    }
  }
}

btnReset2.onclick=function(){
  let weight = " "
  let heightFt = " "
  let heightIn = " "
  let gender = " "
  let age = " "
}
*/
  /*
  if (gender === 'female') {
  lblResults2.value = (`Your BMR is:` + femaleBMR)
  } else {
   lblResults2.value = (`Your BMR is:` + maleBMR)
   }*/
 

   /* drpGender.value == 'female'   // make dropdown show choice user made
    
    drpGender.value = "female"
    lblResults2.value = (`Your BMR is:` + femaleBMR)
  } else {
    lblResults2.value = (`Your BMR is:` + maleBMR)
  }*/
