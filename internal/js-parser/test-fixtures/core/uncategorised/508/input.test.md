# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 508`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "hello"
				loc: SourceLocation core/uncategorised/508/input.js 1:9-1:14 (hello)
			}
			body: JSBlockStatement {
				body: [
					JSVariableDeclarationStatement {
						declaration: JSVariableDeclaration {
							kind: "var"
							declarations: [
								JSVariableDeclarator {
									id: JSBindingIdentifier {
										name: "protected"
										loc: SourceLocation core/uncategorised/508/input.js 1:37-1:46 (protected)
									}
									loc: SourceLocation core/uncategorised/508/input.js 1:37-1:46
								}
							]
							loc: SourceLocation core/uncategorised/508/input.js 1:33-1:47
						}
						loc: SourceLocation core/uncategorised/508/input.js 1:33-1:47
					}
				]
				directives: [
					JSDirective {
						value: "use strict"
						loc: SourceLocation core/uncategorised/508/input.js 1:19-1:32
					}
				]
				loc: SourceLocation core/uncategorised/508/input.js 1:17-1:49
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: true
				params: []
				loc: SourceLocation core/uncategorised/508/input.js 1:14-1:16
			}
			loc: SourceLocation core/uncategorised/508/input.js 1:0-1:49
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {advice: [], category: ["parse"], categoryValue: "js", message: ["protected", RAW_MARKUP {value: " is a reserved word"}]}
			location: {
				language: "js"
				path: UIDPath<core/uncategorised/508/input.js>
				end: Position 1:46
				start: Position 1:37
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<core/uncategorised/508/input.js>
	loc: SourceLocation core/uncategorised/508/input.js 1:0-1:49
}
```

### `diagnostics`

```

 core/uncategorised/508/input.js:1:37 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ protected is a reserved word

    function hello() { "use strict"; var protected; }
                                         ^^^^^^^^^


```
