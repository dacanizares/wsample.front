'use server'

import { executeFetch } from "@/common/fetchUtils"
import { API_URL } from "@/common/constants"

const DEPARTMENTS_URL = `${API_URL}/department`

export async function FindDepartments(): Promise<void> {
  const res = await executeFetch(`${DEPARTMENTS_URL}`);
  if (res.status !== 200) {
    console.log('ERROR');
  }
  
  console.log(res);
  const data = await res.json();
  console.log(data);
  return data;
}
