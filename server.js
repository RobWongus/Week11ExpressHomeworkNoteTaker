// basic server template
// see 14-FinalStarwarsApp/server-template.js
// plus require routes 
const express = require("express");
const path = require("path");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const bodyParser= require("body-parser");
const app = express();
const PORT = process.env.PORT || 1018;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// PLUS the following 
app.use(express.static("public"));
/* 
^^ creates a path to static front-end files: html, css & js.
notice how files are referenced in index.html: 
                       <script src="/js/index.js"></script>. 
this is because we have created a static path that routes
to the /public directory automatically.
*/

app.use("/api", apiRoutes);  // /api/notes
app.use("/", htmlRoutes);    // /notes or /


app.listen(PORT, function() {
    console.log("Listening on PORT" + PORT);
})