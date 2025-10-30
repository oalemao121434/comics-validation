// Dados de usuários simulados (em um sistema real, isso seria armazenado em um banco de dados)
let users = [
    { username: 'admin', email: 'admin@loja.com', password: '123456' },
    { username: 'user', email: 'user@loja.com', password: 'password' }
];

// Função para registrar usuário
function registerUser(name, email, password) {
    // Verificar se o email já existe
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return { success: false, message: 'Email já cadastrado.' };
    }

    // Adicionar novo usuário
    const newUser = {
        username: name.split(' ')[0].toLowerCase(), // Usar primeiro nome como username
        email: email,
        password: password
    };
    users.push(newUser);
    return { success: true, message: 'Cadastro realizado com sucesso!' };
}

// Event listener para o formulário de cadastro
document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const errorMessage = document.getElementById('error-message');

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        // Validações básicas
        if (!name || !email || !password || !confirmPassword) {
            errorMessage.textContent = 'Todos os campos são obrigatórios.';
            return;
        }

        if (password !== confirmPassword) {
            errorMessage.textContent = 'As senhas não coincidem.';
            return;
        }

        if (password.length < 6) {
            errorMessage.textContent = 'A senha deve ter pelo menos 6 caracteres.';
            return;
        }

        // Tentar registrar
        const result = registerUser(name, email, password);

        if (result.success) {
            alert(result.message);
            errorMessage.textContent = '';
            // Redirecionar para página inicial
            window.location.href = '../inicio/index.html';
        } else {
            errorMessage.textContent = result.message;
        }
    });
});
