'use client'
import { DeleteEmployeeAction } from "@/actions/deleteEmployee";
import Link from "next/link";

interface DeleteEmployeeConfirmProps
 {
  id: number,
}

export default function DeleteEmployeeConfirmButtons({id}: DeleteEmployeeConfirmProps) {
  const onConfirm = () => {
    DeleteEmployeeAction(id);
  }

  return (
    <>
      <Link
        href={`/employee/${id}`} 
        className="bg-indigo-600 shadow-sm rounded py-2 px-5 m-2 text-white text-center font-semibold w-full hover:bg-indigo-800">
          Back
      </Link>
      <button
        onClick={onConfirm}
        className="bg-red-600 shadow-sm rounded py-2 px-5 m-2 text-white text-center font-semibold w-full hover:bg-red-800">
          Confirm delete
      </button>
    </>
  );
}
