var express = require('express');
var exphbs = require('express-handlebars');



var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
/*@@ -15,4 +40,55 @@ app.get('/', function(request, response){*/
    response.render('home', contexto);
//});

app.get('/tienda/:categoria?', function(request, response){

});

app.get('/tienda/producto/:nombre', function(req, res){

    var collection = db.collection('productos');
    collection.find({ nombre: req.params.nombre })
        .toArray(function(err, docs){
            console.log(docs);

            var contexto = {
                producto: docs[0]
            };
            res.render('producto', contexto);
        });
});

app.post('/login', function(request, response){
    // crear un archivo con la información del usuario
    console.log(request.body);
    // redireccionar a otra página
    response.redirect('/bienvenida');
});

app.listen(3000); 