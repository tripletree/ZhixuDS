/**
 * Relative time-range editor — .fm-control trigger with a calendar glyph opening a
 * preset panel (前一周/前一月/前一年 …) with a computed-range readout and 取消/应用.
 * Draft selection only commits on 应用.
 */
export interface DateRangeEditorProps {
  /** Radio presets, e.g. { value: 'month', label: '前一月' } */
  presets: Array<{ value: string; label: React.ReactNode; disabled?: boolean }>;
  /** Committed preset value (controlled) */
  value?: string;
  /** Called with the draft value when 应用 is pressed */
  onChange?: (value: string) => void;
  /** Readout under the presets — string, or (draftValue) => string for live ranges */
  rangeText?: string | ((draft: string) => string);
  /** @default '编辑时间范围' */
  title?: string;
  /** Panel width @default 300 */
  width?: number;
  /** Trigger text when nothing selected @default '选择时间范围' */
  placeholder?: string;
  style?: React.CSSProperties;
}
export declare function DateRangeEditor(props: DateRangeEditorProps): JSX.Element;
