/**
 * Selectable pill chip group — single or multi select. Selected chips tint azure
 * (12% fill, 40% border, azure-bright text), matching the nav-pill hover language.
 */
export interface FilterChipsProps {
  options: Array<{ value: string; label: React.ReactNode }>;
  /** Selected value (single) or values array (multiple) */
  value?: string | string[];
  onChange?: (value: any) => void;
  /** Toggle behaviour with a value array @default false */
  multiple?: boolean;
  /** Optional group caption above the chips (12px bone-dim) */
  title?: string;
  /** @default 'md' */
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
export declare function FilterChips(props: FilterChipsProps): JSX.Element;
