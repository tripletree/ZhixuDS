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
  /** Max width in px @default 384 */
  width?: number;
  /** @default 'center' */
  align?: 'center' | 'left';
  children?: React.ReactNode;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;
