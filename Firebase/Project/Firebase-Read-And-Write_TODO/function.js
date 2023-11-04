export function add(a,b){
    return a+b;

}
export function appendItemsToShoppingListEl(itemValue, shoppingListEl){
    shoppingListEl.innerHTML += `<li>${itemValue}</li>`

}
export function resetInputField(inputField){
    inputField.value = "";

}
export function resetShoppingEl(shoppingListEl){
    shoppingListEl.innerHTML = "";
}
// export default appendItemsToShoppingListEl