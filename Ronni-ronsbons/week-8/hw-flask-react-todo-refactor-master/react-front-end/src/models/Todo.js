import axios from 'axios'

// const url = `https://super-crud-api.herokuapp.com/api/todos`
const url = 'http://localhost:8000/todos'

class TodoModel {
  static all = () =>{
    let request = axios.get(`${url}`)
    return request
  }

  static create = (todo) => {
    let request = axios.post(`${url}`, todo)
    return request
  }

  static delete = (todo) => {
    console.log(`deleting todo.body: ${todo.body}`)
    console.log(`deleting todo.id: ${todo.id}`)
    let request = axios.delete(`${url}/${todo.id}`)
    return request
  }

  static update = ( todoId, updateObject) => {
    let request = axios.put(`${url}/${todoId}`, updateObject)
    return request
  }


}

export default TodoModel