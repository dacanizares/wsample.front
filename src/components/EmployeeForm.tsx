'use client'
import { FindDepartments } from "@/api/departmentsApi";
import { FindEmployee } from "@/api/employeeApi";
import { maybePromise } from "@/common/maybeUtils";
import DepartmentsSelect from "@/components/DepartmentsSelect";
import Department from "@/models/Department";
import Employee from "@/models/Employee";
import { useEffect, useState } from "react";
import EmployeeSingle from "./EmployeeSingle";

interface EmployeeFormProps {
  employee?: Employee
}

export default function EmployeeForm({employee}: EmployeeFormProps) {
  const [departments, setDepartments] = useState([] as Department[]);
  useEffect(() => {
    const loadData = async () => {
      const departmentsResult = await maybePromise<Department[]>(FindDepartments, []);
      setDepartments(departmentsResult);
    }

    loadData();
  }, [])
  
  const [selected, setSelected] = useState('0');
  return (
   <main>
    { employee && <EmployeeSingle employee={employee} /> }
    <DepartmentsSelect 
      selected={selected}
      setSelected={setSelected} 
      departments={departments} />
   </main>
  );
}
