/* Landing sections — faithful React ports of src/components/*.vue */
const DS2 = window.FabricMindDesignSystem_4edb8c;
const { BrandMark, Icon, Button, IconButton, SectionHeading, Reveal } = DS2;

const container = { margin: '0 auto', maxWidth: 1280, padding: '0 40px' };
const eyebrowStyle = { fontSize: '0.72rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 500 };

function useTheme() {
  const [theme, setTheme] = React.useState(() => document.documentElement.classList.contains('light') ? 'light' : 'dark');
  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    const root = document.documentElement;
    root.classList.add('theme-anim');
    root.classList.toggle('light', next === 'light');
    setTimeout(() => root.classList.remove('theme-anim'), 450);
    setTheme(next);
  };
  return { theme, toggle };
}

function SiteNav({ onContact, theme, onToggleTheme }) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [
    { label: '解决方案', href: '#framework' }, { label: '业务场景', href: '#scenarios' }, { label: '产品能力', href: '#features' },
  ];
  return (
    <header style={{ position: 'fixed', left: 0, right: 0, top: 0, zIndex: 50, transition: 'all 0.5s var(--ease-calm)', borderBottom: scrolled ? '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)' : '1px solid transparent', background: scrolled ? 'color-mix(in srgb, var(--color-ink-950) 70%, transparent)' : 'transparent', backdropFilter: scrolled ? 'blur(24px)' : 'none' }}>
      <nav style={{ ...container, display: 'flex', height: 64, alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }}>
          <BrandMark size={34} />
          <span style={{ display: 'flex', alignItems: 'baseline', gap: 8, lineHeight: 1 }}>
            <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: '0.025em', color: 'var(--color-bone)' }}>知序</span>
            <span style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 15, letterSpacing: '0.025em', color: 'var(--color-bone-soft)' }}>FabricMind</span>
          </span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }} className="fm-nav-links">
          {links.map(l => <a key={l.href} href={l.href} className="fm-nav-link" style={{ fontSize: 13, letterSpacing: '0.02em', color: 'var(--color-bone-dim)', textDecoration: 'none', transition: 'color 0.3s' }}>{l.label}</a>)}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <IconButton name={theme === 'dark' ? 'sun' : 'moon'} label={theme === 'dark' ? '切换到浅色主题' : '切换到深色主题'} onClick={onToggleTheme} />
          <Button variant="nav" size="sm" icon="arrow-up-right" onClick={onContact}>预约演示</Button>
        </div>
      </nav>
    </header>
  );
}

function Drift({ dur = 7, dist = 12, style, children }) {
  return <div style={{ ...style, animation: `fm-drift ${dur}s ease-in-out infinite`, '--fm-dist': `-${dist}px` }}>{children}</div>;
}

