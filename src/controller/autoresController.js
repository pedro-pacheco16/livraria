import {autor} from "../models/Autor.js";

class AutorController {

  static async ListarAutor (req,res) { 
    try {
         const listarAutor = await autor.find({});
          res.status(200).json(listarAutor);
        }catch (erro){
          res.status(500).json({ message: `${erro.message} - falha na requisição` });
        }
        
  };
  
  static async listarAutorPorId (req, res) {
    try {  
    
      const id = req.params.id;
      const AutorEncontrado = await autor.findById(id);
      res.status(200).json(AutorEncontrado);
  
      }catch (erro) {
        res.status(500).json({ message: `${erro.message} - falha na requisição do autor` });
      }
    
    };
    
  
  static async cadastrarAutor (req,res) {
    try{  
    
    let novoAutor = await autor.create(req.body)
      res.status(201).json({ message: "criado com sucesso", Autor: novoAutor });
  
    }catch (erro) {
  
      res.status(500).send({message: `${erro.message} - falha ao cadastrar Autor.`})
    
    }
      
  };
  
  static async atualizarAutor (req, res) {''
    try{
  
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body)
      res.status(200).json({message: 'Autor atualizado com sucesso'});
  
        }catch (erro) {
          res.status(500).json({message: `${erro.message} - falha ao cadastrar Autor.`})
        }
  }
   
  static async excluirAutor (req, res) {
    try{
      
      const id = req.params.id;
      await autor.findByIdAndDelete(id)
      res.status(200).json({message: 'Autor removido com sucesso'})
  
        } catch{
          res.status(500).json({message: `${erro.message} - falha na exclusão` })
        }
      }; 
      
  };

export default AutorController
