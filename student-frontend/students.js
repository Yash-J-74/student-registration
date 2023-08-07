
const accessToken = localStorage.getItem("accessToken");
if(accessToken === null) {
  window.location.href = "./index.html"
}
console.log(`Bearer ${accessToken}`);
fetch('http://localhost:8080/student', {
  headers: {
    'Authorization': `Bearer ${accessToken}`,
  }
})
.then(response => response.json())
.then(data => {
  const studentTable = document.getElementById('dataTable');
  const tbody = studentTable.getElementsByTagName('tbody')[0];
  
  data.forEach(student => {
    const row = tbody.insertRow();
    row.insertCell().textContent = student.id;
    row.insertCell().textContent = student.firstName;
    row.insertCell().textContent = student.lastName;
    row.insertCell().textContent = student.dob;
    row.insertCell().textContent = student.age;
    row.insertCell().textContent = student.email;
    row.insertCell().textContent = student.studentGender;
    row.insertCell().textContent = student.phoneNumber;
    
    const additionalCell = row.insertCell();
    additionalCell.innerHTML = `
    <td class=" btn">
          <button style="
          width: 115px;   
          height: 30px;
          font-size: 15px;
          background-color: white;
          font-weight: 2;
          color: #004d43;
          border-radius: 5px;
          border: 2px solid #004d43;
          " onMouseOver="this.style.cursor='pointer'" data-id="${student.id}" onclick="handelUpdate(${student.id})" >Update</button>
          <button style="
          width: 115px;   
          height: 30px;
          font-size: 15px;
          background-color: white;
          font-weight: 2;
          border-radius: 5px;
          color: #004d43;
          border: 2px solid #004d43;
          " onMouseOver="this.style.cursor='pointer'" data-id="${student.id}" onclick="handleDelete(${student.id})">Delete</button>
    </td>
      
    `;
  });
})
.catch(error => console.error('Error:', error));

document.getElementById("logoutBtn").addEventListener("click", function() {
  localStorage.clear();
});

function handleDelete(studentId) {
  const confirmed = confirm(`Are you sure you want to delete student with ID: ${studentId}?`);
  if (confirmed) {
    fetch(`http://localhost:8080/student/${studentId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${accessToken}`
      },
    })
    .then(response => {
      if (response.ok) {
        console.log(`Student with ID ${studentId} has been deleted.`);
        location.reload(); // Reload the page
      } else {
        console.error('Delete request failed:', response.statusText);
      }
    })
    .catch(error => console.error('Error:', error));
  }
}

function handelUpdate(studentId)  {
  sessionStorage.setItem("id",studentId);
  window.location.href = "./update.html";
}
