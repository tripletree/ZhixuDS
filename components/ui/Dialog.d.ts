/**
 * Modal dialog — blurred ink-950/80 overlay, frosted glass card with scale/rise entrance,
 * Escape/overlay-click to close. Extracted from the landing ContactDialog.
 */
export interface DialogProps {
  open: boolean;
  /** Omit to hide the corner close button (Escape/overlay then won't close either) */
  onClose?: () => void;
  title?: string;
  /** Dim body line under the title */
  subtitle?: string;
  /** Max width preset: sm 384 · md 480 · lg 720 (wide pickers) @default 'sm' */
  size?: 'sm' | 'md' | 'lg';
  /** Explicit max width in px; overrides size */
  width?: number;
  /** @default 'center' */
  align?: 'center' | 'left';
  /** Right-aligned action row (e.g. ghost 取消 + primary 确定); body scrolls above it */
  footer?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
