/* @ds-bundle: {"format":4,"namespace":"FabricMindDesignSystem_4edb8c","components":[{"name":"BrandMark","sourcePath":"components/core/BrandMark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"IconButton","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"CountUp","sourcePath":"components/core/Reveal.jsx"},{"name":"Reveal","sourcePath":"components/core/Reveal.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"AlphabetIndex","sourcePath":"components/ui/AlphabetIndex.jsx"},{"name":"Checkbox","sourcePath":"components/ui/Checkbox.jsx"},{"name":"CheckboxGroup","sourcePath":"components/ui/Checkbox.jsx"},{"name":"Collapse","sourcePath":"components/ui/Collapse.jsx"},{"name":"DataTable","sourcePath":"components/ui/DataTable.jsx"},{"name":"DateRangeEditor","sourcePath":"components/ui/DateRangeEditor.jsx"},{"name":"Dialog","sourcePath":"components/ui/Dialog.jsx"},{"name":"DropdownMenu","sourcePath":"components/ui/DropdownMenu.jsx"},{"name":"EmptyState","sourcePath":"components/ui/EmptyState.jsx"},{"name":"Fab","sourcePath":"components/ui/Fab.jsx"},{"name":"Field","sourcePath":"components/ui/Field.jsx"},{"name":"Input","sourcePath":"components/ui/Field.jsx"},{"name":"TextArea","sourcePath":"components/ui/Field.jsx"},{"name":"Select","sourcePath":"components/ui/Field.jsx"},{"name":"FilterChips","sourcePath":"components/ui/FilterChips.jsx"},{"name":"Listbox","sourcePath":"components/ui/Listbox.jsx"},{"name":"Pagination","sourcePath":"components/ui/Pagination.jsx"},{"name":"Panel","sourcePath":"components/ui/Panel.jsx"},{"name":"Popover","sourcePath":"components/ui/Popover.jsx"},{"name":"ProductCard","sourcePath":"components/ui/ProductCard.jsx"},{"name":"ThumbnailStrip","sourcePath":"components/ui/ProductCard.jsx"},{"name":"Progress","sourcePath":"components/ui/Progress.jsx"},{"name":"Radio","sourcePath":"components/ui/Radio.jsx"},{"name":"RadioGroup","sourcePath":"components/ui/Radio.jsx"},{"name":"Sparkline","sourcePath":"components/ui/Sparkline.jsx"},{"name":"SparkBars","sourcePath":"components/ui/Sparkline.jsx"},{"name":"Stat","sourcePath":"components/ui/Stat.jsx"},{"name":"Tabs","sourcePath":"components/ui/Tabs.jsx"},{"name":"Tag","sourcePath":"components/ui/Tag.jsx"},{"name":"StatusDot","sourcePath":"components/ui/Tag.jsx"}],"sourceHashes":{"components/core/BrandMark.jsx":"a62688f18450","components/core/Button.jsx":"b035e6ff72fc","components/core/Icon.jsx":"686935625549","components/core/Reveal.jsx":"bc83512ca93d","components/core/SectionHeading.jsx":"b85f211207e0","components/ui/AlphabetIndex.jsx":"1f7f317ab324","components/ui/Checkbox.jsx":"391985ef4ce7","components/ui/Collapse.jsx":"dc59a56e38d3","components/ui/DataTable.jsx":"2c59e9f402a1","components/ui/DateRangeEditor.jsx":"3efa315256d1","components/ui/Dialog.jsx":"6d10839c3b85","components/ui/DropdownMenu.jsx":"4a0641143078","components/ui/EmptyState.jsx":"70313c4817c8","components/ui/Fab.jsx":"f0eb033c5362","components/ui/Field.jsx":"5c7d8f0fc724","components/ui/FilterChips.jsx":"32a6fccb8771","components/ui/Listbox.jsx":"bd140fc8058a","components/ui/Pagination.jsx":"34d16d9fc29c","components/ui/Panel.jsx":"a5e835154358","components/ui/Popover.jsx":"505dc169e598","components/ui/ProductCard.jsx":"b0b8cf71bc3b","components/ui/Progress.jsx":"3699cfdd00c5","components/ui/Radio.jsx":"697de7b43a96","components/ui/Sparkline.jsx":"0b5688e28ca0","components/ui/Stat.jsx":"b3e9054786c6","components/ui/Tabs.jsx":"87aeaf941ab9","components/ui/Tag.jsx":"06a686a88a16","ui_kits/landing/mocks.jsx":"9edc0f23a57a","ui_kits/landing/sections.jsx":"c8c49ff62dee"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FabricMindDesignSystem_4edb8c = window.FabricMindDesignSystem_4edb8c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/BrandMark.jsx
try { (() => {
function BrandMark({
  size = 34
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "64",
    height: "64",
    rx: "14",
    fill: "#0a0c10"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "63",
    height: "63",
    rx: "13.5",
    stroke: "#57b8d4",
    strokeOpacity: "0.3"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: "#eceae1",
    strokeWidth: "2",
    strokeLinecap: "round",
    opacity: "0.9"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 18 V46"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 18 V46"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44 18 V46"
  })), /*#__PURE__*/React.createElement("g", {
    stroke: "#57b8d4",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M16 26 H48"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 38 H48"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "44",
    cy: "26",
    r: "3.2",
    fill: "#c9ad7c"
  }));
}
Object.assign(__ds_scope, { BrandMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BrandMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PATHS = {
  'arrow-up-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M7 7h10v10"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7 17 17 7"
  })),
  'moon': /*#__PURE__*/React.createElement("path", {
    d: "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
  }),
  'sun': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 20v2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m4.93 4.93 1.41 1.41"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m17.66 17.66 1.41 1.41"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M2 12h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 12h2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6.34 17.66-1.41 1.41"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m19.07 4.93-1.41 1.41"
  })),
  'arrow-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m12 5 7 7-7 7"
  })),
  'sparkles': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M20 2v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M22 4h-4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "4",
    cy: "20",
    r: "2"
  })),
  'trending-up': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M16 7h6v6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m22 7-8.5 8.5-5-5L2 17"
  })),
  'activity': /*#__PURE__*/React.createElement("path", {
    d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"
  }),
  'database': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("ellipse", {
    cx: "12",
    cy: "5",
    rx: "9",
    ry: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 5V19A9 3 0 0 0 21 19V5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 12A9 3 0 0 0 21 12"
  })),
  'box': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m3.3 7 8.7 5 8.7-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 22V12"
  })),
  'file-image': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M14 2v5a1 1 0 0 0 1 1h5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "10",
    cy: "12",
    r: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22"
  })),
  'layout-dashboard': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("rect", {
    width: "7",
    height: "9",
    x: "3",
    y: "3",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "7",
    height: "5",
    x: "14",
    y: "3",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "7",
    height: "9",
    x: "14",
    y: "12",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "7",
    height: "5",
    x: "3",
    y: "16",
    rx: "1"
  })),
  'arrow-up': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m5 12 7-7 7 7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 19V5"
  })),
  'download': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 15V3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m7 10 5 5 5-5"
  })),
  'x': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m6 6 12 12"
  })),
  'chevron-down': /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }),
  'chevron-left': /*#__PURE__*/React.createElement("path", {
    d: "m15 18-6-6 6-6"
  }),
  'chevron-right': /*#__PURE__*/React.createElement("path", {
    d: "m9 18 6-6-6-6"
  }),
  'chevrons-left': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m11 17-5-5 5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m18 17-5-5 5-5"
  })),
  'chevrons-right': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "m6 17 5-5-5-5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m13 17 5-5-5-5"
  })),
  'ellipsis-vertical': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "5",
    r: "1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "19",
    r: "1"
  })),
  'calendar': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M8 2v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 2v4"
  }), /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "18",
    x: "3",
    y: "4",
    rx: "2"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 10h18"
  })),
  'check': /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  'search': /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  }))
};
function Icon({
  name,
  size = 16,
  strokeWidth = 1.75,
  style,
  ...rest
}) {
  const glyph = PATHS[name];
  if (!glyph) return null;
  return /*#__PURE__*/React.createElement("svg", _extends({
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: style,
    "aria-hidden": "true"
  }, rest), glyph);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Pill buttons — exact values from HeroSection/SiteNav/CtaFooter.vue */
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  children,
  style,
  ...rest
}) {
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: size === 'lg' ? 10 : 8,
    borderRadius: 999,
    cursor: 'pointer',
    fontFamily: 'var(--font-sans)',
    whiteSpace: 'nowrap',
    fontWeight: 500,
    letterSpacing: '0.025em',
    transition: 'all 0.3s var(--ease-calm)',
    textDecoration: 'none'
  };
  const sizes = {
    sm: {
      padding: '8px 16px',
      fontSize: 13
    },
    md: {
      padding: '14px 24px',
      fontSize: 14
    },
    lg: {
      padding: '16px 32px',
      fontSize: 15
    }
  };
  const variants = {
    primary: {
      background: 'var(--color-bone)',
      color: 'var(--color-ink-950)',
      border: '1px solid transparent'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--color-bone)',
      border: '1px solid color-mix(in srgb, var(--color-bone) 15%, transparent)'
    },
    nav: {
      background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
      color: 'var(--color-bone)',
      border: '1px solid color-mix(in srgb, var(--color-bone) 15%, transparent)',
      padding: '8px 16px',
      fontSize: 13
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary: {
      background: 'var(--cta-hover)',
      boxShadow: '0 0 36px -8px var(--cta-glow)',
      color: hover && 'var(--color-ink-950)'
    },
    ghost: {
      borderColor: 'color-mix(in srgb, var(--color-bone) 35%, transparent)',
      background: 'color-mix(in srgb, var(--color-bone) 4%, transparent)'
    },
    nav: {
      borderColor: 'color-mix(in srgb, var(--color-azure) 40%, transparent)',
      background: 'color-mix(in srgb, var(--color-azure) 10%, transparent)'
    }
  };
  const hv = hover ? hoverStyles[variant] : {};
  if (variant === 'primary' && hover) hv.color = document.documentElement.classList.contains('light') ? '#ffffff' : 'var(--color-ink-950)';
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    style: {
      ...base,
      ...sizes[size],
      ...variants[variant],
      ...hv,
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), children, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 14 : 16,
    style: {
      transform: hover ? icon === 'arrow-up-right' ? 'translate(2px,-2px)' : 'translateX(4px)' : 'none',
      transition: 'transform 0.3s var(--ease-calm)'
    }
  }) : null);
}
/* 36px circular icon button (theme toggle in SiteNav) */
function IconButton({
  name,
  label,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 36,
      height: 36,
      borderRadius: 999,
      cursor: 'pointer',
      border: `1px solid color-mix(in srgb, var(--color-${hover ? 'azure) 40%' : 'bone) 15%'}, transparent)`,
      background: hover ? 'color-mix(in srgb, var(--color-azure) 10%, transparent)' : 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
      color: hover ? 'var(--color-bone)' : 'var(--color-bone-soft)',
      transition: 'all 0.3s var(--ease-calm)',
      ...style
    },
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: 16
  }));
}
Object.assign(__ds_scope, { Button, IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Reveal.jsx
try { (() => {
/* Count-up number on scroll into view (cubic ease-out) — from CountUp.vue */
function CountUp({
  to,
  duration = 1.6
}) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    let started = false;
    const run = () => {
      if (reduced) {
        setVal(to);
        return;
      }
      const start = performance.now();
      const tick = now => {
        const t = Math.min(1, (now - start) / (duration * 1000));
        setVal(Math.round((1 - Math.pow(1 - t, 3)) * to));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && !started) {
        started = true;
        run();
      }
    }, {
      threshold: 0.6
    });
    if (ref.current) obs.observe(ref.current);
    // Hidden iframes (thumbnail captures) never fire IO — fall back to the final value.
    const t = setTimeout(() => {
      if (!started) {
        started = true;
        setVal(to);
      }
    }, 600);
    return () => {
      obs.disconnect();
      clearTimeout(t);
    };
  }, [to, duration]);
  return /*#__PURE__*/React.createElement("span", {
    ref: ref
  }, val);
}

/* Scroll-triggered reveal: fade + upward float, calm ease — from Reveal.vue */
function Reveal({
  y = 26,
  x = 0,
  delay = 0,
  duration = 0.75,
  children,
  style
}) {
  const [shown, setShown] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        setShown(true);
        obs.disconnect();
      }
    }, {
      threshold: 0.25
    });
    if (ref.current) obs.observe(ref.current);
    // Hidden iframes (thumbnail captures) never fire IO — reveal after a grace period.
    const t = setTimeout(() => setShown(true), 600);
    return () => {
      obs.disconnect();
      clearTimeout(t);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      opacity: shown ? 1 : 0,
      transform: shown ? 'none' : `translate(${x}px, ${y}px)`,
      transition: `opacity ${duration}s var(--ease-calm) ${delay}s, transform ${duration}s var(--ease-calm) ${delay}s`,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { CountUp, Reveal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Reveal.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
/* Section heading: eyebrow with dash, bold title, dim copy — from SectionHeading.vue */
function SectionHeading({
  eyebrow,
  title,
  copy,
  align = 'center'
}) {
  const center = align === 'center';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      alignItems: center ? 'center' : 'flex-start',
      textAlign: center ? 'center' : 'left'
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      width: 24,
      background: 'color-mix(in srgb, var(--color-azure) 50%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--color-azure)'
    }
  }, eyebrow)) : null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      maxWidth: center ? '42rem' : '48rem',
      fontSize: 'var(--text-h2)',
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-0.025em',
      color: 'var(--color-bone)',
      textWrap: 'balance'
    }
  }, title), copy ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      maxWidth: center ? '42rem' : '36rem',
      fontSize: 15,
      lineHeight: 1.625,
      color: 'var(--color-bone-dim)'
    }
  }, copy) : null);
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/ui/Panel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Surface cards — .panel sheen / .glass frost from effects.css; radii 1rem card, 1.5rem feature */
function Panel({
  variant = 'panel',
  glow = false,
  padding = 24,
  radius,
  className = '',
  style,
  children,
  ...rest
}) {
  const surface = variant === 'glass' ? 'glass' : 'panel';
  const glowCls = glow === 'sm' ? 'glow-blue glow-blue-sm' : glow ? 'glow-blue' : '';
  return /*#__PURE__*/React.createElement("div", _extends({
    className: [surface, glowCls, className].filter(Boolean).join(' '),
    style: {
      borderRadius: radius ?? (variant === 'feature' ? 'var(--radius-feature)' : 'var(--radius-card)'),
      padding,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Panel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Panel.jsx", error: String((e && e.message) || e) }); }

// components/ui/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Pill chips — from the AI-chat suggestion chips; tone tints follow the data-series palette */
const TONES = {
  neutral: {
    border: 'color-mix(in srgb, var(--color-bone) 10%, transparent)',
    background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
    color: 'var(--color-bone-dim)'
  },
  azure: {
    border: 'color-mix(in srgb, var(--color-azure) 30%, transparent)',
    background: 'color-mix(in srgb, var(--color-azure) 10%, transparent)',
    color: 'var(--color-azure-bright)'
  },
  champagne: {
    border: 'color-mix(in srgb, var(--color-champagne) 30%, transparent)',
    background: 'color-mix(in srgb, var(--color-champagne) 10%, transparent)',
    color: 'var(--color-champagne)'
  },
  rouge: {
    border: 'color-mix(in srgb, var(--color-rouge) 35%, transparent)',
    background: 'color-mix(in srgb, var(--color-rouge) 12%, transparent)',
    color: 'color-mix(in srgb, var(--color-rouge) 55%, var(--color-bone))'
  }
};
function Tag({
  tone = 'neutral',
  size = 'md',
  icon,
  children,
  style,
  ...rest
}) {
  const t = TONES[tone] || TONES.neutral;
  const sz = size === 'sm' ? {
    padding: '4px 10px',
    fontSize: 10
  } : {
    padding: '5px 12px',
    fontSize: 12
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      borderRadius: 999,
      border: `1px solid ${t.border}`,
      background: t.background,
      color: t.color,
      fontWeight: 500,
      letterSpacing: '0.02em',
      whiteSpace: 'nowrap',
      ...sz,
      ...style
    }
  }, rest), icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 10 : 12,
    strokeWidth: 1.75
  }) : null, children);
}
/* Live status dot with ping halo — from the hero's floating annotations */
function StatusDot({
  tone = 'azure',
  label,
  style
}) {
  const c = tone === 'champagne' ? 'var(--color-champagne)' : tone === 'rouge' ? 'var(--color-rouge)' : 'var(--color-azure)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: 6,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "animate-ping",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 999,
      background: `color-mix(in srgb, ${c} 60%, transparent)`
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: 6,
      height: 6,
      borderRadius: 999,
      background: c
    }
  })), label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '0.02em',
      color: 'var(--color-bone-soft)'
    }
  }, label) : null);
}
Object.assign(__ds_scope, { Tag, StatusDot });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Tag.jsx", error: String((e && e.message) || e) }); }

