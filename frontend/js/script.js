

let btn = document.querySelector('#btn')
  let sidebar = document.querySelector('.sidebar')

  btn.onclick = function () {
    sidebar.classList.toggle('active');
  };



document.getElementById('toggleFormBtn').addEventListener('click', function() {
        const formContainer = document.getElementById('formContainer');
        if (formContainer.classList.contains('hidden')) {
            formContainer.classList.remove('hidden');
        } else {
            formContainer.classList.add('hidden');
        }
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

document.addEventListener('DOMContentLoaded', function() {
    // Exemple de récupération des animaux
    fetch('http://localhost:3000/animals')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Manipulez les données et mettez-les à jour dans le DOM
        })
        .catch(error => console.error('Erreur:', error));
    
    // Exemple d'ajout d'un nouvel animal
    document.getElementById('addAnimalForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const newAnimal = {
            name: document.getElementById('animal_name').value,
            species: document.getElementById('animal_species').value,
            habitat: document.getElementById('animal_habitat').value
        };

        fetch('http://localhost:3000/animals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAnimal)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Mettez à jour le DOM avec le nouvel animal ajouté
        })
        .catch(error => console.error('Erreur:', error));
    });
});

