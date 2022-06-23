
const e = require('express');
const { response } = require('express');
const Usuario = require('../models/Usuario');



const crearUsuario = async(req, res = response ) => {

    const query = { estado: true };
    
    let existeUsuario = await Usuario.findOne( user => user.email == email);
    if(existeUsuario){
       throw Error('El email ingresado ya se encuentra registrado');
    }

    let usuario = new Usuario(req.body);

    usuario.save();

    res.json({

      usuario

   });

}
const autenticarUsuario = async(req, res = response ) => {


   const { email, password } = req.body;

   let usuario = await Usuario.findOne(user => user.email == email);
   if(!usuario){
      throw Error('Usuario y/o contrasena incorrectos');
      
   }
   else if (usuario.password == password){
      console.log('usuario autenticado');
      res.json({
         usuario
      });
   }

}
const changePassword = async(req, res = response ) => {

   const { email, password } = req.body;

   let usuario = await Usuario.findOne(user => user.email == email);
   if(!usuario){
      throw Error('Usuario y/o  incorrectos');
   }else if( password == usuario.password){
      usuario.password = password;
      Usuario.updateOne(usuario);
   };
    res.end('Usuario actualizado con exito');

}
const updateProfile = async(req, res = response ) => {

   try{

      const { id, ...body} = req.body;
      
      let usuario = await Usuario.findByIdAndUpdate(id, usuario)
      
      res.status(200).end('Usuario actualizado con existo');
   }catch( err ){
      res.status(400).end('No se pudo actualizar el perfil');
   }

}
const exampleMethod = async(req, res = response ) => {

   const { limite = 5, desde = 0 } = req.query;

    const query = { estado: true };

    res.json({

       query

   });

}

 module.exports = {

   crearUsuario

}