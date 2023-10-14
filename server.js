const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/calcular', (req, res) => {
    const largura = parseFloat(req.body.largura);
    const altura = parseFloat(req.body.altura);

    if (!isNaN(largura) && !isNaN(altura)) {
        const area = largura * altura;
        res.send(`A área do retângulo é: ${area}`);
    } else {
        res.send('Por favor, insira valores válidos para largura e altura.');
    }
});

app.listen(port, () => {
    console.log(`O servidor está rodando na porta ${port