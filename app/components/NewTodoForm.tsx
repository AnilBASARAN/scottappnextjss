import { newTodo } from "@/utils/actions"


const NewTodoForm = ({}) => {
  
    return (
        <div className="flex flex-col m-2 p-2">
        
            <form action={newTodo} >
                <input type="text" name="content" className=" w-96 p-2 border border-black/25"/>
                <button className="m-1 p-2 color:white bg-gray-600" type="submit" >new todo</button>
            </form>
        </div>
    )
}

export default NewTodoForm