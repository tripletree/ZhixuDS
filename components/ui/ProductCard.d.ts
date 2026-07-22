/**
 * Product media card — image over a two-line clamped title and a brand/date meta row.
 * Lifts −4px and tints its border azure on hover. Empty src renders a bone-gradient placeholder.
 */
export interface ProductCardProps {
  /** Image URL; omit for a placeholder gradient */
  src?: string;
  alt?: string;
  /** CSS aspect-ratio of the media area @default '3/4' */
  aspectRatio?: string;
  /** Clamped to two lines */
  title?: React.ReactNode;
  /** Left meta (12px bone-dim, ellipsized) */
  brand?: React.ReactNode;
  /** Right meta (11px mist), e.g. '2026-07-22' */
  date?: React.ReactNode;
  /** Optional Tag row between title and meta */
  tags?: React.ReactNode;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function ProductCard(props: ProductCardProps): JSX.Element;

/** Thumbnail selector row — squares with an azure frame on the selected item. */
export interface ThumbnailStripProps {
  items: Array<{ src?: string; alt?: string }>;
  /** Selected index @default 0 */
  value?: number;
  onChange?: (index: number) => void;
  /** Square size in px @default 32 */
  size?: number;
  style?: React.CSSProperties;
}
export declare function ThumbnailStrip(props: ThumbnailStripProps): JSX.Element;
