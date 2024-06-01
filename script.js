var usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

function save() {
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
}

function entrar() {
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    var usuario = usuarios.find(u => u.nome === nome && u.senha === senha);

    if (nome === '' || senha === '') {
        window.alert('Dados incompletos!')
    } else if (usuario) {
        location.href = 'entrou.html';
    } else {
        window.alert('Algum dado está incorreto.');
    }
}

function cadastrar() {
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    var senha2 = document.getElementById('senha2').value;

    if (nome === '' || senha === '') {
        window.alert('Dados incompletos!')
    } else if (senha === senha2 ) {
        if (!usuarios.some(u => u.nome === nome)) {
            usuarios.push({ nome: nome, senha: senha });
            save();
            window.alert('Cadastro realizado!');
            location.href = 'index.html';
        } else {
            window.alert('Esse nome já existe.');
        }
    } else {
        window.alert('As senhas não coincidem.');
    }

    
}

function recadastrar() {
    var nome = document.getElementById('nome').value;
    var senha = document.getElementById('senha').value;
    var senha2 = document.getElementById('senha2').value;

    if (nome === '' || senha === '') {
        window.alert('Dados incompletos!')
    } else if (senha === senha2) {
        var index = usuarios.findIndex(u => u.nome === nome);
        if (index === -1) {
            window.alert('Nome de usuário não existe.');
            return;
        } else {
            usuarios[index].senha = senha;
            save()
            window.alert('Senha alterada com sucesso!');
            location.href = 'index.html';
        }
    } else {
        window.alert('As senhas não coincidem.');
    }
}