import Link from "next/link";

interface DeleteEmployeeButtonmProps
 {
  id: number
}

export default function DeleteEmployeeButton({id}: DeleteEmployeeButtonmProps) {
  return (   
    <Link
      href={`/delete/${id}`} 
      className="bg-red-600 shadow-sm rounded py-2 px-5 text-white text-center font-semibold w-full hover:bg-red-800">
        Delete
    </Link>
  );
}
