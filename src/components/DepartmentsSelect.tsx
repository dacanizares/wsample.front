'use client'
import Department from "@/models/Department";

interface DepartmentsSelectProps {
  departments: Department[]
  selected: string
}

export default function DepartmentsSelect({ departments, selected }: DepartmentsSelectProps) {
  if (departments.length === 0) {
    return null;
  }
  return (
   <main>
    <select
      name="departmentId"
      className="h-12 border border-gray-300 text-gray-600 text-base rounded-lg block w-full sm:mb-2 py-2.5 px-4 focus:outline-none"
    >
    <option value={0}>No department assigned</option>
    {departments.map((department) => 
      <option key={department.id} value={department.id} selected={selected === department.id.toString()}>
        { department.name }
      </option>
    )}
    </select>
   </main>
  );
}
