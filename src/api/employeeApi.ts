'use server'

import { executeFetch, executeFetchNoCache } from "@/common/fetchUtils"
import { API_URL } from "@/common/constants"
import Employee from "@/models/Employee";

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
