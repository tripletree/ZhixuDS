/**
 * Feedback toast on the frosted float surface. Tones map to the data palette:
 * info/success azure, warning champagne, error rouge.
 */
export interface ToastProps {
  /** @default 'info' */
  tone?: 'info' | 'success' | 'warning' | 'error';
  title?: string;
  /** 12px bone-dim second line */
  description?: string;
  /** Override the tone's lucide glyph (icon name from core Icon) */
  icon?: string;
  /** Shows the corner close button */
  onClose?: () => void;
  style?: React.CSSProperties;
}
export declare function Toast(props: ToastProps): JSX.Element;

export interface ToastItem extends Omit<ToastProps, 'onClose' | 'style'> {
  id: number;
  /** Auto-dismiss ms; 0 = sticky @default hook's defaultDuration */
  duration?: number;
}
export interface ToastStackProps {
  toasts?: ToastItem[];
  onDismiss?: (id: number) => void;
  /** @default 'bottom-right' */
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  /** Distance from the viewport corner @default 24 */
  offset?: number;
  style?: React.CSSProperties;
}
/** Fixed-position stack rendering Toasts, newest last. */
export declare function ToastStack(props: ToastStackProps): JSX.Element;

/** Toast state hook — `push()` returns the id and auto-dismisses after `duration` ms (0 = sticky). */
export declare function useToasts(defaultDuration?: number): {
  toasts: ToastItem[];
  push: (toast: Omit<ToastItem, 'id'>) => number;
  dismiss: (id: number) => void;
};
