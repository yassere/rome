/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Diagnostic} from "@internal/diagnostics";
import {test} from "rome";
import {check} from "@internal/js-analysis";
import {parseJS} from "@internal/js-parser";

async function testCheck(code: string): Promise<Diagnostic[]> {
	const ast = parseJS({
		input: code,
		sourceType: "module",
	});

	return check({
		ast,
		provider: {
			getExportTypes() {
				return Promise.reject("unsupported");
			},
		},
	});
}

test(
	"discovers require('module') call",
	async () => {
		testCheck;
	},
);
