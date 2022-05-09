const { response } = require('express');
const Receta  = require('../models/Receta');

const createReceta = async(req, res = response ) => {

   // const body = {
   //    nombre,
   //    pasos,
   //    dificultad,
   //    categoria,
   //    ingredientes,
   //    imageUrl
   // }
   const body = req.body;

   let receta = new Receta( body );

   await receta.save();

    res.json({
       receta
    });
}

const obtenerTodas = async (req,res=response) => {
   let recetas = Receta.find();
   res.json({
      recetas
   });
}

const obtenerByUsuario = async (req,res=response) => {
      let recetas = Receta.find();
      res.json({
         recetas
      });
}

const obtenerByFiltro = async (req,res=response) => {
   let {cal} = req.body;
      let recetas = Receta.find();
      res.json({
         recetas
      });
}


const updateReceta = async(req, res = response) => {

   const { recetaId } = req.params;
   const body = req.body;
   try{

      let response = await Receta.findByIdAndUpdate(recetaId, body);
      // no es necesario el receta.save()
      // let respose = 'Receta actualizada';
      res.status(200).json({
         response
      })
   }catch ( err ){
      let response = err.message
      res.json({
         response
      })
   }
      
}

const deleteReceta = async(req, res = response) => {

   const { recetaId } = req.params;
   try{

      let response = await Receta.findByIdAndDelete(recetaId);
      if(!response){
         throw new Error('Receta no encontrada');
      }
      // no es necesario el receta.save()
      // let respose = 'Receta actualizada';

      res.status(200).end(
         'Receta eliminada');
   }catch ( err ){
      let response = err.message
      res.json({
         response
      })
   }
      
}




module.exports = {
   createReceta,
   updateReceta,
   deleteReceta,
   obtenerTodas,
   obtenerByUsuario,
   obtenerByFiltro

}