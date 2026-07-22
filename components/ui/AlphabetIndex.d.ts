/** A–Z index rail for large pickers — active letter tints azure; letters outside `available` dim out. */
export interface AlphabetIndexProps {
  /** @default ['#','A'..'Z'] */
  letters?: string[];
  /** Active letter */
  value?: string;
  onChange?: (letter: string) => void;
  /** Letters that have content; others render disabled */
  available?: string[];
  style?: React.CSSProperties;
}
export declare function AlphabetIndex(props: AlphabetIndexProps): JSX.Element;
