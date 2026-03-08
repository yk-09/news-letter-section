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

async function subscribe(email){
  const response = await fetch('https://69ac8ee99ca639a5217f2c66.mockapi.io/subscribers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
    })
  });

  if(response.ok){
    alert('congo! your sub is successfull. Please check your email.');

  }else{
    alert(`sorry blud! but theres a problem ${response.status}`);
  }
}