const express =require('express');
const { json } = require('express/lib/response');
const { v4: uuidv4 } = require('uuid') //coloca o v4 para gerar número randomicos
const app =express();
app.use(express.json())

//req.params =serve para editar os campos da rota
//req.query= request.query = paginação filtro
//req.body= é para pegar os dados 
//metodo post
//quatro metodos
//ver funcionamento API


//declaraçao das variaveis



const customers= [];

app.get('/',(req, response) =>
{
    return response.json({Message:"Hello word Ignite"});
});


 



//Cadastro de conta
app.post('/account',(req,response)=>{

    const{cpf,name} =req.body;
    const id= uuidv4();//gerar valores aleartorios

//salvar elementos em um array
customers.push(
    {cpf,
    name,
    id,
    statement:[]

}


)
console.log('objecto salvo',customers)


 

return response.status(200).send();

})
  



app.listen(3333);
