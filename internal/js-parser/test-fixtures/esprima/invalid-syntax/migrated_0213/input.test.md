# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > invalid-syntax > migrated_0213`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "hello"
				loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:9-1:14 (hello)
			}
			body: JSBlockStatement {
				body: []
				directives: [
					JSDirective {
						value: "use strict"
						loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:27-1:40
					}
				]
				loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:26-1:41
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: [
					JSBindingIdentifier {
						name: "arguments"
						meta: JSPatternMeta {
							loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:15-1:24
						}
						loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:15-1:24 (arguments)
					}
				]
				loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:14-1:25
			}
			loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:0-1:41
		}
	]
	comments: []
	corrupt: false
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {advice: [], category: ["parse"], categoryValue: "js", message: ["arguments", RAW_MARKUP {value: " is a reserved word"}]}
			location: {
				language: "js"
				path: UIDPath<esprima/invalid-syntax/migrated_0213/input.js>
				end: Position 1:24
				start: Position 1:15
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/invalid-syntax/migrated_0213/input.js>
	loc: SourceLocation esprima/invalid-syntax/migrated_0213/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/invalid-syntax/migrated_0213/input.js:1:15 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ arguments is a reserved word

    function hello(arguments) {'use strict';}
                   ^^^^^^^^^


```
