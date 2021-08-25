import { useField } from '@unform/core';

import { InputHTMLAttributes, useEffect, useRef } from 'react';

interface Props {
  name: string;
  label?: string;
  value?: string;
}

type InputProps = InputHTMLAttributes<HTMLInputElement> & Props;

export function Checkbox({ name, value, label, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement[]>([]);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  const defaultChecked = defaultValue === value;

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      getValue: (ref: HTMLInputElement[]) => {
        return ref.filter(ref => ref.checked).map(ref => ref.value);
      },
      clearValue: (ref: HTMLInputElement[]) => {
        ref.forEach(ref => {
          ref.checked = false;
        });
      },
      setValue: (ref: HTMLInputElement[], value: string[]) => {
        ref.forEach(ref => {
          if (value.includes(ref.id)) {
            ref.checked = true;
          }
        });
      },
    });
  }, [defaultValue, fieldName, registerField, defaultChecked]);

  return (
    <div>
      <input
        defaultChecked={defaultChecked}
        ref={(ref: HTMLInputElement) => inputRef.current.push(ref)}
        value={value}
        type="checkbox"
        name={fieldName}
        {...rest}
      />

      <label htmlFor={fieldName} key={fieldName}>
        {label}
      </label>

      {error && <span>{error}</span>}
    </div>
  );
}
