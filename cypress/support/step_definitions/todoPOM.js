class TodoPage{
    
    //Abro la aplicación de todo
    visit() {
        cy.visit("/");
    }
    //Añado tarea a la lista
    addTodo(todoText){
        cy.get(".new-todo")
        .type(`${todoText}{enter}`);
    }
    
    todoAdded(task){
        this.todoList().first().contains(task);
    }

    todoList(){
        return cy.get(".todo-list li");
    }

    haveCompleted(task){
        cy.get(".todo-list")
        .contains(task)
        .parent("li")
        .should("have.class", "completed");
    }

    notHaveCompleted(task){
        cy.get(".todo-list")
        .contains(task)
        .parent("li")
        .should("not.have.class", "completed");
    }
    
    toggleCompleted(task){
        cy.get(".todo-list")
        .contains(task)
        .parents("li")
        .find('input[type="checkbox"]')
        .check({ force: true});
    }

    toggleUnCompleted(task){
        cy.get(".todo-list")
        .contains(task)
        .parents("li")
        .find('input[type="checkbox"]')
        .uncheck({ force: true});
    }

    toggleTodo(index){
        cy.get(`.todo-list li:nth-child(${index}) .toggle`)
        .click();
    }

    todoEdit(oldTask, newTask){
        cy.get(".todo-list").contains(oldTask).dblclick();
        cy.get(".edit").clear().type(`${newTask}{enter}`);
    }

        /*this.todoList()
        .first()
        .find("button.destroy")
        .click({force: true});*/

    destroyTodo(index){
        cy.get(`.todo-list li:nth-child(${index}) .destroy`)
        .click({force: true});
    }

    filterCompleted(){
        cy.contains("Completed").click();

        this.todoList()
        .should("have.length", 1)
        .and("contain.text", "Aprender Cypress");
    }

    filterActive(){
        cy.contains("Active").click();

        this.todoList()
        .should("have.length", 2)
        .and("not.contain.text", "Aprender Cypress");
    }

    filterAll(){
        cy.contains("All").click({force: true});
    }

    clearcompleted(){
        cy.contains('Clear completed').click();
    }
}

export default new TodoPage();