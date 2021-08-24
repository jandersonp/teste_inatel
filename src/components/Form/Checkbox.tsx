import { useField } from '@unform/core';
import { InputHTMLAttributes, useEffect, useRef } from 'react';

interface Props {
  name: string;
  label?: string;
  value?: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

export function Checkbox({ name, value, label, ...rest }: InputProps) {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const defaultChecked = defaultValue === value;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: ref => {
        return ref.current.checked;
      },
      clearValue: ref => {
        ref.current.checked = defaultChecked;
      },
      setValue: (ref, value) => {
        ref.current.checked = value;
      },
    });
  }, [fieldName, registerField]);

  return (
    <div>
      <input
        defaultChecked={defaultChecked}
        ref={inputRef}
        value={value}
        type="checkbox"
        id={fieldName}
        {...rest}
      />

      <label htmlFor={fieldName} key={fieldName}>
        {label}
      </label>

      {error && <span>{error}</span>}
    </div>
  );
}
