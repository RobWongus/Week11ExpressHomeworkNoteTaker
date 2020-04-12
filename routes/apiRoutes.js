const router = require("express").Router();
let db = require("../db/db.json");
const fs = require("fs");
const path = require("path");
const store = require("../js/store");

router.get("/notes", function(request, response) {
  // get a note
  // see 15-HotRestaurant/Solved for more info
  response.json(db);
});


// other apis here
// router.get("express", function(request, response) {
//   res.json(router)
// });

// router.get("../db/db.json", function(request, response) {
//   res.json(db);
// });

// /api/notes/:id

router.post("/notes", function(request, response) {
  db.push(store(request.body));
  response.json(true);
  const data = JSON.stringify(db);
  writeDb();
  // fs.writeFile(path.join(__dirname, "../db.db.json"));
  // console.log(request.body) 
}); 


router.delete("/notes/:id", function(request, response) {
  // //db.filter(element => console.log(element))
  // db = db.filter(element => element.id != request.params.id)
  // response.json(true)
  // fs.writeFile("../db/db.json", db);
  db = db.filter(element => element.id != request.params.id);
  response.json(true);
  writeDb();
  //let id = request.params.id;
  // store =js file has a removeNote(id)
  // store.removeNote(id) this will open up data file 
  //iterate over the notes if note.id
  //if note.id = id then delete that note
  //response.json({"id": id}) 
})

function writeDb() {
  const data = JSON.stringify(db,null,"\t")
  fs.writeFile(path.join(__dirname, "../db/db.json"), function(data, error) {if (err) throw error});
  }
module.exports = router;

