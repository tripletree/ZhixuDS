/** Collapsible filter group — bone title, rotating chevron, calm height animation. */
export interface CollapseProps {
  title: React.ReactNode;
  /** Dim count annotation next to the chevron (e.g. selected count) */
  count?: React.ReactNode;
  /** Initial state when uncontrolled @default true */
  defaultOpen?: boolean;
  /** Controlled open state */
  open?: boolean;
  onToggle?: (open: boolean) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Collapse(props: CollapseProps): JSX.Element;
