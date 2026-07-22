/** Pill pagination — 28px circles, current page on bone 8% like the active tab; chevron arrows, double chevrons for first/last. */
export interface PaginationProps {
  /** Current 1-based page @default 1 */
  page?: number;
  /** @default 1 */
  pageCount?: number;
  onChange?: (page: number) => void;
  /** Numbered pages shown on each side of the current page @default 1 */
  siblings?: number;
  /** Show first/last double-chevron buttons @default true */
  showEnds?: boolean;
  style?: React.CSSProperties;
}
export declare function Pagination(props: PaginationProps): JSX.Element;
