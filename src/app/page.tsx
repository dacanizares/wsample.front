import { FindEmployees } from "@/api/employeeApi";
import { maybePromise } from "@/common/maybeUtils";
import EmployeeForm from "@/components/EmployeeForm";
import EmployeeList from "@/components/EmployeeList";
import Employee from "@/models/Employee";

export default async function Home() {
  const employees = await maybePromise<Employee[]>(FindEmployees, []);
  return (
   <main>
      <EmployeeList employees={employees} />
      <EmployeeForm />
   </main>
  );
}
