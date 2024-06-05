interface EmployeeMainInfo {
  firstName: string
  lastName: string,
  departmentName: string | null | undefined
}


export default function EmployeeMainInfo({firstName, lastName, departmentName}: EmployeeMainInfo) {
  return (
    <>
      { firstName} { lastName}
      <br />
      <span className="text-blue-800">
        { departmentName ?? 'Unassigned' }
      </span>
    </>
  )
}
