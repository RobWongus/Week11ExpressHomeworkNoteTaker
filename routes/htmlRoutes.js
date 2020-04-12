let path = require("path");
let router = require("express").Router();

router.get("/notes", function(request, response) {
    // send  notes file
    // 15-HotRestaurant/Solved for more info
    response.sendFile(path.join(__dirname, "../public/notes.html"));
});



module.exports = router;
