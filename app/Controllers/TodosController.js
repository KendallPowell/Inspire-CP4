import { appState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML, setText } from "../Utils/Writer.js";

function _drawTodos() {
    let todos = appState.todos
    let template = ''
    todos.forEach(t => template += t.MyTodoTemplate)
    setHTML('todo-list', template)
    let total = appState.todos.length
    let completed = appState.todos.filter(t => t.completed == false).length
    setHTML('completed', `
    <div class="text-center text-white bg-dark rounded">
    <span class="me-3">Uncompleted:</span>
    ${completed}/${total}
    </div>
    `)




}

export class TodosController {
    constructor() {
        this.pullTodos()
        appState.on('todos', _drawTodos)
        // console.log('todos controller working');
    }

    async pullTodos() {
        try {
            await todosService.pullTodos()
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

    async createNewTodo() {
        window.event.preventDefault()
        const form = window.event.target
        let todoData = getFormData(form)
        // console.log(todoData)
        todosService.createNewTodo(todoData)
        form.reset()
    }

    async completedTodo(id) {
        try {
            await todosService.completedTodo(id)
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }

    async removeTodo(id) {
        try {
            if (await Pop.confirm('Delete note?')) {
                todosService.removeTodo(id)
            }
        } catch (error) {
            Pop.error(error.message)
            console.error(error)
        }
    }



}