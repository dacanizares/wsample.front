'use client'
import { useContext } from "react";
import { ModalContext } from "./EmployeeModal";
import EmployeeForm from "./EmployeeForm";

export function EmployeeModalContents() {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const display = isOpen ? 'flex' : 'none';
  return (
    <div className="text-right mb-5">
      <button 
        className="bg-indigo-600 shadow-sm rounded py-2 px-5 text-white font-semibold hover:bg-indigo-800"
        onClick={() => { setIsOpen(true) }}>
        Add new
      </button>
      
      <div
        style={{display}}
        className="bg-zinc-900/50 fixed top-0 left-0 z-50 w-full h-full p-4 overflow-y-auto">
          <div className="bg-white m-auto text-left container max-w-[400px] rounded p-4 ">
            <EmployeeForm />
          </div>
      </div>
    </div>
  );
}
