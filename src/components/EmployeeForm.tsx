'use client'
import { FindDepartments } from "@/api/departmentsApi";
import { maybePromise } from "@/common/maybeUtils";
import DepartmentsSelect from "@/components/DepartmentsSelect";
import Department from "@/models/Department";
import { useEffect, useState } from "react";

export default function EmployeeForm() {
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
    <DepartmentsSelect 
      selected={selected}
      setSelected={setSelected} 
      departments={departments} />
   </main>
  );
}