// components/ui/Stat.jsx
try { (() => {
/* Metric block — numeral treatment from the dashboard's 机会指数 tile; ↑/↓ delta arrows are unicode per readme */
function Stat({
  label,
  value,
  suffix,
  delta,
  trend = 'up',
  size = 'md',
  animate = true,
  style
}) {
  const num = {
    sm: 28,
    md: 36,
    lg: 48
  }[size] || 36;
  const deltaColor = trend === 'down' ? 'color-mix(in srgb, var(--color-rouge) 70%, var(--color-bone))' : 'var(--color-azure-bright)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      fontWeight: 500,
      color: 'var(--color-bone-dim)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: num,
      fontWeight: 600,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
      color: 'var(--color-bone)'
    }
  }, animate && typeof value === 'number' ? /*#__PURE__*/React.createElement(__ds_scope.CountUp, {
    to: value
  }) : value), suffix ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--color-bone-dim)'
    }
  }, suffix) : null, delta ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.02em',
      color: deltaColor
    }
  }, trend === 'down' ? '↓' : '↑', " ", delta) : null));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Stat.jsx", error: String((e && e.message) || e) }); }

// components/ui/Progress.jsx
try { (() => {
/* Gradient meter row — the dashboard's 材料机会 TOP 5 bars (6px pill track, azure-deep→azure fill) */
const FILL = {
  azure: 'linear-gradient(to right, var(--color-azure-deep), var(--color-azure))',
  champagne: 'linear-gradient(to right, color-mix(in srgb, var(--color-champagne) 65%, var(--color-ink-700)), var(--color-champagne))',
  rouge: 'linear-gradient(to right, color-mix(in srgb, var(--color-rouge) 65%, var(--color-ink-700)), var(--color-rouge))',
  bone: 'color-mix(in srgb, var(--color-bone) 45%, transparent)'
};
function Progress({
  label,
  value,
  max = 100,
  tone = 'azure',
  showValue = true,
  labelWidth = 96,
  style
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, label != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: labelWidth,
      flex: 'none',
      fontSize: 11,
      color: 'var(--color-bone-soft)'
    }
  }, label) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      flex: 1,
      overflow: 'hidden',
      borderRadius: 999,
      background: 'color-mix(in srgb, var(--color-bone) 6%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      borderRadius: 999,
      width: `${pct}%`,
      background: FILL[tone] || FILL.azure,
      transition: 'width 0.9s var(--ease-calm)'
    }
  })), showValue ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      flex: 'none',
      textAlign: 'right',
      fontSize: 11,
      fontWeight: 500,
      color: 'var(--color-bone)'
    }
  }, value) : null);
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Progress.jsx", error: String((e && e.message) || e) }); }

// components/ui/Sparkline.jsx
try { (() => {
/* Thin-stroke micro charts — 1.6px trend lines and azure bars from the dashboard/chat mocks */
const STROKES = {
  azure: 'var(--color-azure)',
  champagne: 'var(--color-champagne)',
  mist: 'var(--color-mist)',
  rouge: 'var(--color-rouge)'
};
function Sparkline({
  data = [],
  width = 140,
  height = 44,
  tone = 'azure',
  fill = false,
  dot = false,
  strokeWidth = 1.6,
  style
}) {
  if (data.length < 2) return null;
  const min = Math.min(...data),
    maxV = Math.max(...data),
    span = maxV - min || 1;
  const pad = 3;
  const pts = data.map((v, i) => [pad + i / (data.length - 1) * (width - pad * 2), pad + (1 - (v - min) / span) * (height - pad * 2)]);
  const line = pts.map(p => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const c = STROKES[tone] || STROKES.azure;
  const last = pts[pts.length - 1];
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    style: {
      width,
      height,
      display: 'block',
      ...style
    },
    "aria-hidden": "true"
  }, fill ? /*#__PURE__*/React.createElement("polygon", {
    points: `${pad},${height - pad} ${line} ${(width - pad).toFixed(1)},${height - pad}`,
    fill: c,
    fillOpacity: "0.18",
    stroke: "none"
  }) : null, /*#__PURE__*/React.createElement("polyline", {
    points: line,
    fill: "none",
    stroke: c,
    strokeWidth: strokeWidth,
    strokeLinecap: "round"
  }), dot ? /*#__PURE__*/React.createElement("circle", {
    cx: last[0].toFixed(1),
    cy: last[1].toFixed(1),
    r: "2.2",
    fill: tone === 'azure' ? 'var(--color-azure-bright)' : c
  }) : null);
}
/* Mini bar chart — rounded 2px bars, opacity scales with value (from the AI-chat answer chart) */
function SparkBars({
  data = [],
  width = 140,
  height = 44,
  tone = 'azure',
  gap = 8,
  radius = 2,
  style
}) {
  if (!data.length) return null;
  const maxV = Math.max(...data) || 1;
  const bw = (width - gap * (data.length - 1)) / data.length;
  const c = STROKES[tone] || STROKES.azure;
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: `0 0 ${width} ${height}`,
    style: {
      width,
      height,
      display: 'block',
      ...style
    },
    "aria-hidden": "true"
  }, data.map((v, i) => {
    const h = v / maxV * (height - 4);
    return /*#__PURE__*/React.createElement("rect", {
      key: i,
      x: (i * (bw + gap)).toFixed(1),
      y: (height - h).toFixed(1),
      width: bw.toFixed(1),
      height: h.toFixed(1),
      rx: radius,
      fill: c,
      fillOpacity: 0.35 + v / maxV * 0.5
    });
  }));
}
Object.assign(__ds_scope, { Sparkline, SparkBars });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Sparkline.jsx", error: String((e && e.message) || e) }); }

