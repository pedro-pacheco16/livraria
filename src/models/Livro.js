//Aqui fazemos o link do banco com o nosso esquema de livros, para ser possível fazer a inserção e a recuperação dos dados.

import mongoose from "mongoose";
import { autorSchema } from "./Autor.js";

const livroSchema = new mongoose.Schema(     // Isso está criando um esquema chamado livroSchema usando o mongoose.Schema. Um esquema define a estrutura dos documentos que serão armazenados no banco de dados. O esquema contém campos como "id", "titulo", "autor", "editora" e "numeroPaginas".
    {
        id: {type: mongoose.Schema.Types.ObjectId},
        titulo: {type: String, required: true},
        editora: {type: String, required: true},
        numeroPaginas: {type: Number},
        autor: autorSchema
      },
      {
          versionKey: false
      }
);

const livros = mongoose.model('livros',livroSchema);//Aqui, um modelo chamado livros está sendo criado usando o esquema livroSchema. Um modelo no Mongoose é uma classe construtora que representa documentos do MongoDB. Neste caso, o modelo "livros" estará associado ao esquema livroSchema e permitirá a interação com documentos no banco de dados.

export default livros;
