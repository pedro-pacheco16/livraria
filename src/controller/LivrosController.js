import livros from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivrosController {

static async ListarLivros (req,res) { 
  try {
       const listarLivros = await livros.find({}).populate('autor').exec();//populate faz associação de dados
        res.status(200).json(listarLivros);
      }catch (erro){
        res.status(500).json({ message: `${erro.message} - falha na requisição` });
      }
      
};

static async listarLivroPorId (req, res) {
  try {  
  
    const id = req.params.id;
    const livroEncontrado = await livros.findById(id).populate('autor').exec();
    res.status(200).json(livroEncontrado);

    }catch (erro) {
      res.status(500).json({ message: `${erro.message} - falha na requisição do livro` });
    }
  
  };
  

static async cadastrarLivro (req,res) {
  const novoLivro = req.body;
  try{  
    const autorEncontrado = await autor.findById(novoLivro.autor);
    const livroCompleto = { ...novoLivro, autor: { ...autorEncontrado._doc }};
  
    const livroCriado = await livros.create(livroCompleto)
    res.status(201).json({ message: "criado com sucesso", livroCriado });

  }catch (erro) {

    res.status(500).send({message: `${erro.message} - falha ao cadastrar livro.`})
  
  }
    
};

static async atualizarLivro (req, res) {
  try{

    const id = req.params.id;
    await livros.findByIdAndUpdate(id, req.body)
    res.status(200).json({message: 'Livro atualizado com sucesso'});

      }catch (erro) {
        res.status(500).json({message: `${erro.message} - falha ao cadastrar livro.`})
      }
}

static async excluirLivro (req, res) {
  try{
    
    const id = req.params.id;
    await livros.findByIdAndDelete(id)
    res.status(200).json({message: 'Livro removido com sucesso'})

      } catch{
        res.status(500).json({message: `${erro.message} - falha na exclusão` })
      }
    }; 
    
    static async listarLivroPorEditora (req, res) {
    
      const editora = await req.query.editora
      try{
      
      livros.find({'editora': editora})
      res.status(200).json(livros);
      }catch{
        res.status(500).json({message: `${erro.message} - Nenhum livro foi encontrado para está editora` })
     
      }  
    }
  }
export default LivrosController;