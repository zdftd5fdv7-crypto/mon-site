const form = document.getElementById('signup-form');
const message = document.querySelector('.form-message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = form.email.value.trim();

  if (!email || !email.includes('@')) {
    message.textContent = 'Please enter a valid email address to continue.';
    return;
  }

  message.textContent = `Thanks, ${email}! Your checklist is on the way.`;
  form.reset();
});
