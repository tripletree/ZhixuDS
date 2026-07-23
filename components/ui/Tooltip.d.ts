/** Micro floating hint on the frosted float surface, shown on hover/focus after a short delay. */
export interface TooltipProps {
  /** Hint content — keep to one caption-scale line or two */
  content?: React.ReactNode;
  /** @default 'top' */
  placement?: 'top' | 'bottom' | 'left' | 'right';
  /** Hover intent delay in ms @default 150 */
  delay?: number;
  /** @default 240 */
  maxWidth?: number;
  /** Controlled visibility (for demos); omit for hover/focus behaviour */
  open?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tooltip(props: TooltipProps): JSX.Element;
