# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `jsx-a11y/useKeyWithMouseEvents`

### `0`

```

 lint/jsx-a11y/useKeyWithMouseEvents/reject/1/file.tsx:1:5 lint/jsx-a11y/useKeyWithMouseEvents ━━━━━

  ✖ Pair the onMouseOver mouse event with the onFocus keyboard event.

    <div onMouseOver={ () => void 0 } />
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Actions triggered using mouse events should have corresponding keyboard events to account for
    keyboard-only navigation.


```

### `0: formatted`

```tsx
<div onMouseOver={() => void 0} />;

```

### `1`

```

 lint/jsx-a11y/useKeyWithMouseEvents/reject/2/file.tsx:1:5 lint/jsx-a11y/useKeyWithMouseEvents ━━━━━

  ✖ Pair the onMouseOut mouse event with the onBlur keyboard event.

    <div onMouseOut={ () => void 0 } />
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Actions triggered using mouse events should have corresponding keyboard events to account for
    keyboard-only navigation.


```

### `1: formatted`

```tsx
<div onMouseOut={() => void 0} />;

```

### `2`

```

 lint/jsx-a11y/useKeyWithMouseEvents/reject/3/file.tsx:1:5 lint/jsx-a11y/useKeyWithMouseEvents ━━━━━

  ✖ Pair the onMouseOver mouse event with the onFocus keyboard event.

    <div onMouseOver={ () => void 0 } >{props}</div>
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Actions triggered using mouse events should have corresponding keyboard events to account for
    keyboard-only navigation.


```

### `2: formatted`

```tsx
<div onMouseOver={() => void 0}>
	{props}
</div>;

```

### `3`

```

 lint/jsx-a11y/useKeyWithMouseEvents/reject/4/file.tsx:1:5 lint/jsx-a11y/useKeyWithMouseEvents ━━━━━

  ✖ Pair the onMouseOut mouse event with the onBlur keyboard event.

    <div onMouseOut={ () => void 0 } >{props}</div>
         ^^^^^^^^^^^^^^^^^^^^^^^^^^^

  ℹ Actions triggered using mouse events should have corresponding keyboard events to account for
    keyboard-only navigation.


```

### `3: formatted`

```tsx
<div onMouseOut={() => void 0}>
	{props}
</div>;

```

### `4`

```

```

### `4: formatted`

```tsx
<div onMouseOver={() => void 0} onFocus={() => void 0} />;

```

### `5`

```

```

### `5: formatted`

```tsx
<div onMouseOut={() => void 0} onBlur={() => void 0} />;

```

### `6`

```

```

### `6: formatted`

```tsx
<div onMouseOver={() => void 0} onFocus={() => void 0}>
	{props}
</div>;

```

### `7`

```

```

### `7: formatted`

```tsx
<div onMouseOut={() => void 0} onBlur={() => void 0}>
	{props}
</div>;

```

### `8`

```

```

### `8: formatted`

```tsx
<Div onMouseOut={() => void 0}>
	{props}
</Div>;

```
