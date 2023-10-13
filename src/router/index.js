import express from "express";
import livros from "./LivroRoutes.js"
import autores from "./autoresRoutes.js"


const routes = (app) => {
    app.route('/').get((req, res) => {
      res.status(200).send({titulo: "Curso de node"})//get tem a função de buscar uma rota para a raiz do aplicativo/ send é enviar a mensagem 
    })
  
  app.use(express.json(), livros,autores)
}

export default routes