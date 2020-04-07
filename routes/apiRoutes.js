const router = require("express").Router();
const db = require("../db/db.json");

router.get("/notes", function(request, response) {
  // get a note
  // see 15-HotRestaurant/Solved for more info
  response.send(db);
});

// other apis here

// /api/notes/:id

module.exports = router;
