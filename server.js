const = express = require('express');

const app = express();

app.get('/', (request, response) =>{

})


app.get('/', function(request, response){
    response.send('Does this work.')
})

app.listen(3000, function() {
    console.log('listening on http://localhost:3000');
});