import Link from "next/link";

interface DeleteEmployeeButtonmProps
 {
  id: number
}

export default function DeleteEmployeeButton({id}: DeleteEmployeeButtonmProps) {
  return (   
    <Link
      href={`/delete/${id}`} 
      className="flex flex-auto bg-red-600 shadow-sm rounded py-2 px-5 m-2 text-white text-center font-semibold hover:bg-red-800 items-center justify-center">
        Delete
    </Link>
  );
}
