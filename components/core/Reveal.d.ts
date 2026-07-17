/** Scroll-triggered reveal — calm fade + 26px upward float, ease cubic-bezier(0.22,1,0.36,1). */
export interface RevealProps {
  /** Float distance px @default 26 */
  y?: number;
  x?: number;
  /** seconds @default 0 */
  delay?: number;
  /** seconds @default 0.75 */
  duration?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Reveal(props: RevealProps): JSX.Element;

/** Number that counts up (cubic ease-out) when scrolled into view. */
export interface CountUpProps {
  to: number;
  /** seconds @default 1.6 */
  duration?: number;
}
export declare function CountUp(props: CountUpProps): JSX.Element;
