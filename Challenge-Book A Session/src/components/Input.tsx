import { ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  id: string;
};

const Input = ({ id, label, ...otherProps }: InputProps) => {
  return (
    <div className="control">
      <label htmlFor={id}>{label}</label>
      <input id={id} {...otherProps} />
    </div>
  );
};

export default Input;
