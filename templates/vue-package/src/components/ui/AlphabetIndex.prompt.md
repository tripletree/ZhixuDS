A–Z jump rail for wide pickers (brand selection dialogs): 11px letters in 22px mini-pills, active letter azure on azure 12%, letters without content dimmed via `available`. `v-model` holds the active letter.

```vue
<AlphabetIndex v-model="letter" :available="['#', 'A', 'B', 'C', 'L', 'M', 'R']" />
```

Sits between the Dialog title row and a `CheckboxGroup :columns="4"` grid — the brand-picker pattern. Watch the model value to scroll the grid to that letter's section.
