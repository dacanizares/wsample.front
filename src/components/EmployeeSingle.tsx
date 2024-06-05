import Employee from "@/models/Employee"
import Link from "next/link"
import EmployeeAvatar from "./EmployeeFields/EmployeeAvatar"
import EmployeeMainInfo from "./EmployeeFields/EmployeeMainInfo"
import EmployeeHireDate from "./EmployeeFields/EmployeeHireDate"

interface EmployeeSingleProps {
  employee: Employee
}

export default function EmployeeSingle({ employee }: EmployeeSingleProps) {
  return (
    <div className="relative flex flex-col sm:flex-row items-center border border-solid border-gray-200 bg-slate-50 rounded m-4 sm:m-0 drop-shadow-md">
      <div className="flex justify-center overflow-hidden w-60 h-64 md:w-52 h-48">
        <EmployeeAvatar
          active={employee.active}
          avatarUrl={employee.avatarUrl}
        />
      </div>
      <div className="flex flex-col justify-between md:h-full md:w-full p-3 text-center sm:text-left">
      <h2 className="font-semibold text-gray-900 mb-2">
          <EmployeeMainInfo 
            firstName={employee.firstName}
            lastName={employee.lastName}
            departmentName={employee.departmentName}
          />
        </h2>
        
        <p className="font-normal text-gray-500 leading-5 mb-5">
          <EmployeeHireDate 
            hireDate={employee.hireDate} 
            showTimeSince={true} />
        </p>
        <Link 
          href={`/employee/${employee.id}`} 
          className="bg-indigo-600 shadow-sm rounded py-2 px-5 text-white font-semibold w-full hover:bg-indigo-800">
          View profile
        </Link>
      </div>
    </div>
  )
}
