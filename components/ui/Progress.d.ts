/**
 * Gradient meter row — 6px pill track with azure-deep→azure fill,
 * exactly the dashboard's 材料机会 TOP 5 bars.
 */
export interface ProgressProps {
  /** Left label, e.g. a material name ('Lyocell') */
  label?: string;
  value: number;
  /** @default 100 */
  max?: number;
  /** azure gradient (default) · champagne/rouge as secondary data series · bone neutral @default 'azure' */
  tone?: 'azure' | 'champagne' | 'rouge' | 'bone';
  /** Show the numeric value right-aligned @default true */
  showValue?: boolean;
  /** Fixed label column width @default 96 */
  labelWidth?: number | string;
  style?: React.CSSProperties;
}
export declare function Progress(props: ProgressProps): JSX.Element;
