// defining the valid email
let validEmail;

// checking the email format i.e. every time input is changed it's value is compared against the regular expression (Regex)
const emailInput = document.querySelector('.js-user-email');

emailInput.addEventListener('input', () => { 
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(emailRegex.test(emailInput.value)){
    emailInput.setCustomValidity('');
    validEmail = emailInput.value;
  }else{
    emailInput.setCustomValidity('this aint the correct format bud');
  }
});

// making the subscribe button interactive i.e. clicking it must send the form 
const subscribeButtonElem = document.querySelector('.js-subscribe');
subscribeButtonElem.addEventListener('click', () => {
  if(validEmail){
    subscribe(validEmail);
    validEmail = '';
    document.querySelector('.js-user-email').value = '';
  }
});