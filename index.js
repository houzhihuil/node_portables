var express = require("express");
const fs = require('fs');
const path = require('path');

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3000);

app.get("/", function(request, response){

    response.render("home");
});

app.get("/test", function(request, response){

    response.render("test");
});

// Define a route to render the produit.json file
app.get('/produits', (req, res) => {
    // Read the produit.json file
    const filePath = path.join(__dirname, 'produits.json');
    fs.readFile(filePath, 'utf8', (err, data) => { 
        try {
          // const produits = JSON.parse(data).produits;
          const produits = JSON.parse(data);
          res.json(produits);
        } catch (error) {
          console.error(error);
          res.status(500).json({ error: 'Internal server error' });
        }
      }
    );
  });
 
 
  