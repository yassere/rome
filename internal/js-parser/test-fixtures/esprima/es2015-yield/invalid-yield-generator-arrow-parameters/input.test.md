# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test internal/js-parser/index.test.ts --update-snapshots` to update.

## `esprima > es2015-yield > invalid-yield-generator-arrow-parameters`

### `ast`

```javascript
JSRoot {
	body: [
		JSFunctionDeclaration {
			id: JSBindingIdentifier {
				name: "g"
				loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js 1:10-1:11 (g)
			}
			body: JSBlockStatement {
				body: [
					JSExpressionStatement {
						expression: JSArrowFunctionExpression {
							body: JSNumericLiteral {
								value: 42
								loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js 1:35-1:37
							}
							head: JSFunctionHead {
								async: false
								hasHoistedVars: false
								params: [
									JSBindingIdentifier {
										name: "a"
										loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js 1:16-1:17 (a)
									}
									JSBindingIdentifier {
										name: "b"
										loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js 1:19-1:20 (b)
									}
									JSBindingIdentifier {
										name: "c"
										loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js 1:22-1:23 (c)
									}
									JSBindingIdentifier {
										name: "INVALID_PLACEHOLDER"
										loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js 1:35-1:34
									}
								]
								loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js 1:15-1:34
							}
							loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js 1:15-1:37
						}
						loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js 1:15-1:37
					}
				]
				directives: []
				loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js 1:13-1:39
			}
			head: JSFunctionHead {
				async: false
				generator: true
				hasHoistedVars: false
				params: []
				loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js 1:11-1:13
			}
			loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js 1:0-1:39
		}
	]
	comments: []
	corrupt: true
	diagnostics: [
		{
			origins: [{entity: "ParserCore<js>"}]
			description: {
				advice: []
				category: ["parse"]
				categoryValue: "js"
				message: RAW_MARKUP {value: "yield is not allowed in generator parameters"}
			}
			location: {
				language: "js"
				path: UIDPath<esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js>
				end: Position 1:30
				start: Position 1:30
			}
		}
	]
	directives: []
	hasHoistedVars: false
	sourceType: "script"
	syntax: []
	path: UIDPath<esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js>
	loc: SourceLocation esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js 1:0-2:0
}
```

### `diagnostics`

```

 esprima/es2015-yield/invalid-yield-generator-arrow-parameters/input.js:1:30 parse(js) ━━━━━━━━━━━━━

  ✖ yield is not allowed in generator parameters

    function *g(){ (a, b, c, yield) => 42 }
                                  ^


```
