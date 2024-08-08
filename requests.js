document.addEventListener('DOMContentLoaded', function() {
    const requestsTable = document.getElementById('requestsTable').getElementsByTagName('tbody')[0];

    // Obtener solicitudes desde el localStorage
    let requests = JSON.parse(localStorage.getItem('requests')) || [];

    function updateRequests() {
        requestsTable.innerHTML = '';
        requests.forEach((request) => {
            const row = requestsTable.insertRow();
            row.innerHTML = `
                <td>${request.name}</td>
                <td>${request.email}</td>
                <td>${request.message}</td>
            `;
        });
        document.getElementById('requestCount').textContent = requests.length;
    }

    updateRequests();
});
