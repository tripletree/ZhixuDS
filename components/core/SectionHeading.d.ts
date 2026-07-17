/**
 * Section heading block — azure eyebrow with hairline dash, bold tight title, dim supporting copy.
 */
export interface SectionHeadingProps {
  /** Bilingual, middot-separated, e.g. "Solution · 解决方案" */
  eyebrow?: string;
  title: string;
  copy?: string;
  /** @default 'center' */
  align?: 'center' | 'left';
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
