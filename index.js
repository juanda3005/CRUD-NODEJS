const morgan=require('morgan');
const bodyParser=require('body-parser');
//para convertir los datos a json

const express=require('express');
const app=express();

const productRoutes=require('./routes/products');


//SETTINGS
app.set('json spaces',4);//espaciado a los json




//MIDDLEWARES
app.use(morgan('dev'));
app.use(bodyParser.json());//procesar los datos que vienen en formato json
app.use(bodyParser.urlencoded({extended:false}));//para procesar los datos que provienen de un formulario



//ROUTES
app.use('/products',productRoutes);


//STATIC FILES


//STARTING THE SERVER
app.listen(3000,()=>{
    console.log('Server is running on port 3000');
});

