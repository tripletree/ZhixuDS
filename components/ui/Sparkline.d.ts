/**
 * Micro line chart — thin 1.6px stroke per the data-viz rules; optional 0.18-opacity
 * area fill (radar-polygon treatment) and end dot (azure-bright).
 */
export interface SparklineProps {
  data: number[];
  /** @default 140 */ width?: number;
  /** @default 44 */ height?: number;
  /** @default 'azure' */
  tone?: 'azure' | 'champagne' | 'mist' | 'rouge';
  /** Area fill at 0.18 opacity @default false */
  fill?: boolean;
  /** Dot on the last point @default false */
  dot?: boolean;
  /** @default 1.6 */ strokeWidth?: number;
  style?: React.CSSProperties;
}
export declare function Sparkline(props: SparklineProps): JSX.Element;

/** Mini bar chart — rounded 2px bars, opacity scaling with value (AI-chat answer chart). */
export interface SparkBarsProps {
  data: number[];
  /** @default 140 */ width?: number;
  /** @default 44 */ height?: number;
  /** @default 'azure' */
  tone?: 'azure' | 'champagne' | 'mist' | 'rouge';
  /** @default 8 */ gap?: number;
  /** @default 2 */ radius?: number;
  style?: React.CSSProperties;
}
export declare function SparkBars(props: SparkBarsProps): JSX.Element;
