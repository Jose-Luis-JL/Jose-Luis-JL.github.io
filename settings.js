document.addEventListener('DOMContentLoaded', function() {
    const settingsForm = document.getElementById('settings-form');
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) {
        document.getElementById('new-username').value = user.username;
        document.getElementById('new-phone').value = user.phone;
        document.getElementById('new-email').value = user.email;
        document.getElementById('new-address').value = user.address;
    }

    settingsForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newPhone = document.getElementById('new-phone').value;
        const newEmail = document.getElementById('new-email').value;
        const newAddress = document.getElementById('new-address').value;

        const updatedUser = {
            username: newUsername,
            phone: newPhone,
            email: newEmail,
            address: newAddress
        };

        localStorage.setItem('user', JSON.stringify(updatedUser));
        alert('Datos actualizados con éxito');
    });
});


