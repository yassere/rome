# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > categorized > malformed-switch`

### `ast`

```javascript
JSRoot {
	body: [
		JSSwitchStatement {
			cases: []
			discriminant: JSReferenceIdentifier {
				name: "x"
				loc: SourceLocation core/categorized/malformed-switch/input.js 1:8-1:9 (x)
			}
			loc: SourceLocation core/categorized/malformed-switch/input.js 1:0-3:1
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "js"
				message: RAW_MARKUP {value: "Statement outside of a case or default block"}
			}
			location: {
				language: "js"
				path: UIDPath<core/categorized/malformed-switch/input.js>
				end: Position 2:12
				start: Position 2:2
			}
		}
	]
	directives: []
	hasHoistedVars: true
	sourceType: "script"
	syntax: []
	path: UIDPath<core/categorized/malformed-switch/input.js>
	loc: SourceLocation core/categorized/malformed-switch/input.js 1:0-3:1
}
```

### `diagnostics`

```

 core/categorized/malformed-switch/input.js:2:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Statement outside of a case or default block

    1 │ switch (x) {
  > 2 │   var y = 5;
      │   ^^^^^^^^^^
    3 │ }


```
