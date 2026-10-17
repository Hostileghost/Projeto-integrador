const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // Libera o CSS

// Rota inicial -> Abre a tela de login
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/login.html'));
});

// Rota para abrir a tela de cadastro
app.get('/cadastro', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/cadastro.html'));
});

// Rota de Ação de Cadastro de Usuário 
app.post('/cadastro', (req, res) => {
    const { nome, email, senha } = req.body;
    // lógica de salvar no banco de dados
    res.send("Usuário cadastrado com sucesso! <a href='/'>Fazer Login</a>");
});

// Rota de Ação de Login 
app.post('/login', (req, res) => {
    const { email, senha } = req.body;
    // Se autenticado com sucesso, redireciona para o dashboard
    res.sendFile(path.join(__dirname, 'views/dashboard.html'));
});

// Rota de Cadastro de Tarefa 
app.post('/tarefa', (req, res) => {
    const { titulo, descricao, prazo } = req.body;
    
    // O título é obrigatório
    if (!titulo || titulo.trim() === "") {
        return res.send("Erro: O título é obrigatório! <a href='/dashboard'>Voltar</a>");
    }

    // Status inicial PENDENTE
    const status = "PENDENTE";
    
    res.send("Tarefa criada com sucesso com status PENDENTE! <a href='/dashboard'>Voltar</a>");
});

// Rota de Encerrar Sessão 
app.get('/logout', (req, res) => {
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000 (http://localhost:3000)');
});