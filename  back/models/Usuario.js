const {Schema, model} = require('mongoose')

const UsuarioSchema = Schema(
{
    nombre:
    {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    mail:
    {
        type: Array,
        required: [true, 'Los correo electronico es obligatorio']
    },
    password:
    {
        type: Array,
        required: [true, 'La contraseña es obligatoria']
    },
    telefono:
    {
        type: String,
        required: [true, 'El telefono es obligatorio'],
    },
    recetas:
    {
        type: Array,
    },
   
});

module.exports = model('Usuario', UsuarioSchema);