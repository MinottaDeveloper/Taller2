var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.urlencoded({extended:true}));

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'tienda';

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true });

var database = null;

// Use connect method to connect to the Server
client.connect(function (err) {
    assert.equal(null, err);

    database = client.db(dbName);

    //client.close();
});


app.post('/pago', function(request, response){
    // crear un archivo con la información del usuario
    console.log(request.body);

    let productos = request.body.productos;
    if(productos != null){
        JSON.parse(productos);
    }else{
        productos = {};
    }
    var pedido = {
        nombre: request.body.nombre,
        telefono: request.body.telefono,
        direccion: request.body.direccion,
        departamento: request.body.departamento,
        apellidos: request.body.apellidos,
        cedula: request.body.cedula,
        barrio: request.body.barrio,
        ciudad: request.body.ciudad,
        tipoTarjeta: request.body.tipoTarjeta,
        banco: request.body.banco,
        tipoDocumento: request.body.tipoDocumento,
        numeroTarjeta: request.body.numeroTarjeta,
        nombreTitular: request.body.nombreTitular,
        numeroDocumento: request.body.numeroDocumento,
    
        
        productos: productos,
        fecha: new Date(),
        estado: 'nuevo'
    };

    var collection = database.collection('pedidos');
    collection.insertOne(pedido, function(err){
        assert.equal(err, null);

        console.log('pedido guardado');
    });
});

app.get("/tienda/:order?", function (request, response) {

    let collection = database.collection("productos");
    let orden = request.params.order;
    let query = {
    
        // categoria: 'Maletines'
    };
    let options = {
        sort: [["popularidad", 'descending']]
        //sort:[["precio", 'ascending' ]]
    };
    let contexto = {};

    collection.find(query, options).toArray(function (error, result) {
        contexto.productos = result;
        response.render("tienda", contexto);
    });

    if(orden == 'precioMenor'){
        options = {
            //sort: [[id, orden]]
            sort:[["precio", 'ascending' ]]
        };
    }

    if(orden == 'precioMayor'){
        options = {
            //sort: [[id, orden]]
            sort:[["precio", 'descending' ]]
        };
    }

    if(orden == 'popularidad'){
        options = {
            //sort: [[id, orden]]
            sort:[["popularidad", 'descending' ]]
        };
    }

});


app.get("/producto/:item?/:order?", function (request, response) {

    let id = request.params.item;
    let orden = request.params.order;

    if (id != null) {

        let collection = database.collection("productos");
        let query = { nombre: id };
        let options = {};
        let contexto = {};

        if (orden != null) {
            options = {
                sort: [[id, orden]]
                //sort:[["precio", 'ascending' ]]
            };

            

        }

        collection.find(query, options).toArray(function (error, result) {
            contexto = result;
            response.render("producto-interno", contexto[0]);

            console.log(contexto[0]);




        });
    }
});
/*
app.get("/categorias/:item?/:order?", function(request, response){

    let id = request.params.item;
    let orden = request.params.order;

    if(id!=null){
        
        let collection = database.collection("productos");
        let query= {nombre:id};
        let options = {};
        let contexto = {};

        if(orden != null){
            options = {
                sort:[[id, orden ]]
                //sort:[["precio", 'ascending' ]]
            };
        }
    
        collection.find(query, options).toArray(function(error, result){
            contexto = result;
            response.render("producto-interno", contexto[0]);

            console.log(contexto[0]);

            
    

    }); 
}
});
*/


app.get("/tienda/:filtro?", function (request, response) {

    var databaseSort;

    let collection = database.collection("productos");
    collection.find().toArray(function (err, docs) {
        assert.equal(err, null);
        databaseSort=docs;

        if(request.params.filtro == "popularidad"){
            databaseSort.sort("popularidad");            
        }




        var contexto = {
           // productos: databaseSort;
        }

        response('tienda', contexto)
    });


});


app.get("/categoria/:item?", function (request, response) {

    let id = request.params.item;

    if (id != null) {

        let collection = database.collection("productos");
        let query = { categoria: id };
        let contexto = {};

        collection.find(query).toArray(function (error, result) {
            contexto.productos = result;
            response.render("tienda", contexto);

            console.log(contexto);



        });
    }
});

app.get('/carrito-compras', function (request, response) {
    response.render("carrito-compras", {})
});

app.get('/checkout', function (request, response) {
    response.render("checkout", {})
});

app.get('/producto-interno', function (request, response) {
    response.render("producto-interno", {})
});


app.get('', function (request, response) {
    response.sendfile("/index.html")
});

app.get('/tienda/producto/:nombre', function (req, res) {

    var collection = db.collection('productos');
    collection.find({ nombre: req.params.nombre })
        .toArray(function (err, docs) {
            console.log(docs);

            var contexto = {
                producto: docs[0]
            };
            res.render('producto', contexto);
        });
});

app.post('/login', function (request, response) {
    // crear un archivo con la información del usuario
    console.log(request.body);
    // redireccionar a otra página
    response.redirect('/bienvenida');
});

app.listen(3000); 