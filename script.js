// Sample data for the table
const data = [
    { name: "John Doe", age: 25, city: "New York" },
    { name: "Jane Smith", age: 30, city: "Los Angeles" },
    { name: "Emily Johnson", age: 22, city: "Chicago" },
    { name: "Michael Brown", age: 35, city: "Houston" },
    { name: "Jessica Williams", age: 28, city: "Phoenix" },
    { name: "David Jones", age: 40, city: "Philadelphia" },
    { name: "Susan Miller", age: 26, city: "San Antonio" },
    { name: "James Wilson", age: 29, city: "San Diego" },
    { name: "Mary Davis", age: 32, city: "Dallas" },
    { name: "Robert Garcia", age: 24, city: "San Jose" },
    { name: "Linda Anderson", age: 31, city: "Austin" },
    { name: "Thomas Lee", age: 27, city: "Jacksonville" },
];

let currentPage = 1;
let rowsPerPage = 5;

// Function to render the table
function renderTable(page = 1) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';

    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    const paginatedData = data.slice(startIndex, endIndex);

    paginatedData.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${row.name}</td>
            <td>${row.age}</td>
            <td>${row.city}</td>
        `;
        tableBody.appendChild(tr);
    });

    renderPagination();
}
