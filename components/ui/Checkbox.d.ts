/** 16px checkable box — azure fill when checked, ink check (inverts with theme). */
export interface CheckboxProps {
  checked?: boolean;
  /** Shows a bar instead of a check (e.g. partial group selection) */
  indeterminate?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  /** Label text (13px bone-soft) */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;

/** Column list (default) or grid of checkboxes bound to a value array. */
export interface CheckboxGroupProps {
  options: Array<{ value: string; label: React.ReactNode; disabled?: boolean }>;
  /** Selected values (controlled) */
  value?: string[];
  onChange?: (value: string[]) => void;
  /** Grid column count; omit for a vertical list */
  columns?: number;
  /** @default 10 */
  gap?: number;
  style?: React.CSSProperties;
}
export declare function CheckboxGroup(props: CheckboxGroupProps): JSX.Element;
