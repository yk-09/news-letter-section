// lets check for client side validity first 

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
const emailInput = document.querySelector('.js-email-input');
const newsLetterForm = document.querySelector('.js-newsletter-form');
const statusDiv = document.querySelector('.js-request-status');
const statusBadgeDiv = document.querySelector('.js-status-badge');
const statusMessage = document.querySelector('.js-status-message');

// check for format everytime user enter a character in input
emailInput.addEventListener('input', () => {

  if(emailRegex.test(emailInput.value)){
    emailInput.setCustomValidity("");
  }else{
    emailInput.setCustomValidity("Enter Correct Format eg. user123@gmail.com");
  };
});

// check when form submits
newsLetterForm.addEventListener('submit', (event) => {

  event.preventDefault();

  // before sending to backend make sure the spaces from input value are removed
  const emailValue = emailInput.value.trim();
  if(emailRegex.test(emailValue)){
    subscribe(emailValue);
    emailInput.value = '';
  }
});

async function subscribe(email){

  console.log('loading...');
  try{
    const response = await fetch('https://69ac8ee99ca639a5217f2c66.mockapi.io/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        email,
      })
    });

    if(!response.ok){
      throw new Error('something wrong occured');
    }

    showStatus('success', 'Subscription successfull! Please check your email to confirm', 'Success');  
  }
  catch{
    showStatus('error', 'Failed to subscribe. Please ensure your email is correct or try again later', 'Error');
  }
}

function showStatus(statusClass, message, badge){
  statusDiv.classList.remove('is-error', 'is-success')

  statusDiv.classList.add(`is-${statusClass}`);
  statusBadgeDiv.innerText = badge;
  statusMessage.innerText = message;
}

// next step is to learn how to make this code more professional like for example adding error to catch 