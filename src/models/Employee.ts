interface Employee {
  id: number
  active: number;
  firstName: string;
  lastName: string;
  hireDate: string;
  phone: string | null;
  address: string | null;
  avatarUrl: string | null;
  departmentId: number | null
  departmentName?: string | null
}

export default Employee;
