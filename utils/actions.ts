'use server'
import db from '@/utils/db'
import { revalidatePath } from 'next/cache'

export const newTodo = async (data: FormData) => {
  const newTodo = data.get('todo') as string

  if (newTodo) {
    await db.todo.create({
      data: {
        content: newTodo,
      },
    })
    revalidatePath('/todos')
  }
}

export const completeTodo = async (id: string) => {
  // Fetch the current state of the todo
  const currentTodo = await db.todo.findUnique({
    where: { id },
  })

  // Toggle the completed status
  const updatedTodo = await db.todo.update({
    where: { id },
    data: {
      completed: !currentTodo.completed,
    },
  })

  // Revalidate the path to update the UI
  revalidatePath('/todos')
}


export const deleteTodo = async (id: string) => {
  // Fetch the current state of the todo
   await db.todo.delete({
    where: { id },
  })


  // Revalidate the path to update the UI
  revalidatePath('/todos')
}