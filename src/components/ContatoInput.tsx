import { forwardRef } from "react";
import type { InputHTMLAttributes } from "react";

interface ContatoInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  erro?: string;
}

const ContatoInput = forwardRef<HTMLInputElement, ContatoInputProps>(
  ({ label, erro, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5">
        <label htmlFor={id} className="font-['Momo_Trust_Display'] text-lg text-indigo-600">
          {label}
        </label>
        <input
          id={id}
          ref={ref}
          className="h-12 w-full rounded-lg bg-linear-to-b from-sky-100 to-indigo-100 px-4 font-['Lexend_Deca'] text-gray-900 placeholder:text-gray-500"
          {...props}
        />
        {erro && <span className="font-['Lexend_Deca'] text-sm text-rose-500">{erro}</span>}
      </div>
    );
  }
);

ContatoInput.displayName = "CampoInput";

export default ContatoInput;