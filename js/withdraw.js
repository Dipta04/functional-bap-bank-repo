// step-1
// add event handler with withdraw button

document.getElementById('btn-withdraw').addEventListener('click',function(){
    // step-2
    // get withdraw amount by using getInputfieldValueById function
    const newWithdrawAmount=getInputFieldValueById('withdraw-field');
    // step-3
    // get previous withdraw amount by using getTextElementValueById function
    const previousWithdrawTotal=getTextElementValueById('withdraw-total');
    // step-4
    // calculate new withdraw total and set the value 
    const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
    // step-5
    // set new withdraw total by using setTextElementvalueById  function
    setTextElementValueById('withdraw-total',newWithdrawTotal);
// step-6
// get previous balance total by using getTextElementValueById function
const previousBalanceTotal=getTextElementValueById("balance-total");
// step-7
// calculate new balance total
const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
// step-8
// set balance total using setTextElementValueById function
setTextElementValueById('balance-total',newBalanceTotal);
})
