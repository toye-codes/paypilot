import React from "react";

type InputFieldProps = {
  label: string;
  type?: React.InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  className = "",
  ...props
}) => {
  const id = props.id || label.toLowerCase();

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-xs font-medium uppercase tracking-wide">
        {label}
      </label>

      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`w-full px-4 py-3 rounded-xl text-sm outline-none transition-all border ${className}`}
        {...props}
      />
    </div>
  );
};

export default InputField;
