/**
 * FabricMind surface card — `.panel` diagonal-sheen content card, `.glass` frosted tile,
 * or `feature` (panel surface at the larger 1.5rem radius).
 */
export interface PanelProps {
  /** panel = content card, glass = frosted floating tile, feature = panel at 1.5rem radius @default 'panel' */
  variant?: 'panel' | 'glass' | 'feature';
  /** Corner azure glow: true = .glow-blue, 'sm' = .glow-blue-sm @default false */
  glow?: boolean | 'sm';
  /** @default 24 */
  padding?: number | string;
  /** Override border-radius (defaults to --radius-card / --radius-feature) */
  radius?: number | string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}
export declare function Panel(props: PanelProps): JSX.Element;
