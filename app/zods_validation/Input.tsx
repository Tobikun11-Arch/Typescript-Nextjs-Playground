import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  type: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ placeholder, type, ...rest }, ref) => {
    return (
        <div className="mb-4">
        <input
            ref={ref} // ✅ Forward ref to make React Hook Form work
            type={type}
            placeholder={placeholder}
            className="w-full border p-2 rounded-md outline-none"
            {...rest} 
        />
        </div>
    );
});

export default Input;
