import { useState } from "react"

const NewTodoForm = () => {
    console.log(window.localStorage)
    const [state,updateState] = useState("")

    return (
        <div>
            <h1>New TO DO FORM</h1>
            <form>
                <input type="text" />
            </form>
        </div>
    )
}

export default NewTodoForm