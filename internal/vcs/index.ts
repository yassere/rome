/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {AbsoluteFilePath} from "@internal/path";
import {spawn} from "@internal/child-process";

export function extractFileList(out: string): string[] {
	const lines = out.trim().split("\n");

	const files: string[] = [];

	for (const line of lines) {
		const match = line.trim().match(/^(?:[AM]|\?\?)\s+(.*?)$/);
		if (match != null) {
			files.push(match[1]);
		}
	}

	return files;
}

export class VCSClient {
	constructor(root: AbsoluteFilePath) {
		this.root = root;
	}

	public root: AbsoluteFilePath;

	public getDefaultBranch(): Promise<string> {
		throw new Error("unimplemented");
	}

	public getModifiedFiles(branch: string): Promise<string[]> {
		throw new Error("unimplemented");
	}

	public getUncommittedFiles(): Promise<string[]> {
		throw new Error("unimplemented");
	}
}

class GitVCSClient extends VCSClient {
	constructor(root: AbsoluteFilePath) {
		super(root);
	}

	public async getDefaultBranch(): Promise<string> {
		const exitCode = await spawn(
			"git",
			["show-ref", "--verify", "--quiet", "refs/heads/main"],
			{cwd: this.root},
		).wait();
		return exitCode === 0 ? "main" : "master";
	}

	public async getUncommittedFiles(): Promise<string[]> {
		const stdout = (await spawn("git", ["status", "--short"], {cwd: this.root}).waitSuccess()).getOutput(
			true,
			false,
		);
		return extractFileList(stdout);
	}

	public async getModifiedFiles(branch: string): Promise<string[]> {
		const stdout = (await spawn(
			"git",
			["diff", "--name-status", branch],
			{cwd: this.root},
		).waitSuccess()).getOutput(true, false);
		return extractFileList(stdout);
	}
}

export async function getVCSClient(
	root: AbsoluteFilePath,
): Promise<undefined | VCSClient> {
	if (await root.append(".git").exists()) {
		return new GitVCSClient(root);
	}

	return undefined;
}
