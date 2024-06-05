import { getFormatedDate, getTimeSince } from "@/common/dateUtils"
import { useMemo } from "react"

interface EmployeeHireDateProps {
  hireDate: string | undefined
  showTimeSince: boolean
}

export default function EmployeeHireDate({hireDate, showTimeSince}: EmployeeHireDateProps) {
  const timeSinceHired = useMemo(
    () => getTimeSince(hireDate),
    [hireDate]
  )

  const formatedDate = useMemo(
    () => getFormatedDate(hireDate),
    [hireDate]
  )

  return (
    <>
      <b>Hire date:</b><br />
      { formatedDate ?? 'Not hired yet' }
      { showTimeSince && <><br /> {timeSinceHired} </> }
    </>
  )
}


