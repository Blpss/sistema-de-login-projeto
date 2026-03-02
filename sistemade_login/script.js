// Obtém o formulário
const loginForm = document.getElementById('loginForm');

// Adiciona evento ao envio do formulário
loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtém os valores dos inputs
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validação básica
    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Validação da senha
    if (password !== '12345678') {
        alert('Senha incorreta! Use: 12345678');
        document.getElementById('password').value = '';
        return;
    }

    // Login bem-sucedido - redireciona para a página do projeto
    console.log('Login realizado com sucesso!');
    console.log('Usuário:', username);
    
    // Aguarda um pouco e depois redireciona
    setTimeout(() => {
        window.location.href = 'projeto.html';
    }, 500);
});
