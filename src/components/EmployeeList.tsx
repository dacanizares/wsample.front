'use client'
import Employee from "@/models/Employee";
import EmployeeSingle from "./EmployeeSingle";

interface EmployeeListProps {
  employees: Employee[]
}

export default function EmployeeList({ employees }: EmployeeListProps) {
  return (
    <div className="grid grid-cols-none md:grid-cols-2 lg:grid-cols-3 gap-4">
    {employees.map((employee) =>
      <EmployeeSingle employee={employee} />
    )}
    </div>
  );
}
