module.exports= (req,res,next)=>{

    if (req.body.pictures){

        if(req.body.pictures.src.substring(0, 4) == 'blob'){
            res.status(200)
            req.body.id = "";
            res.json(req.body);
        }else{
            next()
        }

    }else{
        next()
    }

}

//Front end Hace 2 pegadas a esta ruta.
//La primera con req.body.pictures.src = blob....... y la otra con la imagen en base64
//Se soluciono desestimando la pegadad con .src = blob... para evitar crear dos veces la imagen.
//Revisar dataProvider. if(blob request => hago nada )else{not blob request => grabo en bd}











