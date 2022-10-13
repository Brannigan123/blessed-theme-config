import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

function hex_is_light(color) {
  const hex = color.replace('#', '');
  const c_r = parseInt(hex.substring(0, 0 + 2), 16);
  const c_g = parseInt(hex.substring(2, 2 + 2), 16);
  const c_b = parseInt(hex.substring(4, 4 + 2), 16);
  const brightness = ((c_r * 299) + (c_g * 587) + (c_b * 114)) / 1000;
  return brightness > 155;
}

const themeName = '{{ theme_name }}';

const colors = {
  background: '{{ theme.colors.background }}',
  foreground: '{{ theme.colors.foreground }}',
  black: '{{ theme.colors.black }}',
  gray: '{{ theme.colors.gray }}',
  white: '{{ theme.colors.white }}',
  blue: '{{ theme.colors.blue }}',
  red: '{{ theme.colors.red }}',
  green: '{{ theme.colors.green }}',
  yellow: '{{ theme.colors.yellow }}',
  cyan: '{{ theme.colors.cyan }}',
  magenta: '{{ theme.colors.magenta }}',
  orange: '{{ theme.colors.orange }}'
}

const colorSet: IColorSet = {
  type: hex_is_light(colors.background) ? 'light' : 'dark',
  base: {
    background: colors.background,
    foreground: colors.foreground,
    color1: colors.blue,
    color2: colors.red,
    color3: colors.green,
    color4: colors.yellow
  },
  syntax: {
    identifier: colors.blue,
    string: colors.orange,
    number: colors.red,
    keyword: colors.blue,
    boolean: colors.blue,
    function: colors.cyan,
    functionCall: colors.yellow,
    storage: colors.blue,
    comment: colors.gray,
    class: colors.cyan,
    classMember: colors.cyan,
    type: colors.green,
    cssClass: colors.blue,
    cssId: colors.red,
    cssTag: colors.cyan,
    markdownQuote: colors.magenta
  },
  ui: {
    cursor: colors.foreground,
    guide: colors.magenta,
    invisibles: colors.gray,
    rangeHighlight: colors.gray,
    findMatchHighlight: colors.black,
    currentFindMatchHighlight: colors.black,
    selection: colors.gray,
    selectionHighlight: colors.black,
    wordHighlight: colors.black,
    wordHighlightStrong: colors.black,
    activeLinkForeground: colors.blue
  },
  terminal: {
    black: colors.black,
    red: colors.red,
    green: colors.green,
    yellow: colors.yellow,
    blue: colors.blue,
    magenta: colors.magenta,
    cyan: colors.cyan,
    white: colors.white,
    brightBlack: colors.gray,
    brightRed: colors.red,
    brightGreen: colors.green,
    brightYellow: colors.yellow,
    brightBlue: colors.blue,
    brightMagenta: colors.magenta,
    brightCyan: colors.cyan,
    brightWhite: colors.white
  },
  overrides: {
    'editorError.foreground': colors.red
  }
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
