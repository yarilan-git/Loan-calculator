window.addEventListener('DOMContentLoaded', function() {

  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    document.getElementById("calc-form").addEventListener("submit", function (e) {
      e.preventDefault();
      update();

    })
  }
});

function getCurrentUIValues() {
  const userInputValues = {};
  userInputValues.amount = document.getElementById("loan-amount").value;
  userInputValues.years = document.getElementById("loan-years").value;
  userInputValues.rate = document.getElementById("loan-rate").value;
  return userInputValues;
  }


// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  console.log("in set up." );
  document.getElementById("loan-amount").value = 0;
  document.getElementById("loan-years").value = 0;
  document.getElementById("loan-rate").value = 0;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  
  const userInputValues = getCurrentUIValues();
  let monthlyPayment = calculateMonthlyPayment(userInputValues);  

  // if (userInputValues.amount == 0 || userInputValues.rate == 0 || userInputValues.years == 0) {
  //   monthlyPayment = '0.00';
  // } else {
  //   monthlyPayment = calculateMonthlyPayment(userInputValues);    
  // }  
  updateMonthly(monthlyPayment);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {  
  let payment;
  if (values.amount == 0 ||
      values.rate == 0 || 
      values.years == 0 ||
      isNaN(values.amount) ||
      isNaN(values.rate) ||
      isNaN(values.years)) {
    payment = '0.00';
  } else {
      let monthlyRate = values.rate / 1200;
      let a = values.amount * monthlyRate;
      let months = values.years * 12;
      let b = (1 + monthlyRate) ** (months * -1);
      let c = 1 - b;
      payment = (a / c).toFixed(2);
  }  
  return payment;  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {  
  document.getElementById("monthly-payment").innerText = monthly;
}
