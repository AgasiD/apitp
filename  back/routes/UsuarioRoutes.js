const { Router } = require('express');
const { createReceta, updateReceta, deleteReceta } = require('../controllers/RecetaController');


// const { validarCampos } = require('../middlewares/validar-campos');


// const { login, googleSignin } = require('../controllers/auth');


const router = Router();

router.get('/',[
    // check('correo', 'El correo es obligatorio').isEmail(),
    // check('password', 'La contraseña es obligatoria').not().isEmpty(),
    // validarCampos
], obtenerTodas );

router.get('/:usuarioId',[
    // check('correo', 'El correo es obligatorio').isEmail(),
    // check('password', 'La contraseña es obligatoria').not().isEmpty(),
    // validarCampos
], obtenerByUsuario );


router.get('/byFiltro',[
    // check('correo', 'El correo es obligatorio').isEmail(),
    // check('password', 'La contraseña es obligatoria').not().isEmpty(),
    // validarCampos
 ], obtenerByFiltro );

 
router.post('/', createReceta  );

router.put('/:recetaId',[
   // check('correo', 'El correo es obligatorio').isEmail(),
   // check('password', 'La contraseña es obligatoria').not().isEmpty(),
   // validarCampos
], updateReceta );

router.delete('/:recetaId',[
    
],deleteReceta );



module.exports = router;