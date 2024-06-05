'use server'

import { executeFetch } from "@/common/fetchUtils"
import { API_URL } from "@/common/constants"
import Department from "@/models/Department";

const DEPARTMENTS_URL = `${API_URL}/department`

export async function FindDepartments(): Promise<Department[]> {
  const res = await executeFetch(`${DEPARTMENTS_URL}`);
  if (res.status !== 200) {
    throw Error(`Expected status 200 but received ${ res.status }`);
  } else {
    const data = await res.json();
    return data;
  }
}
