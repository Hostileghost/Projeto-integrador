-- Criação da tabela de Usuários
CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL -- Armazena o hash da senha
);

-- Criação da tabela das Tarefas 
CREATE TABLE tarefas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL, -- O título é obrigatório
    descricao TEXT,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    prazo DATE,
    status VARCHAR(30) NOT NULL DEFAULT 'PENDENTE', -- Inicia como PENDENTE
    usuario_id INT NOT NULL,
    CONSTRAINT fk_usuario_tarefa FOREIGN KEY (usuario_id) 
        REFERENCES usuarios(id) 
        ON DELETE CASCADE
);