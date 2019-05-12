let form = document.querySelector('#theForm');
let insert = document.querySelector('#add');
let toDo = document.querySelector('#to-do-field');
let toDoList = document.querySelector('#toDoList');

insert.addEventListener('click', ()=> {
    createItem(toDo.value);

})

function createItem(item) {
    if (toDo.value != '') {
        let listItem = `<li>${item}<button onclick="done(this)" class="btn btn-success done">&#10003</button><button onclick="deleteItem(this)" class="btn btn-danger delete">x</button></li>`
        toDoList.insertAdjacentHTML("beforeend",listItem);
        toDo.value = ""; 
    }
    toDo.focus();
}

function deleteItem(element){
    element.parentElement.remove();
}

function done(element){
    element.parentElement.style.setProperty("color","gray");
    element.parentElement.style.setProperty("text-decoration","line-through");
}