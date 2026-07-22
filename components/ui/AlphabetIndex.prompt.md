A–Z jump rail for wide pickers (brand selection dialogs): 11px letters in 22px mini-pills, active letter azure on azure 12%, letters without content dimmed via `available`.

```jsx
<AlphabetIndex value={letter} onChange={jumpTo} available={['#','A','B','C','L','M','R']} />
```

Sits between the Dialog title row and a `CheckboxGroup columns={4}` grid — the screenshot-2 brand-picker pattern. `onChange` typically scrolls the grid to that letter's section.
