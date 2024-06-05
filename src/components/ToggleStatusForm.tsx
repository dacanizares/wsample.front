'use client'
import { useFormStatus } from "react-dom";
import toggleStatusEmployeeAction from "@/actions/toggleStatusEmployee";


interface ActivateFormProps {
  id: number,
  active: number
}

export default function ActivateForm({id, active}: ActivateFormProps) {
  const { pending } = useFormStatus();
  
  const toggleStatusEmployeeActionWithParams = toggleStatusEmployeeAction.bind(null, { id, active });
  return (
   <form 
    className="flex flex-auto m-2"
    action={toggleStatusEmployeeActionWithParams}>
    <div className="d-none bg-orange-500 hover:bg-orange-600 bg-lime-500 hover:bg-lime-600" />
    <button 
      disabled={pending}
      className={`bg-slate-600 shadow-sm rounded py-2 px-5 text-white font-semibold w-full hover:bg-slate-800`}>
        { active === 1 && <>Deactivate</> }
        { active === 0 && <>Activate</> }
    </button>
   </form>
  );
}