// components/ui/Tabs.jsx
try { (() => {
/* Pill segmented control — pills only per readme; active pill lifts to bone 8%, idle tabs dim like nav links */
function Tabs({
  items = [],
  value,
  onChange,
  size = 'md',
  style
}) {
  const [hovered, setHovered] = React.useState(null);
  const sz = size === 'sm' ? {
    padding: '5px 12px',
    fontSize: 12
  } : {
    padding: '7px 16px',
    fontSize: 13
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      borderRadius: 999,
      border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)',
      background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
      ...style
    }
  }, items.map(item => {
    const active = item.key === value;
    const hover = hovered === item.key;
    return /*#__PURE__*/React.createElement("button", {
      key: item.key,
      type: "button",
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(item.key),
      onMouseEnter: () => setHovered(item.key),
      onMouseLeave: () => setHovered(null),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        borderRadius: 999,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontWeight: 500,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
        border: `1px solid ${active ? 'color-mix(in srgb, var(--color-bone) 15%, transparent)' : 'transparent'}`,
        background: active ? 'color-mix(in srgb, var(--color-bone) 8%, transparent)' : 'transparent',
        color: active ? 'var(--color-bone)' : hover ? 'var(--color-bone-soft)' : 'var(--color-bone-dim)',
        transition: 'all 0.3s var(--ease-calm)',
        ...sz
      }
    }, item.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon,
      size: size === 'sm' ? 12 : 14
    }) : null, item.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/ui/Field.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Form controls — chat-input surface (rounded 0.75rem, hairline bone/10, ink-850/80); azure focus ring via .fm-control */
function Field({
  label,
  hint,
  required,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 6,
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: '0.05em',
      color: 'var(--color-bone-soft)'
    }
  }, label, required ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--color-azure)'
    }
  }, "*") : null) : null, children, hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '0.02em',
      color: 'var(--color-mist)'
    }
  }, hint) : null);
}
function Input({
  icon,
  style,
  ...rest
}) {
  if (!icon) return /*#__PURE__*/React.createElement("input", _extends({
    className: "fm-control",
    style: style
  }, rest));
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'inline-flex',
      color: 'var(--color-mist)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 14
  })), /*#__PURE__*/React.createElement("input", _extends({
    className: "fm-control",
    style: {
      paddingLeft: 38,
      ...style
    }
  }, rest)));
}
function TextArea({
  rows = 4,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    className: "fm-control",
    rows: rows,
    style: {
      resize: 'vertical',
      ...style
    }
  }, rest));
}
function Select({
  children,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: "fm-control",
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      paddingRight: 38,
      cursor: 'pointer',
      ...style
    }
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'inline-flex',
      color: 'var(--color-mist)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14
  })));
}
Object.assign(__ds_scope, { Field, Input, TextArea, Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Field.jsx", error: String((e && e.message) || e) }); }

// components/ui/Listbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* Custom dropdown — .fm-control trigger + fully branded panel (native <select> popups can't be themed).
   Keyboard: ↑↓ move, Enter/Space select, Esc closes, Home/End jump. */
function Listbox({
  options = [],
  value,
  onChange,
  placeholder = '请选择',
  size,
  style,
  ...rest
}) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(-1);
  const rootRef = React.useRef(null);
  const listRef = React.useRef(null);
  const id = React.useId();
  const selectedIndex = options.findIndex(o => o.value === value);
  const selected = options[selectedIndex];
  React.useEffect(() => {
    if (!open) return;
    const onDown = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);
  React.useEffect(() => {
    if (open && active >= 0 && listRef.current) {
      const el = listRef.current.children[active];
      if (el) el.scrollIntoView({
        block: 'nearest'
      });
    }
  }, [open, active]);
  const openList = () => {
    setOpen(true);
    setActive(selectedIndex >= 0 ? selectedIndex : 0);
  };
  const commit = i => {
    const opt = options[i];
    if (!opt) return;
    if (onChange) onChange(opt.value);
    setOpen(false);
  };
  const onKeyDown = e => {
    if (!open) {
      if (['ArrowDown', 'ArrowUp', 'Enter', ' '].includes(e.key)) {
        e.preventDefault();
        openList();
      }
      return;
    }
    if (e.key === 'Escape') {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive(i => Math.min(options.length - 1, i + 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive(i => Math.max(0, i - 1));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setActive(0);
    } else if (e.key === 'End') {
      e.preventDefault();
      setActive(options.length - 1);
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      commit(active);
    } else if (e.key === 'Tab') setOpen(false);
  };
  return /*#__PURE__*/React.createElement("span", {
    ref: rootRef,
    style: {
      position: 'relative',
      display: 'block',
      ...style
    },
    onKeyDown: onKeyDown
  }, /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: "fm-control",
    "aria-haspopup": "listbox",
    "aria-expanded": open,
    "aria-activedescendant": open && active >= 0 ? `${id}-opt-${active}` : undefined,
    onClick: () => open ? setOpen(false) : openList(),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      textAlign: 'left',
      cursor: 'pointer',
      /* surface inlined too — native button chrome (black square border) must never leak through */
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-panel)',
      border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)',
      background: 'var(--surface-control)',
      padding: '10px 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      lineHeight: 1.5
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: selected ? 'var(--color-bone)' : 'var(--color-mist)'
    }
  }, selected ? selected.label : placeholder), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--color-mist)',
      transform: open ? 'rotate(180deg)' : 'none',
      transition: 'transform 0.3s var(--ease-calm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14
  }))), open ? /*#__PURE__*/React.createElement("ul", {
    ref: listRef,
    role: "listbox",
    className: "fm-pop-in",
    "aria-labelledby": rest['aria-labelledby'],
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 'calc(100% + 6px)',
      zIndex: 50,
      margin: 0,
      padding: 6,
      listStyle: 'none',
      maxHeight: 240,
      overflowY: 'auto',
      borderRadius: 'var(--radius-panel)',
      border: '1px solid color-mix(in srgb, var(--color-bone) 12%, transparent)',
      background: 'var(--surface-float)',
      backdropFilter: 'blur(12px)',
      boxShadow: 'var(--shadow-float)'
    }
  }, options.map((opt, i) => {
    const isSelected = opt.value === value;
    const isActive = i === active;
    return /*#__PURE__*/React.createElement("li", {
      key: opt.value,
      id: `${id}-opt-${i}`,
      role: "option",
      "aria-selected": isSelected,
      onMouseEnter: () => setActive(i),
      onMouseDown: e => e.preventDefault(),
      onClick: () => commit(i),
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        padding: '8px 10px',
        borderRadius: 8,
        fontSize: 13,
        lineHeight: 1.5,
        cursor: 'pointer',
        background: isActive ? 'color-mix(in srgb, var(--color-azure) 10%, transparent)' : 'transparent',
        color: isActive || isSelected ? 'var(--color-bone)' : 'var(--color-bone-soft)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, opt.label), opt.hint ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--color-mist)'
      }
    }, opt.hint) : null, isSelected ? /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        color: 'var(--color-azure-bright)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 14
    })) : null);
  })) : null);
}
Object.assign(__ds_scope, { Listbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Listbox.jsx", error: String((e && e.message) || e) }); }

// components/ui/Checkbox.jsx
try { (() => {
/* Checkable filter control — 16px box, azure fill when checked; the check strokes in ink-950,
   which inverts to white in the light theme so contrast holds on both grounds. */
function Checkbox({
  checked,
  indeterminate = false,
  onChange,
  disabled = false,
  children,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const on = checked || indeterminate;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      opacity: 0,
      margin: 0,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      flex: 'none',
      borderRadius: 4,
      transition: 'all 0.2s var(--ease-calm)',
      border: `1px solid ${on ? 'var(--color-azure)' : 'color-mix(in srgb, var(--color-bone) 25%, transparent)'}`,
      background: on ? 'var(--color-azure)' : 'var(--surface-control)',
      boxShadow: focus ? '0 0 0 3px color-mix(in srgb, var(--color-azure) 15%, transparent)' : 'none',
      color: 'var(--color-ink-950)'
    }
  }, indeterminate ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 2,
      borderRadius: 1,
      background: 'currentColor'
    }
  }) : checked ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 11,
    strokeWidth: 3.5
  }) : null), children != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--color-bone-soft)'
    }
  }, children) : null);
}
function CheckboxGroup({
  options = [],
  value = [],
  onChange,
  columns,
  gap = 10,
  style
}) {
  const toggle = (v, on) => {
    if (!onChange) return;
    onChange(on ? [...value, v] : value.filter(x => x !== v));
  };
  const layout = columns ? {
    display: 'grid',
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap
  } : {
    display: 'flex',
    flexDirection: 'column',
    gap
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    style: {
      ...layout,
      ...style
    }
  }, options.map(o => /*#__PURE__*/React.createElement(Checkbox, {
    key: o.value,
    checked: value.includes(o.value),
    disabled: o.disabled,
    onChange: on => toggle(o.value, on)
  }, o.label)));
}
Object.assign(__ds_scope, { Checkbox, CheckboxGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/ui/Radio.jsx
try { (() => {
/* Radio — 16px circle, azure ring + 8px azure dot when selected */
function Radio({
  checked,
  onChange,
  name,
  disabled = false,
  children,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: !!checked,
    disabled: disabled,
    onChange: e => {
      if (e.target.checked && onChange) onChange();
    },
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      opacity: 0,
      margin: 0,
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 16,
      height: 16,
      flex: 'none',
      borderRadius: 999,
      transition: 'all 0.2s var(--ease-calm)',
      border: `1px solid ${checked ? 'var(--color-azure)' : 'color-mix(in srgb, var(--color-bone) 25%, transparent)'}`,
      background: 'var(--surface-control)',
      boxShadow: focus ? '0 0 0 3px color-mix(in srgb, var(--color-azure) 15%, transparent)' : 'none'
    }
  }, checked ? /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'var(--color-azure)'
    }
  }) : null), children != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--color-bone-soft)'
    }
  }, children) : null);
}
function RadioGroup({
  options = [],
  value,
  onChange,
  direction = 'column',
  gap = 10,
  name,
  style
}) {
  const autoName = React.useId();
  return /*#__PURE__*/React.createElement("div", {
    role: "radiogroup",
    style: {
      display: 'flex',
      flexDirection: direction,
      flexWrap: 'wrap',
      gap,
      ...style
    }
  }, options.map(o => /*#__PURE__*/React.createElement(Radio, {
    key: o.value,
    name: name || autoName,
    checked: o.value === value,
    disabled: o.disabled,
    onChange: () => onChange && onChange(o.value)
  }, o.label)));
}
Object.assign(__ds_scope, { Radio, RadioGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Radio.jsx", error: String((e && e.message) || e) }); }

// components/ui/FilterChips.jsx
try { (() => {
/* Selectable chip group — pills only per readme; selected chips tint azure like the nav hover */
function FilterChips({
  options = [],
  value,
  onChange,
  multiple = false,
  title,
  size = 'md',
  style
}) {
  const [hovered, setHovered] = React.useState(null);
  const sz = size === 'sm' ? {
    padding: '4px 12px',
    fontSize: 12
  } : {
    padding: '6px 14px',
    fontSize: 13
  };
  const isOn = v => multiple ? Array.isArray(value) && value.includes(v) : v === value;
  const pick = v => {
    if (!onChange) return;
    if (multiple) {
      const cur = Array.isArray(value) ? value : [];
      onChange(cur.includes(v) ? cur.filter(x => x !== v) : [...cur, v]);
    } else onChange(v);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8,
      fontSize: 12,
      letterSpacing: '0.02em',
      color: 'var(--color-bone-dim)'
    }
  }, title) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, options.map(o => {
    const on = isOn(o.value);
    const hover = hovered === o.value;
    return /*#__PURE__*/React.createElement("button", {
      key: o.value,
      type: "button",
      "aria-pressed": on,
      onClick: () => pick(o.value),
      onMouseEnter: () => setHovered(o.value),
      onMouseLeave: () => setHovered(null),
      style: {
        borderRadius: 999,
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontWeight: 500,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
        transition: 'all 0.3s var(--ease-calm)',
        border: `1px solid ${on ? 'color-mix(in srgb, var(--color-azure) 40%, transparent)' : hover ? 'color-mix(in srgb, var(--color-azure) 30%, transparent)' : 'color-mix(in srgb, var(--color-bone) 12%, transparent)'}`,
        background: on ? 'color-mix(in srgb, var(--color-azure) 12%, transparent)' : 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
        color: on ? 'var(--color-azure-bright)' : hover ? 'var(--color-bone-soft)' : 'var(--color-bone-dim)',
        ...sz
      }
    }, o.label);
  })));
}
Object.assign(__ds_scope, { FilterChips });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/FilterChips.jsx", error: String((e && e.message) || e) }); }

// components/ui/Collapse.jsx
try { (() => {
/* Collapsible filter group — bone title row, rotating chevron, calm grid-rows height animation */
function Collapse({
  title,
  count,
  defaultOpen = true,
  open,
  onToggle,
  children,
  style
}) {
  const [inner, setInner] = React.useState(defaultOpen);
  const controlled = open !== undefined;
  const isOpen = controlled ? open : inner;
  const toggle = () => {
    if (!controlled) setInner(!isOpen);
    if (onToggle) onToggle(!isOpen);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-expanded": isOpen,
    onClick: toggle,
    style: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      gap: 8,
      padding: '10px 0',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      textAlign: 'left',
      fontFamily: 'var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--color-bone)'
    }
  }, title), count != null ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      color: 'var(--color-mist)'
    }
  }, count) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      color: 'var(--color-mist)',
      transform: isOpen ? 'rotate(180deg)' : 'none',
      transition: 'transform 0.3s var(--ease-calm)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 14
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateRows: isOpen ? '1fr' : '0fr',
      transition: 'grid-template-rows 0.3s var(--ease-calm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 12
    }
  }, children))));
}
Object.assign(__ds_scope, { Collapse });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Collapse.jsx", error: String((e && e.message) || e) }); }

