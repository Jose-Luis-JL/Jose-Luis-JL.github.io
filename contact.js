document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Guardar el mensaje en el localStorage (simulando una base de datos)
    const requests = JSON.parse(localStorage.getItem('requests')) || [];
    requests.push({ name, email, message });
    localStorage.setItem('requests', JSON.stringify(requests));

    alert('Mensaje enviado exitosamente');
    document.getElementById('contact-form').reset();
});
