'use server'

import { CreateNewEmployee } from "@/api/employeeApi";
import { mapDateForSqlite } from "@/common/dateUtils";
import { checkRequiredString, cleanOptionalString } from "@/common/validation";
import CreateEmployee from "@/models/CreateEmployee";
import { redirect } from 'next/navigation';

export default async function createNewEmployeeAction(prevState: any, formData: FormData) {
  const createEmployee = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    hireDate: formData.get('hireDate'),
    phone: formData.get('phone'),
    address: formData.get('address'),
    avatarUrl: formData.get('avatarUrl'),
  } as CreateEmployee;

  if (!checkRequiredString(createEmployee.firstName) || !checkRequiredString(createEmployee.lastName)) {
    return {
      message: 'First name and last name are required.',
    }
  }

  createEmployee.hireDate = mapDateForSqlite(createEmployee.hireDate, false);
  createEmployee.phone = cleanOptionalString(createEmployee.phone);
  createEmployee.address = cleanOptionalString(createEmployee.address);
  createEmployee.avatarUrl = cleanOptionalString(createEmployee.avatarUrl);
  createEmployee.avatarUrl = cleanOptionalString(createEmployee.avatarUrl);
  
  const response = await CreateNewEmployee(createEmployee);
  redirect(`/employee/${response?.id}`);
}
