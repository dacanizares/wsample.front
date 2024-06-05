interface InputComponentProps {
  label: string,
  name: string,
  placeholder: string,
  required?: boolean,
  type?: string
  maxLength?: number 
}

export default function InputComponent({label, name, placeholder, required=false, type="text", maxLength=20}: InputComponentProps) {
  return (
    <>
      <label className="block mt-2 text-sm font-medium text-gray-600 w-full">
        { label }
      </label>
      <input 
        name={name} 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={maxLength}
      />
    </>
  )
}
