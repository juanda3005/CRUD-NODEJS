

const {products}=require('../db.json');

module.exports={
    getProducts:(req,res)=>{
    res.json({products});
    //res.send({products:products});
},

addProduct:(req,res)=>{
    //onst prodyct=req.body.name
    const {name}=req.body;//con destructuring
    products.push({
        name,
        id:products.length
    });
    res.json({
        "success":true,
        "message":"Product saved",
    })},

    updateProduct:(req,res)=>{
        //console.log(req.params.id)
        const {id}=req.params;
        const {name}=req.body;

        products.forEach((product,i)=>{
            if(product.id===Number(id)){
                product.name=name;
            }
        });
        res.json({
            "success":"true",
            "message":"added succesfully"

        })
    },

    deleteProduct:(req,res)=>{
        const {id}=req.params;

        products.forEach((product,i)=>{
            if (product.id===Number(id)){
            products.splice(i,1)
            }
        })
        res.json({
            "success":"true",
            "message":"deleted succesfully"

        })
    }

};

//Modelo Vista controlador

//Modelo:Productos
//vista: public
//Contrlador:Rutas