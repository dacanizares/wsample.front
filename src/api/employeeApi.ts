'use server'

import { executeFetch, executeFetchNoCache } from "@/common/fetchUtils"
import { API_URL } from "@/common/constants"
import Employee from "@/models/Employee";
import CreateEmployee from "@/models/CreateEmployee";

const EMPLOYEES_API = `${API_URL}/employee`

export async function FindEmployees(): Promise<Employee[]> {
  const res = await executeFetchNoCache(`${EMPLOYEES_API}`);
  if (res.status !== 200) {
    throw Error(`Expected status 200 but received ${ res.status }`);
  } else {
    const data = await res.json();
    return data;
  }
}

export async function FindEmployee(id: string): Promise<Employee | undefined> {
  const res = await executeFetchNoCache(`${EMPLOYEES_API}/${id}`);
  if (res.status !== 200) {
    throw Error(`Expected status 200 but received ${ res.status }`);
  } else {
    const data = await res.json();
    return data;
  }
}

export async function UpdateDepartment(employeeId: number, departmentId: number): Promise<Employee | undefined> {
  const body = {
    'employeeId': employeeId,
    'departmentId': departmentId
  };

  const res = await executeFetchNoCache(`${EMPLOYEES_API}/addtodepartment`, 'POST', JSON.stringify(body));
  if (res.status !== 200) {
    throw Error(`Expected status 200 but received ${ res.status }`);
  } else {
    const data = await res.json();
    return data;
  }
}

export async function ToggleStatusEmployee(id: number, active: number): Promise<Employee | undefined> {
  const body = {
    'id': id,
    'active': active
  };

  const res = await executeFetchNoCache(`${EMPLOYEES_API}/togglestatus`, 'POST', JSON.stringify(body));
  if (res.status !== 200) {
    throw Error(`Expected status 200 but received ${ res.status }`);
  } else {
    const data = await res.json();
    return data;
  }
}


export async function CreateNewEmployee(createEmployee: CreateEmployee): Promise<Employee | undefined> {
  const res = await executeFetchNoCache(`${EMPLOYEES_API}`, 'POST', JSON.stringify(createEmployee));
  if (res.status !== 200) {
    throw Error(`Expected status 200 but received ${ res.status }`);
  } else {
    const data = await res.json();
    return data;
  }
}

export async function DeleteEmployee(id: number): Promise<Employee | undefined> {
  const res = await executeFetchNoCache(`${EMPLOYEES_API}`, 'DELETE', JSON.stringify({ id }));
  if (res.status !== 200) {
    throw Error(`Expected status 200 but received ${ res.status }`);
  } else {
    const data = await res.json();
    return data;
  }
}
