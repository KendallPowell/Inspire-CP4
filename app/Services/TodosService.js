import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"


export const todosApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com'
})

class TodosService {
    async pullTodos() {
        const res = await todosApi.get()
        console.log('got todo list', res.data)
        appState.todo = new Todo
    }
}

export const todosService = new TodosService()