export type ArrowItem = {
	label: string; // primary label shown in QuickPick
	text: string; // text to insert
	detail?: string; // code point or hint
	description?: string; // category
};

export const UNICODE_ARROWS: ArrowItem[] = [
	// Straight
	{ label: '→', text: '→', detail: 'U+2192', description: 'Right' },
	{ label: '←', text: '←', detail: 'U+2190', description: 'Left' },
	{ label: '↑', text: '↑', detail: 'U+2191', description: 'Up' },
	{ label: '↓', text: '↓', detail: 'U+2193', description: 'Down' },
	{ label: '⇒', text: '⇒', detail: 'U+21D2', description: 'Right (double)' },
	{ label: '⇐', text: '⇐', detail: 'U+21D0', description: 'Left (double)' },
	{ label: '⇔', text: '⇔', detail: 'U+21D4', description: 'Both (double)' },
	{ label: '↔', text: '↔', detail: 'U+2194', description: 'Both' },

	// Enter / corners / outcome
	{
		label: '↵',
		text: '↵',
		detail: 'U+21B5',
		description: 'Enter (left corner)',
	},
	{ label: '↩', text: '↩', detail: 'U+21A9', description: 'Left hook' },
	{ label: '↪', text: '↪', detail: 'U+21AA', description: 'Right hook' },
	{
		label: '⤵',
		text: '⤵',
		detail: 'U+2935',
		description: 'Right then down (outcome)',
	},
	{
		label: '⤴',
		text: '⤴',
		detail: 'U+2934',
		description: 'Right then up (outcome)',
	},
	{
		label: '⤷',
		text: '⤷',
		detail: 'U+2937',
		description: 'Down then right (mirror of ↵)',
	},
	{ label: '↴', text: '↴', detail: 'U+21B4', description: 'Right corner down' },

	// Chevrons / triangles
	{ label: '»', text: '»', detail: 'U+00BB', description: 'Right angle quote' },
	{ label: '«', text: '«', detail: 'U+00AB', description: 'Left angle quote' },
	{
		label: '›',
		text: '›',
		detail: 'U+203A',
		description: 'Single right angle quote',
	},
	{
		label: '‹',
		text: '‹',
		detail: 'U+2039',
		description: 'Single left angle quote',
	},
	{
		label: '▸',
		text: '▸',
		detail: 'U+25B8',
		description: 'Small right triangle',
	},
	{
		label: '◂',
		text: '◂',
		detail: 'U+25C2',
		description: 'Small left triangle',
	},
	{ label: '▼', text: '▼', detail: 'U+25BC', description: 'Down triangle' },
	{ label: '▲', text: '▲', detail: 'U+25B2', description: 'Up triangle' },
];

export const ASCII_ARROWS: ArrowItem[] = [
	{ label: '->', text: '->', description: 'ASCII right' },
	{ label: '<-', text: '<-', description: 'ASCII left' },
	{ label: '=>', text: '=>', description: 'ASCII fat right' },
	{ label: '<=', text: '<=', description: 'ASCII fat left' },
	{ label: '<->', text: '<->', description: 'ASCII both' },
	{ label: '<=>', text: '<=>', description: 'ASCII both fat' },
	{ label: '==>', text: '==>', description: 'ASCII right triple' },
	{ label: '<==', text: '<==', description: 'ASCII left triple' },
];
