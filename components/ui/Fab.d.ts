/** Floating action button — 48px azure-glow circle (the 生成上身效果 treatment). Default AI entry with sparkles. */
export interface FabProps {
  /** lucide icon name @default 'sparkles' */
  icon?: string;
  /** aria-label — always provide one */
  label?: string;
  onClick?: () => void;
  /** position: fixed bottom-right @default false */
  fixed?: boolean;
  /** Edge offset in px when fixed @default 24 */
  offset?: number;
  style?: React.CSSProperties;
}
export declare function Fab(props: FabProps): JSX.Element;
