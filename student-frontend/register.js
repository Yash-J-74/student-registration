const accessToken = localStorage.getItem("accessToken");
// console.log(`Bearer ${accessToken}`);
if(accessToken === null) {
  window.location.href = "./index.html"
}

const form = document.getElementById("addStudentForm");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  var formData = new FormData(this);
  var jsonData = {};
  formData.forEach(function(value, key) {
    jsonData[key] = value;
  });

  postData(jsonData);
  window.location.href = "./students.html";
});

function postData(data) {
  fetch(`http://localhost:8080/student/`, {
    method: 'POST',
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

