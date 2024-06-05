'use server'

import { UpdateDepartment } from "@/api/employeeApi";
import { redirect } from 'next/navigation';

export default async function updateDepartmentAction(employeeId: number, formData: FormData) {
  const departmentId = parseInt(formData.get('departmentId') as string);
  await UpdateDepartment(employeeId, departmentId);
  redirect(`/employee/${employeeId}`);
}
