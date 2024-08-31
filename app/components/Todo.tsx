'use client'
import { completeTodo, deleteTodo } from '@/utils/actions'
import { useTransition } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Todo = ({ todo }) => {
  const [isPending, startTransition] = useTransition()
  return (
    <div
      className={ `px-8 py-2 cursor-pointer text-xl ${
        todo.completed ? 'line-through text-black/30' : ''
      }`}
      onClick={() => startTransition(() => completeTodo(todo.id))}
    >
      <div className='flex justify-between w-80'>
      {todo.content} 
      <button 
        onClick={(e) => {
          e.stopPropagation(); // Prevent click event from triggering on the entire div
          deleteTodo(todo.id);
        }}
        className="ml-2 " // Add margin to space out the icon from the content
      >
        <FontAwesomeIcon icon={faTrash} />
      </button>
      </div>
      
    </div>
  )
}

export default Todo
