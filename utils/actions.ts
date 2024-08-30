'use server'
import db from './db'


export const newTodo = async (formData) => {
  const todo = await db.todo.create({
    data: {
        content: formData.get('content'),
    },
  })
}
