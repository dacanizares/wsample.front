'use server'

import { executeFetch, executeFetchNoCache } from "@/common/fetchUtils"
import { API_URL } from "@/common/constants"
import HistoryLog from "@/models/HistoryLog";
import { mapDateForSqlite } from "@/common/dateUtils";

const DEPARTMENTS_URL = `${API_URL}/history`

export async function FindHistoryLog(employeeId: number): Promise<HistoryLog[]> {
  const res = await executeFetchNoCache(`${DEPARTMENTS_URL}/${employeeId}`);
  if (res.status !== 200) {
    throw Error(`Expected status 200 but received ${ res.status }`);
  } else {
    const data = await res.json() as HistoryLog[];
    data.forEach((value) => {
      value.date = mapDateForSqlite(value.date)
    })
    return data;
  }
}
