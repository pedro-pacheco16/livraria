import app from './src/app.js';


app.listen(3002,() => { //escutando a porta
    console.log(`Servidor escutando em http://localhost:${3002}`)//fazendo uma requisição
})

