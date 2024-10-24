const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    let numero = parseInt(req.query.tabuada) || 1;  // Número padrão é 1
    let sequencia = parseInt(req.query.sequencia) || 10;  // Sequência padrão é 10

    let resultado = '';
    for (let i = 1; i <= sequencia; i++) {
        resultado += `<p>${numero} x ${i} = ${numero * i}</p>`;
    }

    res.send(`
        <!DOCTYPE html>
        <html lang="pt-BR">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Tabuada do ${numero}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    color: #333;
                    text-align: center;
                    padding: 20px;
                }
                h1 {
                    color: #ff6347;
                    text-shadow: 2px 2px 4px #000;
                }
                p {
                    font-size: 18px;
                    line-height: 1.6;
                    color: #444;
                }
                .container {
                    background-color: #fff;
                    padding: 20px;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    display: inline-block;
                    margin-top: 20px;
                }
            </style>
        </head>
        <body>
            <h1>Tabuada do ${numero}</h1>
            <div class="container">
                ${resultado}
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});
