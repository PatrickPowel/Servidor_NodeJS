const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API!');
});

// Rota para uma lista de exemplos
app.get('/exemplos', (req, res) => {
  const exemplos = [
    { id: 1, nome: 'Exemplo 1' },
    { id: 2, nome: 'Exemplo 2' },
    { id: 3, nome: 'Exemplo 3' }
  ];
  res.json(exemplos);
});

// Rota para adicionar um novo exemplo
app.post('/exemplo', (req, res) => {
  // Aqui você pode processar os dados enviados no corpo da requisição
  const novoExemplo = req.body;
  // Neste exemplo, apenas devolvemos os dados enviados
  res.json(novoExemplo);
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
