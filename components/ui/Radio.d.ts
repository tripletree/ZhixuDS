/** 16px radio — azure ring + 8px azure dot when selected. */
export interface RadioProps {
  checked?: boolean;
  /** Called when this radio becomes selected */
  onChange?: () => void;
  /** Radio group name (RadioGroup supplies one automatically) */
  name?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Radio(props: RadioProps): JSX.Element;

/** Single-choice group, vertical by default. */
export interface RadioGroupProps {
  options: Array<{ value: string; label: React.ReactNode; disabled?: boolean }>;
  value?: string;
  onChange?: (value: string) => void;
  /** @default 'column' */
  direction?: 'column' | 'row';
  /** @default 10 */
  gap?: number;
  name?: string;
  style?: React.CSSProperties;
}
export declare function RadioGroup(props: RadioGroupProps): JSX.Element;
