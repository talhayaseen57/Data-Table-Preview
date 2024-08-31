// Sample data for the table
const data = [
    { IdReagent: 6994, ReagentCode: 6969, en: "Green Cross Rapid Test", it: "Green Cross Rapid Test", fr: "Green Cross Rapid Test", de: "Green Cross Rapid Test", xx: "Green Cross Rapid Test", LabCode: 0, Disabled: 0 },
    { IdReagent: 6996, ReagentCode: 6972, en: "ELITECH Group Reagents", it: "ELITECH Group Reagents", fr: "ELITECH Group Reagents", de: "ELITECH Group Reagents", xx: "ELITECH Group Reagents", LabCode: 0, Disabled: 0 },
    { IdReagent: 6998, ReagentCode: 6970, en: "VIRION SERION ELISA classic", it: "VIRION SERION ELISA classic", fr: "VIRION SERION ELISA classic", de: "VIRION SERION ELISA classic", xx: "VIRION SERION ELISA classic", LabCode: 0, Disabled: 0 },
    { IdReagent: 6999, ReagentCode: 100008, en: "ROCHE Combur Test", it: "ROCHE Combur Test", fr: "ROCHE Combur Test", de: "ROCHE Combur Test", xx: "ROCHE Combur Test", LabCode: 0, Disabled: 1 },
    { IdReagent: 7000, ReagentCode: 100009, en: "HEALGEN", it: "HEALGEN", fr: "HEALGEN", de: "HEALGEN", xx: "HEALGEN", LabCode: 0, Disabled: 0 },
    { IdReagent: 7001, ReagentCode: 100010, en: "SIEMENS Multistix", it: "SIEMENS Multistix", fr: "SIEMENS Multistix", de: "SIEMENS Multistix", xx: "SIEMENS Multistix", LabCode: 0, Disabled: 0 },
    { IdReagent: 7002, ReagentCode: 100011, en: "SIEMENS Clinitek", it: "SIEMENS Clinitek", fr: "SIEMENS Clinitek", de: "SIEMENS Clinitek", xx: "SIEMENS Clinitek", LabCode: 0, Disabled: 0 },
    { IdReagent: 7003, ReagentCode: 100012, en: "MINDRAY U-11", it: "MINDRAY U-11", fr: "MINDRAY U-11", de: "MINDRAY U-11", xx: "MINDRAY U-11", LabCode: 0, Disabled: 1 },
    { IdReagent: 7004, ReagentCode: 100013, en: "Cherto", it: "Cherto", fr: "Cherto", de: "Cherto", xx: "Cherto", LabCode: 0, Disabled: 0 },
    { IdReagent: 7015, ReagentCode: 100023, en: "ABBOTT System-Reagent", it: "ABBOTT System-Reagent", fr: "ABBOTT System-Reagent", de: "ABBOTT System-Reagent", xx: "ABBOTT System-Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7016, ReagentCode: 100024, en: "ROCHE System-Reagent", it: "ROCHE System-Reagent", fr: "ROCHE System-Reagent", de: "ROCHE System-Reagent", xx: "ROCHE System-Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7017, ReagentCode: 100025, en: "MINDRAY Reagent", it: "MINDRAY Reagent", fr: "MINDRAY Reagent", de: "MINDRAY Reagent", xx: "MINDRAY Reagent", LabCode: 0, Disabled: 1 },
    { IdReagent: 7019, ReagentCode: 100027, en: "ERBA MANNHEIM System-Reagent", it: "ERBA MANNHEIM System-Reagent", fr: "ERBA MANNHEIM System-Reagent", de: "ERBA MANNHEIM System-Reagent", xx: "ERBA MANNHEIM System-Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7020, ReagentCode: 100028, en: "SIEMENS System-Reagent", it: "SIEMENS System-Reagent", fr: "SIEMENS System-Reagent", de: "SIEMENS System-Reagent", xx: "SIEMENS System-Reagent", LabCode: 0, Disabled: 1 },
    { IdReagent: 7039, ReagentCode: 100041, en: "INSTRUMENTATION LABORATORY System Reagent", it: "INSTRUMENTATION LABORATORY System Reagent", fr: "INSTRUMENTATION LABORATORY System Reagent", de: "INSTRUMENTATION LABORATORY System Reagent", xx: "INSTRUMENTATION LABORATORY System Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7040, ReagentCode: 100042, en: "BECKMAN COULTER System Reagent", it: "BECKMAN COULTER System Reagent", fr: "BECKMAN COULTER System Reagent", de: "BECKMAN COULTER System Reagent", xx: "BECKMAN COULTER System Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7041, ReagentCode: 100043, en: "DIRUI Urinalysis Strip Reagent", it: "DIRUI Urinalysis Strip Reagent", fr: "DIRUI Urinalysis Strip Reagent", de: "DIRUI Urinalysis Strip Reagent", xx: "DIRUI Urinalysis Strip Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7042, ReagentCode: 6973, en: "BPC BIOSED", it: "BPC BIOSED", fr: "BPC BIOSED", de: "BPC BIOSED", xx: "BPC BIOSED", LabCode: 0, Disabled: 0 },
    { IdReagent: 7045, ReagentCode: 6974, en: "HORIBA System Reagent", it: "HORIBA System Reagent", fr: "HORIBA System Reagent", de: "HORIBA System Reagent", xx: "HORIBA System Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7056, ReagentCode: 6975, en: "PKL POKLER System Reagent", it: "PKL POKLER System Reagent", fr: "PKL POKLER System Reagent", de: "PKL POKLER System Reagent", xx: "PKL POKLER System Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7082, ReagentCode: 6976, en: "DIASYS System Reagent", it: "DIASYS System Reagent", fr: "DIASYS System Reagent", de: "DIASYS System Reagent", xx: "DIASYS System Reagent", LabCode: 0, Disabled: 1 },
    { IdReagent: 7083, ReagentCode: 6978, en: "BIOMERIEUX Reagent", it: "BIOMERIEUX Reagent", fr: "BIOMERIEUX Reagent", de: "BIOMERIEUX Reagent", xx: "BIOMERIEUX Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7084, ReagentCode: 6977, en: "TOSOH System Reagent", it: "TOSOH System Reagent", fr: "TOSOH System Reagent", de: "TOSOH System Reagent", xx: "TOSOH System Reagent", LabCode: 0, Disabled: 0 },
    { IdReagent: 7103, ReagentCode: 6980, en: "WAKO Reagents", it: "WAKO Reagents", fr: "WAKO Reagents", de: "WAKO Reagents", xx: "WAKO Reagents", LabCode: 0, Disabled: 0 },
    { IdReagent: 7105, ReagentCode: 6981, en: "BIORAD System Reagent", it: "BIORAD System Reagent", fr: "BIORAD System Reagent", de: "BIORAD System Reagent", xx: "BIORAD System Reagent", LabCode: 0, Disabled: 0 },
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
            <td>${row.ReagentCode}</td>
            <td>${row.en}</td>
            <td>${row.it}</td>
            <td>${row.fr}</td>
            <td>${row.de}</td>
            <td>${row.Disabled}</td>
        `;
        tableBody.appendChild(tr);
    });

    renderPagination();
}

// Function to render pagination
function renderPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const totalPages = Math.ceil(data.length / rowsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement('li');
        li.className = `page-item ${i === currentPage ? 'active' : ''}`;
        li.innerHTML = `<a class="page-link" href="#" onclick="goToPage(${i})">${i}</a>`;
        pagination.appendChild(li);
    }
}

// Function to handle page change
function goToPage(page) {
    currentPage = page;
    renderTable(page);
}

// Function to handle sorting
function sortTable(columnIndex) {
    data.sort((a, b) => {
        const valA = Object.values(a)[columnIndex].toString().toLowerCase();
        const valB = Object.values(b)[columnIndex].toString().toLowerCase();

        if (valA < valB) return -1;
        if (valA > valB) return 1;
        return 0;
    });

    renderTable(currentPage);
}

// Initial table render
renderTable();