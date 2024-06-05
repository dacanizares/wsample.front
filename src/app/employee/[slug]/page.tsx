import { FindEmployee } from "@/api/employeeApi";
import { maybePromise } from "@/common/maybeUtils";
import EmployeeDetails from "@/components/EmployeeDetails";
import EmployeeNotFound from "@/components/EmployeeNotFound";
import Employee from "@/models/Employee";

export default async function EmployeePage({ params }: { params: { slug: string }}) {
  const employee = await maybePromise<Employee | undefined>(() => FindEmployee(params.slug), undefined);
  return (
   <main>
      { employee && <EmployeeDetails employee={employee} /> }
      { !employee && <EmployeeNotFound /> }
   </main>
  );
}
