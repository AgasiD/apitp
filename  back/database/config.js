
const mongoose = require('mongoose');

const connectDB = async ()=>{

    try{
        await mongoose.connect(process.env.CONNSTRING,{
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
        });
        
        console.log('Mongo DB connected!');

    }catch( err ){
        console.error(err.message);
        console.log('Error al conectar base de datos');
    }
    
}

module.exports = {
    connectDB
}