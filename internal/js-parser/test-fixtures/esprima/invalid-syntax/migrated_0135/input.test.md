# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0135`

### `ast`

```javascript
JSRoot {
	body: [
		JSTryStatement {
			block: JSBlockStatement {
				body: []
				directives: []
				loc: SourceLocation esprima/invalid-syntax/migrated_0135/input.js 1:4-1:6
			}
			handler: JSCatchClause {
				body: JSBlockStatement {
					body: [
						JSExpressionStatement {
							expression: JSReferenceIdentifier {
								name: "INVALID_PLACEHOLDER"
								loc: SourceLocation esprima/invalid-syntax/migrated_0135/input.js 1:21-1:21
							}
							loc: SourceLocation esprima/invalid-syntax/migrated_0135/input.js 1:20-1:22
						}
						JSExpressionStatement {
							expression: JSReferenceIdentifier {
								name: "INVALID_PLACEHOLDER"
								loc: SourceLocation esprima/invalid-syntax/migrated_0135/input.js 1:22-1:23
							}
							loc: SourceLocation esprima/invalid-syntax/migrated_0135/input.js 1:22-1:23
						}
						JSBlockStatement {
							body: []
							directives: []
							loc: SourceLocation esprima/invalid-syntax/migrated_0135/input.js 1:24-1:26
						}
					]
					directives: []
					loc: SourceLocation esprima/invalid-syntax/migrated_0135/input.js 1:20-1:26
				}
				param: JSBindingIdentifier {
					name: "answer"
					loc: SourceLocation esprima/invalid-syntax/migrated_0135/input.js 1:14-1:20 (answer)
				}
				loc: SourceLocation esprima/invalid-syntax/migrated_0135/input.js 1:7-1:26
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0135/input.js 1:0-1:26
		}
	]
	comments: []
	corrupt: true
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: [
					log {
						category: "info"
						text: [RAW_MARKUP {value: "We expected to find the closing character <emphasis>"}, ")", RAW_MARKUP {value: "</emphasis> here"}]
					}
					frame {
						location: SourceLocation esprima/invalid-syntax/migrated_0135/input.js 1:20-1:20
					}
				]
				category: ["parse"]
				categoryValue: "js"
				message: [RAW_MARKUP {value: "Unclosed <emphasis>"}, "catch clause param", RAW_MARKUP {value: "</emphasis>"}]
			}
			location: {
				language: "js"
				path: UIDPath<esprima/invalid-syntax/migrated_0135/input.js>
				end: Position 1:13
				start: Position 1:13
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/invalid-syntax/migrated_0135/input.js>
	loc: SourceLocation esprima/invalid-syntax/migrated_0135/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0135/input.js:1:13 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Unclosed catch clause param

    try {} catch (answer()) {}
                 ^

  ℹ We expected to find the closing character ) here

    try {} catch (answer()) {}
                        ^


```
