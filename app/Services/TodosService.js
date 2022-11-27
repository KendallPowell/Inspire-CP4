import { appState } from "../AppState.js"
import { Todo } from "../Models/Todo.js"

export const sandboxApi = new axios.create({
    baseURL: 'https://bcw-sandbox.herokuapp.com/api/kendall/todos'
})
class TodosService {
    async pullTodos() {
        const res = await axios.get('https://bcw-sandbox.herokuapp.com/api/kendall/todos')
        // console.log('got todo list', res.data)
        appState.todos = res.data.map(t => new Todo(t))
    }


    async createNewTodo(todoData) {
        const res = await axios.post('https://bcw-sandbox.herokuapp.com/api/kendall/todos', { description: todoData.description })
        const newTodo = new Todo(res.data)
        appState.todos = [...appState.todos, newTodo]
        console.log(appState.todos, 'new todo')
    }

    async completedTodo(id) {
        let selectedTodo = appState.todos.find(t => t.id == id)
        // console.log('completed todo!', selectedTodo)
        selectedTodo.completed = !selectedTodo.completed
        const res = await sandboxApi.put(id, selectedTodo)
        appState.emit('todos')
    }

    async removeTodo(id) {
        // debugger
        const res = await axios.delete('https://bcw-sandbox.herokuapp.com/api/kendall/todos/' + id)
        console.log('deleting', res.data)
        appState.todos = appState.todos.filter(f => f.id != id)
    }

}

export const todosService = new TodosService()