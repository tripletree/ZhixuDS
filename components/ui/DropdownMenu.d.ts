/** Action menu on the Popover panel — row/card actions with azure hover, rouge danger items. */
export interface DropdownMenuItem {
  key?: string;
  label?: React.ReactNode;
  /** Leading lucide icon name */
  icon?: string;
  /** Dim right-aligned annotation (e.g. a shortcut) */
  hint?: string;
  /** Rouge-tinted destructive item */
  danger?: boolean;
  disabled?: boolean;
  /** Pass { type: 'divider' } for a hairline rule */
  type?: 'divider';
}
export interface DropdownMenuProps {
  items: DropdownMenuItem[];
  onSelect?: (key: string) => void;
  /** Trigger element (typically an IconButton with 'ellipsis-vertical') */
  anchor: React.ReactNode;
  /** @default 'bottom-end' */
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  /** @default 180 */
  width?: number;
  style?: React.CSSProperties;
}
export declare function DropdownMenu(props: DropdownMenuProps): JSX.Element;
