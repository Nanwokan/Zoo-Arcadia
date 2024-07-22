

let btn = document.querySelector('#btn')
  let sidebar = document.querySelector('.sidebar')

  btn.onclick = function () {
    sidebar.classList.toggle('active');
  };



  document.getElementById('toggleFormBtn').addEventListener('click', function() {
    const formContainer = document.getElementById('formContainer');
    formContainer.classList.toggle('hidden');
});


document.getElementById('filterSelect').addEventListener('change', function() {
    const selectedValue = this.value;
    const rows = document.querySelectorAll('#myTable tbody tr');

    rows.forEach(row => {
        const cellValue = row.cells[2].innerText; // Obtient le texte de la troisième cellule (état)
        if (selectedValue === 'all' || cellValue === selectedValue) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
});

// database 
