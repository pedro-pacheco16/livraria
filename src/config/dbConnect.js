import mongoose from "mongoose";

mongoose.connect("mongodb+srv://admin:admin123@cluster0.khp6nfd.mongodb.net/livraria?retryWrites=true&w=majority");// aqui faço a conexão com o banco de dados que está via web
let db = mongoose.connection;// declaro uma variavel pra poder fazer sua exportação para outro arquivo

export default db