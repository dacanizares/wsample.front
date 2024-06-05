import Employee from "@/models/Employee"

interface EmployeeSingleProps {
  employee: Employee
}

export default function EmployeeSingle({ employee }: EmployeeSingleProps) {
  return (
    <div className="relative flex flex-col items-center border border-solid border-gray-200 rounded-2xl transition-all duration-500 md:flex-row md:max-w-lg ">
        <div className="block overflow-hidden md:w-52 h-48">
          <img src="https://pagedone.io/asset/uploads/1695365240.png" alt="Card image" className="h-full rounded-2xl object-cover" />
          </div>
          <div className="p-4">
          <h4 className="text-base font-semibold text-gray-900 mb-2 capitalize transition-all duration-500 ">
            { employee.firstName} { employee.lastName}
          </h4>
          <p className="text-sm font-normal text-gray-500 transition-all duration-500 leading-5 mb-5"> Provides faster transaction, so money arrives in realtime </p>
          <button className="bg-indigo-600 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold">Read More</button>
        </div>
    </div>
  )
}
