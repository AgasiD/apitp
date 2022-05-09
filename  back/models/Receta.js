const {Schema, model} = require('mongoose')

const RecetaSchema = Schema(
{
    nombre:
    {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    pasos:
    {
        type: Array,
        required: [true, 'Los pasos son obligatorios']
    },
    dificultad:
    {
        type: Number,
        required: [true, 'La dificultad es obligatoria'],
        enum: [1,2,3,4,5]
    },
    categoria:
    {
        type: String,
        required: [true, 'La categoria es obligatorio']
    },
    ingredientes:
    {
        type: Array,
        required: [true, 'Los ingredientes son obligatorios']
    },
    imageUrl:
    {
        type: String,
        required: [true, 'La imagen es obligatoria']
    },
    publicada:
    {
        type: Boolean,
        default: false,
    },
    calificaciones:
    {
        type: Array,
    },
    usuarioId:{
        type: String,
    }

});

module.exports = model('Receta', RecetaSchema);