'use client'
import Department from "@/models/Department";

interface DepartmentsSelectProps {
  departments: Department[]
  selected: string
}

export default function DepartmentsSelect({ departments, selected }: DepartmentsSelectProps) {
  return (
   <main>
    <label className="block mb-2 text-sm font-medium text-gray-600 w-full">
      Departments
    </label>
    <select
      name="departmentId"
      value={selected}
      className="h-12 border border-gray-300 text-gray-600 text-base rounded-lg block w-full py-2.5 px-4 focus:outline-none"
    >
    <option value={0}>No department assigned</option>
    {departments.map((department) => 
      <option key={department.id} value={department.id}>
        { department.name }
      </option>
    )}
    </select>
   </main>
  );
}
