var express = require("express");
const fs = require('fs');
const path = require('path');

var app = express();

app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");


//

// Add this middleware to set up CORS headers
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000', 'https://main--neon-cheesecake-5d962c.netlify.app/', '*', 'https://my-react-app-virid-psi.vercel.app/' ); // Replace with your frontend's URL
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.listen(3000);
 
// Define a route to render the produit.json file
  app.get('/', (req, res) => {
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
 
  app.get('/home', (req, res) => { 
    res.render("home");  
  });

  app.get('/test', (req, res) => { 
    res.render("test");  
  });
 
  