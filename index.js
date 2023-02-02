// document.getElementById("count-el").innerText = 5;
let saveEl = document.getElementById("save-el")
let counter = 0
let countEl = document.getElementById("count-el")
function increment(){
    counter += 1 ;
    countEl.textContent = counter;
    
}

function save()
{
    let store = counter + " - "
    saveEl.textContent += store
    countEl.textContent = 0;
    
    
    
    
}