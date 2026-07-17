/* Product mock visuals — faithful React ports of src/components/visuals/*.vue */
const DS = window.FabricMindDesignSystem_4edb8c;
const { Icon, CountUp } = DS;

const eyebrow10 = { fontSize: 10, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500, color: 'var(--color-bone-dim)' };

function radarPoint(i, r) {
  const angle = (Math.PI * 2 * i) / 5 - Math.PI / 2;
  return `${50 + 38 * r * Math.cos(angle)},${50 + 38 * r * Math.sin(angle)}`;
}

function DashboardMock() {
  const materials = [
    { name: 'Lyocell', score: 86 }, { name: 'Recycled Nylon', score: 82 },
    { name: 'Linen Blend', score: 78 }, { name: 'Merino Wool', score: 71 },
    { name: 'Tencel Modal', score: 66 },
  ];
  const radarAxes = ['市场潜力', '增长潜力', '竞争格局', '可行性', '趋势热度'];
  const radarValues = [0.82, 0.74, 0.58, 0.7, 0.9];
  const radarPolygon = radarValues.map((v, i) => radarPoint(i, v)).join(' ');
  const radarGrid = [1, 0.66, 0.33].map(ring => radarValues.map((_, i) => radarPoint(i, ring)).join(' '));
  const trendLines = [
    { c: 'var(--color-azure)', d: 'M4 78 C 40 70, 70 52, 110 48 C 150 44, 190 30, 236 18' },
    { c: 'var(--color-champagne)', d: 'M4 84 C 50 80, 80 70, 120 66 C 160 62, 200 56, 236 44' },
    { c: 'var(--color-mist)', d: 'M4 70 C 40 72, 80 66, 120 70 C 160 74, 200 60, 236 58' },
    { c: 'var(--color-rouge)', d: 'M4 90 C 50 88, 90 86, 130 80 C 170 74, 205 78, 236 70' },
  ];
  const bubbles = [
    { x: 28, y: 64, r: 7 }, { x: 52, y: 40, r: 11, hot: true }, { x: 74, y: 30, r: 8, hot: true },
    { x: 40, y: 78, r: 5 }, { x: 86, y: 56, r: 6 }, { x: 64, y: 70, r: 9 },
  ];
  const tile = { borderRadius: 12, padding: 16 };
  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      <div className="fm-ghost-card" style={{ position: 'absolute', left: -16, top: 24, height: 176, width: 160, transform: 'rotate(-6deg)', borderRadius: 12, border: '1px solid rgba(236,234,225,0.06)', background: 'color-mix(in srgb, var(--color-ink-800) 60%, transparent)', padding: 8, filter: 'blur(1.5px)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
          {[...Array(6)].map((_, n) => <div key={n} style={{ aspectRatio: '3/4', borderRadius: 4, background: 'color-mix(in srgb, var(--color-bone) 4%, transparent)' }}></div>)}
        </div>
      </div>
      <div className="fm-ghost-card" style={{ position: 'absolute', left: -8, top: 112, height: 160, width: 96, transform: 'rotate(5deg)', borderRadius: 12, border: '1px solid rgba(236,234,225,0.06)', background: 'linear-gradient(to bottom, color-mix(in srgb, var(--color-champagne) 10%, transparent), var(--color-ink-850))', filter: 'blur(1px)' }}></div>
      <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 12 }}>
        <div className="glass" style={{ ...tile, gridColumn: 'span 7' }}>
          <div style={{ marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={eyebrow10}>趋势热度走势</span>
            <span style={{ fontSize: 10, letterSpacing: '0.02em', color: 'var(--color-mist)' }}>2023 Q1 → 2025 Q1</span>
          </div>
          <svg viewBox="0 0 240 100" style={{ height: 80, width: '100%' }} preserveAspectRatio="none">
            {[22, 48, 74].map(y => <line key={y} x1="0" y1={y} x2="240" y2={y} stroke="var(--color-mist)" strokeOpacity="0.1" />)}
            {trendLines.map((l, i) => <path key={i} d={l.d} fill="none" stroke={l.c} strokeWidth="1.6" strokeLinecap="round" opacity={i === 0 ? 0.95 : 0.6} />)}
          </svg>
        </div>
        <div className="glass" style={{ ...tile, gridColumn: 'span 5' }}>
          <span style={eyebrow10}>机会指数 · 综合</span>
          <div style={{ marginTop: 4, display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <span style={{ fontSize: 36, fontWeight: 600, letterSpacing: '-0.025em', color: 'var(--color-bone)' }}><CountUp to={78} /></span>
              <span style={{ marginLeft: 4, fontSize: 14, color: 'var(--color-bone-dim)' }}>/100</span>
            </div>
            <svg viewBox="0 0 100 100" style={{ width: 64, height: 64 }}>
              {radarGrid.map((g, i) => <polygon key={i} points={g} fill="none" stroke="var(--color-mist)" strokeOpacity="0.16" />)}
              <polygon points={radarPolygon} fill="var(--color-azure)" stroke="var(--color-azure)" fillOpacity="0.18" strokeWidth="1.4" />
              {radarValues.map((v, i) => {
                const [cx, cy] = radarPoint(i, v).split(',');
                return <circle key={i} cx={cx} cy={cy} r="1.6" fill="var(--color-azure-bright)" />;
              })}
            </svg>
          </div>
          <div style={{ marginTop: 4, display: 'flex', flexWrap: 'wrap', gap: '2px 8px' }}>
            {radarAxes.map(a => <span key={a} style={{ fontSize: 9, letterSpacing: '0.02em', color: 'var(--color-mist)' }}>{a}</span>)}
          </div>
        </div>
        <div className="glass" style={{ ...tile, gridColumn: 'span 5' }}>
          <span style={eyebrow10}>品类机会分布</span>
          <svg viewBox="0 0 100 90" style={{ height: 80, width: '100%', marginTop: 4 }}>
            <line x1="8" y1="82" x2="98" y2="82" stroke="var(--color-mist)" strokeOpacity="0.18" />
            <line x1="8" y1="6" x2="8" y2="82" stroke="var(--color-mist)" strokeOpacity="0.18" />
            {bubbles.map((b, i) => <circle key={i} cx={b.x} cy={b.y} r={b.r} fill={b.hot ? 'var(--color-azure)' : 'var(--color-bone-soft)'} fillOpacity={b.hot ? 0.32 : 0.14} stroke={b.hot ? 'var(--color-azure)' : 'var(--color-mist)'} strokeOpacity="0.5" />)}
          </svg>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 9, letterSpacing: '0.02em', color: 'var(--color-mist)' }}>
            <span>竞争强度 →</span><span>↑ 市场潜力</span>
          </div>
        </div>
        <div className="glass" style={{ ...tile, gridColumn: 'span 7' }}>
          <span style={eyebrow10}>材料机会 TOP 5</span>
          <div style={{ marginTop: 10, display: 'flex', flexDirection: 'column', gap: 6 }}>
            {materials.map(m => (
              <div key={m.name} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 96, flex: 'none', fontSize: 11, color: 'var(--color-bone-soft)' }}>{m.name}</span>
                <div style={{ height: 6, flex: 1, overflow: 'hidden', borderRadius: 999, background: 'color-mix(in srgb, var(--color-bone) 6%, transparent)' }}>
                  <div style={{ height: '100%', borderRadius: 999, width: m.score + '%', background: 'linear-gradient(to right, var(--color-azure-deep), var(--color-azure))' }}></div>
                </div>
                <span style={{ width: 24, textAlign: 'right', fontSize: 11, fontWeight: 500, color: 'var(--color-bone)' }}>{m.score}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ChatMock() {
  return (
    <div style={{ display: 'flex', minHeight: 208, height: '100%', flexDirection: 'column', justifyContent: 'space-between', gap: 12 }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <div style={{ maxWidth: '78%', borderRadius: '16px 2px 16px 16px', border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)', background: 'color-mix(in srgb, var(--color-bone) 6%, transparent)', padding: '8px 14px', fontSize: 12, lineHeight: 1.6, color: 'var(--color-bone-soft)' }}>
            对比近三月针织品类的上新趋势
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
          <div style={{ maxWidth: '88%', display: 'flex', flexDirection: 'column', gap: 8, borderRadius: '2px 16px 16px 16px', border: '1px solid color-mix(in srgb, var(--color-azure) 15%, transparent)', background: 'color-mix(in srgb, var(--color-azure) 5%, transparent)', padding: '10px 14px', backdropFilter: 'blur(8px)' }}>
            <p style={{ margin: 0, fontSize: 12, lineHeight: 1.6, color: 'var(--color-bone)' }}>
              近三月针织上新环比 <span style={{ fontWeight: 500, color: 'var(--color-azure-bright)' }}>+18%</span>，集中于轻薄精纺与提花结构，机会指数高于均值。
            </p>
            <svg viewBox="0 0 140 44" style={{ height: 44, width: '100%' }}>
              {[38, 52, 44, 66, 58, 78, 70].map((b, i) => (
                <rect key={i} x={i * 20 + 4} y={44 - (b / 100) * 40} width="12" height={(b / 100) * 40} rx="2" fill="var(--color-azure)" fillOpacity={0.35 + (b / 100) * 0.5} />
              ))}
            </svg>
            <p style={{ margin: 0, fontSize: 9, letterSpacing: '0.02em', color: 'var(--color-mist)' }}>基于平台数据 · 含图表依据</p>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {['趋势预警', '材料匹配', '竞品对比'].map(p => (
            <span key={p} style={{ borderRadius: 999, border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)', background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)', padding: '4px 10px', fontSize: 10, letterSpacing: '0.02em', color: 'var(--color-bone-dim)' }}>{p}</span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderRadius: 12, border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)', background: 'color-mix(in srgb, var(--color-ink-850) 80%, transparent)', padding: '8px 12px' }}>
          <span style={{ fontSize: 12, color: 'var(--color-bone-dim)' }}>向知序提问</span>
          <span className="animate-caret" style={{ display: 'inline-block', height: 14, width: 1, background: 'var(--color-azure)' }}></span>
          <span style={{ flex: 1 }}></span>
          <span style={{ display: 'flex', width: 24, height: 24, alignItems: 'center', justifyContent: 'center', borderRadius: 8, background: 'color-mix(in srgb, var(--color-azure) 20%, transparent)', color: 'var(--color-azure-bright)', boxShadow: '0 0 14px -3px rgba(87,184,212,0.7)' }}>
            <Icon name="arrow-up" size={14} />
          </span>
        </div>
      </div>
    </div>
  );
}

function ReportMock() {
  const slides = [
    { rotate: -10, x: -42, y: 10, z: 1 }, { rotate: -3, x: -14, y: 4, z: 2 }, { rotate: 5, x: 16, y: 0, z: 3 },
  ];
  const swatches = ['var(--color-champagne)', 'var(--color-azure)', 'var(--color-bone)', 'var(--color-rouge)', 'var(--color-mist)', 'var(--color-champagne)'];
  return (
    <div style={{ position: 'relative', display: 'flex', minHeight: 208, height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: 12 }}>
      <div style={{ pointerEvents: 'none', position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <div className="animate-shimmer" style={{ position: 'absolute', left: 0, right: 0, height: '33%', background: 'linear-gradient(to bottom, transparent, color-mix(in srgb, var(--color-azure) 7%, transparent), transparent)' }}></div>
      </div>
      <div style={{ position: 'relative', height: 160, width: 192 }}>
        {slides.map((s, i) => (
          <div key={i} className="fm-slide" style={{ position: 'absolute', left: '50%', top: '50%', height: 128, width: 160, borderRadius: 8, padding: 12, transform: `translate(-50%,-50%) translate(${s.x}px, ${s.y}px) rotate(${s.rotate}deg)`, zIndex: s.z }}>
            {i === 0 ? <>
              <div style={{ height: 6, width: 48, borderRadius: 3, background: 'color-mix(in srgb, var(--color-champagne) 60%, transparent)' }}></div>
              <div style={{ marginTop: 8, height: 8, width: 96, borderRadius: 4, background: 'color-mix(in srgb, var(--color-bone) 30%, transparent)' }}></div>
              <div style={{ marginTop: 4, height: 8, width: 64, borderRadius: 4, background: 'color-mix(in srgb, var(--color-bone) 15%, transparent)' }}></div>
              <div style={{ position: 'absolute', bottom: 12, left: 12, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 10, color: 'var(--color-bone-dim)' }}>FabricMind Report</div>
            </> : i === 1 ? <>
              <div style={{ height: 6, width: 40, borderRadius: 3, background: 'color-mix(in srgb, var(--color-azure) 60%, transparent)' }}></div>
              <svg viewBox="0 0 120 60" style={{ marginTop: 8, height: 48, width: '100%' }}>
                {[18, 26, 22, 34, 30].map((h, n) => <rect key={n} x={n * 22 + 4} y={52 - h} width="9" height={h} rx="1.5" fill="var(--color-bone-soft)" fillOpacity="0.16" />)}
                <polyline points="8,30 30,22 52,26 74,12 96,16 113,6" fill="none" stroke="var(--color-azure)" strokeWidth="1.6" />
              </svg>
            </> : <>
              <div style={{ height: 6, width: 40, borderRadius: 3, background: 'color-mix(in srgb, var(--color-rouge) 60%, transparent)' }}></div>
              <div style={{ marginTop: 8, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
                {swatches.map((c, n) => <div key={n} style={{ aspectRatio: '1', borderRadius: 4, background: `linear-gradient(to bottom right, color-mix(in srgb, ${c} 25%, transparent), var(--color-ink-700))` }}></div>)}
              </div>
            </>}
          </div>
        ))}
      </div>
      <button type="button" style={{ position: 'absolute', right: 16, top: 16, display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 999, border: '1px solid color-mix(in srgb, var(--color-bone) 15%, transparent)', background: 'color-mix(in srgb, var(--color-bone) 5%, transparent)', padding: '6px 12px', fontSize: 11, fontWeight: 500, letterSpacing: '0.02em', color: 'var(--color-bone)', backdropFilter: 'blur(8px)', cursor: 'pointer' }}>
        <Icon name="download" size={12} /> 导出 PPT
      </button>
    </div>
  );
}

function TryOnMock() {
  const garment = { position: 'absolute', left: 12, width: 64, borderRadius: 8, border: '1px dashed color-mix(in srgb, var(--color-champagne) 30%, transparent)', background: 'color-mix(in srgb, var(--color-ink-850) 70%, transparent)', padding: 6 };
  return (
    <div style={{ position: 'relative', display: 'flex', minHeight: 208, height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', borderRadius: 12 }}>
      <div style={{ position: 'absolute', left: '50%', top: 0, width: 224, height: 224, transform: 'translate(-50%,-25%)', borderRadius: 999, opacity: 0.7, filter: 'blur(32px)', background: 'radial-gradient(circle, rgba(201,173,124,0.18), transparent 65%)' }}></div>
      <div style={{ ...garment, top: 24 }}>
        <div style={{ aspectRatio: '1', borderRadius: 4, background: 'linear-gradient(to bottom right, color-mix(in srgb, var(--color-bone) 10%, transparent), color-mix(in srgb, var(--color-bone) 2%, transparent))' }}></div>
        <p style={{ margin: '4px 0 0', textAlign: 'center', fontSize: 8, letterSpacing: '0.03em', color: 'var(--color-bone-dim)' }}>上装</p>
      </div>
      <div style={{ ...garment, bottom: 24 }}>
        <div style={{ aspectRatio: '1', borderRadius: 4, background: 'linear-gradient(to bottom right, color-mix(in srgb, var(--color-azure) 12%, transparent), color-mix(in srgb, var(--color-bone) 2%, transparent))' }}></div>
        <p style={{ margin: '4px 0 0', textAlign: 'center', fontSize: 8, letterSpacing: '0.03em', color: 'var(--color-bone-dim)' }}>下装</p>
      </div>
      <svg viewBox="0 0 120 200" style={{ position: 'relative', height: 176, width: 'auto' }}>
        <defs>
          <linearGradient id="figGrad" x1="0" y1="0" x2="0" y2="1">
            <stop className="tryon-fig-0" offset="0" /><stop className="tryon-fig-1" offset="1" />
          </linearGradient>
          <linearGradient id="topGrad" x1="0" y1="0" x2="0" y2="1">
            <stop className="tryon-top-0" offset="0" /><stop className="tryon-top-1" offset="1" />
          </linearGradient>
        </defs>
        <circle cx="60" cy="26" r="14" fill="url(#figGrad)" />
        <path d="M44 44 C 52 38, 68 38, 76 44 L 82 120 C 78 150, 74 178, 70 196 L 50 196 C 46 178, 42 150, 38 120 Z" fill="url(#figGrad)" />
        <path d="M45 46 C 52 41, 68 41, 75 46 L 80 96 L 40 96 Z" fill="url(#topGrad)" />
        <path d="M41 100 L 79 100 L 73 178 L 66 178 L 60 120 L 54 178 L 47 178 Z" fill="var(--color-azure)" fillOpacity="0.28" stroke="var(--color-azure)" strokeOpacity="0.4" strokeWidth="0.8" />
      </svg>
      <button type="button" style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', display: 'inline-flex', alignItems: 'center', gap: 6, borderRadius: 999, border: '1px solid color-mix(in srgb, var(--color-azure) 40%, transparent)', background: 'color-mix(in srgb, var(--color-azure) 15%, transparent)', padding: '6px 14px', fontSize: 11, fontWeight: 500, letterSpacing: '0.02em', color: 'var(--color-azure-bright)', boxShadow: '0 0 24px -6px rgba(87,184,212,0.6)', cursor: 'pointer' }}>
        <Icon name="sparkles" size={12} /> 生成上身效果
      </button>
    </div>
  );
}

Object.assign(window, { DashboardMock, ChatMock, ReportMock, TryOnMock });
