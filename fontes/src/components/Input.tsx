import React from 'react';

type InputProps = {
  label?: string;
  type?: string;
  placeholder?: string;
  value: string;
  height?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: React.FC<InputProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  height
}) => {
  return (
    <div>
      {label && <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{ height }}
        className="w-full px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] transition duration-200"
      />
    </div>
  );
};

export default Input;
