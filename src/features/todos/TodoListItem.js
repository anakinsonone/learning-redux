import React from 'react'

import { ReactComponent as TimesSolid } from './times-solid.svg'

import { availableColors, capitalize } from '../filters/colors'

const TodoListItem = ({ todo, onColorChange, onCompletedChange, onDelete }) => {
  const { text, completed, color } = todo

  const handleCompletedChanged = (event) => {
    onCompletedChange(event.target.checked)
  }

  const handleColorChanged = (event) => {
    onColorChange(event.target.value)
  }

  const colorOptions = availableColors.map((color) => (
    <option key={color} value={color}>
      {capitalize(color)}
    </option>
  ))

  return (
    <li>
      <div className="view">
        <div className="segment label">
          <input
            type="checkbox"
            checked={completed}
            onChange={handleCompletedChanged}
          />
          <div className="todo-text">{text}</div>
        </div>
        <div className="segment buttons">
          <select
            className="colorPicker"
            value={color}
            style={{ color }}
            onChange={handleColorChanged}
          >
            <option value=""></option>
            {colorOptions}
          </select>
          <button className="destroy" onClick={onDelete}>
            <TimesSolid onClick={onDelete} />
          </button>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
