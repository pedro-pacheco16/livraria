import express from "express";// API utilizando o express
import db from "./config/dbConnect.js";//importando o banco de dados
import routes from "./router/index.js";


db.on("erro", console.log.bind(console,'Erro de conexão'))// este método vê oq está acontecendo neste caso iremos prever o erro caso aconteça
db.on("open",() => {
   console.log('conexão com o banco feita com sucesso')
})//abre a conexão

const app = express(); //recebimento de instância do express

app.use(express.json());

routes(app);

app.use(express.json())//faz com que o App reconheça o que enviamos pelo Postman, preciso fazer logo abaixo da minha instância do Express um app.use e dizer que é para usar o app.use(Express.json()) que é um recurso do Express que vai conseguir fazer interpretar o que está chegando via post ou via put e transformar aquilo em um objeto para eu poder armazenar, visualizar e manipular.

//const livros= [
//{id: 1,"titulo": "senhor do anéis"},
//{id:2,"titulo":"Biblia"}
//]}
 export default app
