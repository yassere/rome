# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/js-parser/index.test.ts --update-snapshots` to update.

## `es2017 > async-functions > no-method-asi`

### `ast`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 1
			index: 27
			line: 4
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSClassDeclaration {
			id: JSBindingIdentifier {
				name: "A"
				loc: Object {
					filename: "input.js"
					identifierName: "A"
					end: Object {
						column: 7
						index: 7
						line: 1
					}
					start: Object {
						column: 6
						index: 6
						line: 1
					}
				}
			}
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 1
					index: 27
					line: 4
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			meta: JSClassHead {
				implements: undefined
				superClass: undefined
				superTypeParameters: undefined
				typeParameters: undefined
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 1
						index: 27
						line: 4
					}
					start: Object {
						column: 0
						index: 0
						line: 1
					}
				}
				body: Array [
					JSClassProperty {
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "async"
								loc: Object {
									filename: "input.js"
									identifierName: "async"
									end: Object {
										column: 7
										index: 17
										line: 2
									}
									start: Object {
										column: 2
										index: 12
										line: 2
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 7
									index: 17
									line: 2
								}
								start: Object {
									column: 2
									index: 12
									line: 2
								}
							}
						}
						value: undefined
						definite: undefined
						typeAnnotation: undefined
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 7
								index: 17
								line: 2
							}
							start: Object {
								column: 2
								index: 12
								line: 2
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 2
								index: 12
								line: 2
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 7
									index: 17
									line: 2
								}
								start: Object {
									column: 2
									index: 12
									line: 2
								}
							}
						}
					}
					JSClassMethod {
						kind: "method"
						key: JSStaticPropertyKey {
							value: JSIdentifier {
								name: "a"
								loc: Object {
									filename: "input.js"
									identifierName: "a"
									end: Object {
										column: 3
										index: 21
										line: 3
									}
									start: Object {
										column: 2
										index: 20
										line: 3
									}
								}
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 3
									index: 21
									line: 3
								}
								start: Object {
									column: 2
									index: 20
									line: 3
								}
							}
						}
						loc: Object {
							filename: "input.js"
							end: Object {
								column: 7
								index: 25
								line: 3
							}
							start: Object {
								column: 2
								index: 20
								line: 3
							}
						}
						body: JSBlockStatement {
							body: Array []
							directives: Array []
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 7
									index: 25
									line: 3
								}
								start: Object {
									column: 5
									index: 23
									line: 3
								}
							}
						}
						head: JSFunctionHead {
							async: false
							generator: false
							hasHoistedVars: false
							params: Array []
							rest: undefined
							returnType: undefined
							thisType: undefined
							typeParameters: undefined
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 5
									index: 23
									line: 3
								}
								start: Object {
									column: 3
									index: 21
									line: 3
								}
							}
						}
						meta: JSClassPropertyMeta {
							abstract: false
							accessibility: undefined
							optional: false
							readonly: false
							static: false
							typeAnnotation: undefined
							start: Object {
								column: 2
								index: 20
								line: 3
							}
							loc: Object {
								filename: "input.js"
								end: Object {
									column: 3
									index: 21
									line: 3
								}
								start: Object {
									column: 2
									index: 20
									line: 3
								}
							}
						}
					}
				]
			}
		}
	]
}
```

### `diagnostics`

```
✔ No known problems!

```