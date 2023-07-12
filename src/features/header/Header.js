import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Header = () => {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  const handleKeyDown = (event) => {
    const trimmedText = event.target.value.trim()

    if (event.which === 13 && trimmedText) {
      dispatch({ type: 'todos/todoAdded', payload: trimmedText })
      setText('')
    }
  }

  return (
    <header className="header">
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus={true}
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  )
}

export default Header
