

// color of the day: Tangerine

document.addEventListener("DOMContentLoaded", function() {
let check = document.querySelector("#subscribe");
let homeAddress = document.querySelector("#homeAddress");
let billingAddress = document.querySelector("#billingAddress");


check.addEventListener("click", function(){
    if (check.checked){
        document.querySelector("#emailDiv").style.display="block";
    } else {
        document.querySelector("#emailDiv").style.display="none";
    }
});
}


// document.addEventListener("DOMContentLoaded", function() {
//   let check = document.querySelector("#subscribe");
//   let homeAddress = document.querySelector("#homeAddress");
//   let billingAddress = document.querySelector("#billingAddress"); 

check.addEventListener("click", function(){
      if (check.checked) {
          billingAddress.value = homeAddress.value; // Set the billing address to the home address
          billingAddress.style.display = "block";   // Show the billing address field
          homeAddress.disabled = true;              // Disable the home address field
      } else {
          billingAddress.style.display = "none";    // Hide the billing address field
          homeAddress.disabled = false;             // Enable the home address field
      }
  });




