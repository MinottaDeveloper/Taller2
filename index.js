var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');



const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'tienda';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true});

var database = null;

// Use connect method to connect to the Server
client.connect(function(err) {
    assert.equal(null, err);

    database = client.db(dbName);

    //client.close();
});


app.get("/tienda", function(request, response){

    let collection = database.collection("productos");
    let query= {
        categoria: 'Maletines'
    };
    let options = {
        sort:[["precio", 'descending' ]]
        //sort:[["precio", 'ascending' ]]
    };
    let contexto = {};

    collection.find(query, options).toArray(function(error, result){
        contexto.productos = result;
        response.render("tienda", contexto);
    });
 
});

app.get("/producto/:item?", function(request, response){

    let id = request.params.item;

    if(id!=null){
        
        let collection = database.collection("productos");
        let query= {nombre:id};
        let contexto = {};
    
        collection.find(query).toArray(function(error, result){
            contexto = result;
            response.render("producto-interno", contexto[0]);

            console.log(contexto[0]);

    

    }); 
}
});


app.get('/carrito-compras', function(request, response){
    response.render("carrito-compras", {})
    });

    app.get('/checkout', function(request, response){
        response.render("checkout", {})
        });

        app.get('/producto-interno', function(request, response){
            response.render("producto-interno", {})
            });
        

app.get('', function(request, response){
response.sendfile("/index.html")
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