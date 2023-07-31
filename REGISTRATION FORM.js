const form = document.getElementById('registration-form');
    const displayData = document.getElementById('display-data');
    const dataTable = document.getElementById('data-table');
    form.addEventListener('submit', function(e) {
      e.preventDefault(); 
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const newRow = document.createElement('tr');
      const nameCell = document.createElement('td');
      nameCell.textContent = name;
      const emailCell = document.createElement('td');
      emailCell.textContent = email;
      newRow.appendChild(nameCell);
      newRow.appendChild(emailCell);
      dataTable.appendChild(newRow);
      form.reset();
      displayData.style.display = 'block';
});