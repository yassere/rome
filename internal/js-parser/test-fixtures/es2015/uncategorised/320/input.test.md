# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2015 > uncategorised > 320`

### `ast`

```javascript
JSRoot {
	body: [
		JSVariableDeclarationStatement {
			declaration: JSVariableDeclaration {
				kind: "let"
				declarations: [
					JSVariableDeclarator {
						id: JSBindingArrayPattern {
							elements: [
								JSBindingIdentifier {
									name: "x"
									meta: JSPatternMeta {
										loc: SourceLocation es2015/uncategorised/320/input.js 1:5-1:6
									}
									loc: SourceLocation es2015/uncategorised/320/input.js 1:5-1:6 (x)
								}
							]
							loc: SourceLocation es2015/uncategorised/320/input.js 1:4-1:8
						}
						init: JSArrayExpression {
							elements: [
								JSNumericLiteral {
									value: 1
									loc: SourceLocation es2015/uncategorised/320/input.js 1:12-1:13
								}
							]
							loc: SourceLocation es2015/uncategorised/320/input.js 1:11-1:14
						}
						loc: SourceLocation es2015/uncategorised/320/input.js 1:4-1:14
					}
				]
				loc: SourceLocation es2015/uncategorised/320/input.js 1:0-1:14
			}
			loc: SourceLocation es2015/uncategorised/320/input.js 1:0-1:14
		}
	]
	comments: []
	corrupt: false
	diagnostics: []
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2015/uncategorised/320/input.js>
	loc: SourceLocation es2015/uncategorised/320/input.js 1:0-1:14
}
```

### `diagnostics`

```

```
