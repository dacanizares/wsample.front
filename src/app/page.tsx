import { FindEmployees } from "@/api/employeeApi";
import { maybePromise } from "@/common/maybeUtils";
import EmployeeForm from "@/components/EmployeeForm";
import EmployeeList from "@/components/EmployeeList";
import Employee from "@/models/Employee";

export default async function Home() {
  const employees = await maybePromise<Employee[]>(FindEmployees, []);
  return (
   <main>
      <h1 className="text-2xl font-bold text-slate-500">Simple Employee Maintenance</h1>
      <hr className="mb-5" />
      <EmployeeList employees={employees} />
      <EmployeeForm />
   </main>
  );
}
