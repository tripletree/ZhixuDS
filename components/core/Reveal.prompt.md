Motion primitives. Reveal = scroll-triggered fade + rise (stagger siblings by 0.06–0.12s). CountUp = eased number counter for stats.

```jsx
<Reveal y={16}><span className="eyebrow">Let's talk · 预约演示</span></Reveal>
<Reveal y={24} delay={0.08}><h2>与知序一起</h2></Reveal>
<span style={{fontSize:36,fontWeight:600}}><CountUp to={78} /></span>
```

Both honor prefers-reduced-motion (jump to final state).
