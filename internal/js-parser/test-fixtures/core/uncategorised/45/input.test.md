# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 45`

### `ast`

```javascript
JSRoot {
	body: [
		JSExpressionStatement {
			expression: JSAssignmentExpression {
				operator: "="
				left: JSAssignmentIdentifier {
					name: "x"
					loc: SourceLocation core/uncategorised/45/input.js 1:0-1:1 (x)
				}
				right: JSObjectExpression {
					properties: [
						JSObjectProperty {
							key: JSStaticPropertyKey {
								value: JSIdentifier {
									name: "set"
									loc: SourceLocation core/uncategorised/45/input.js 1:6-1:9 (set)
								}
								loc: SourceLocation core/uncategorised/45/input.js 1:6-1:9
							}
							value: JSNumericLiteral {
								value: 43
								loc: SourceLocation core/uncategorised/45/input.js 1:11-1:13
							}
							loc: SourceLocation core/uncategorised/45/input.js 1:6-1:13
						}
					]
					loc: SourceLocation core/uncategorised/45/input.js 1:4-1:15
				}
				loc: SourceLocation core/uncategorised/45/input.js 1:0-1:15
			}
			loc: SourceLocation core/uncategorised/45/input.js 1:0-1:15
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<core/uncategorised/45/input.js>
	loc: SourceLocation core/uncategorised/45/input.js 1:0-1:15
}
```

### `diagnostics`

```

```
