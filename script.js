//code write user in tele:@jokerpython3
document.getElementById('emailForm').addEventListener('submit', function(e) {
  e.preventDefault(); 

  const email = document.getElementById('email').value;
  const resultDiv = document.getElementById('result');

  
  resultDiv.innerHTML = '<p>جاري التحقق من الإيميل...</p>';

  
  const url = `https://isisisiisaoeoeeo.pythonanywhere.com/Check/Email-Gmail?email=${encodeURIComponent(email)}`;

  fetch(url)
    .then(response => response.text())
    .then(data => {
      if (data.includes('Good')) {
        resultDiv.innerHTML = `<p style="color: #4CAF50;">الايميل متاح يعني مامستخدم: ${email}</p>`;
      } else {
        resultDiv.innerHTML = `<p style="color: #FF5733;">ايميل غير متاح يعني مستخدم ${email}</p>`;
      }
    })
    .catch(error => {
      resultDiv.innerHTML = `<p style="color: #FF5733;">حدث خطا</p>`;
      console.error('Error:', error);
    });
});
