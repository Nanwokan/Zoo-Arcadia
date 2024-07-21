<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion des Comptes - Admin</title>
    <link rel="stylesheet" href="../CSS/Code CSS.css">
</head>
<body>
    <header>
        <!-- Header code -->
    </header>
    <main>
        <h1>Gestion des Comptes Utilisateurs</h1>
        <h2>Créer un Utilisateur</h2>
        <form id="createUserForm">
            <label for="prenom">Prénom :</label>
            <input type="text" id="prenom" name="prenom" required>
            <label for="nom">Nom :</label>
            <input type="text" id="nom" name="nom" required>
            <label for="email">Email :</label>
            <input type="email" id="email" name="email" required>
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="password" required>
            <label for="role_id">Rôle :</label>
            <select id="role_id" name="role_id" required>
                <!-- Les rôles seront chargés dynamiquement -->
            </select>
            <button type="submit">Créer</button>
        </form>
        <h2>Modifier un Utilisateur</h2>
        <form id="updateUserForm">
            <label for="emailUpdate">Email :</label>
            <input type="email" id="emailUpdate" name="email" required>
            <label for="prenomUpdate">Prénom :</label>
            <input type="text" id="prenomUpdate" name="prenom">
            <label for="nomUpdate">Nom :</label>
            <input type="text" id="nomUpdate" name="nom">
            <label for="passwordUpdate">Mot de passe :</label>
            <input type="password" id="passwordUpdate" name="password">
            <label for="role_idUpdate">Rôle :</label>
            <select id="role_idUpdate" name="role_id">
                <!-- Les rôles seront chargés dynamiquement -->
            </select>
            <button type="submit">Modifier</button>
        </form>
        <h2>Supprimer un Utilisateur</h2>
        <form id="deleteUserForm">
            <label for="emailDelete">Email :</label>
            <input type="email" id="emailDelete" name="email" required>
            <button type="submit">Supprimer</button>
        </form>
        <h2>Liste des Utilisateurs</h2>
        <table id="usersTable">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Prénom</th>
                    <th>Nom</th>
                    <th>Rôle</th>
                </tr>
            </thead>
            <tbody>
                <!-- Les utilisateurs seront chargés dynamiquement -->
            </tbody>
        </table>
        <p id="message"></p>
    </main>
    <footer>
        <!-- Footer code -->
    </footer>
    <script>
        document.addEventListener('DOMContentLoaded', async () => {
            const token = localStorage.getItem('token');
            const message = document.getElementById('message');
            if (!token) {
                message.textContent = 'Accès refusé. Veuillez vous connecter.';
                message.style.color = 'red';
                return;
            }

            try {
                // Charger les rôles
                const rolesResponse = await fetch('http://localhost:2003/api/users/roles', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const roles = await rolesResponse.json();
                const roleSelect = document.getElementById('role_id');
                const roleSelectUpdate = document.getElementById('role_idUpdate');
                roles.forEach(role => {
                    const option = document.createElement('option');
                    option.value = role.role_id;
                    option.textContent = role.label;
                    roleSelect.appendChild(option);
                    const optionUpdate = document.createElement('option');
                    optionUpdate.value = role.role_id;
                    optionUpdate.textContent = role.label;
                    roleSelectUpdate.appendChild(optionUpdate);
                });

                // Charger les utilisateurs
                const usersResponse = await fetch('http://localhost:2003/api/users', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const users = await usersResponse.json();
                const usersTableBody = document.getElementById('usersTable').querySelector('tbody');
                users.forEach(user => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${user.email}</td>
                        <td>${user.prenom}</td>
                        <td>${user.nom}</td>
                        <td>${user.Roles.map(role => role.label).join(', ')}</td>
                    `;
                    usersTableBody.appendChild(row);
                });

                // Créer un utilisateur
                document.getElementById('createUserForm').addEventListener('submit', async (event) => {
                    event.preventDefault();
                    const prenom = document.getElementById('prenom').value;
                    const nom = document.getElementById('nom').value;
                    const email = document.getElementById('email').value;
                    const password = document.getElementById('password').value;
                    const role_id = document.getElementById('role_id').value;

                    const response = await fetch('http://localhost:2003/api/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({ prenom, nom, email, password, role_id })
                    });

                    if (response.ok) {
                        message.textContent = 'Utilisateur créé avec succès';
                        message.style.color = 'green';
                    } else {
                        const errorData = await response.json();
                        message.textContent = errorData.message;
                        message.style.color = 'red';
                    }
                });

                // Modifier un utilisateur
                document.getElementById('updateUserForm').addEventListener('submit', async (event) => {
                    event.preventDefault();
                    const email = document.getElementById('emailUpdate').value;
                    const prenom = document.getElementById('prenomUpdate').value;
                    const nom = document.getElementById('nomUpdate').value;
                    const password = document.getElementById('passwordUpdate').value;
                    const role_id = document.getElementById('role_idUpdate').value;

                    const response = await fetch(`http://localhost:2003/api/users/${email}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`
                        },
                        body: JSON.stringify({ prenom, nom, password, role_id })
                    });

                    if (response.ok) {
                        message.textContent = 'Utilisateur modifié avec succès';
                        message.style.color = 'green';
                    } else {
                        const errorData = await response.json();
                        message.textContent = errorData.message;
                        message.style.color = 'red';
                    }
                });

                // Supprimer un utilisateur
                document.getElementById('deleteUserForm').addEventListener('submit', async (event) => {
                    event.preventDefault();
                    const email = document.getElementById('emailDelete').value;

                    const response = await fetch(`http://localhost:2003/api/users/${email}`, {
                        method: 'DELETE',
                        headers: {
                            'Authorization': `Bearer ${token}`
                        }
                    });

                    if (response.ok) {
                        message.textContent = 'Utilisateur supprimé avec succès';
                        message.style.color = 'green';
                    } else {
                        const errorData = await response.json();
                        message.textContent = errorData.message;
                        message.style.color = 'red';
                    }
                });
            } catch (error) {
                message.textContent = 'Erreur de connexion';
                message.style.color = 'red';
            }
        });
    </script>
</body>
</html>
