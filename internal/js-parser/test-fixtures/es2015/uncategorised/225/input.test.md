# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 225`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "x"
				loc: SourceLocation es2015/uncategorised/225/input.js 1:0-1:1 (x)
			}
			loc: SourceLocation es2015/uncategorised/225/input.js 1:0-1:1
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "isnt"
				loc: SourceLocation es2015/uncategorised/225/input.js 2:1-2:5 (isnt)
			}
			loc: SourceLocation es2015/uncategorised/225/input.js 2:1-2:5
		}
		JSExpressionStatement {
			expression: JSReferenceIdentifier {
				name: "y"
				loc: SourceLocation es2015/uncategorised/225/input.js 2:6-2:7 (y)
			}
			loc: SourceLocation es2015/uncategorised/225/input.js 2:6-2:7
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
				message: RAW_MARKUP {value: "Expected a semicolon or a line terminator"}
			}
			location: {
				language: "js"
				path: UIDPath<es2015/uncategorised/225/input.js>
				end: Position 2:5
				start: Position 2:6
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2015/uncategorised/225/input.js>
	loc: SourceLocation es2015/uncategorised/225/input.js 1:0-2:7
}
```

### `diagnostics`

```

 es2015/uncategorised/225/input.js:2:6 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Expected a semicolon or a line terminator

    1 │ x·
  > 2 │  isnt y
      │       ^


```
