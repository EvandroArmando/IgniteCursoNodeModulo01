const express =require('express');

const app =express();


app.get('/',(req, response) =>
{
    return response.json({Message:"Hello word Ignite"});
}
)

app.listen(3333);
