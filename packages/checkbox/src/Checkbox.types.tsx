export interface CheckboxProps {
  label: string;
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  error?: boolean;
  dataTestId?: string;
  onChange: (checked: boolean) => void;
}
