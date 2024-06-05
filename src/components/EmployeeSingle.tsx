import Employee from "@/models/Employee"

interface EmployeeSingleProps {
  employee: Employee
}

export default function EmployeeSingle({ employee }: EmployeeSingleProps) {
  return (
    <div className="relative flex flex-col sm:flex-row items-center border border-solid border-gray-200 bg-slate-50 rounded m-4 sm:m-0 drop-shadow-md">
      <div className="block overflow-hidden md:w-52 h-48">
        <img src={ employee.avatarUrl ?? 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' } alt="Card image" className="h-full rounded object-cover" />
        </div>
      <div className="flex flex-col justify-between h-full w-full p-3 text-center sm:text-left">
        <h2 className="font-semibold text-gray-900 mb-2">
          { employee.firstName} { employee.lastName}<br />
          <span className="text-blue-800">
            { employee.departmentName ?? 'Unassigned' }
          </span>
        </h2>
        
        <p className="font-normal text-gray-500 leading-5 mb-5">
          <b>Hire date:</b> { employee.hireDate?.toDateString() ?? '' }
        </p>
        <button className="bg-indigo-600 shadow-sm rounded py-2 px-5 text-white font-semibold w-full hover:bg-indigo-800">
          View profile
        </button>
      </div>
    </div>
  )
}
