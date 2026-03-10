// lets check for client side validity first 

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
const emailInput = document.querySelector('.js-email-input');

// check for format everytime user enter a character in input
emailInput.addEventListener('input', () => {

  if(emailRegex.test(emailInput.value)){
    emailInput.setCustomValidity("");
  }else{
    emailInput.setCustomValidity("Enter Correct Format eg. user123@gmail.com");
  };
});