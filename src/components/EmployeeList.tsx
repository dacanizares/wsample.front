'use client'
import Employee from "@/models/Employee";
import EmployeeSingle from "./EmployeeSingle";

interface EmployeeListProps {
  employees: Employee[]
}

export default function EmployeeList({ employees }: EmployeeListProps) {
  return (
    <>
    {employees.map((employee) =>
      <EmployeeSingle employee={employee} />
    )}
    </>
  );
}
