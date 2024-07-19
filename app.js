const formEl = document.getElementById('signup-form');

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
