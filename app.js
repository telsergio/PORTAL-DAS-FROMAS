const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/calcular', (req, res) => {
  const largura = parseFloat(req.body.largura);
  const altura = parseFloat(req.body.altura);
  const area = largura * altura;
  res.send(`A área do retângulo é: ${area}`);
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});