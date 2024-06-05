import { FindEmployees } from "@/api/employeeApi";
import { maybePromise } from "@/common/maybeUtils";
import EmployeeList from "@/components/EmployeeList";
import { EmployeeModal } from "@/components/EmployeeModal";
import Employee from "@/models/Employee";

export default async function Home() {
  const employees = await maybePromise<Employee[]>(FindEmployees, []);
   
  return (
   <main>
      <EmployeeModal />

      <EmployeeList employees={employees} />      
   </main>
  );
}
