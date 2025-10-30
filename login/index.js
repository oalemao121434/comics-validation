// Dados de usuários simulados (em um sistema real, isso seria armazenado em um banco de dados)
const users = [
    { username: 'admin', email: 'admin@loja.com', password: '123456' },
    { username: 'user', email: 'user@loja.com', password: 'password' }
];

// Função para autenticar usuário
function authenticateUser(usernameOrEmail, password) {
    return users.find(user =>
        (user.username === usernameOrEmail || user.email === usernameOrEmail) &&
        user.password === password
    );
}

// Event listener para o formulário de login
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const user = authenticateUser(username, password);

        if (user) {
            // Login bem-sucedido
            alert(`Bem-vindo, ${user.username}!`);
            errorMessage.textContent = '';
            // Redirecionar para a página inicial
            window.location.href = '../inicio/index.html';
        } else {
            // Login falhou
            errorMessage.textContent = 'Usuário ou senha incorretos.';
        }
    });
});
