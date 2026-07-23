/** Labelled form row: 12px medium label, control, 11px mist hint (or rouge error). */
export interface FieldProps {
  label?: string;
  /** Mist helper text under the control */
  hint?: string;
  /** Rouge validation message — replaces `hint` while set; pair with `invalid` on the control */
  error?: string;
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
  /** Rouge border + focus ring (.fm-control-error) + aria-invalid @default false */
  invalid?: boolean;
}
export declare function Input(props: InputProps): JSX.Element;

/** Multiline .fm-control. @default rows 4 */
export declare function TextArea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { invalid?: boolean }): JSX.Element;

/** Native select on the .fm-control surface with a lucide chevron. */
export declare function Select(props: React.SelectHTMLAttributes<HTMLSelectElement> & { invalid?: boolean }): JSX.Element;
