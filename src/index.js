const express =require('express');
const { json } = require('express/lib/response');

const app =express();
app.use(express.json())

app.get('/',(req, response) =>
{
    return response.json({Message:"Hello word Ignite"});
}


);

//req.params =serve para editar os campos da rota
//req.query= request.query = paginação filtro
//req.body= é para pegar os dados 
//metodo post

app.post('/courses',(req, res)=>{

    

    return response.json(['Curso 1','Curso 02','Curso3'])

} )

//quatro metodos



app.listen(3333);