function HeroSection({ onContact, theme }) {
  const heroSrc = theme === 'light' ? '../../assets/hero-light.webp' : '../../assets/hero-visual.png';
  return (
    <section id="top" style={{ position: 'relative', display: 'flex', height: '100vh', minHeight: 680, width: '100%', alignItems: 'center', overflow: 'hidden', backgroundColor: 'rgb(var(--hero-base))' }}>
      <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: '58%' }}>
        <img src={heroSrc} alt="知序 FabricMind 数据智能主视觉" style={{ height: '100%', width: '100%', objectFit: 'cover', objectPosition: 'right' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgb(var(--hero-base)) 0%, rgb(var(--hero-base)) 12%, rgb(var(--hero-base) / 0.7) 32%, rgb(var(--hero-base) / 0.3) 55%, transparent 78%)' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgb(var(--hero-base)) 0%, transparent 50%, rgb(var(--hero-base) / 0.3) 100%)' }}></div>
      </div>
      <div className="bg-noise" style={{ pointerEvents: 'none', position: 'absolute', inset: 0, opacity: 0.05 }}></div>
      <div style={{ pointerEvents: 'none', position: 'absolute', inset: 0 }}>
        <Drift dur={7} style={{ position: 'absolute', right: '10%', top: '20%' }}>
          <div className="glass" style={{ display: 'flex', alignItems: 'center', gap: 12, borderRadius: 12, padding: '12px 16px' }}>
            <Icon name="activity" size={16} style={{ color: 'var(--color-azure)' }} />
            <div>
              <div style={{ ...eyebrowStyle, color: 'var(--color-bone-dim)' }}>机会指数</div>
              <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--color-bone)' }}>78<span style={{ fontSize: 14, color: 'var(--color-bone-dim)' }}>/100</span></div>
            </div>
          </div>
        </Drift>
        <Drift dur={9} dist={16} style={{ position: 'absolute', right: '40%', top: '34%' }}>
          <div className="glass" style={{ display: 'flex', alignItems: 'center', gap: 10, borderRadius: 8, padding: '8px 14px' }}>
            <Icon name="trending-up" size={14} style={{ color: 'var(--color-azure-bright)' }} />
            <span style={{ fontSize: 13, letterSpacing: '0.02em', color: 'var(--color-bone-soft)' }}>趋势热度 · 针织 上行</span>
          </div>
        </Drift>
        <Drift dur={8} dist={10} style={{ position: 'absolute', right: '15%', top: '58%' }}>
          <div className="glass" style={{ borderRadius: 8, padding: '10px 14px' }}>
            <div style={{ marginBottom: 6, display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--color-champagne)' }}></span>
              <span style={{ ...eyebrowStyle, color: 'var(--color-bone-dim)' }}>材料机会 TOP</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: 'var(--color-bone-soft)' }}>
              Lyocell <span style={{ fontWeight: 500, color: 'var(--color-bone)' }}>86</span>
            </div>
          </div>
        </Drift>
        <Drift dur={6} dist={8} style={{ position: 'absolute', right: '46%', top: '68%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderRadius: 999, border: '1px solid color-mix(in srgb, var(--color-azure) 20%, transparent)', background: 'color-mix(in srgb, var(--color-azure) 5%, transparent)', padding: '6px 12px' }}>
            <span style={{ position: 'relative', display: 'flex', width: 6, height: 6 }}>
              <span className="animate-ping" style={{ position: 'absolute', inset: 0, borderRadius: 999, background: 'color-mix(in srgb, var(--color-azure) 60%, transparent)' }}></span>
              <span style={{ position: 'relative', display: 'inline-flex', width: 6, height: 6, borderRadius: 999, background: 'var(--color-azure)' }}></span>
            </span>
            <span style={{ fontSize: 12, letterSpacing: '0.02em', color: 'var(--color-azure-bright)' }}>智能引擎分析中</span>
          </div>
        </Drift>
      </div>
      <div style={{ position: 'relative', zIndex: 10, ...container, width: '100%' }}>
        <div style={{ width: '42%', minWidth: 480 }}>
          <Reveal y={22} delay={0.1} duration={0.9}>
            <div style={{ marginBottom: 28, display: 'inline-flex', alignItems: 'center', gap: 10, borderRadius: 999, border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)', background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)', padding: '6px 14px' }}>
              <Icon name="sparkles" size={14} style={{ color: 'var(--color-champagne)' }} />
              <span style={{ ...eyebrowStyle, fontSize: 12, color: 'var(--color-bone-soft)' }}>让时尚判断成为可验证的数据决策</span>
            </div>
          </Reveal>
          <Reveal y={22} delay={0.24} duration={0.9}>
            <h1 style={{ margin: 0, fontSize: '4.25rem', fontWeight: 700, lineHeight: 1.12, letterSpacing: '-0.025em', color: 'var(--color-bone)', textWrap: 'balance' }}>
              让趋势有序，<br />让开发有据
            </h1>
          </Reveal>
          <Reveal y={22} delay={0.4} duration={0.9}>
            <p style={{ margin: '28px 0 0', fontSize: 20, fontWeight: 300, lineHeight: 1.625, color: 'var(--color-bone-soft)' }}>
              面向纺织产品开发的<span style={{ fontWeight: 400, color: 'var(--color-bone)' }}>DATA+BI+AI</span><br />智能决策系统
            </p>
          </Reveal>
          <Reveal y={22} delay={0.52} duration={0.9}>
            <p style={{ margin: '16px 0 0', maxWidth: 512, fontSize: 15, lineHeight: 1.625, color: 'var(--color-bone-dim)' }}>
              以数据智能驱动更精准的趋势判断，更高效的产品研发<br />与更胜一筹的提案表达
            </p>
          </Reveal>
          <Reveal y={22} delay={0.66} duration={0.9}>
            <div style={{ marginTop: 40, display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 16 }}>
              <Button icon="arrow-right" onClick={onContact}>预约演示</Button>
              <Button variant="ghost" onClick={() => document.getElementById('framework')?.scrollIntoView === undefined ? null : window.scrollTo({ top: document.getElementById('framework').offsetTop, behavior: 'smooth' })}>了解产品</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SystemFramework() {
  const steps = [
    { icon: 'database', zh: '行业数据底座', en: 'Data Foundation', desc: '整合市场、品牌、材料、秀场、趋势等多源数据，构建高质量行业知识图谱。' },
    { icon: 'box', zh: '分析与决策引擎', en: 'Decision Engine', desc: '多维建模与指标体系，洞察关联与机会，输出可验证的决策建议。' },
    { icon: 'sparkles', zh: 'AI 洞察工具', en: 'AI Insight', desc: 'AI 驱动的趋势解读、机会发现、概念生成与方案评估。' },
    { icon: 'file-image', zh: '报告输出', en: 'Report Output', desc: '自动化生成图文报告与提案材料，支持高度自定义与品牌化。' },
    { icon: 'layout-dashboard', zh: '业务应用前端', en: 'Business Application', desc: '角色化工作台与协作空间，让洞察落地到日常开发与提案流程。' },
  ];
  return (
    <section id="framework" style={{ position: 'relative', padding: '72px 0' }}>
      <div style={{ pointerEvents: 'none', position: 'absolute', left: 0, right: 0, top: 0, height: 420, background: 'linear-gradient(to bottom, rgb(var(--hero-base)) 0%, rgb(var(--hero-base) / 0.55) 30%, rgb(var(--hero-base) / 0.18) 60%, transparent 100%)' }}></div>
      <div style={{ pointerEvents: 'none', position: 'absolute', right: 0, top: 0, height: 520, width: '60%', filter: 'blur(64px)', background: 'radial-gradient(ellipse at 75% 0%, rgba(56,189,248,0.16) 0%, rgba(56,189,248,0.05) 38%, transparent 70%)' }}></div>
      <div className="bg-grid" style={{ pointerEvents: 'none', position: 'absolute', inset: 0, opacity: 0.3 }}></div>
      <div style={{ position: 'relative', ...container }}>
        <SectionHeading eyebrow="Solution · 解决方案" title="从复杂到清晰，让决策更有方向" copy="整合多维数据与行业知识，结合 AI 洞察与分析，为产品开发与客户提案提供可靠的决策依据。" />
        <div style={{ marginTop: 80, display: 'flex', alignItems: 'stretch', gap: 16 }}>
          {steps.map((step, i) => (
            <React.Fragment key={step.en}>
              <Reveal y={28} delay={i * 0.1} duration={0.6} style={{ flex: 1, display: 'flex' }}>
                <div className="panel glow-blue glow-blue-sm fm-lift" style={{ position: 'relative', display: 'flex', flex: 1, flexDirection: 'column', gap: 16, overflow: 'hidden', borderRadius: '1rem', padding: 24 }}>
                  <span style={{ position: 'absolute', right: 20, top: 20, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 14, color: 'color-mix(in srgb, var(--color-bone-dim) 50%, transparent)' }}>0{i + 1}</span>
                  <div style={{ display: 'flex', width: 48, height: 48, alignItems: 'center', justifyContent: 'center', borderRadius: 12, border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)', background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)', color: 'var(--color-azure)' }}>
                    <Icon name={step.icon} size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--color-bone)' }}>{step.zh}</h3>
                    <p style={{ margin: '4px 0 0', fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 13, letterSpacing: '0.02em', color: 'var(--color-bone-dim)' }}>{step.en}</p>
                  </div>
                  <p style={{ margin: 0, fontSize: 13, lineHeight: 1.625, color: 'var(--color-bone-dim)' }}>{step.desc}</p>
                </div>
              </Reveal>
              {i < steps.length - 1 && (
                <div style={{ display: 'flex', flexShrink: 0, alignItems: 'center', justifyContent: 'center', color: 'var(--color-mist-dark)', padding: '0 4px' }}>
                  <Icon name="arrow-right" size={20} strokeWidth={1.5} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function BusinessScenarios({ theme }) {
  const scenarios = [
    { img: 'trend-research', title: '趋势研究与方向规划', desc: '识别全球趋势与文化信号，预测风向，明确产品开发方向。' },
    { img: 'product-planning', title: '产品企划与系列开发', desc: 'AI 辅助企划与款式组合，智能推荐材料与色彩，提升开发效率。' },
    { img: 'material-innovation', title: '材料创新与应用', desc: '基于性能、成本与可持续性评估，识别更优材料解决方案。' },
    { img: 'client-proposal', title: '客户提案与沟通', desc: '生成专业提案与可视化内容，提升沟通效率与客户信任。' },
  ];
  const src = (img) => `../../assets/scenarios/${img}${theme === 'light' ? '-light' : ''}.svg`;
  return (
    <section id="scenarios" style={{ position: 'relative', borderTop: '1px solid color-mix(in srgb, var(--color-bone) 6%, transparent)', padding: '72px 0' }}>
      <div className="bg-grid" style={{ pointerEvents: 'none', position: 'absolute', inset: 0, opacity: 0.2 }}></div>
      <div style={{ position: 'relative', ...container }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 40 }}>
          <div style={{ paddingTop: 16 }}>
            <Reveal y={16}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ height: 1, width: 24, background: 'color-mix(in srgb, var(--color-azure) 50%, transparent)' }}></span>
                <span style={{ ...eyebrowStyle, color: 'var(--color-azure)' }}>Scenarios · 业务场景</span>
              </div>
            </Reveal>
            <Reveal y={22} delay={0.06}>
              <h2 style={{ margin: '24px 0 0', fontSize: '2.9rem', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.025em', color: 'var(--color-bone)', textWrap: 'balance' }}>面向时尚产业<br />核心场景</h2>
            </Reveal>
            <Reveal y={22} delay={0.12}>
              <p style={{ margin: '24px 0 0', maxWidth: 384, fontSize: 15, lineHeight: 1.625, color: 'var(--color-bone-dim)' }}>覆盖产品开发全流程，助力团队更快、更准、更有依据地做出决策。</p>
            </Reveal>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {scenarios.map((s, i) => (
              <Reveal key={s.title} y={28} delay={i * 0.1} duration={0.65} style={{ display: 'flex' }}>
                <div className="panel glow-blue glow-blue-sm fm-lift" style={{ position: 'relative', display: 'flex', flex: 1, flexDirection: 'column', overflow: 'hidden', borderRadius: '1rem', padding: 12 }}>
                  <div style={{ position: 'relative', zIndex: 1, overflow: 'hidden', borderRadius: 12, border: '1px solid color-mix(in srgb, var(--color-bone) 7%, transparent)' }}>
                    <img src={src(s.img)} alt={s.title} className="fm-zoom" style={{ aspectRatio: '4/3', width: '100%', objectFit: 'cover', display: 'block' }} />
                    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, color-mix(in srgb, var(--color-ink-950) 70%, transparent), transparent 50%)' }}></div>
                    <span style={{ position: 'absolute', left: 12, top: 12, fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 14, color: 'color-mix(in srgb, var(--color-bone-soft) 70%, transparent)' }}>0{i + 1}</span>
                  </div>
                  <h3 style={{ position: 'relative', zIndex: 1, margin: '16px 4px 0', fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', color: 'var(--color-bone)' }}>{s.title}</h3>
                  <p style={{ position: 'relative', zIndex: 1, margin: '6px 4px 4px', fontSize: 13, lineHeight: 1.625, color: 'var(--color-bone-dim)' }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureMatrix() {
  const cards = [
    { eyebrow: '智能试衣', title: '不打样，先看效果', desc: '选定模特、搭配上下装，AI 即时生成试穿效果，免打样快速验证款式与搭配，让选款更快、更直观。', Mock: window.TryOnMock },
    { eyebrow: 'AI 助手', title: '把分析师，装进对话框', desc: '用自然语言追问趋势、材料与竞品，AI 基于平台数据即时作答——复杂分析，一句话直达。', Mock: window.ChatMock },
    { eyebrow: '智能报告', title: '一键从洞察到提案', desc: '自动将分析结果整理为图文提案，一键生成导出 PPT——让团队把时间花在判断上，而不是排版上。', Mock: window.ReportMock },
  ];
  const DashMock = window.DashboardMock;
  return (
    <section id="features" style={{ position: 'relative', borderTop: '1px solid color-mix(in srgb, var(--color-bone) 6%, transparent)', padding: '72px 0' }}>
      <div style={{ position: 'relative', ...container }}>
        <SectionHeading eyebrow="Products · 产品能力" title="数据智能内核，三大AI应用" copy="多模块协同——数据智能内核与智能试衣、问答、提案三大应用让洞察一路落到业务。" />
        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          <Reveal y={30} duration={0.7} style={{ gridColumn: 'span 3' }}>
            <div className="panel glow-blue fm-lift" style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, overflow: 'hidden', borderRadius: '1.5rem', padding: 36 }}>
              <div className="bg-grid-fine" style={{ pointerEvents: 'none', position: 'absolute', inset: 0, opacity: 0.4 }}></div>
              <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <span style={{ ...eyebrowStyle, color: 'var(--color-azure)' }}>品牌看板 / 秀场 / 数据分析</span>
                <h3 style={{ margin: '16px 0 0', fontSize: 30, fontWeight: 700, lineHeight: 1.375, letterSpacing: '-0.02em', color: 'var(--color-bone)', textWrap: 'balance' }}>一体化看板，洞察全局</h3>
                <p style={{ margin: '16px 0 0', maxWidth: 448, fontSize: 15, lineHeight: 1.625, color: 'var(--color-bone-dim)' }}>持续追踪品牌上新与全球秀场，从品类、人群、色彩、材料到肌理多维拆解，让模糊的「市场感觉」变成结构化、可验证的洞察。</p>
              </div>
              <div style={{ position: 'relative' }}><DashMock /></div>
            </div>
          </Reveal>
          {cards.map((card, i) => (
            <Reveal key={card.eyebrow} y={30} delay={(i + 1) * 0.1} duration={0.7} style={{ display: 'flex' }}>
              <div className="panel glow-blue fm-lift" style={{ display: 'flex', flex: 1, flexDirection: 'column', gap: 20, overflow: 'hidden', borderRadius: '1.5rem', padding: 28 }}>
                <div>
                  <span style={{ ...eyebrowStyle, color: 'var(--color-azure)' }}>{card.eyebrow}</span>
                  <h3 style={{ margin: '12px 0 0', fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--color-bone)' }}>{card.title}</h3>
                  <p style={{ margin: '12px 0 0', fontSize: 14, lineHeight: 1.625, color: 'var(--color-bone-dim)' }}>{card.desc}</p>
                </div>
                <div style={{ marginTop: 'auto', flex: 1 }}><card.Mock /></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaFooter({ onContact }) {
  return (
    <>
      <section id="demo" style={{ position: 'relative', overflow: 'hidden', borderTop: '1px solid color-mix(in srgb, var(--color-bone) 6%, transparent)' }}>
        <div className="bg-grid" style={{ pointerEvents: 'none', position: 'absolute', inset: 0, opacity: 0.3 }}></div>
        <div style={{ pointerEvents: 'none', position: 'absolute', left: '50%', top: 0, width: 640, height: 640, transform: 'translate(-50%,-33%)', borderRadius: 999, opacity: 0.5, filter: 'blur(64px)', background: 'radial-gradient(circle, rgba(87,184,212,0.16), transparent 65%)' }}></div>
        <div style={{ pointerEvents: 'none', position: 'absolute', bottom: 0, left: '25%', width: 416, height: 416, borderRadius: 999, opacity: 0.4, filter: 'blur(64px)', background: 'radial-gradient(circle, rgba(201,173,124,0.12), transparent 65%)' }}></div>
        <div style={{ position: 'relative', margin: '0 auto', maxWidth: 896, padding: '80px 24px', textAlign: 'center' }}>
          <Reveal y={16}><span style={{ ...eyebrowStyle, color: 'var(--color-azure)' }}>Let's talk · 预约演示</span></Reveal>
          <Reveal y={24} delay={0.08}>
            <h2 style={{ margin: '24px auto 0', maxWidth: 768, fontSize: '3rem', fontWeight: 700, lineHeight: 1.18, letterSpacing: '-0.025em', color: 'var(--color-bone)', textWrap: 'balance' }}>与知序一起，让每一次决策<br />更有据可循</h2>
          </Reveal>
          <Reveal y={24} delay={0.16}>
            <p style={{ margin: '24px auto 0', maxWidth: 576, fontSize: 15, lineHeight: 1.625, color: 'var(--color-bone-dim)' }}>预约一次产品演示，看见数据智能如何融入你的产品开发与提案流程。</p>
          </Reveal>
          <Reveal y={24} delay={0.24}>
            <div style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
              <Button size="lg" icon="arrow-right" onClick={onContact}>预约产品演示</Button>
            </div>
          </Reveal>
        </div>
      </section>
      <footer style={{ borderTop: '1px solid color-mix(in srgb, var(--color-bone) 6%, transparent)', background: 'var(--color-ink-950)' }}>
        <div style={{ ...container, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8, padding: '20px 40px', fontSize: 12, color: 'var(--color-mist)' }}>
          <span>© 2026 知序 FabricMind，保留所有权利.</span>
          <a href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-mist)', textDecoration: 'none' }}>京ICP备10009259号</a>
        </div>
      </footer>
    </>
  );
}

function ContactDialog({ open, onClose }) {
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px' }} role="dialog" aria-modal="true">
      <div onClick={onClose} style={{ position: 'absolute', inset: 0, background: 'color-mix(in srgb, var(--color-ink-950) 80%, transparent)', backdropFilter: 'blur(4px)' }}></div>
      <div className="glass fm-dialog-in" style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 384, borderRadius: '1rem', border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)', padding: 32, textAlign: 'center' }}>
        <button type="button" aria-label="关闭" onClick={onClose} style={{ position: 'absolute', right: 16, top: 16, borderRadius: 999, border: 'none', background: 'transparent', padding: 6, color: 'var(--color-bone-dim)', cursor: 'pointer' }}>
          <Icon name="x" size={16} />
        </button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--color-bone)' }}>联系我们</h2>
        <p style={{ margin: '8px 0 0', fontSize: 13, lineHeight: 1.625, color: 'var(--color-bone-dim)' }}>扫描下方二维码，添加微信预约产品演示</p>
        <div style={{ marginTop: 24, display: 'flex', justifyContent: 'center' }}>
          <div style={{ borderRadius: 12, background: '#ffffff', padding: 12 }}>
            <img src="../../assets/wechat-qr.png" alt="知序 FabricMind 微信二维码" style={{ width: 176, height: 176, borderRadius: 8, objectFit: 'cover', display: 'block' }} />
          </div>
        </div>
        <p style={{ margin: '20px 0 0', fontSize: 12, letterSpacing: '0.02em', color: 'var(--color-mist)' }}>微信扫一扫，立即联系</p>
      </div>
    </div>
  );
}

function App() {
  const { theme, toggle } = useTheme();
  const [contactOpen, setContactOpen] = React.useState(false);
  const openContact = () => setContactOpen(true);
  return (
    <div style={{ position: 'relative', minHeight: '100vh', color: 'var(--color-bone)' }}>
      <SiteNav onContact={openContact} theme={theme} onToggleTheme={toggle} />
      <main>
        <HeroSection onContact={openContact} theme={theme} />
        <SystemFramework />
        <BusinessScenarios theme={theme} />
        <FeatureMatrix />
        <CtaFooter onContact={openContact} />
      </main>
      <ContactDialog open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}

Object.assign(window, { App });
