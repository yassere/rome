# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0248`

### `ast`

```javascript
JSRoot {
	body: [
		JSLabeledStatement {
			body: JSLabeledStatement {
				body: JSExpressionStatement {
					expression: JSNumericLiteral {
						value: 42
						loc: SourceLocation esprima/invalid-syntax/migrated_0248/input.js 1:22-1:24
					}
					loc: SourceLocation esprima/invalid-syntax/migrated_0248/input.js 1:22-1:25
				}
				label: JSIdentifier {
					name: "__proto__"
					loc: SourceLocation esprima/invalid-syntax/migrated_0248/input.js 1:11-1:20 (__proto__)
				}
				loc: SourceLocation esprima/invalid-syntax/migrated_0248/input.js 1:11-1:25
			}
			label: JSIdentifier {
				name: "__proto__"
				loc: SourceLocation esprima/invalid-syntax/migrated_0248/input.js 1:0-1:9 (__proto__)
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0248/input.js 1:0-1:25
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: [
					log {
						category: "info"
						text: RAW_MARKUP {value: "Defined already here"}
					}
					frame {
						location: SourceLocation esprima/invalid-syntax/migrated_0248/input.js 1:0-1:9 (__proto__)
					}
				]
				category: ["parse"]
				categoryValue: "js"
				message: [RAW_MARKUP {value: "Label <emphasis>"}, "__proto__", RAW_MARKUP {value: "</emphasis> is already declared"}]
			}
			location: {
				language: "js"
				path: UIDPath<esprima/invalid-syntax/migrated_0248/input.js>
				end: Position 1:20
				start: Position 1:11
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/invalid-syntax/migrated_0248/input.js>
	loc: SourceLocation esprima/invalid-syntax/migrated_0248/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0248/input.js:1:11 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Label __proto__ is already declared

    __proto__: __proto__: 42;
               ^^^^^^^^^

  ℹ Defined already here

    __proto__: __proto__: 42;
    ^^^^^^^^^


```
