const formEl = document.getElementById('signup-form');
const passwordEl = document.getElementById('password');
const confirmPsswrdEl = document.getElementById('c_password');

formEl.addEventListener('submit', function (e) {
  e.preventDefault();

  const formData = new FormData(this);

  if (formData.get('password') !== formData.get('c_password')) {
    console.log('Passwords do not match');
  }
  for (const [key, value] of formData) {
    console.log(`${key} - ${value}`);
  }
});

passwordEl.addEventListener('keyup', function (e) {
  if (confirmPsswrdEl.value != this.value) {
    console.log('Passwords are not match');
    return;
  }

  console.log('Matching');
});

confirmPsswrdEl.addEventListener('keyup', function (e) {
  if (passwordEl.value != this.value) {
    console.log('Passwords are not match');
    return;
  }

  console.log('Matching');
});
