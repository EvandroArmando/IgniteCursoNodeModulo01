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



function verifyIfExistsAccountCPF (request, response, next) {
 
    const { cpf } = request.headers;
   const customer = customers.find((customer) => customer.cpf = cpf);
    if (! customer) {
        return response. status (400).json({error:"Custumer Not Founded"});


    }
    }
 





const customers= [];

app.get('/',(req, response) =>
{
    return response.json({message:"Hello word Ignite"});
});



//Cadastro de conta
app.post('/account',(req,response)=>{

const{cpf,name} =req.body;
const verificarCPF = customers.some((customer)=>customer.cpf==cpf);


//verificar
if (verificarCPF) {
    return response.status(400).json({message:"CPF já cadastrado"} )
    
} 
//salvar elementos em um array
customers.push(
    {cpf,
    name,
    id:uuidv4(),//gerar valores aleartorios
    statement:[]

}


)
console.log('objecto salvo',customers)


 

return response.status(200).send();

})
  



app.listen(3333);