// components/ui/Popover.jsx
try { (() => {
/* Floating panel — frosted ink surface (same recipe as the Listbox panel), fm-pop-in entrance,
   outside-click + Escape close. Base layer for menus, filter panels, date editors. */
const PLACE = {
  'bottom-start': {
    top: 'calc(100% + 8px)',
    left: 0
  },
  'bottom-end': {
    top: 'calc(100% + 8px)',
    right: 0
  },
  'top-start': {
    bottom: 'calc(100% + 8px)',
    left: 0
  },
  'top-end': {
    bottom: 'calc(100% + 8px)',
    right: 0
  }
};
function Popover({
  anchor,
  open,
  onOpenChange,
  placement = 'bottom-start',
  width = 320,
  padding = 16,
  children,
  style
}) {
  const [innerOpen, setInnerOpen] = React.useState(false);
  const controlled = open !== undefined;
  const isOpen = controlled ? open : innerOpen;
  const rootRef = React.useRef(null);
  const setOpen = v => {
    if (!controlled) setInnerOpen(v);
    if (onOpenChange) onOpenChange(v);
  };
  React.useEffect(() => {
    if (!isOpen) return;
    const onDown = e => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false);
    };
    const onKey = e => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);
  return /*#__PURE__*/React.createElement("span", {
    ref: rootRef,
    style: {
      position: 'relative',
      display: 'inline-block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => setOpen(!isOpen),
    style: {
      display: 'inline-block'
    }
  }, anchor), isOpen ? /*#__PURE__*/React.createElement("div", {
    className: "fm-pop-in",
    role: "dialog",
    style: {
      position: 'absolute',
      zIndex: 60,
      width,
      padding,
      borderRadius: 'var(--radius-panel)',
      border: '1px solid color-mix(in srgb, var(--color-bone) 12%, transparent)',
      background: 'var(--surface-float)',
      backdropFilter: 'blur(12px)',
      boxShadow: 'var(--shadow-float)',
      ...(PLACE[placement] || PLACE['bottom-start'])
    }
  }, children) : null);
}
Object.assign(__ds_scope, { Popover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Popover.jsx", error: String((e && e.message) || e) }); }

// components/ui/DropdownMenu.jsx
try { (() => {
/* Action menu on the Popover panel — for row/card actions (导出/收藏/删除) */
function DropdownMenu({
  items = [],
  onSelect,
  anchor,
  placement = 'bottom-end',
  width = 180,
  style
}) {
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState(null);
  return /*#__PURE__*/React.createElement(__ds_scope.Popover, {
    open: open,
    onOpenChange: setOpen,
    anchor: anchor,
    placement: placement,
    width: width,
    padding: 6,
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    role: "menu",
    style: {
      display: 'flex',
      flexDirection: 'column'
    }
  }, items.map((item, i) => {
    if (item.type === 'divider') {
      return /*#__PURE__*/React.createElement("div", {
        key: `d${i}`,
        style: {
          margin: '6px 4px',
          borderTop: '1px solid var(--border-hairline)'
        }
      });
    }
    const danger = item.danger;
    const hover = active === item.key;
    return /*#__PURE__*/React.createElement("button", {
      key: item.key,
      type: "button",
      role: "menuitem",
      disabled: item.disabled,
      onMouseEnter: () => setActive(item.key),
      onMouseLeave: () => setActive(null),
      onClick: () => {
        setOpen(false);
        if (onSelect) onSelect(item.key);
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        width: '100%',
        padding: '8px 10px',
        border: 'none',
        borderRadius: 8,
        cursor: item.disabled ? 'not-allowed' : 'pointer',
        textAlign: 'left',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        lineHeight: 1.5,
        letterSpacing: '0.02em',
        opacity: item.disabled ? 0.45 : 1,
        transition: 'all 0.2s var(--ease-calm)',
        background: hover && !item.disabled ? danger ? 'color-mix(in srgb, var(--color-rouge) 14%, transparent)' : 'color-mix(in srgb, var(--color-azure) 10%, transparent)' : 'transparent',
        color: danger ? 'color-mix(in srgb, var(--color-rouge) 60%, var(--color-bone))' : hover ? 'var(--color-bone)' : 'var(--color-bone-soft)'
      }
    }, item.icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: item.icon,
      size: 14,
      strokeWidth: 1.75
    }) : null, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1
      }
    }, item.label), item.hint ? /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 11,
        color: 'var(--color-mist)'
      }
    }, item.hint) : null);
  })));
}
Object.assign(__ds_scope, { DropdownMenu });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/DropdownMenu.jsx", error: String((e && e.message) || e) }); }

// components/ui/DateRangeEditor.jsx
try { (() => {
/* Relative time-range editor — .fm-control trigger with calendar glyph opening a preset
   panel (前一周/前一月/前一年 …) with a computed-range readout and 取消/应用 actions. */
function DateRangeEditor({
  presets = [],
  value,
  onChange,
  rangeText,
  title = '编辑时间范围',
  width = 300,
  placeholder = '选择时间范围',
  style
}) {
  const [open, setOpen] = React.useState(false);
  const [draft, setDraft] = React.useState(value);
  React.useEffect(() => {
    if (open) setDraft(value);
  }, [open]);
  const current = presets.find(p => p.value === value);
  const readout = typeof rangeText === 'function' ? rangeText(draft) : rangeText;
  return /*#__PURE__*/React.createElement(__ds_scope.Popover, {
    open: open,
    onOpenChange: setOpen,
    width: width,
    style: style,
    anchor: /*#__PURE__*/React.createElement("button", {
      type: "button",
      className: "fm-control",
      "aria-haspopup": "dialog",
      "aria-expanded": open,
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        textAlign: 'left',
        cursor: 'pointer',
        appearance: 'none',
        WebkitAppearance: 'none',
        width: '100%',
        boxSizing: 'border-box',
        borderRadius: 'var(--radius-panel)',
        border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)',
        background: 'var(--surface-control)',
        padding: '10px 14px',
        fontFamily: 'var(--font-sans)',
        fontSize: 13,
        lineHeight: 1.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        flex: 1,
        color: current ? 'var(--color-bone)' : 'var(--color-mist)'
      }
    }, current ? current.label : placeholder), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-flex',
        color: 'var(--color-mist)'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "calendar",
      size: 14
    })))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      fontWeight: 500,
      color: 'var(--color-bone)'
    }
  }, title), /*#__PURE__*/React.createElement(__ds_scope.RadioGroup, {
    value: draft,
    onChange: setDraft,
    options: presets
  }), readout ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '0.02em',
      color: 'var(--color-mist)'
    }
  }, readout) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    onClick: () => setOpen(false)
  }, "\u53D6\u6D88"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: () => {
      if (onChange) onChange(draft);
      setOpen(false);
    }
  }, "\u5E94\u7528"))));
}
Object.assign(__ds_scope, { DateRangeEditor });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/DateRangeEditor.jsx", error: String((e && e.message) || e) }); }

