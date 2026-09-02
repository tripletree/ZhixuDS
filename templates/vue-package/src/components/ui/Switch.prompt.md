On/off toggle for settings rows and toolbar options: pill track (`md` 36×20, `sm` 28×16), hairline bone/20 border + control surface when off, solid azure when on. The knob is mist when off and ink-950 when on — the same token as the Checkbox tick, so it inverts to white in the light theme and keeps contrast on azure both ways. Azure focus ring; native checkbox underneath exposed as `role="switch"`.

`v-model` is a boolean. Label goes in the default slot; `description` adds a mist second line; `label-first` flips the layout for right-aligned settings lists.

```vue
<Switch v-model="realtime">实时同步</Switch>
<Switch v-model="alerts" size="sm" description="机会指数超过阈值时推送到企业微信">趋势预警</Switch>
<Switch v-model="beta" label-first style="width: 100%">开启 AI 解读（Beta）</Switch>
<Switch :model-value="true" disabled>已锁定</Switch>
```

Use Switch for an immediate on/off with no submit step (feature flags, view options, notification channels). Use Checkbox inside forms and filter panels where the choice is committed together with other fields. Never a Switch for a yes/no question in a wizard — that is a RadioGroup.
