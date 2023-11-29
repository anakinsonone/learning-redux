import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import TodoListItem from './TodoListItem'

const selectTodoIds = (state) => state.todos.map((todo) => todo.id)

const TodoList = () => {

  //just adding a few comments to test the github app
  const todoIds = useSelector(selectTodoIds, shallowEqual)

  const renderedListItems = todoIds.map((todoId) => {
    return <TodoListItem key={todoId} todoId={todoId} />
  })
  //just adding a few comments to test the github app

  return <ul className="todo-list">{renderedListItems}</ul>
}

export default TodoList
