/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {
	Builder,
	Token,
	concat,
	group,
	indent,
	softline,
} from "@internal/formatter";

import {JSXFragment} from "@internal/ast";

export default function JSXFragment(builder: Builder, node: JSXFragment): Token {
	return group(
		concat([
			"<>",
			indent(builder.tokenizeStatementList(node.children, node), true),
			softline,
			"</>",
		]),
	);
}
