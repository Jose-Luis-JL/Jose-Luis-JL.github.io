document.addEventListener('DOMContentLoaded', function() {
    const shipmentTableBody = document.querySelector('#shipment-table tbody');
    let shipments = JSON.parse(localStorage.getItem('shipments')) || [];

    function displayShipments() {
        shipmentTableBody.innerHTML = '';
        shipments.forEach(shipment => {
            const shipmentRow = document.createElement('tr');
            shipmentRow.innerHTML = `
                <td>${shipment.name}</td>
                <td>${shipment.phone}</td>
                <td>${shipment.email}</td>
                <td>${shipment.address}</td>
                <td>${shipment.products.map(product => `${product.name} (${product.quantity})`).join(', ')}</td>
            `;
            shipmentTableBody.appendChild(shipmentRow);
        });
    }

    displayShipments();
});
