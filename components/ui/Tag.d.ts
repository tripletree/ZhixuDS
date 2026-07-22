/**
 * Pill chip — hairline border + low-alpha tint. Neutral by default; azure/champagne/rouge
 * follow the data-series palette (use sparingly, azure is the working accent).
 */
export interface TagProps {
  /** @default 'neutral' */
  tone?: 'neutral' | 'azure' | 'champagne' | 'rouge';
  /** sm = 10px chip (mock scale), md = 12px @default 'md' */
  size?: 'sm' | 'md';
  /** Leading lucide icon name */
  icon?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tag(props: TagProps): JSX.Element;

/** Live status dot with ping halo, e.g. 「AI 正在分析」. */
export interface StatusDotProps {
  /** @default 'azure' */
  tone?: 'azure' | 'champagne' | 'rouge';
  /** Optional caption to the right of the dot */
  label?: string;
  style?: React.CSSProperties;
}
export declare function StatusDot(props: StatusDotProps): JSX.Element;
