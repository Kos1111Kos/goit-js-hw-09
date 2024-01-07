document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');
  const storageKey = 'feedback-form-state';

  //
  const savedData = JSON.parse(localStorage.getItem(storageKey));
  if (savedData) {
    emailInput.value = savedData.email;
    messageInput.value = savedData.message;
  }

  form.addEventListener('input', function () {
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    localStorage.setItem(storageKey, JSON.stringify(formData));
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(formData);
    localStorage.removeItem(storageKey);
    emailInput.value = '';
    messageInput.value = '';
  });
});
// const STORAGE_KEY = 'feedback-form-state';
// const feedbackForm = document.querySelector('.feedback-form');
// const input = feedbackForm.elements.email;
// const textarea = feedbackForm.elements.message;

// feedbackForm.addEventListener('input', handleForm);
// feedbackForm.addEventListener('submit', handleSubmit);
// populateForm();

// function handleForm(event) {
//   const feedbackStorage = {};

//   feedbackStorage.email = event.currentTarget.elements.email.value.trim();
//   feedbackStorage.message = event.currentTarget.elements.message.value.trim();

//   localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackStorage));
// }

// function populateForm() {
//   const savedInfo = JSON.parse(localStorage.getItem(STORAGE_KEY));
//   if (savedInfo) {
//     input.value = savedInfo.email;
//     textarea.value = savedInfo.message;
//   }
// }

// function handleSubmit(event) {
//   event.preventDefault();
//   const email = event.currentTarget.elements.email.value.trim();
//   const message = event.currentTarget.elements.message.value.trim();
//   if (email === '' || message === '') {
//     alert('Please fill in all fields');
//     return;
//   }

//   console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

//   localStorage.removeItem(STORAGE_KEY);
//   event.target.reset();
// }
