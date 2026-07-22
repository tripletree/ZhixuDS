/**
 * Hairline BI table — uppercase-tracked micro header over hairline row rules;
 * rows tint bone 3% on hover.
 */
export interface DataTableColumn {
  key: string;
  label: React.ReactNode;
  /** @default 'left' */
  align?: 'left' | 'right' | 'center';
  /** Emphasise cells: bone text, 500 weight (use for key numerals) */
  strong?: boolean;
  /** Custom cell renderer */
  render?: (value: any, row: any, index: number) => React.ReactNode;
}
export interface DataTableProps {
  columns: DataTableColumn[];
  rows: Array<Record<string, any>>;
  /** Tighter 8px/12px cell padding @default false */
  dense?: boolean;
  style?: React.CSSProperties;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
