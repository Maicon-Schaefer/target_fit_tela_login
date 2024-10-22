
document.getElementById('lista__options-itens-criar-conta').addEventListener('click', function(criarConta) {
    criarConta.preventDefault();
    window.location.href = 'html/criarConta.html'; 
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
event.preventDefault();


const username = document.getElementById('username').value;
const password = document.getElementById('password').value;


const storedPassword = localStorage.getItem(username);

if (storedPassword) {
    if (storedPassword === password) {
        alert('Login realizado com sucesso!');
        window.location.href = './html/principalPage.html'; 
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
    } else {
        alert('Usuário não encontrado. Por favor, cadastre-se.');
    }
});

  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');

  togglePassword.addEventListener('click', function () {
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      this.setAttribute('name', type === 'password' ? 'eye-off-outline' : 'eye-outline');
  });

