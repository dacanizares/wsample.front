import { FindEmployee } from "@/api/employeeApi";
import { maybePromise } from "@/common/maybeUtils";
import EmployeeForm from "@/components/EmployeeForm";
import Employee from "@/models/Employee";

export default async function EmployeePage({ params }: { params: { slug: string }}) {
  const employee = await maybePromise<Employee | undefined>(() => FindEmployee(params.slug), undefined);
  return (
   <main>
      <EmployeeForm  employee={employee} />
   </main>
  );
}
