# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 303`

### `ast`

```javascript
JSRoot {
	body: [
		JSBlockStatement {
			body: [
				JSVariableDeclarationStatement {
					declaration: JSVariableDeclaration {
						kind: "var"
						declarations: [
							JSVariableDeclarator {
								id: JSBindingIdentifier {
									name: "x"
									loc: SourceLocation core/uncategorised/303/input.js 1:6-1:7 (x)
								}
								init: JSNumericLiteral {
									value: 14
									loc: SourceLocation core/uncategorised/303/input.js 1:10-1:12
								}
								loc: SourceLocation core/uncategorised/303/input.js 1:6-1:12
							}
							JSVariableDeclarator {
								id: JSBindingIdentifier {
									name: "y"
									loc: SourceLocation core/uncategorised/303/input.js 1:14-1:15 (y)
								}
								init: JSNumericLiteral {
									value: 3
									loc: SourceLocation core/uncategorised/303/input.js 1:18-1:19
								}
								loc: SourceLocation core/uncategorised/303/input.js 1:14-1:19
							}
						]
						loc: SourceLocation core/uncategorised/303/input.js 1:2-1:19
					}
					loc: SourceLocation core/uncategorised/303/input.js 1:2-1:19
				}
				JSExpressionStatement {
					expression: JSReferenceIdentifier {
						name: "z"
						loc: SourceLocation core/uncategorised/303/input.js 2:0-2:1 (z)
					}
					loc: SourceLocation core/uncategorised/303/input.js 2:0-2:2
				}
			]
			directives: []
			loc: SourceLocation core/uncategorised/303/input.js 1:0-2:4
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: true
	sourceType: "script"
	syntax: []
	path: UIDPath<core/uncategorised/303/input.js>
	loc: SourceLocation core/uncategorised/303/input.js 1:0-2:4
}
```

### `diagnostics`

```

```
