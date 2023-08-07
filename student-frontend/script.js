document.getElementById('addLoginForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const email = document.getElementById('userName').value;
    const password = document.getElementById('password').value;

    // console.log(JSON.stringify({email, password}));
    const url = 'http://localhost:8080/auth/login/';

    console.log(JSON.stringify({email, password}));

    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Authentication failed.');
        }
        return response.json();
    })
    .then(data => {
        const token = data.jwtToken; 
        console.log('Authentication successful. Token:', token);
        localStorage.setItem('accessToken', token);
        window.location.href = "./students.html";

    })
    .catch(error => {
        alert("Invalid Username or Password !!");
        location.reload() 
        console.error('Error:', error);
    });
});