import { db } from "./firebase-config.js"
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/10.5.0/firebase-firestore.js"; 
/*
import { collection, addDoc } from "firebase/firestore"; 

// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "cities"), {
  name: "Tokyo",
  country: "Japan"
});
console.log("Document written with ID: ", docRef.id);
*/
export const dbOperations = {
    async addQuestion(questionObject){
        // Async Prg
          try{
           const doc = await  addDoc(collection(db,'questions'), questionObject); // Assign to Async Thread
           return doc;
          }
          catch(err){
            console.log('Error During add a Question ', err);
            throw err;
          }
    }
}