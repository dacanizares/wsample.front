import Employee from "@/models/Employee"
import EmployeeAvatar from "./EmployeeFields/EmployeeAvatar"
import EmployeeMainInfo from "./EmployeeFields/EmployeeMainInfo"
import EmployeeHireDate from "./EmployeeFields/EmployeeHireDate"
import DepartmentsForm from "./DepartmentsForm"
import ActivateForm from "./ToggleStatusForm"

import DeleteEmployeeButton from "./DeleteEmployeeButton"
import Link from "next/link"
import HistoryTable from "./HistoryTable"
import { Suspense } from "react"

interface EmployeeDetailsProps {
  employee: Employee
}

export default function EmployeeDetails({ employee }: EmployeeDetailsProps) {
  return (
    <>
      <div className="relative flex flex-col sm:flex-row items-center border border-solid border-gray-200 bg-slate-50 rounded m-4 sm:m-0 drop-shadow-md mb-10">
        <div className="block overflow-hidden md:w-60 h-64">
          <EmployeeAvatar 
            active={employee.active}
            avatarUrl={employee.avatarUrl} 
          />
        </div>
        <div className="flex flex-col justify-between h-full w-full p-3 text-center sm:text-left">
          <h2 className="font-semibold text-gray-900 text-2xl mb-2">
            <EmployeeMainInfo 
              firstName={employee.firstName}
              lastName={employee.lastName}
              departmentName={employee.departmentName}
            />
          </h2>
          
          <p className="font-normal text-gray-500 leading-5 mb-5">
            <EmployeeHireDate hireDate={employee.hireDate} showTimeSince={true} />
          </p>
          <p className="font-normal text-gray-500 leading-5 mb-5">
            <b>Address:</b> { employee.address ?? 'Unknown' }
          </p>
          <p className="font-normal text-gray-500 leading-5 mb-5">
            <b>Phone:</b> { employee.phone ?? 'Unknown' }
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row border border-solid border-gray-200 bg-slate-200 rounded m-4 sm:m-0">        
        <DepartmentsForm
          employeeId={employee.id}
          departmentId={employee.departmentId?.toString() as string}
        />
        <ActivateForm
          id={employee.id}
          active={employee.active}
        />
        <DeleteEmployeeButton 
          id={employee.id}
        />
      </div>

      <div className="flex mt-10">
        <Suspense fallback={<p>Loading history...</p>}>
          <HistoryTable
            employeeId={employee.id}
          />
        </Suspense>
      </div>

      <Link href="/" className="inline-block p-3 mt-10">
        Back to list
      </Link>
    </>
  )
}
