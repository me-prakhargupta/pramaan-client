"use client";

interface AuthFormProps {
    type?: string,
    lable: string,
    name: string,
}

export default function FloatingInput({type, lable, name}: AuthFormProps) {
  return (
    <div className="relative w-full">
      <input type={type} name={name} placeholder="" 
      className="peer block w-full px-4 py-3 text-gray-900 bg-gray-50 border-b-3 border-[#028174] focus:outline-none focus:border-[#028174] mb-10 h-17"/>

      <label className="pointer-events-none absolute outline:none text-gray-500 left-4 top-3 px-1 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#028174] bg-gray-50">{lable}</label>
    </div>
  );
}
