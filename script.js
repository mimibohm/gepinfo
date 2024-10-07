// script.js

// API meghívás és adat megjelenítése
document.addEventListener('DOMContentLoaded', () => {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];

            // Felhasználói adatok
            const fullName = `${user.name.first} ${user.name.last}`;
            const email = user.email;
            const phone = user.phone;
            const city = user.location.city;
            const country = user.location.country;
            const picture = user.picture.large;

            // HTML elemek
            document.getElementById('random-name').textContent = fullName;
            document.getElementById('random-email').textContent = email;
            document.getElementById('random-phone').textContent = phone;
            document.getElementById('random-location').textContent = `${city}, ${country}`;
            document.getElementById('random-photo').src = picture;
        })
        .catch(error => console.error('Error:', error));
});