// components/ui/EmptyState.jsx
try { (() => {
/* No-data placeholder — mist glyph in a hairline circle, quiet copy, optional action */
function EmptyState({
  icon = 'database',
  title,
  description,
  action,
  compact = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      padding: compact ? '20px 16px' : '40px 24px',
      textAlign: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: compact ? 44 : 56,
      height: compact ? 44 : 56,
      borderRadius: 999,
      border: '1px solid var(--border-hairline)',
      background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
      color: 'var(--color-mist)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: compact ? 18 : 22,
    strokeWidth: 1.5
  })), title ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: 'var(--color-bone-soft)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("span", {
    style: {
      maxWidth: 320,
      fontSize: 12,
      lineHeight: 1.6,
      letterSpacing: '0.02em',
      color: 'var(--color-mist)'
    }
  }, description) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, action) : null);
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/ui/ProductCard.jsx
try { (() => {
/* Product media card — image, two-line clamped title, brand + date meta row.
   Cards lift and tint azure on hover per the brand hover language. */
function ProductCard({
  src,
  alt = '',
  aspectRatio = '3/4',
  title,
  brand,
  date,
  tags,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      borderRadius: 12,
      overflow: 'hidden',
      border: `1px solid ${hover ? 'color-mix(in srgb, var(--color-azure) 25%, transparent)' : 'var(--border-hairline)'}`,
      background: 'var(--surface-control)',
      transform: hover ? 'translateY(-4px)' : 'none',
      transition: 'all 0.3s var(--ease-calm)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio,
      width: '100%',
      overflow: 'hidden',
      background: 'linear-gradient(to bottom right, color-mix(in srgb, var(--color-bone) 8%, transparent), var(--color-ink-700))'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      padding: '0 12px 12px'
    }
  }, title ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      lineHeight: 1.5,
      color: 'var(--color-bone)',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical',
      overflow: 'hidden'
    }
  }, title) : null, tags ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 4
    }
  }, tags) : null, brand || date ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8
    }
  }, brand ? /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      fontSize: 12,
      letterSpacing: '0.02em',
      color: 'var(--color-bone-dim)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, brand) : /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), date ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '0.02em',
      color: 'var(--color-mist)',
      whiteSpace: 'nowrap'
    }
  }, date) : null) : null));
}
/* Thumbnail selector row — 32px squares, selected frame tints azure */
function ThumbnailStrip({
  items = [],
  value = 0,
  onChange,
  size = 32,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      ...style
    }
  }, items.map((item, i) => {
    const on = i === value;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      "aria-pressed": on,
      onClick: () => onChange && onChange(i),
      style: {
        width: size,
        height: size,
        padding: 0,
        borderRadius: 6,
        overflow: 'hidden',
        cursor: 'pointer',
        border: `2px solid ${on ? 'var(--color-azure)' : 'transparent'}`,
        outline: on ? 'none' : '1px solid var(--border-hairline)',
        outlineOffset: -1,
        background: 'linear-gradient(to bottom right, color-mix(in srgb, var(--color-bone) 8%, transparent), var(--color-ink-700))',
        transition: 'border-color 0.2s var(--ease-calm)'
      }
    }, item && item.src ? /*#__PURE__*/React.createElement("img", {
      src: item.src,
      alt: item.alt || '',
      style: {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block'
      }
    }) : null);
  }));
}
Object.assign(__ds_scope, { ProductCard, ThumbnailStrip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/ui/Pagination.jsx
try { (() => {
/* Pill pagination — 28px circles, current page lifts to bone 8% like the active tab */
function PageButton({
  children,
  active = false,
  disabled = false,
  onClick,
  label
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    "aria-current": active ? 'page' : undefined,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 28,
      height: 28,
      padding: '0 6px',
      borderRadius: 999,
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      fontVariantNumeric: 'tabular-nums',
      border: `1px solid ${active ? 'color-mix(in srgb, var(--color-bone) 15%, transparent)' : hover && !disabled ? 'color-mix(in srgb, var(--color-azure) 30%, transparent)' : 'transparent'}`,
      background: active ? 'color-mix(in srgb, var(--color-bone) 8%, transparent)' : 'transparent',
      color: active ? 'var(--color-bone)' : hover && !disabled ? 'var(--color-bone-soft)' : 'var(--color-bone-dim)',
      opacity: disabled ? 0.4 : 1,
      transition: 'all 0.2s var(--ease-calm)'
    }
  }, children);
}
function Pagination({
  page = 1,
  pageCount = 1,
  onChange,
  siblings = 1,
  showEnds = true,
  style
}) {
  const go = p => {
    if (onChange && p >= 1 && p <= pageCount && p !== page) onChange(p);
  };
  const pages = [];
  const lo = Math.max(2, page - siblings),
    hi = Math.min(pageCount - 1, page + siblings);
  pages.push(1);
  if (lo > 2) pages.push('…l');
  for (let p = lo; p <= hi; p++) pages.push(p);
  if (hi < pageCount - 1) pages.push('…r');
  if (pageCount > 1) pages.push(pageCount);
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "\u5206\u9875",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      ...style
    }
  }, showEnds ? /*#__PURE__*/React.createElement(PageButton, {
    label: "\u7B2C\u4E00\u9875",
    disabled: page <= 1,
    onClick: () => go(1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevrons-left",
    size: 13
  })) : null, /*#__PURE__*/React.createElement(PageButton, {
    label: "\u4E0A\u4E00\u9875",
    disabled: page <= 1,
    onClick: () => go(page - 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 13
  })), pages.map(p => typeof p === 'string' ? /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      minWidth: 20,
      textAlign: 'center',
      fontSize: 12,
      color: 'var(--color-mist)'
    }
  }, "\u2026") : /*#__PURE__*/React.createElement(PageButton, {
    key: p,
    active: p === page,
    label: `第 ${p} 页`,
    onClick: () => go(p)
  }, p)), /*#__PURE__*/React.createElement(PageButton, {
    label: "\u4E0B\u4E00\u9875",
    disabled: page >= pageCount,
    onClick: () => go(page + 1)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 13
  })), showEnds ? /*#__PURE__*/React.createElement(PageButton, {
    label: "\u6700\u540E\u4E00\u9875",
    disabled: page >= pageCount,
    onClick: () => go(pageCount)
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevrons-right",
    size: 13
  })) : null);
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/ui/AlphabetIndex.jsx
try { (() => {
/* A–Z index rail for large pickers — active letter tints azure, unavailable letters dim out */
const DEFAULT_LETTERS = ['#', ...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
function AlphabetIndex({
  letters = DEFAULT_LETTERS,
  value,
  onChange,
  available,
  style
}) {
  const [hovered, setHovered] = React.useState(null);
  return /*#__PURE__*/React.createElement("div", {
    role: "navigation",
    "aria-label": "\u5B57\u6BCD\u7D22\u5F15",
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 2,
      ...style
    }
  }, letters.map(l => {
    const enabled = !available || available.includes(l);
    const on = l === value;
    const hover = hovered === l;
    return /*#__PURE__*/React.createElement("button", {
      key: l,
      type: "button",
      disabled: !enabled,
      "aria-pressed": on,
      onClick: () => onChange && onChange(l),
      onMouseEnter: () => setHovered(l),
      onMouseLeave: () => setHovered(null),
      style: {
        minWidth: 22,
        height: 22,
        padding: '0 4px',
        borderRadius: 999,
        border: 'none',
        cursor: enabled ? 'pointer' : 'default',
        fontFamily: 'var(--font-sans)',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.06em',
        background: on ? 'color-mix(in srgb, var(--color-azure) 12%, transparent)' : 'transparent',
        color: !enabled ? 'color-mix(in srgb, var(--color-mist) 45%, transparent)' : on ? 'var(--color-azure-bright)' : hover ? 'var(--color-bone)' : 'var(--color-bone-dim)',
        transition: 'all 0.2s var(--ease-calm)'
      }
    }, l);
  }));
}
Object.assign(__ds_scope, { AlphabetIndex });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/AlphabetIndex.jsx", error: String((e && e.message) || e) }); }

// components/ui/Fab.jsx
try { (() => {
/* Floating action button — the azure glow treatment from 生成上身效果, as a 48px circle.
   Default AI entry: sparkles glyph. */
function Fab({
  icon = 'sparkles',
  label,
  onClick,
  fixed = false,
  offset = 24,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: 48,
      height: 48,
      borderRadius: 999,
      cursor: 'pointer',
      border: `1px solid color-mix(in srgb, var(--color-azure) ${hover ? 55 : 40}%, transparent)`,
      background: `color-mix(in srgb, var(--color-azure) ${hover ? 24 : 15}%, transparent)`,
      color: 'var(--color-azure-bright)',
      backdropFilter: 'blur(8px)',
      boxShadow: hover ? '0 0 34px -4px rgba(87,184,212,0.7)' : '0 0 24px -6px rgba(87,184,212,0.6)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'all 0.3s var(--ease-calm)',
      ...(fixed ? {
        position: 'fixed',
        right: offset,
        bottom: offset,
        zIndex: 90
      } : {}),
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    strokeWidth: 1.5
  }));
}
Object.assign(__ds_scope, { Fab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Fab.jsx", error: String((e && e.message) || e) }); }

// components/ui/DataTable.jsx
try { (() => {
/* Hairline BI table — eyebrow-tracked header, hairline row rules, numerals emphasised via column strong flag */
function DataTable({
  columns = [],
  rows = [],
  dense = false,
  style
}) {
  const [hovered, setHovered] = React.useState(null);
  const pad = dense ? '8px 12px' : '11px 14px';
  return /*#__PURE__*/React.createElement("table", {
    style: {
      width: '100%',
      borderCollapse: 'collapse',
      fontFamily: 'var(--font-sans)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, columns.map(col => /*#__PURE__*/React.createElement("th", {
    key: col.key,
    style: {
      padding: pad,
      textAlign: col.align || 'left',
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      color: 'var(--color-bone-dim)',
      borderBottom: '1px solid var(--border-panel)',
      whiteSpace: 'nowrap'
    }
  }, col.label)))), /*#__PURE__*/React.createElement("tbody", null, rows.map((row, i) => /*#__PURE__*/React.createElement("tr", {
    key: i,
    onMouseEnter: () => setHovered(i),
    onMouseLeave: () => setHovered(null),
    style: {
      background: hovered === i ? 'color-mix(in srgb, var(--color-bone) 3%, transparent)' : 'transparent',
      transition: 'background 0.3s var(--ease-calm)'
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("td", {
    key: col.key,
    style: {
      padding: pad,
      textAlign: col.align || 'left',
      fontSize: 12,
      lineHeight: 1.5,
      color: col.strong ? 'var(--color-bone)' : 'var(--color-bone-soft)',
      fontWeight: col.strong ? 500 : 400,
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, col.render ? col.render(row[col.key], row, i) : row[col.key]))))));
}
Object.assign(__ds_scope, { DataTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/DataTable.jsx", error: String((e && e.message) || e) }); }

// components/ui/Dialog.jsx
try { (() => {
/* Modal — blurred ink overlay + frosted glass card, extracted from ContactDialog */
const SIZES = {
  sm: 384,
  md: 480,
  lg: 720
};
function Dialog({
  open,
  onClose,
  title,
  subtitle,
  size = 'sm',
  width,
  align = 'center',
  footer,
  scrollBody = false,
  children
}) {
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = e => {
      if (e.key === 'Escape' && onClose) onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px'
    },
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'color-mix(in srgb, var(--color-ink-950) 80%, transparent)',
      backdropFilter: 'blur(4px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "glass fm-dialog-in",
    style: {
      position: 'relative',
      zIndex: 10,
      width: '100%',
      maxWidth: width ?? SIZES[size] ?? SIZES.sm,
      maxHeight: '85vh',
      display: 'flex',
      flexDirection: 'column',
      borderRadius: '1rem',
      border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)',
      padding: 32,
      textAlign: align
    }
  }, onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u5173\u95ED",
    onClick: onClose,
    style: {
      position: 'absolute',
      right: 16,
      top: 16,
      borderRadius: 999,
      border: 'none',
      background: 'transparent',
      padding: 6,
      color: 'var(--color-bone-dim)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--color-bone)'
    }
  }, title) : null, subtitle ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 13,
      lineHeight: 1.625,
      color: 'var(--color-bone-dim)'
    }
  }, subtitle) : null, /*#__PURE__*/React.createElement("div", {
    style: scrollBody ? {
      flex: '1 1 auto',
      overflowY: 'auto',
      margin: '0 -8px',
      padding: '0 8px'
    } : {
      flex: '1 1 auto'
    }
  }, children), footer ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      flex: 'none'
    }
  }, footer) : null));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/ui/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/mocks.jsx
try { (() => {
/* Product mock visuals — faithful React ports of src/components/visuals/*.vue */
const DS = window.FabricMindDesignSystem_4edb8c;
const {
  Icon,
  CountUp
} = DS;
const eyebrow10 = {
  fontSize: 10,
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  fontWeight: 500,
  color: 'var(--color-bone-dim)'
};
function radarPoint(i, r) {
  const angle = Math.PI * 2 * i / 5 - Math.PI / 2;
  return `${50 + 38 * r * Math.cos(angle)},${50 + 38 * r * Math.sin(angle)}`;
}
function DashboardMock() {
  const materials = [{
    name: 'Lyocell',
    score: 86
  }, {
    name: 'Recycled Nylon',
    score: 82
  }, {
    name: 'Linen Blend',
    score: 78
  }, {
    name: 'Merino Wool',
    score: 71
  }, {
    name: 'Tencel Modal',
    score: 66
  }];
  const radarAxes = ['市场潜力', '增长潜力', '竞争格局', '可行性', '趋势热度'];
  const radarValues = [0.82, 0.74, 0.58, 0.7, 0.9];
  const radarPolygon = radarValues.map((v, i) => radarPoint(i, v)).join(' ');
  const radarGrid = [1, 0.66, 0.33].map(ring => radarValues.map((_, i) => radarPoint(i, ring)).join(' '));
  const trendLines = [{
    c: 'var(--color-azure)',
    d: 'M4 78 C 40 70, 70 52, 110 48 C 150 44, 190 30, 236 18'
  }, {
    c: 'var(--color-champagne)',
    d: 'M4 84 C 50 80, 80 70, 120 66 C 160 62, 200 56, 236 44'
  }, {
    c: 'var(--color-mist)',
    d: 'M4 70 C 40 72, 80 66, 120 70 C 160 74, 200 60, 236 58'
  }, {
    c: 'var(--color-rouge)',
    d: 'M4 90 C 50 88, 90 86, 130 80 C 170 74, 205 78, 236 70'
  }];
  const bubbles = [{
    x: 28,
    y: 64,
    r: 7
  }, {
    x: 52,
    y: 40,
    r: 11,
    hot: true
  }, {
    x: 74,
    y: 30,
    r: 8,
    hot: true
  }, {
    x: 40,
    y: 78,
    r: 5
  }, {
    x: 86,
    y: 56,
    r: 6
  }, {
    x: 64,
    y: 70,
    r: 9
  }];
  const tile = {
    borderRadius: 12,
    padding: 16
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "fm-ghost-card",
    style: {
      position: 'absolute',
      left: -16,
      top: 24,
      height: 176,
      width: 160,
      transform: 'rotate(-6deg)',
      borderRadius: 12,
      border: '1px solid rgba(236,234,225,0.06)',
      background: 'color-mix(in srgb, var(--color-ink-800) 60%, transparent)',
      padding: 8,
      filter: 'blur(1.5px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 6
    }
  }, [...Array(6)].map((_, n) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      aspectRatio: '3/4',
      borderRadius: 4,
      background: 'color-mix(in srgb, var(--color-bone) 4%, transparent)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "fm-ghost-card",
    style: {
      position: 'absolute',
      left: -8,
      top: 112,
      height: 160,
      width: 96,
      transform: 'rotate(5deg)',
      borderRadius: 12,
      border: '1px solid rgba(236,234,225,0.06)',
      background: 'linear-gradient(to bottom, color-mix(in srgb, var(--color-champagne) 10%, transparent), var(--color-ink-850))',
      filter: 'blur(1px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: 'repeat(12, 1fr)',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass",
    style: {
      ...tile,
      gridColumn: 'span 7'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: eyebrow10
  }, "\u8D8B\u52BF\u70ED\u5EA6\u8D70\u52BF"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      letterSpacing: '0.02em',
      color: 'var(--color-mist)'
    }
  }, "2023 Q1 \u2192 2025 Q1")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 240 100",
    style: {
      height: 80,
      width: '100%'
    },
    preserveAspectRatio: "none"
  }, [22, 48, 74].map(y => /*#__PURE__*/React.createElement("line", {
    key: y,
    x1: "0",
    y1: y,
    x2: "240",
    y2: y,
    stroke: "var(--color-mist)",
    strokeOpacity: "0.1"
  })), trendLines.map((l, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: l.d,
    fill: "none",
    stroke: l.c,
    strokeWidth: "1.6",
    strokeLinecap: "round",
    opacity: i === 0 ? 0.95 : 0.6
  })))), /*#__PURE__*/React.createElement("div", {
    className: "glass",
    style: {
      ...tile,
      gridColumn: 'span 5'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: eyebrow10
  }, "\u673A\u4F1A\u6307\u6570 \xB7 \u7EFC\u5408"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 36,
      fontWeight: 600,
      letterSpacing: '-0.025em',
      color: 'var(--color-bone)'
    }
  }, /*#__PURE__*/React.createElement(CountUp, {
    to: 78
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 4,
      fontSize: 14,
      color: 'var(--color-bone-dim)'
    }
  }, "/100")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 100",
    style: {
      width: 64,
      height: 64
    }
  }, radarGrid.map((g, i) => /*#__PURE__*/React.createElement("polygon", {
    key: i,
    points: g,
    fill: "none",
    stroke: "var(--color-mist)",
    strokeOpacity: "0.16"
  })), /*#__PURE__*/React.createElement("polygon", {
    points: radarPolygon,
    fill: "var(--color-azure)",
    stroke: "var(--color-azure)",
    fillOpacity: "0.18",
    strokeWidth: "1.4"
  }), radarValues.map((v, i) => {
    const [cx, cy] = radarPoint(i, v).split(',');
    return /*#__PURE__*/React.createElement("circle", {
      key: i,
      cx: cx,
      cy: cy,
      r: "1.6",
      fill: "var(--color-azure-bright)"
    });
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2px 8px'
    }
  }, radarAxes.map(a => /*#__PURE__*/React.createElement("span", {
    key: a,
    style: {
      fontSize: 9,
      letterSpacing: '0.02em',
      color: 'var(--color-mist)'
    }
  }, a)))), /*#__PURE__*/React.createElement("div", {
    className: "glass",
    style: {
      ...tile,
      gridColumn: 'span 5'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: eyebrow10
  }, "\u54C1\u7C7B\u673A\u4F1A\u5206\u5E03"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 90",
    style: {
      height: 80,
      width: '100%',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "82",
    x2: "98",
    y2: "82",
    stroke: "var(--color-mist)",
    strokeOpacity: "0.18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "8",
    y1: "6",
    x2: "8",
    y2: "82",
    stroke: "var(--color-mist)",
    strokeOpacity: "0.18"
  }), bubbles.map((b, i) => /*#__PURE__*/React.createElement("circle", {
    key: i,
    cx: b.x,
    cy: b.y,
    r: b.r,
    fill: b.hot ? 'var(--color-azure)' : 'var(--color-bone-soft)',
    fillOpacity: b.hot ? 0.32 : 0.14,
    stroke: b.hot ? 'var(--color-azure)' : 'var(--color-mist)',
    strokeOpacity: "0.5"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 9,
      letterSpacing: '0.02em',
      color: 'var(--color-mist)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\u7ADE\u4E89\u5F3A\u5EA6 \u2192"), /*#__PURE__*/React.createElement("span", null, "\u2191 \u5E02\u573A\u6F5C\u529B"))), /*#__PURE__*/React.createElement("div", {
    className: "glass",
    style: {
      ...tile,
      gridColumn: 'span 7'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: eyebrow10
  }, "\u6750\u6599\u673A\u4F1A TOP 5"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 10,
      display: 'flex',
      flexDirection: 'column',
      gap: 6
    }
  }, materials.map(m => /*#__PURE__*/React.createElement("div", {
    key: m.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 96,
      flex: 'none',
      fontSize: 11,
      color: 'var(--color-bone-soft)'
    }
  }, m.name), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      flex: 1,
      overflow: 'hidden',
      borderRadius: 999,
      background: 'color-mix(in srgb, var(--color-bone) 6%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      borderRadius: 999,
      width: m.score + '%',
      background: 'linear-gradient(to right, var(--color-azure-deep), var(--color-azure))'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      textAlign: 'right',
      fontSize: 11,
      fontWeight: 500,
      color: 'var(--color-bone)'
    }
  }, m.score)))))));
}
function ChatMock() {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      minHeight: 208,
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '78%',
      borderRadius: '16px 2px 16px 16px',
      border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)',
      background: 'color-mix(in srgb, var(--color-bone) 6%, transparent)',
      padding: '8px 14px',
      fontSize: 12,
      lineHeight: 1.6,
      color: 'var(--color-bone-soft)'
    }
  }, "\u5BF9\u6BD4\u8FD1\u4E09\u6708\u9488\u7EC7\u54C1\u7C7B\u7684\u4E0A\u65B0\u8D8B\u52BF")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '88%',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      borderRadius: '2px 16px 16px 16px',
      border: '1px solid color-mix(in srgb, var(--color-azure) 15%, transparent)',
      background: 'color-mix(in srgb, var(--color-azure) 5%, transparent)',
      padding: '10px 14px',
      backdropFilter: 'blur(8px)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 12,
      lineHeight: 1.6,
      color: 'var(--color-bone)'
    }
  }, "\u8FD1\u4E09\u6708\u9488\u7EC7\u4E0A\u65B0\u73AF\u6BD4 ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--color-azure-bright)'
    }
  }, "+18%"), "\uFF0C\u96C6\u4E2D\u4E8E\u8F7B\u8584\u7CBE\u7EBA\u4E0E\u63D0\u82B1\u7ED3\u6784\uFF0C\u673A\u4F1A\u6307\u6570\u9AD8\u4E8E\u5747\u503C\u3002"), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 140 44",
    style: {
      height: 44,
      width: '100%'
    }
  }, [38, 52, 44, 66, 58, 78, 70].map((b, i) => /*#__PURE__*/React.createElement("rect", {
    key: i,
    x: i * 20 + 4,
    y: 44 - b / 100 * 40,
    width: "12",
    height: b / 100 * 40,
    rx: "2",
    fill: "var(--color-azure)",
    fillOpacity: 0.35 + b / 100 * 0.5
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 9,
      letterSpacing: '0.02em',
      color: 'var(--color-mist)'
    }
  }, "\u57FA\u4E8E\u5E73\u53F0\u6570\u636E \xB7 \u542B\u56FE\u8868\u4F9D\u636E")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6
    }
  }, ['趋势预警', '材料匹配', '竞品对比'].map(p => /*#__PURE__*/React.createElement("span", {
    key: p,
    style: {
      borderRadius: 999,
      border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)',
      background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
      padding: '4px 10px',
      fontSize: 10,
      letterSpacing: '0.02em',
      color: 'var(--color-bone-dim)'
    }
  }, p))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      borderRadius: 12,
      border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)',
      background: 'color-mix(in srgb, var(--color-ink-850) 80%, transparent)',
      padding: '8px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--color-bone-dim)'
    }
  }, "\u5411\u77E5\u5E8F\u63D0\u95EE"), /*#__PURE__*/React.createElement("span", {
    className: "animate-caret",
    style: {
      display: 'inline-block',
      height: 14,
      width: 1,
      background: 'var(--color-azure)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      width: 24,
      height: 24,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      background: 'color-mix(in srgb, var(--color-azure) 20%, transparent)',
      color: 'var(--color-azure-bright)',
      boxShadow: '0 0 14px -3px rgba(87,184,212,0.7)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up",
    size: 14
  })))));
}
function ReportMock() {
  const slides = [{
    rotate: -10,
    x: -42,
    y: 10,
    z: 1
  }, {
    rotate: -3,
    x: -14,
    y: 4,
    z: 2
  }, {
    rotate: 5,
    x: 16,
    y: 0,
    z: 3
  }];
  const swatches = ['var(--color-champagne)', 'var(--color-azure)', 'var(--color-bone)', 'var(--color-rouge)', 'var(--color-mist)', 'var(--color-champagne)'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      minHeight: 208,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'none',
      position: 'absolute',
      inset: 0,
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "animate-shimmer",
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: '33%',
      background: 'linear-gradient(to bottom, transparent, color-mix(in srgb, var(--color-azure) 7%, transparent), transparent)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 160,
      width: 192
    }
  }, slides.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "fm-slide",
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      height: 128,
      width: 160,
      borderRadius: 8,
      padding: 12,
      transform: `translate(-50%,-50%) translate(${s.x}px, ${s.y}px) rotate(${s.rotate}deg)`,
      zIndex: s.z
    }
  }, i === 0 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      width: 48,
      borderRadius: 3,
      background: 'color-mix(in srgb, var(--color-champagne) 60%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      height: 8,
      width: 96,
      borderRadius: 4,
      background: 'color-mix(in srgb, var(--color-bone) 30%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 4,
      height: 8,
      width: 64,
      borderRadius: 4,
      background: 'color-mix(in srgb, var(--color-bone) 15%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 12,
      left: 12,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 10,
      color: 'var(--color-bone-dim)'
    }
  }, "FabricMind Report")) : i === 1 ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      width: 40,
      borderRadius: 3,
      background: 'color-mix(in srgb, var(--color-azure) 60%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 60",
    style: {
      marginTop: 8,
      height: 48,
      width: '100%'
    }
  }, [18, 26, 22, 34, 30].map((h, n) => /*#__PURE__*/React.createElement("rect", {
    key: n,
    x: n * 22 + 4,
    y: 52 - h,
    width: "9",
    height: h,
    rx: "1.5",
    fill: "var(--color-bone-soft)",
    fillOpacity: "0.16"
  })), /*#__PURE__*/React.createElement("polyline", {
    points: "8,30 30,22 52,26 74,12 96,16 113,6",
    fill: "none",
    stroke: "var(--color-azure)",
    strokeWidth: "1.6"
  }))) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 6,
      width: 40,
      borderRadius: 3,
      background: 'color-mix(in srgb, var(--color-rouge) 60%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 6
    }
  }, swatches.map((c, n) => /*#__PURE__*/React.createElement("div", {
    key: n,
    style: {
      aspectRatio: '1',
      borderRadius: 4,
      background: `linear-gradient(to bottom right, color-mix(in srgb, ${c} 25%, transparent), var(--color-ink-700))`
    }
  }))))))), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      position: 'absolute',
      right: 16,
      top: 16,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      borderRadius: 999,
      border: '1px solid color-mix(in srgb, var(--color-bone) 15%, transparent)',
      background: 'color-mix(in srgb, var(--color-bone) 5%, transparent)',
      padding: '6px 12px',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.02em',
      color: 'var(--color-bone)',
      backdropFilter: 'blur(8px)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 12
  }), " \u5BFC\u51FA PPT"));
}
function TryOnMock() {
  const garment = {
    position: 'absolute',
    left: 12,
    width: 64,
    borderRadius: 8,
    border: '1px dashed color-mix(in srgb, var(--color-champagne) 30%, transparent)',
    background: 'color-mix(in srgb, var(--color-ink-850) 70%, transparent)',
    padding: 6
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      minHeight: 208,
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
      borderRadius: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '50%',
      top: 0,
      width: 224,
      height: 224,
      transform: 'translate(-50%,-25%)',
      borderRadius: 999,
      opacity: 0.7,
      filter: 'blur(32px)',
      background: 'radial-gradient(circle, rgba(201,173,124,0.18), transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      ...garment,
      top: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1',
      borderRadius: 4,
      background: 'linear-gradient(to bottom right, color-mix(in srgb, var(--color-bone) 10%, transparent), color-mix(in srgb, var(--color-bone) 2%, transparent))'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      textAlign: 'center',
      fontSize: 8,
      letterSpacing: '0.03em',
      color: 'var(--color-bone-dim)'
    }
  }, "\u4E0A\u88C5")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...garment,
      bottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '1',
      borderRadius: 4,
      background: 'linear-gradient(to bottom right, color-mix(in srgb, var(--color-azure) 12%, transparent), color-mix(in srgb, var(--color-bone) 2%, transparent))'
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      textAlign: 'center',
      fontSize: 8,
      letterSpacing: '0.03em',
      color: 'var(--color-bone-dim)'
    }
  }, "\u4E0B\u88C5")), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 120 200",
    style: {
      position: 'relative',
      height: 176,
      width: 'auto'
    }
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "figGrad",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    className: "tryon-fig-0",
    offset: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    className: "tryon-fig-1",
    offset: "1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "topGrad",
    x1: "0",
    y1: "0",
    x2: "0",
    y2: "1"
  }, /*#__PURE__*/React.createElement("stop", {
    className: "tryon-top-0",
    offset: "0"
  }), /*#__PURE__*/React.createElement("stop", {
    className: "tryon-top-1",
    offset: "1"
  }))), /*#__PURE__*/React.createElement("circle", {
    cx: "60",
    cy: "26",
    r: "14",
    fill: "url(#figGrad)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M44 44 C 52 38, 68 38, 76 44 L 82 120 C 78 150, 74 178, 70 196 L 50 196 C 46 178, 42 150, 38 120 Z",
    fill: "url(#figGrad)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M45 46 C 52 41, 68 41, 75 46 L 80 96 L 40 96 Z",
    fill: "url(#topGrad)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M41 100 L 79 100 L 73 178 L 66 178 L 60 120 L 54 178 L 47 178 Z",
    fill: "var(--color-azure)",
    fillOpacity: "0.28",
    stroke: "var(--color-azure)",
    strokeOpacity: "0.4",
    strokeWidth: "0.8"
  })), /*#__PURE__*/React.createElement("button", {
    type: "button",
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      borderRadius: 999,
      border: '1px solid color-mix(in srgb, var(--color-azure) 40%, transparent)',
      background: 'color-mix(in srgb, var(--color-azure) 15%, transparent)',
      padding: '6px 14px',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: '0.02em',
      color: 'var(--color-azure-bright)',
      boxShadow: '0 0 24px -6px rgba(87,184,212,0.6)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 12
  }), " \u751F\u6210\u4E0A\u8EAB\u6548\u679C"));
}
Object.assign(window, {
  DashboardMock,
  ChatMock,
  ReportMock,
  TryOnMock
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/mocks.jsx", error: String((e && e.message) || e) }); }

// ui_kits/landing/sections.jsx
try { (() => {
/* Landing sections — faithful React ports of src/components/*.vue */
const DS2 = window.FabricMindDesignSystem_4edb8c;
const {
  BrandMark,
  Icon,
  Button,
  IconButton,
  SectionHeading,
  Reveal
} = DS2;
const container = {
  margin: '0 auto',
  maxWidth: 1280,
  padding: '0 40px'
};
const eyebrowStyle = {
  fontSize: '0.72rem',
  letterSpacing: '0.22em',
  textTransform: 'uppercase',
  fontWeight: 500
};
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
  return {
    theme,
    toggle
  };
}
function SiteNav({
  onContact,
  theme,
  onToggleTheme
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, {
      passive: true
    });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = [{
    label: '解决方案',
    href: '#framework'
  }, {
    label: '业务场景',
    href: '#scenarios'
  }, {
    label: '产品能力',
    href: '#features'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      top: 0,
      zIndex: 50,
      transition: 'all 0.5s var(--ease-calm)',
      borderBottom: scrolled ? '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)' : '1px solid transparent',
      background: scrolled ? 'color-mix(in srgb, var(--color-ink-950) 70%, transparent)' : 'transparent',
      backdropFilter: scrolled ? 'blur(24px)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      ...container,
      display: 'flex',
      height: 64,
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    size: 34
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 8,
      lineHeight: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      letterSpacing: '0.025em',
      color: 'var(--color-bone)'
    }
  }, "\u77E5\u5E8F"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 15,
      letterSpacing: '0.025em',
      color: 'var(--color-bone-soft)'
    }
  }, "FabricMind"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 36
    },
    className: "fm-nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.href,
    href: l.href,
    className: "fm-nav-link",
    style: {
      fontSize: 13,
      letterSpacing: '0.02em',
      color: 'var(--color-bone-dim)',
      textDecoration: 'none',
      transition: 'color 0.3s'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    name: theme === 'dark' ? 'sun' : 'moon',
    label: theme === 'dark' ? '切换到浅色主题' : '切换到深色主题',
    onClick: onToggleTheme
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "nav",
    size: "sm",
    icon: "arrow-up-right",
    onClick: onContact
  }, "\u9884\u7EA6\u6F14\u793A"))));
}
function Drift({
  dur = 7,
  dist = 12,
  style,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...style,
      animation: `fm-drift ${dur}s ease-in-out infinite`,
      '--fm-dist': `-${dist}px`
    }
  }, children);
}
function HeroSection({
  onContact,
  theme
}) {
  const heroSrc = theme === 'light' ? '../../assets/hero-light.webp' : '../../assets/hero-visual.png';
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    style: {
      position: 'relative',
      display: 'flex',
      height: '100vh',
      minHeight: 680,
      width: '100%',
      alignItems: 'center',
      overflow: 'hidden',
      backgroundColor: 'rgb(var(--hero-base))'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: '58%'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: heroSrc,
    alt: "\u77E5\u5E8F FabricMind \u6570\u636E\u667A\u80FD\u4E3B\u89C6\u89C9",
    style: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      objectPosition: 'right'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgb(var(--hero-base)) 0%, rgb(var(--hero-base)) 12%, rgb(var(--hero-base) / 0.7) 32%, rgb(var(--hero-base) / 0.3) 55%, transparent 78%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, rgb(var(--hero-base)) 0%, transparent 50%, rgb(var(--hero-base) / 0.3) 100%)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "bg-noise",
    style: {
      pointerEvents: 'none',
      position: 'absolute',
      inset: 0,
      opacity: 0.05
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'none',
      position: 'absolute',
      inset: 0
    }
  }, /*#__PURE__*/React.createElement(Drift, {
    dur: 7,
    style: {
      position: 'absolute',
      right: '10%',
      top: '20%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderRadius: 12,
      padding: '12px 16px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "activity",
    size: 16,
    style: {
      color: 'var(--color-azure)'
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowStyle,
      color: 'var(--color-bone-dim)'
    }
  }, "\u673A\u4F1A\u6307\u6570"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--color-bone)'
    }
  }, "78", /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--color-bone-dim)'
    }
  }, "/100"))))), /*#__PURE__*/React.createElement(Drift, {
    dur: 9,
    dist: 16,
    style: {
      position: 'absolute',
      right: '40%',
      top: '34%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      borderRadius: 8,
      padding: '8px 14px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trending-up",
    size: 14,
    style: {
      color: 'var(--color-azure-bright)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      letterSpacing: '0.02em',
      color: 'var(--color-bone-soft)'
    }
  }, "\u8D8B\u52BF\u70ED\u5EA6 \xB7 \u9488\u7EC7 \u4E0A\u884C"))), /*#__PURE__*/React.createElement(Drift, {
    dur: 8,
    dist: 10,
    style: {
      position: 'absolute',
      right: '15%',
      top: '58%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "glass",
    style: {
      borderRadius: 8,
      padding: '10px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 6,
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'var(--color-champagne)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrowStyle,
      color: 'var(--color-bone-dim)'
    }
  }, "\u6750\u6599\u673A\u4F1A TOP")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13,
      color: 'var(--color-bone-soft)'
    }
  }, "Lyocell ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: 'var(--color-bone)'
    }
  }, "86")))), /*#__PURE__*/React.createElement(Drift, {
    dur: 6,
    dist: 8,
    style: {
      position: 'absolute',
      right: '46%',
      top: '68%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      borderRadius: 999,
      border: '1px solid color-mix(in srgb, var(--color-azure) 20%, transparent)',
      background: 'color-mix(in srgb, var(--color-azure) 5%, transparent)',
      padding: '6px 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      width: 6,
      height: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "animate-ping",
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 999,
      background: 'color-mix(in srgb, var(--color-azure) 60%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'var(--color-azure)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: '0.02em',
      color: 'var(--color-azure-bright)'
    }
  }, "\u667A\u80FD\u5F15\u64CE\u5206\u6790\u4E2D")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 10,
      ...container,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '42%',
      minWidth: 480
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    y: 22,
    delay: 0.1,
    duration: 0.9
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 28,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      borderRadius: 999,
      border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)',
      background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
      padding: '6px 14px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles",
    size: 14,
    style: {
      color: 'var(--color-champagne)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrowStyle,
      fontSize: 12,
      color: 'var(--color-bone-soft)'
    }
  }, "\u8BA9\u65F6\u5C1A\u5224\u65AD\u6210\u4E3A\u53EF\u9A8C\u8BC1\u7684\u6570\u636E\u51B3\u7B56"))), /*#__PURE__*/React.createElement(Reveal, {
    y: 22,
    delay: 0.24,
    duration: 0.9
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: '4.25rem',
      fontWeight: 700,
      lineHeight: 1.12,
      letterSpacing: '-0.025em',
      color: 'var(--color-bone)',
      textWrap: 'balance'
    }
  }, "\u8BA9\u8D8B\u52BF\u6709\u5E8F\uFF0C", /*#__PURE__*/React.createElement("br", null), "\u8BA9\u5F00\u53D1\u6709\u636E")), /*#__PURE__*/React.createElement(Reveal, {
    y: 22,
    delay: 0.4,
    duration: 0.9
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '28px 0 0',
      fontSize: 20,
      fontWeight: 300,
      lineHeight: 1.625,
      color: 'var(--color-bone-soft)'
    }
  }, "\u9762\u5411\u7EBA\u7EC7\u4EA7\u54C1\u5F00\u53D1\u7684", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 400,
      color: 'var(--color-bone)'
    }
  }, "DATA+BI+AI"), /*#__PURE__*/React.createElement("br", null), "\u667A\u80FD\u51B3\u7B56\u7CFB\u7EDF")), /*#__PURE__*/React.createElement(Reveal, {
    y: 22,
    delay: 0.52,
    duration: 0.9
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      maxWidth: 512,
      fontSize: 15,
      lineHeight: 1.625,
      color: 'var(--color-bone-dim)'
    }
  }, "\u4EE5\u6570\u636E\u667A\u80FD\u9A71\u52A8\u66F4\u7CBE\u51C6\u7684\u8D8B\u52BF\u5224\u65AD\uFF0C\u66F4\u9AD8\u6548\u7684\u4EA7\u54C1\u7814\u53D1", /*#__PURE__*/React.createElement("br", null), "\u4E0E\u66F4\u80DC\u4E00\u7B79\u7684\u63D0\u6848\u8868\u8FBE")), /*#__PURE__*/React.createElement(Reveal, {
    y: 22,
    delay: 0.66,
    duration: 0.9
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    icon: "arrow-right",
    onClick: onContact
  }, "\u9884\u7EA6\u6F14\u793A"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => document.getElementById('framework')?.scrollIntoView === undefined ? null : window.scrollTo({
      top: document.getElementById('framework').offsetTop,
      behavior: 'smooth'
    })
  }, "\u4E86\u89E3\u4EA7\u54C1"))))));
}
function SystemFramework() {
  const steps = [{
    icon: 'database',
    zh: '行业数据底座',
    en: 'Data Foundation',
    desc: '整合市场、品牌、材料、秀场、趋势等多源数据，构建高质量行业知识图谱。'
  }, {
    icon: 'box',
    zh: '分析与决策引擎',
    en: 'Decision Engine',
    desc: '多维建模与指标体系，洞察关联与机会，输出可验证的决策建议。'
  }, {
    icon: 'sparkles',
    zh: 'AI 洞察工具',
    en: 'AI Insight',
    desc: 'AI 驱动的趋势解读、机会发现、概念生成与方案评估。'
  }, {
    icon: 'file-image',
    zh: '报告输出',
    en: 'Report Output',
    desc: '自动化生成图文报告与提案材料，支持高度自定义与品牌化。'
  }, {
    icon: 'layout-dashboard',
    zh: '业务应用前端',
    en: 'Business Application',
    desc: '角色化工作台与协作空间，让洞察落地到日常开发与提案流程。'
  }];
  return /*#__PURE__*/React.createElement("section", {
    id: "framework",
    style: {
      position: 'relative',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'none',
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      height: 420,
      background: 'linear-gradient(to bottom, rgb(var(--hero-base)) 0%, rgb(var(--hero-base) / 0.55) 30%, rgb(var(--hero-base) / 0.18) 60%, transparent 100%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'none',
      position: 'absolute',
      right: 0,
      top: 0,
      height: 520,
      width: '60%',
      filter: 'blur(64px)',
      background: 'radial-gradient(ellipse at 75% 0%, rgba(56,189,248,0.16) 0%, rgba(56,189,248,0.05) 38%, transparent 70%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "bg-grid",
    style: {
      pointerEvents: 'none',
      position: 'absolute',
      inset: 0,
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...container
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Solution \xB7 \u89E3\u51B3\u65B9\u6848",
    title: "\u4ECE\u590D\u6742\u5230\u6E05\u6670\uFF0C\u8BA9\u51B3\u7B56\u66F4\u6709\u65B9\u5411",
    copy: "\u6574\u5408\u591A\u7EF4\u6570\u636E\u4E0E\u884C\u4E1A\u77E5\u8BC6\uFF0C\u7ED3\u5408 AI \u6D1E\u5BDF\u4E0E\u5206\u6790\uFF0C\u4E3A\u4EA7\u54C1\u5F00\u53D1\u4E0E\u5BA2\u6237\u63D0\u6848\u63D0\u4F9B\u53EF\u9760\u7684\u51B3\u7B56\u4F9D\u636E\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      display: 'flex',
      alignItems: 'stretch',
      gap: 16
    }
  }, steps.map((step, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: step.en
  }, /*#__PURE__*/React.createElement(Reveal, {
    y: 28,
    delay: i * 0.1,
    duration: 0.6,
    style: {
      flex: 1,
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel glow-blue glow-blue-sm fm-lift",
    style: {
      position: 'relative',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      gap: 16,
      overflow: 'hidden',
      borderRadius: '1rem',
      padding: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 20,
      top: 20,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 14,
      color: 'color-mix(in srgb, var(--color-bone-dim) 50%, transparent)'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      width: 48,
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)',
      background: 'color-mix(in srgb, var(--color-bone) 3%, transparent)',
      color: 'var(--color-azure)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: step.icon,
    size: 20,
    strokeWidth: 1.5
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: 'var(--color-bone)'
    }
  }, step.zh), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 13,
      letterSpacing: '0.02em',
      color: 'var(--color-bone-dim)'
    }
  }, step.en)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 13,
      lineHeight: 1.625,
      color: 'var(--color-bone-dim)'
    }
  }, step.desc))), i < steps.length - 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexShrink: 0,
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--color-mist-dark)',
      padding: '0 4px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 20,
    strokeWidth: 1.5
  })))))));
}
function BusinessScenarios({
  theme
}) {
  const scenarios = [{
    img: 'trend-research',
    title: '趋势研究与方向规划',
    desc: '识别全球趋势与文化信号，预测风向，明确产品开发方向。'
  }, {
    img: 'product-planning',
    title: '产品企划与系列开发',
    desc: 'AI 辅助企划与款式组合，智能推荐材料与色彩，提升开发效率。'
  }, {
    img: 'material-innovation',
    title: '材料创新与应用',
    desc: '基于性能、成本与可持续性评估，识别更优材料解决方案。'
  }, {
    img: 'client-proposal',
    title: '客户提案与沟通',
    desc: '生成专业提案与可视化内容，提升沟通效率与客户信任。'
  }];
  const src = img => `../../assets/scenarios/${img}${theme === 'light' ? '-light' : ''}.svg`;
  return /*#__PURE__*/React.createElement("section", {
    id: "scenarios",
    style: {
      position: 'relative',
      borderTop: '1px solid color-mix(in srgb, var(--color-bone) 6%, transparent)',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-grid",
    style: {
      pointerEvents: 'none',
      position: 'absolute',
      inset: 0,
      opacity: 0.2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...container
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    y: 16
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      height: 1,
      width: 24,
      background: 'color-mix(in srgb, var(--color-azure) 50%, transparent)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrowStyle,
      color: 'var(--color-azure)'
    }
  }, "Scenarios \xB7 \u4E1A\u52A1\u573A\u666F"))), /*#__PURE__*/React.createElement(Reveal, {
    y: 22,
    delay: 0.06
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '24px 0 0',
      fontSize: '2.9rem',
      fontWeight: 700,
      lineHeight: 1.15,
      letterSpacing: '-0.025em',
      color: 'var(--color-bone)',
      textWrap: 'balance'
    }
  }, "\u9762\u5411\u65F6\u5C1A\u4EA7\u4E1A", /*#__PURE__*/React.createElement("br", null), "\u6838\u5FC3\u573A\u666F")), /*#__PURE__*/React.createElement(Reveal, {
    y: 22,
    delay: 0.12
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px 0 0',
      maxWidth: 384,
      fontSize: 15,
      lineHeight: 1.625,
      color: 'var(--color-bone-dim)'
    }
  }, "\u8986\u76D6\u4EA7\u54C1\u5F00\u53D1\u5168\u6D41\u7A0B\uFF0C\u52A9\u529B\u56E2\u961F\u66F4\u5FEB\u3001\u66F4\u51C6\u3001\u66F4\u6709\u4F9D\u636E\u5730\u505A\u51FA\u51B3\u7B56\u3002"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16
    }
  }, scenarios.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.title,
    y: 28,
    delay: i * 0.1,
    duration: 0.65,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel glow-blue glow-blue-sm fm-lift",
    style: {
      position: 'relative',
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      overflow: 'hidden',
      borderRadius: '1rem',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      overflow: 'hidden',
      borderRadius: 12,
      border: '1px solid color-mix(in srgb, var(--color-bone) 7%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src(s.img),
    alt: s.title,
    className: "fm-zoom",
    style: {
      aspectRatio: '4/3',
      width: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to top, color-mix(in srgb, var(--color-ink-950) 70%, transparent), transparent 50%)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 12,
      top: 12,
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 14,
      color: 'color-mix(in srgb, var(--color-bone-soft) 70%, transparent)'
    }
  }, "0", i + 1)), /*#__PURE__*/React.createElement("h3", {
    style: {
      position: 'relative',
      zIndex: 1,
      margin: '16px 4px 0',
      fontSize: 15,
      fontWeight: 600,
      letterSpacing: '-0.01em',
      color: 'var(--color-bone)'
    }
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: {
      position: 'relative',
      zIndex: 1,
      margin: '6px 4px 4px',
      fontSize: 13,
      lineHeight: 1.625,
      color: 'var(--color-bone-dim)'
    }
  }, s.desc))))))));
}
function FeatureMatrix() {
  const cards = [{
    eyebrow: '智能试衣',
    title: '不打样，先看效果',
    desc: '选定模特、搭配上下装，AI 即时生成试穿效果，免打样快速验证款式与搭配，让选款更快、更直观。',
    Mock: window.TryOnMock
  }, {
    eyebrow: 'AI 助手',
    title: '把分析师，装进对话框',
    desc: '用自然语言追问趋势、材料与竞品，AI 基于平台数据即时作答——复杂分析，一句话直达。',
    Mock: window.ChatMock
  }, {
    eyebrow: '智能报告',
    title: '一键从洞察到提案',
    desc: '自动将分析结果整理为图文提案，一键生成导出 PPT——让团队把时间花在判断上，而不是排版上。',
    Mock: window.ReportMock
  }];
  const DashMock = window.DashboardMock;
  return /*#__PURE__*/React.createElement("section", {
    id: "features",
    style: {
      position: 'relative',
      borderTop: '1px solid color-mix(in srgb, var(--color-bone) 6%, transparent)',
      padding: '72px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      ...container
    }
  }, /*#__PURE__*/React.createElement(SectionHeading, {
    eyebrow: "Products \xB7 \u4EA7\u54C1\u80FD\u529B",
    title: "\u6570\u636E\u667A\u80FD\u5185\u6838\uFF0C\u4E09\u5927AI\u5E94\u7528",
    copy: "\u591A\u6A21\u5757\u534F\u540C\u2014\u2014\u6570\u636E\u667A\u80FD\u5185\u6838\u4E0E\u667A\u80FD\u8BD5\u8863\u3001\u95EE\u7B54\u3001\u63D0\u6848\u4E09\u5927\u5E94\u7528\u8BA9\u6D1E\u5BDF\u4E00\u8DEF\u843D\u5230\u4E1A\u52A1\u3002"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 80,
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    y: 30,
    duration: 0.7,
    style: {
      gridColumn: 'span 3'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel glow-blue fm-lift",
    style: {
      position: 'relative',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 32,
      overflow: 'hidden',
      borderRadius: '1.5rem',
      padding: 36
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-grid-fine",
    style: {
      pointerEvents: 'none',
      position: 'absolute',
      inset: 0,
      opacity: 0.4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrowStyle,
      color: 'var(--color-azure)'
    }
  }, "\u54C1\u724C\u770B\u677F / \u79C0\u573A / \u6570\u636E\u5206\u6790"), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '16px 0 0',
      fontSize: 30,
      fontWeight: 700,
      lineHeight: 1.375,
      letterSpacing: '-0.02em',
      color: 'var(--color-bone)',
      textWrap: 'balance'
    }
  }, "\u4E00\u4F53\u5316\u770B\u677F\uFF0C\u6D1E\u5BDF\u5168\u5C40"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '16px 0 0',
      maxWidth: 448,
      fontSize: 15,
      lineHeight: 1.625,
      color: 'var(--color-bone-dim)'
    }
  }, "\u6301\u7EED\u8FFD\u8E2A\u54C1\u724C\u4E0A\u65B0\u4E0E\u5168\u7403\u79C0\u573A\uFF0C\u4ECE\u54C1\u7C7B\u3001\u4EBA\u7FA4\u3001\u8272\u5F69\u3001\u6750\u6599\u5230\u808C\u7406\u591A\u7EF4\u62C6\u89E3\uFF0C\u8BA9\u6A21\u7CCA\u7684\u300C\u5E02\u573A\u611F\u89C9\u300D\u53D8\u6210\u7ED3\u6784\u5316\u3001\u53EF\u9A8C\u8BC1\u7684\u6D1E\u5BDF\u3002")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(DashMock, null)))), cards.map((card, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: card.eyebrow,
    y: 30,
    delay: (i + 1) * 0.1,
    duration: 0.7,
    style: {
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel glow-blue fm-lift",
    style: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      gap: 20,
      overflow: 'hidden',
      borderRadius: '1.5rem',
      padding: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrowStyle,
      color: 'var(--color-azure)'
    }
  }, card.eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '12px 0 0',
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--color-bone)'
    }
  }, card.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '12px 0 0',
      fontSize: 14,
      lineHeight: 1.625,
      color: 'var(--color-bone-dim)'
    }
  }, card.desc)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(card.Mock, null))))))));
}
function CtaFooter({
  onContact
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("section", {
    id: "demo",
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderTop: '1px solid color-mix(in srgb, var(--color-bone) 6%, transparent)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-grid",
    style: {
      pointerEvents: 'none',
      position: 'absolute',
      inset: 0,
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'none',
      position: 'absolute',
      left: '50%',
      top: 0,
      width: 640,
      height: 640,
      transform: 'translate(-50%,-33%)',
      borderRadius: 999,
      opacity: 0.5,
      filter: 'blur(64px)',
      background: 'radial-gradient(circle, rgba(87,184,212,0.16), transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      pointerEvents: 'none',
      position: 'absolute',
      bottom: 0,
      left: '25%',
      width: 416,
      height: 416,
      borderRadius: 999,
      opacity: 0.4,
      filter: 'blur(64px)',
      background: 'radial-gradient(circle, rgba(201,173,124,0.12), transparent 65%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      margin: '0 auto',
      maxWidth: 896,
      padding: '80px 24px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Reveal, {
    y: 16
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrowStyle,
      color: 'var(--color-azure)'
    }
  }, "Let's talk \xB7 \u9884\u7EA6\u6F14\u793A")), /*#__PURE__*/React.createElement(Reveal, {
    y: 24,
    delay: 0.08
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '24px auto 0',
      maxWidth: 768,
      fontSize: '3rem',
      fontWeight: 700,
      lineHeight: 1.18,
      letterSpacing: '-0.025em',
      color: 'var(--color-bone)',
      textWrap: 'balance'
    }
  }, "\u4E0E\u77E5\u5E8F\u4E00\u8D77\uFF0C\u8BA9\u6BCF\u4E00\u6B21\u51B3\u7B56", /*#__PURE__*/React.createElement("br", null), "\u66F4\u6709\u636E\u53EF\u5FAA")), /*#__PURE__*/React.createElement(Reveal, {
    y: 24,
    delay: 0.16
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '24px auto 0',
      maxWidth: 576,
      fontSize: 15,
      lineHeight: 1.625,
      color: 'var(--color-bone-dim)'
    }
  }, "\u9884\u7EA6\u4E00\u6B21\u4EA7\u54C1\u6F14\u793A\uFF0C\u770B\u89C1\u6570\u636E\u667A\u80FD\u5982\u4F55\u878D\u5165\u4F60\u7684\u4EA7\u54C1\u5F00\u53D1\u4E0E\u63D0\u6848\u6D41\u7A0B\u3002")), /*#__PURE__*/React.createElement(Reveal, {
    y: 24,
    delay: 0.24
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    icon: "arrow-right",
    onClick: onContact
  }, "\u9884\u7EA6\u4EA7\u54C1\u6F14\u793A"))))), /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid color-mix(in srgb, var(--color-bone) 6%, transparent)',
      background: 'var(--color-ink-950)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...container,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8,
      padding: '20px 40px',
      fontSize: 12,
      color: 'var(--color-mist)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 \u77E5\u5E8F FabricMind\uFF0C\u4FDD\u7559\u6240\u6709\u6743\u5229."), /*#__PURE__*/React.createElement("a", {
    href: "https://beian.miit.gov.cn",
    target: "_blank",
    rel: "noopener noreferrer",
    style: {
      color: 'var(--color-mist)',
      textDecoration: 'none'
    }
  }, "\u4EACICP\u590710009259\u53F7"))));
}
function ContactDialog({
  open,
  onClose
}) {
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 24px'
    },
    role: "dialog",
    "aria-modal": "true"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'color-mix(in srgb, var(--color-ink-950) 80%, transparent)',
      backdropFilter: 'blur(4px)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "glass fm-dialog-in",
    style: {
      position: 'relative',
      zIndex: 10,
      width: '100%',
      maxWidth: 384,
      borderRadius: '1rem',
      border: '1px solid color-mix(in srgb, var(--color-bone) 10%, transparent)',
      padding: 32,
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "\u5173\u95ED",
    onClick: onClose,
    style: {
      position: 'absolute',
      right: 16,
      top: 16,
      borderRadius: 999,
      border: 'none',
      background: 'transparent',
      padding: 6,
      color: 'var(--color-bone-dim)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 16
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 20,
      fontWeight: 600,
      letterSpacing: '-0.02em',
      color: 'var(--color-bone)'
    }
  }, "\u8054\u7CFB\u6211\u4EEC"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '8px 0 0',
      fontSize: 13,
      lineHeight: 1.625,
      color: 'var(--color-bone-dim)'
    }
  }, "\u626B\u63CF\u4E0B\u65B9\u4E8C\u7EF4\u7801\uFF0C\u6DFB\u52A0\u5FAE\u4FE1\u9884\u7EA6\u4EA7\u54C1\u6F14\u793A"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 12,
      background: '#ffffff',
      padding: 12
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/wechat-qr.png",
    alt: "\u77E5\u5E8F FabricMind \u5FAE\u4FE1\u4E8C\u7EF4\u7801",
    style: {
      width: 176,
      height: 176,
      borderRadius: 8,
      objectFit: 'cover',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '20px 0 0',
      fontSize: 12,
      letterSpacing: '0.02em',
      color: 'var(--color-mist)'
    }
  }, "\u5FAE\u4FE1\u626B\u4E00\u626B\uFF0C\u7ACB\u5373\u8054\u7CFB")));
}
function App() {
  const {
    theme,
    toggle
  } = useTheme();
  const [contactOpen, setContactOpen] = React.useState(false);
  const openContact = () => setContactOpen(true);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minHeight: '100vh',
      color: 'var(--color-bone)'
    }
  }, /*#__PURE__*/React.createElement(SiteNav, {
    onContact: openContact,
    theme: theme,
    onToggleTheme: toggle
  }), /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(HeroSection, {
    onContact: openContact,
    theme: theme
  }), /*#__PURE__*/React.createElement(SystemFramework, null), /*#__PURE__*/React.createElement(BusinessScenarios, {
    theme: theme
  }), /*#__PURE__*/React.createElement(FeatureMatrix, null), /*#__PURE__*/React.createElement(CtaFooter, {
    onContact: openContact
  })), /*#__PURE__*/React.createElement(ContactDialog, {
    open: contactOpen,
    onClose: () => setContactOpen(false)
  }));
}
Object.assign(window, {
  App
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/landing/sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.BrandMark = __ds_scope.BrandMark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.CountUp = __ds_scope.CountUp;

__ds_ns.Reveal = __ds_scope.Reveal;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.AlphabetIndex = __ds_scope.AlphabetIndex;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.CheckboxGroup = __ds_scope.CheckboxGroup;

__ds_ns.Collapse = __ds_scope.Collapse;

__ds_ns.DataTable = __ds_scope.DataTable;

__ds_ns.DateRangeEditor = __ds_scope.DateRangeEditor;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.DropdownMenu = __ds_scope.DropdownMenu;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Fab = __ds_scope.Fab;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.TextArea = __ds_scope.TextArea;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.FilterChips = __ds_scope.FilterChips;

__ds_ns.Listbox = __ds_scope.Listbox;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Panel = __ds_scope.Panel;

__ds_ns.Popover = __ds_scope.Popover;

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.ThumbnailStrip = __ds_scope.ThumbnailStrip;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.RadioGroup = __ds_scope.RadioGroup;

__ds_ns.Sparkline = __ds_scope.Sparkline;

__ds_ns.SparkBars = __ds_scope.SparkBars;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.StatusDot = __ds_scope.StatusDot;

})();
