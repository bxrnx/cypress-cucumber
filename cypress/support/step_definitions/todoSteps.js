import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import todoPage from "./todoPOM";

// Agregar una tarea a la lista
Given("Abro la aplicación todo", () => {
    todoPage.visit();
});

When("Añado {string} a la lista", (task) => {
    todoPage.addTodo(task);
});

Then("Debo ver {string} en la lista", (task) => {
    todoPage.todoAdded(task);
});

/*// Agregar una tarea y marcarla como completada
Given("Abro la aplicación todo", () => {
    todoPage.visit();
});

When("Añado {string} a la lista", (task) =>{
    todoPage.addTodo(task);
});

And("Marco {string} como completada", () =>{
    todoPage.toggleCompleted();
});

Then("Debo ver {string} marcada como completada", (task) =>{
    todoPage.haveCompleted(task);
});
// Agregar una tarea, completarla y desmarcarla
Given("Abro la aplicación todo", () => {
    todoPage.visit();
});

When("Añado {string} a la lista", (task) =>{
    todoPage.todoAdded(task);
});

And("Marco {string} como completada", (task) => {
    todoPage.toggleCompleted(task);
});

And("Desmarco {string} como completada", (task) => {
    todoPage.toggleCompleted(task);
});

Then("Debo ver {string} no marcada como completada", (task) =>{
    todoPage.notHaveCompleted(task);
});

//Editar una tarea
Given("Abro la aplicación todo", () => {
    todoPage.visit();
});

When("Añado {string} a la lista", (task) =>{
    todoPage.addTodo(task);
});

And("Edito {string} a {string}", (oldTask, newTask) =>{
    todoPage.todoEdit(oldTask, newTask); 
});

Then("Debo ver {string} en la lista 16", (newTask) =>{
    todoPage.todoAdded(newTask);
});*/