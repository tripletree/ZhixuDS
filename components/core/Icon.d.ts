/**
 * Lucide linear icon wrapper — embeds the exact glyphs the FabricMind site uses; colors via currentColor.
 */
export type IconName =
  | 'arrow-up-right' | 'moon' | 'sun' | 'arrow-right' | 'sparkles'
  | 'trending-up' | 'activity' | 'database' | 'box' | 'file-image'
  | 'layout-dashboard' | 'arrow-up' | 'download' | 'x';
export interface IconProps {
  name: IconName;
  /** px @default 16 */
  size?: number;
  /** @default 1.75 (use 1.5 for feature icons) */
  strokeWidth?: number;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
