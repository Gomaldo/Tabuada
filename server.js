
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));


app.get('/', (req, res) => {
    
    let numero = parseInt(req.query.tabuada) || 1; 
    let sequencia = parseInt(req.query.sequencia) || 10;  

    
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
            <link rel="stylesheet" href="style.css">
            <style>
                  body 
                  {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f9;
                    color: #333;
                    text-align: center;
                    padding: 20px;
                  }


                h1 
                {
                    color: #ff6347;
                    text-shadow: 2px 2px 4px #000;
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
