import NewTodoForm from "@/app/components/NewTodoForm"

const DashboardLayout = ({children}) => {
  return(
    <div className="flex flex-col justify-center items-center ">
      <h1 className="m-2 p-2">MY TODO LIST</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout