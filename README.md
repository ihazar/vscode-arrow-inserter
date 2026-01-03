# Arrow Inserter

Quickly insert Unicode and ASCII arrow symbols into your code with a simple keyboard shortcut or command palette menu.

## Overview

Arrow Inserter provides a fast and convenient way to insert arrow symbols (→, ←, ↑, ↓, ⇒, ⇐, `->`, `=>`, etc.) into your documents. No more copying from character maps or memorizing Unicode codes—just press a shortcut and pick your arrow!

## Features

- 🎯 **Quick Access** - Insert arrows with a single keyboard shortcut (`Cmd+Alt+;` / `Ctrl+Alt+;`)
- 🔍 **Searchable Menu** - QuickPick interface with searchable arrow symbols
- 📝 **Multiple Cursors** - Works with multiple cursor selections
- 🎨 **Unicode & ASCII** - Support for both Unicode arrows (→, ←, ↑, ↓) and ASCII arrows (`->`, `<-`, `=>`)
- ⚙️ **Customizable** - Add your own custom symbols via settings
- 🎛️ **Configurable** - Toggle code point display and customize behavior

## Quick Start

### Method 1: Keyboard Shortcut (Recommended)

1. Place your cursor where you want to insert an arrow
2. Press:
   - **Mac**: `Cmd+Alt+;`
   - **Windows/Linux**: `Ctrl+Alt+;`
3. Select an arrow from the QuickPick menu
4. The arrow is inserted at your cursor position

### Method 2: Command Palette

1. Open Command Palette: `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows/Linux)
2. Type one of these commands:
   - `Arrows: Insert Unicode Arrow` - Insert Unicode arrow symbols
   - `Arrows: Insert Unicode Arrow (with spaces)` - Insert with surrounding spaces
   - `Arrows: Insert ASCII Arrow` - Insert ASCII arrow symbols
3. Select an arrow from the menu

## Available Symbols

### Unicode Arrows

**Straight Arrows:**
- → (Right), ← (Left), ↑ (Up), ↓ (Down)
- ⇒ (Right double), ⇐ (Left double), ⇔ (Both double), ↔ (Both)

**Corner/Outcome Arrows:**
- ↵ (Enter/left corner), ↩ (Left hook), ↪ (Right hook)
- ⤵ (Right then down), ⤴ (Right then up), ⤷ (Down then right), ↴ (Right corner down)

**Chevrons/Triangles:**
- », « (Right/Left angle quotes)
- ›, ‹ (Single right/left angle quotes)
- ▸, ◂ (Small right/left triangles)
- ▼, ▲ (Down/Up triangles)

### ASCII Arrows

- `->` (Right), `<-` (Left)
- `=>` (Fat right), `<=` (Fat left)
- `<->` (Both), `<=>` (Both fat)
- `==>` (Right triple), `<==` (Left triple)

## Configuration

### Add Custom Symbols

You can add your own symbols to the picker by configuring `arrows.customSymbols` in your settings:

```json
{
  "arrows.customSymbols": [
    {
      "label": "Right fat arrow",
      "text": "➡️",
      "detail": "U+27A1",
      "description": "Custom arrow"
    },
    {
      "label": "Custom symbol",
      "text": "⟹",
      "detail": "U+27F9",
      "description": "Long right arrow"
    }
  ]
}
```

### Show/Hide Code Points

Control whether Unicode code points (e.g., `U+2192`) are displayed in the picker:

```json
{
  "arrows.showCodePoints": true
}
```

Set to `false` to hide code points for a cleaner interface.

## Examples

### Example 1: Inserting a Right Arrow

1. Press `Cmd+Alt+;` (or `Ctrl+Alt+;`)
2. Type "right" to filter arrows
3. Select `→` from the menu
4. Result: `→` is inserted at cursor

### Example 2: Inserting with Spaces

1. Open Command Palette
2. Run `Arrows: Insert Unicode Arrow (with spaces)`
3. Select `→`
4. Result: ` → ` is inserted with surrounding spaces

### Example 3: Multiple Cursors

1. Place multiple cursors (Alt+Click or Cmd+Alt+Click)
2. Press `Cmd+Alt+;`
3. Select an arrow
4. Result: The arrow is inserted at all cursor positions

## Requirements

- VS Code or Cursor version 1.85.0 or higher

## Installation

### From VS Code Marketplace

1. Open VS Code/Cursor
2. Go to Extensions view (`Cmd+Shift+X` / `Ctrl+Shift+X`)
3. Search for "Arrow Inserter"
4. Click Install

### From VSIX File

1. Download or build the `.vsix` file
2. Open VS Code/Cursor
3. Go to Extensions view
4. Click the `...` menu (top right)
5. Select "Install from VSIX..."
6. Choose the `.vsix` file

## Development

To build and test the extension locally:

```bash
# Install dependencies
npm install

# Build the extension
npm run build

# Watch mode (auto-rebuild on changes)
npm run watch

# Package for distribution
npm run package
```

To test in development:
1. Open this project in VS Code/Cursor
2. Press `F5` to launch Extension Development Host
3. Test the extension in the new window

### Creating a VSIX File

To create a `.vsix` file for local installation or sharing:

1. **Build the extension** (if not already built):
   ```bash
   npm run build
   ```

2. **Package the extension**:
   ```bash
   npm run package
   ```

   This will:
   - Automatically run the build process
   - Package all necessary files into a `.vsix` file
   - Create the file in the `output/` directory (e.g., `output/vscode-arrow-inserter-0.0.1.vsix`)

3. **Install the VSIX file**:
   - Open VS Code/Cursor
   - Go to Extensions view (`Cmd+Shift+X` / `Ctrl+Shift+X`)
   - Click the `...` menu (top right)
   - Select "Install from VSIX..."
   - Choose the generated `.vsix` file from the `output/` directory

The `.vsix` file can be shared with others or used for local installation without going through the marketplace.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## License

MIT License

---

**Enjoy inserting arrows!** → ← ↑ ↓
