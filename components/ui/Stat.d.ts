/**
 * Metric block — eyebrow-tracked label over a big semibold numeral, with optional
 * unit suffix and ↑/↓ delta. Numbers are the brand's proof language (机会指数 78/100, +18%).
 */
export interface StatProps {
  /** Eyebrow-style label, e.g. '机会指数 · 综合' */
  label?: string;
  /** Number animates via CountUp when `animate`; strings render as-is */
  value: number | string;
  /** Dim unit suffix, e.g. '/100' or '%' */
  suffix?: string;
  /** Delta text, e.g. '+18%' */
  delta?: string;
  /** Colors the delta: up = azure-bright, down = rouge mix @default 'up' */
  trend?: 'up' | 'down';
  /** sm 28px · md 36px · lg 48px numeral @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Count up on scroll into view @default true */
  animate?: boolean;
  style?: React.CSSProperties;
}
export declare function Stat(props: StatProps): JSX.Element;
