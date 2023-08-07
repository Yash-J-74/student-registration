
const accessToken = localStorage.getItem("accessToken");
// console.log(`Bearer ${accessToken}`);
if(accessToken === null) {
  window.location.href = "./index.html"
}
if(sessionStorage.getItem("id") == undefined) {
  window.location.href = "./students.html";
}

console.log(sessionStorage.getItem("id"));

fetch('http://localhost:8080/student/' + sessionStorage.getItem("id"), {
  headers: {
    'Authorization': `Bearer ${accessToken}`,
  },
}) 
  .then(response => response.json())
  .then(data => {
    document.getElementById('first_name').value = data.firstName;
    document.getElementById('last_name').value = data.lastName;
    document.getElementById('dob').value = data.dob;
    document.getElementById('email').value = data.email;
    document.querySelector('input[name="studentGender"][value="' + data.studentGender + '"]').checked = true;
    document.getElementById('phone_number').value = data.phoneNumber;
  })
  .catch(error => {
    console.error('Error:', error);
});

const form = document.getElementById("addStudentForm");
form.addEventListener("submit", function(event) {
  event.preventDefault();
  var formData = new FormData(this);
  var jsonData = {};
  formData.forEach(function(value, key) {
    jsonData[key] = value;
  });

  putData(jsonData);
  sessionStorage.clear();
  window.location.href = "./students.html";
});

function putData(data) {
  fetch('http://localhost:8080/student/' + sessionStorage.getItem("id"), {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(data => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
}
  

