import Employee from "@/models/Employee"

interface EmployeeSingleProps {
  employee: Employee
}

export default function EmployeeSingle({ employee }: EmployeeSingleProps) {
  return (
    <div className="relative flex flex-col items-center border border-solid border-gray-200 rounded-2xl transition-all duration-500 md:flex-row md:max-w-lg ">
        <div className="block overflow-hidden md:w-52 h-48">
          <img src={ employee.avatarUrl ?? 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png' } alt="Card image" className="h-full rounded-2xl object-cover" />
          </div>
          <div className="p-4">
          <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
            { employee.firstName} { employee.lastName}
            <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
              { employee.departmentId ?? 'Unassigned' }
            </span>
          </h4>
          
          <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5"> Provides faster transaction, so money arrives in realtime </p>
          <button className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">Read More</button>
        </div>
    </div>
  )
}
