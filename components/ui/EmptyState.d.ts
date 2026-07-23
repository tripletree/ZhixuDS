/** No-data placeholder — mist glyph in a hairline circle, quiet copy, optional action. */
export interface EmptyStateProps {
  /** lucide icon name @default 'database' */
  icon?: string;
  title?: string;
  description?: string;
  /** Action node, e.g. a ghost Button */
  action?: React.ReactNode;
  /** Tighter padding + smaller glyph for tile-sized areas @default false */
  compact?: boolean;
  style?: React.CSSProperties;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
