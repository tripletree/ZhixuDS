/**
 * Pill segmented control — all-pill per the brand rules. Active pill lifts to bone 8%
 * with a hairline border; idle tabs dim like nav links.
 */
export interface TabItem {
  key: string;
  label: React.ReactNode;
  /** Optional leading lucide icon name */
  icon?: string;
}
export interface TabsProps {
  items: TabItem[];
  /** Active item key (controlled) */
  value?: string;
  onChange?: (key: string) => void;
  /** @default 'md' */
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
