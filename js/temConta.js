document.getElementById('lista__options-itens-tem-conta').addEventListener('click', function(temConta) {
    temConta.preventDefault();
    window.location.href = '../index.html'; 
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;

    if (localStorage.getItem(username)) {
        alert('Usuário já existe! Tente outro nome de usuário.');
    } else {
        localStorage.setItem(username, password);
        alert('Conta criada com sucesso!');
        window.location.href = '../index.html';
    }
});

 const togglePassword = document.getElementById('togglePassword');
 const passwordInput = document.getElementById('registerPassword');

 togglePassword.addEventListener('click', function () {
     const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
     passwordInput.setAttribute('type', type);

     this.setAttribute('name', type === 'password' ? 'eye-off-outline' : 'eye-outline');
 });


 