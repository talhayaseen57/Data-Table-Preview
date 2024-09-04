# Data Table Preview

This repository provides a simple and dynamic data table that supports sorting, searching, pagination, and export functionalities. The table is built with HTML, CSS (Bootstrap), and JavaScript.

## Features

- **Sortable Columns**: Click on any column header to sort the table by that column.
- **Searchable Data**: Use the search bar to filter table rows based on the input text.
- **Paginated View**: Navigate through the table pages with pagination controls.
- **Export Data**: Export table data to CSV, Excel, or print the table directly to PDF.
- **Dynamic Suggestions**: Real-time suggestions in the search bar based on the table data.

## Demo

To see the table in action, clone the repository and open `index.html` in your browser.

## Files

- **index.html**: The main HTML file that contains the structure of the webpage, including the table and search bar.
- **style.css**: The CSS file for custom styling (alongside Bootstrap).
- **script.js**: The JavaScript file that handles data rendering, sorting, searching, pagination, and exporting functionalities.

## How to Use

1. Clone the repository:
    ```bash
    git clone https://github.com/talhayaseen57/Data-Table-Preview.git
    cd Data-Table-Preview
    ```

2. Open `index.html` in your preferred browser.

3. Interact with the table:
   - **Search**: Type in the search bar to filter the table rows. Suggestions will appear as you type.
   - **Sort**: Click on the column headers to sort the table.
   - **Paginate**: Use the pagination controls to navigate through the pages.
   - **Export**: Click on the export buttons to download the data as CSV, Excel, or print it.

## Dependencies

This project uses the following libraries:
- [Bootstrap 5.3.3](https://getbootstrap.com/)
- [Font Awesome 5.15.4](https://fontawesome.com/)
- [xlsx.js](https://cdnjs.com/libraries/xlsx) for Excel export
- [html2canvas](https://html2canvas.hertzen.com/) for printing to PDF

These dependencies are loaded via CDN.

## Customization

- **Rows Per Page**: You can select how many rows to display per page from the dropdown.
- **Data**: The data is currently hardcoded in `script.js`. You can replace it with your own data by modifying the `data` array.

## Contributing

Feel free to submit issues or pull requests if you have suggestions or improvements.
