import Employee from "@/models/Employee"

interface EmployeeSingleProps {
  employee: Employee
}

export default function EmployeeSingle({ employee }: EmployeeSingleProps) {
  return (
    <div className="relative flex flex-col sm:flex-row items-center border border-solid border-gray-200 rounded m-4 sm:m-0">
      <div className="block overflow-hidden md:w-52 h-48">
        <img src={ employee.avatarUrl ?? 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' } alt="Card image" className="h-full rounded object-cover" />
        </div>
      <div className="flex flex-col justify-between h-full w-full p-3 text-center sm:text-left">
        <h4 className="text-base font-semibold text-gray-900 mb-2">
          { employee.firstName} { employee.lastName}<br />
          <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
            { employee.departmentName ?? 'Unassigned' }
          </span>
        </h4>
        
        <p className="text-sm font-normal text-gray-500 leading-5 mb-5">
          <b>Hire date:</b> { employee.hireDate?.toDateString() ?? 'Undefined' }
        </p>
        <button className="d-block bg-indigo-600 shadow-sm rounded py-2 px-5 text-xs text-white font-semibold w-full">
          View profile
        </button>
      </div>
    </div>
  )
}
