
export class Todo {
    constructor(data) {
        this.id = data.id
        this.completed = data.completed
        this.user = data.user
        this.description = data.description
    }

    get MyTodoTemplate() {
        return `
        <div class="col-2 px-0  bg-dark">
            <input class="ms-2" type="checkbox" ${this.completed ? 'checked' : ''} onchange="app.todosController.completedTodo('${this.id}')"/>
        </div>
        <div class="col-8 px-0 text-start text-white bg-dark">${this.description}</div>
        <div class="col-1 px-0 bg-dark fs-4 mdi mdi-delete-empty text-danger" onclick="app.todosController.removeTodo('${this.id}')"></div>
        `
    }
}