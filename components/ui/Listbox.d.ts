/**
 * Custom branded dropdown — .fm-control trigger + frosted ink panel with azure
 * hover highlight and check-marked selection. Use instead of Select when the
 * open panel must match the brand (native <select> popups can't be themed).
 */
export interface ListboxOption {
  value: string;
  label: React.ReactNode;
  /** Dim right-aligned annotation, e.g. an English module name */
  hint?: string;
}
export interface ListboxProps {
  options: ListboxOption[];
  /** Selected option value (controlled) */
  value?: string;
  onChange?: (value: string) => void;
  /** Shown in mist when nothing is selected @default '请选择' */
  placeholder?: string;
  style?: React.CSSProperties;
}
export declare function Listbox(props: ListboxProps): JSX.Element;
