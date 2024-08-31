import NewTodoForm from "@/app/components/NewTodoForm"

const DashboardLayout = ({children}) => {
  return(
    <div className="flex flex-col justify-center items-center ">
      <h1>MY TODO LIST</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout