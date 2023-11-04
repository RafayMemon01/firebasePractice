console.log("Yes Your are there")
import { appendItemsToShoppingListEl, resetInputField, resetShoppingEl } from './function.js';
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js"; 
import { getDatabase, ref, push, onValue  } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-database.js";


const appSettings = {
    databaseURL: "https://realtimedb-41723-default-rtdb.firebaseio.com/"
}
const app = initializeApp(appSettings);
const database = getDatabase(app);


const inputField = document.getElementById("inputField");
const shoppingListDB = ref(database, "shoppingListDB");
const shoppingListEl = document.querySelector(".cardsMain");

onValue(shoppingListDB, (snapshot)=>{
    let data = Object.values(snapshot.val());
    resetShoppingEl(shoppingListEl);
    for (let index = 0; index < data.length; index++) {
        const shoppingList = data[index];
        console.log(shoppingList)
        appendItemsToShoppingListEl(shoppingList, shoppingListEl)
        
    }
})

let addBtn = document.getElementById("addButton");
addBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    if(!inputField.value == ""){
        console.log("Input field is not empty")
        
        let userInput = inputField.value;
        
        push(shoppingListDB, userInput)
        // appendItemsToShoppingListEl(userInput, shoppingListEl)
        resetInputField(inputField)
        
        console.log(`${userInput} was added to database `)
    }
    else{
        alert("Please Write Alphabet or Numbers :)")
    }
}
)
