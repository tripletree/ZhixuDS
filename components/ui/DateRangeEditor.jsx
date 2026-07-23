import React from 'react';
import { Icon } from '../core/Icon.jsx';
import { Popover } from './Popover.jsx';
import { RadioGroup } from './Radio.jsx';
import { Button } from '../core/Button.jsx';
/* Relative time-range editor — .fm-control trigger with calendar glyph opening a preset
   panel (前一周/前一月/前一年 …) with a computed-range readout and 取消/应用 actions. */
export function DateRangeEditor({ presets = [], value, onChange, rangeText, title = '编辑时间范围', width = 300, placeholder = '选择时间范围', style }) {
  const [open, setOpen] = React.useState(false);
  const [draft, setDraft] = React.useState(value);
  React.useEffect(() => { if (open) setDraft(value); }, [open]);
  const current = presets.find(p => p.value === value);
  const readout = typeof rangeText === 'function' ? rangeText(draft) : rangeText;
  return (
    <Popover open={open} onOpenChange={setOpen} width={width} style={style}
      anchor={
        <button type="button" className="fm-control" aria-haspopup="dialog" aria-expanded={open}
          style={{
            display: 'flex', alignItems: 'center', gap: 8, textAlign: 'left', cursor: 'pointer',
            appearance: 'none', WebkitAppearance: 'none', width: '100%', boxSizing: 'border-box',
            borderRadius: 'var(--radius-panel)', border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)',
            background: 'color-mix(in srgb, var(--color-ink-850) 80%, transparent)', padding: '10px 14px',
            fontFamily: 'var(--font-sans)', fontSize: 13, lineHeight: 1.5,
          }}>
          <span style={{ flex: 1, color: current ? 'var(--color-bone)' : 'var(--color-mist)' }}>{current ? current.label : placeholder}</span>
          <span style={{ display: 'inline-flex', color: 'var(--color-mist)' }}><Icon name="calendar" size={14} /></span>
        </button>
      }>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, textAlign: 'left' }}>
        <span style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-bone)' }}>{title}</span>
        <RadioGroup value={draft} onChange={setDraft} options={presets} />
        {readout ? <span style={{ fontSize: 11, letterSpacing: '0.02em', color: 'var(--color-mist)' }}>{readout}</span> : null}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
          <Button variant="ghost" size="sm" onClick={() => setOpen(false)}>取消</Button>
          <Button size="sm" onClick={() => { if (onChange) onChange(draft); setOpen(false); }}>应用</Button>
        </div>
      </div>
    </Popover>
  );
}
