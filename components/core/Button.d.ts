/**
 * FabricMind pill button — primary (bone-filled), ghost (hairline), nav (small pill).
 */
export interface ButtonProps {
  /** @default 'primary' */
  variant?: 'primary' | 'ghost' | 'nav';
  /** md = hero CTA (14px/24px pad), lg = footer CTA, sm = nav pill @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Trailing lucide icon name, e.g. 'arrow-right' | 'arrow-up-right' */
  icon?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: () => void;
}
export declare function Button(props: ButtonProps): JSX.Element;

/** 36px circular icon button (e.g. theme toggle). */
export interface IconButtonProps {
  /** lucide icon name */
  name: string;
  /** aria-label */
  label?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
