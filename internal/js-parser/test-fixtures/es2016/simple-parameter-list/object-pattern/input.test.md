# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `es2016 > simple-parameter-list > object-pattern`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "a"
				loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 1:9-1:10 (a)
			}
			body: JSBlockStatement {
				body: []
				directives: [
					JSDirective {
						value: "use strict"
						loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 2:2-2:15
					}
				]
				loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 1:33-3:1
			}
			head: JSFunctionHead {
				async: false
				generator: false
				hasHoistedVars: false
				params: [
					JSBindingObjectPattern {
						properties: [
							JSBindingObjectPatternProperty {
								key: JSStaticPropertyKey {
									value: JSIdentifier {
										name: "option1"
										loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 1:13-1:20 (option1)
									}
									loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 1:13-1:20
								}
								value: JSBindingIdentifier {
									name: "option1"
									loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 1:13-1:20 (option1)
								}
								loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 1:13-1:20
							}
							JSBindingObjectPatternProperty {
								key: JSStaticPropertyKey {
									value: JSIdentifier {
										name: "option2"
										loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 1:22-1:29 (option2)
									}
									loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 1:22-1:29
								}
								value: JSBindingIdentifier {
									name: "option2"
									loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 1:22-1:29 (option2)
								}
								loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 1:22-1:29
							}
						]
						meta: JSPatternMeta {
							loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 1:11-1:31
						}
						loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 1:11-1:31
					}
				]
				loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 1:10-1:32
			}
			loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 1:0-3:1
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
				message: RAW_MARKUP {value: "Illegal 'use strict' directive in function with non-simple parameter list"}
			}
			location: {
				language: "js"
				path: UIDPath<es2016/simple-parameter-list/object-pattern/input.js>
				end: Position 2:15
				start: Position 2:2
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<es2016/simple-parameter-list/object-pattern/input.js>
	loc: SourceLocation es2016/simple-parameter-list/object-pattern/input.js 1:0-4:0
}
```

### `diagnostics`

```

 es2016/simple-parameter-list/object-pattern/input.js:2:2 parse(js) ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Illegal 'use strict' directive in function with non-simple parameter list

    1 │ function a({ option1, option2 }) {
  > 2 │   "use strict";
      │   ^^^^^^^^^^^^^
    3 │ }


```
