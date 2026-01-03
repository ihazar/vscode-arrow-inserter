import * as vscode from 'vscode';
import { UNICODE_ARROWS, ASCII_ARROWS, ArrowItem } from './symbols';

function withConfig(items: ArrowItem[]): ArrowItem[] {
	const config = vscode.workspace.getConfiguration('arrows');
	const customSymbols = config.get<ArrowItem[]>('customSymbols', []);
	const showCodePoints = config.get<boolean>('showCodePoints', true);

	// Merge custom symbols with provided items
	const merged = [...items, ...customSymbols];

	// Conditionally filter out code points from detail if showCodePoints is false
	if (!showCodePoints) {
		return merged.map(item => ({
			...item,
			detail: undefined,
		}));
	}

	return merged;
}

async function pickAndInsert(items: ArrowItem[], spaced: boolean = false) {
	const qp = vscode.window.createQuickPick<{ label: string; description?: string; detail?: string; value: string }>();
	qp.title = spaced ? 'Insert Unicode Arrow (with surrounding spaces)' : 'Insert Unicode Arrow';
	qp.matchOnDescription = true;
	qp.matchOnDetail = true;
	qp.items = items.map(i => ({ label: i.label, description: i.description, detail: i.detail, value: i.text }));
	qp.show();

	const selection = await new Promise<typeof qp.selectedItems[0] | undefined>(resolve => {
		qp.onDidAccept(() => resolve(qp.selectedItems[0]));
		qp.onDidHide(() => resolve(undefined));
	});
	qp.hide();
	if (!selection) return;

	const editor = vscode.window.activeTextEditor;
	if (!editor) return;

	const toInsert = spaced ? ` ${selection.value} ` : selection.value;
	await editor.edit(edit => {
		for (const sel of editor.selections) {
			edit.insert(sel.active, toInsert);
		}
	});
}

async function pickAndInsertAscii() {
	const items = withConfig(ASCII_ARROWS);
	const qpItems = items.map(i => ({ label: i.label, description: i.description, detail: i.detail, value: i.text }));
	const picked = await vscode.window.showQuickPick(qpItems, {
		title: 'Insert ASCII Arrow',
		matchOnDescription: true,
		matchOnDetail: true
	});
	if (!picked) return;

	const editor = vscode.window.activeTextEditor;
	if (!editor) return;

	await editor.edit(edit => {
		for (const sel of editor.selections) {
			edit.insert(sel.active, picked.value);
		}
	});
}

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.commands.registerCommand('arrows.insertSymbol', () => pickAndInsert(withConfig(UNICODE_ARROWS))),
		vscode.commands.registerCommand('arrows.insertSymbolSpaced', () => pickAndInsert(withConfig(UNICODE_ARROWS), true)),
		vscode.commands.registerCommand('arrows.insertAscii', pickAndInsertAscii)
	);
}

export function deactivate() {}
