'use client'
import { FindDepartments } from "@/api/departmentsApi";
import { maybePromise } from "@/common/maybeUtils";
import DepartmentsSelect from "@/components/DepartmentsSelect";
import Department from "@/models/Department";
import { useEffect, useState } from "react";
import { useFormStatus } from "react-dom";
import updateDepartmentAction from "@/actions/updateDepartment";


interface DepartmentsFormProps
 {
  employeeId: number,
  departmentId: string
}

export default function DepartmentsForm({employeeId, departmentId}: DepartmentsFormProps) {
  const { pending } = useFormStatus();

  const [departments, setDepartments] = useState([] as Department[]);
  useEffect(() => {
    const loadData = async () => {
      const departmentsResult = await maybePromise<Department[]>(FindDepartments, []);
      setDepartments(departmentsResult);
    }

    loadData();
  }, [])
  
  const updateDepartmentWithEmployeeId = updateDepartmentAction.bind(null, employeeId);
  
  return (
   <form action={updateDepartmentWithEmployeeId}>
    <DepartmentsSelect
      selected={departmentId}
      departments={departments} />
    <button 
      disabled={pending}
      className="bg-indigo-600 shadow-sm rounded py-2 px-5 text-white font-semibold w-full hover:bg-indigo-800">
        Update department
    </button>
   </form>
  );
}
