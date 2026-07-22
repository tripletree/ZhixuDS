/** Labelled form row: 12px medium label, control, 11px mist hint. */
export interface FieldProps {
  label?: string;
  /** Mist helper text under the control */
  hint?: string;
  /** Marks the label with an azure asterisk */
  required?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;

/** Text input on the .fm-control surface (chat-input styling, azure focus ring). */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Optional leading lucide icon name, e.g. 'search' */
  icon?: string;
}
export declare function Input(props: InputProps): JSX.Element;

/** Multiline .fm-control. @default rows 4 */
export declare function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>): JSX.Element;

/** Native select on the .fm-control surface with a lucide chevron. */
export declare function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>): JSX.Element;
