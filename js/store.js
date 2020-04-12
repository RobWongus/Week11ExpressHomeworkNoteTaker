// a class to read, write & delete notes.

// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const uuidv1 = require("uuid/v1");
module.exports = (body) => {
   return data = {
      "title" : body.title,
      "text" : body.text,
      "id" : uuidv1()
   }
}

/* see 
   09-NodeJS/01-Activities/34-Ins_Introduce-Promises
   or 09-NodeJS/01-Activities/38-Ins_Async-Await
   for ideas about doing asynchronous operations like fs.readFile & fs.writeFile.
   you will have to write to db/db.json for this homework.
   
   let bodyResponse = response.body;
   let newNote = {
      "title": bodyResponse.title,
      "text": bodyResponse.text,
      "id": uuidv1()
   }

   */
