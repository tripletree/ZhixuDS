/**
 * Floating panel anchored to a trigger — frosted ink surface (Listbox panel recipe),
 * fm-pop-in entrance, outside-click + Escape close. Base layer for filter panels,
 * date editors, and menus.
 */
export interface PopoverProps {
  /** Trigger element; clicking it toggles the panel */
  anchor: React.ReactNode;
  /** Controlled open state; omit for uncontrolled toggle-on-click */
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  /** @default 'bottom-start' */
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  /** Panel width in px @default 320 */
  width?: number;
  /** Panel padding in px (menus use 6) @default 16 */
  padding?: number;
  /** Panel content */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Popover(props: PopoverProps): JSX.Element;
