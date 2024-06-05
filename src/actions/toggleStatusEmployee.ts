'use server'

import { ToggleStatusEmployee } from "@/api/employeeApi";
import { redirect } from 'next/navigation';

interface toggleStatusEmployeeActionParams {
  id: number
  active: number
}

export default async function toggleStatusEmployeeAction(params: toggleStatusEmployeeActionParams) {
  await ToggleStatusEmployee(params.id, 1 - params.active);
  redirect(`/employee/${params.id}`);
}
