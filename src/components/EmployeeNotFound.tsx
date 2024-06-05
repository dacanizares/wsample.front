import Link from "next/link"


export default function EmployeeNotFound() {
  return (
    <>
      <h1 className="text-4xl">Employee not found</h1>
      <div className="mt-10">
        <Link href="/" 
          className="bg-indigo-600 shadow-sm rounded py-5 px-5 text-white font-semibold w-full hover:bg-indigo-800">
          Go to list
        </Link>
      </div>
    </>
  )
}
