'use client'
import Employee from "@/models/Employee";
import { useFormState, useFormStatus } from "react-dom";
import createNewEmployeeAction from "@/actions/createEmployee";
import InputComponent from "./InputComponent";
import { useContext } from "react";
import { ModalContext } from "./EmployeeModal";

interface EmployeeFormProps {
  employee?: Employee
}

const initialState = {
  message: '',
}

export default function EmployeeForm({}: EmployeeFormProps) {
  const { setIsOpen } = useContext(ModalContext);

  const { pending } = useFormStatus();
  const [state, formAction] = useFormState(createNewEmployeeAction, initialState)
  
  return (
    <form 
      action={formAction}>
      <InputComponent
        label="First name"
        name="firstName"
        placeholder="First Name"
        required={true}
        type="text" />

      <InputComponent
        label="Last name"
        name="lastName"
        placeholder="Last Name"
        required={true}
        type="text" />

      <InputComponent
        label="Hire date"
        name="hireDate"
        placeholder="YYYY/MM/DD"
        required={false}
        maxLength={10}
        type="date" />

      <InputComponent
        label="Phone"
        name="phone"
        placeholder="+1 111 11 11 11" />

      <InputComponent
        label="Address"
        name="address"
        placeholder="Your address"
        maxLength={50} />

      <InputComponent
        label="Avatar url"
        name="avatarUrl"
        placeholder="Paste URL"
        maxLength={255} />

      <p className="text-red-700 my-2">
        {state?.message}
      </p>

      <div className="flex flex-row">        
        <button 
          className="bg-slate-600 shadow-sm rounded py-2 px-5 text-white font-semibold w-full hover:bg-slate-800 m-2"
          onClick={() => { setIsOpen(false) }}>
            Close
        </button>
        <button 
          disabled={pending}
          className="bg-indigo-600 shadow-sm rounded py-2 px-5 text-white font-semibold w-full hover:bg-indigo-800 m-2">
            Create
        </button>
      </div>
   </form>
  );
}
