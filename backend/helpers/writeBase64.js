module.exports = (req,folder)=>{

    
    if(req.body.pictures){

    //Recupero imagen y titulo del request body
    const base64Image = req.body.pictures.src;
    const imageTitle = req.body.pictures.title;
    
    //Se trabaja sobre la imagen encodeada y se la deja lista para crear el archivo
    var base64Data = base64Image.replace(/^data:image\/jpeg;base64,/, "");
    

    //const imageid = req.body.imageid //Nombre de imagen previa al edit
    //Elimino imagen previa al edit.
    //require("fs").unlinkSync(__dirname + `/../dbImages/${folder}/${imageid}`)

    //Se crea el archivo de imagen en dbImages.
    require("fs").writeFile(__dirname + `/../dbImages/${folder}/${imageTitle}`, base64Data, 'base64', function(err) {
        if (err) {
            console.log(err);
        }
    });

    
    return imageTitle //Entrego nombre de la nueva imagen creada

    }else { //No modifique imagen

        return req.body.imageid //=> Entrego nombre de la imagen ya existente

    }



}