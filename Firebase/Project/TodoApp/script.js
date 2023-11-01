console.log("Yes Your are there")
import {add} from './function.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js"; 
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";

console.log(add(5,5));  


const appSettings = {
    databaseURL: "https://fir-practice-v10-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);

const todoDB = ref(database, "todos");
// console.log(database);

let addBtn = document.getElementById("addButton");
addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    let userInput = document.getElementById("inputField").value;

    push(todoDB, userInput)
    console.log(`${userInput} was added to database `)
}
)