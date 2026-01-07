// export function Input({ref,placeholder}:{placeholder:string; ref?:any}){
//     return <div>
//         <input placeholder={placeholder} type={"text"} className="px-4 py-2 border border-gray-300 rounded" ref={ref}/>
//     </div>
// }

import React, { forwardRef } from "react";

export const Input = forwardRef<HTMLInputElement, { placeholder: string; type?: string }>(
  ({ placeholder, type = "text" }, ref) => {
    return (
      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
       className="w-full rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-600"
      />
    );
  }
);

Input.displayName = "Input";
