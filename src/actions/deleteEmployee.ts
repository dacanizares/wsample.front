'use server'
import { DeleteEmployee } from "@/api/employeeApi";
import { redirect } from "next/navigation";


export async function DeleteEmployeeAction(id: number) {
  await DeleteEmployee(id);
  redirect('/');
}
