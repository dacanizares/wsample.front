import { getTimeSince } from "@/common/dateUtils"
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

  return (
    <>
      <b>Hire date:</b> { hireDate ?? 'Not hired yet' }
      { showTimeSince && <><br /> {timeSinceHired} </> }
    </>
  )
}


