import { TextInput, TextInputProps } from '../atoms';

export interface InputFieldWithLabelProps extends Omit<TextInputProps, 'label'> {
  label: string;
  hint?: string;
  required?: boolean;
}

export function InputFieldWithLabel({
  label,
  hint,
  required,
  ...inputProps
}: InputFieldWithLabelProps) {
  return (
    <div className="flex flex-col gap-1">
      <TextInput
        label={required ? `${label} *` : label}
        hint={hint}
        {...inputProps}
      />
    </div>
  );
}
