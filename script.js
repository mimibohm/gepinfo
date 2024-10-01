// script.js

document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById('user-container');
    const fetchButton = document.getElementById('fetch-user');

    fetchButton.addEventListener('click', fetchRandomUser);

    function fetchRandomUser() {
        fetch('https://randomuser.me/api/')
            .then(response => response.json())
            .then(data => {
                const user = data.results[0];
                displayUser(user);
            })
            .catch(error => console.error('Error fetching user:', error));
    }

    function displayUser(user) {
        userContainer.innerHTML = `
            <h2>${user.name.first} ${user.name.last}</h2>
            <img src="${user.picture.large}" alt="User Picture">
            <p><strong>Email:</strong> ${user.email}</p>
            <p><strong>Phone:</strong> ${user.phone}</p>
            <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
        `;
    }
});
