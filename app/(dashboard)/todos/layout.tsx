import NewTodoForm from "@/app/components/NewTodoForm"

const DashboardLayout = ({children}) => {
  return(
    <div>
      <h1>dashboard</h1>
      <div>
        <NewTodoForm />
      </div>
      <div>{children}</div>
    </div>
  )
}

export default DashboardLayout