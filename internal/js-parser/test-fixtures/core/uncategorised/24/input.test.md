# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 24`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSAssignmentExpression {
				operator: "="
				left: JSAssignmentIdentifier {
					name: "x"
					loc: SourceLocation core/uncategorised/24/input.js 1:0-1:1 (x)
				}
				right: JSObjectExpression {
					properties: [
						JSObjectProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "true"
									loc: SourceLocation core/uncategorised/24/input.js 1:6-1:10 (true)
								}
								loc: SourceLocation core/uncategorised/24/input.js 1:6-1:10
							}
							value: JSNumericLiteral {
								value: 42
								loc: SourceLocation core/uncategorised/24/input.js 1:12-1:14
							}
							loc: SourceLocation core/uncategorised/24/input.js 1:6-1:14
						}
					]
					loc: SourceLocation core/uncategorised/24/input.js 1:4-1:16
				}
				loc: SourceLocation core/uncategorised/24/input.js 1:0-1:16
			}
			loc: SourceLocation core/uncategorised/24/input.js 1:0-1:16
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<core/uncategorised/24/input.js>
	loc: SourceLocation core/uncategorised/24/input.js 1:0-1:16
}
```

### `diagnostics`

```

```
