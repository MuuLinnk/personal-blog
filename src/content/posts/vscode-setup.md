---
title: VS Code 高效配置：我的编辑器设置
date: 2026-05-03
description: 分享我的 VS Code 配置、必装插件和实用技巧，让编码效率翻倍。
tags:
  - VS Code
  - 效率
slug: vscode-setup
---

## 主题与字体

我的配置追求极简，减少视觉噪音：

```json
{
  "workbench.colorTheme": "GitHub Dark Default",
  "editor.fontFamily": "'JetBrains Mono', 'Fira Code', monospace",
  "editor.fontLigatures": true,
  "editor.fontSize": 14,
  "editor.lineHeight": 1.6,
  "editor.tabSize": 2
}
```

JetBrains Mono 的连字（ligatures）让 `=>` `===` `!=` 这些符号显示更美观。

## 必装插件 Top 10

### 1. Prettier —— 代码格式化

保存时自动格式化，团队协作必备：

```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "prettier.semi": true,
  "prettier.singleQuote": false,
  "prettier.trailingComma": "all"
}
```

### 2. ESLint —— 代码质量检查

实时提示潜在问题，和 Prettier 搭配使用。

### 3. GitLens —— Git 增强

查看每行代码是谁写的、什么时候改的，强大的 Git 可视化。

### 4. Error Lens —— 行内错误提示

错误信息直接显示在代码行尾，不用鼠标悬停。

### 5. Auto Rename Tag —— 自动重命名标签

修改 HTML/JSX 标签，自动同步修改闭合标签。

### 6. Path Intellisense —— 路径自动补全

输入 `./` 自动提示文件路径。

### 7. Material Icon Theme —— 文件图标

让侧边栏文件树更好看、更容易识别。

### 8. Thunder Client —— API 测试

内置于 VS Code 的 Postman 替代品，轻量好用。

### 9. Code Spell Checker —— 拼写检查

避免变量名拼写错误。

### 10. Todo Tree —— TODO 高亮

把所有 `TODO` `FIXME` 标注高亮显示，方便追踪待办事项。

## 快捷键

| 快捷键 | 功能 |
|--------|------|
| `Ctrl+P` | 快速打开文件 |
| `Ctrl+Shift+P` | 命令面板 |
| `Ctrl+D` | 选中下一个相同词 |
| `Ctrl+Shift+L` | 选中所有相同词 |
| `Ctrl+/` | 注释/取消注释 |
| `Alt+↑/↓` | 移动当前行 |
| `Ctrl+` ` | 打开/关闭终端 |
| `Ctrl+B` | 打开/关闭侧边栏 |

## 多光标编辑

```ts
// 按住 Alt，在多个位置点击，同时编辑
// 或者 Ctrl+D 逐个选择相同词
const name = "Alice";
const age = 25;
const city = "Beijing";
```

## Snippets 自定义代码片段

在 `File > Preferences > Configure Snippets` 中配置：

```json
{
  "Console Log": {
    "prefix": "cl",
    "body": "console.log('$1:', $1);",
    "description": "Console log with variable"
  },
  "React Functional Component": {
    "prefix": "rfc",
    "body": [
      "const ${1:ComponentName} = () => {",
      "  return (",
      "    <div>",
      "      $0",
      "    </div>",
      "  );",
      "};",
      "",
      "export default ${1:ComponentName};"
    ]
  }
}
```

## settings.json 完整推荐

```json
{
  "editor.minimap.enabled": false,
  "editor.renderWhitespace": "boundary",
  "editor.bracketPairColorization.enabled": true,
  "editor.guides.bracketPairs": true,
  "editor.smoothScrolling": true,
  "editor.cursorBlinking": "smooth",
  "editor.cursorSmoothCaretAnimation": "on",
  "files.autoSave": "onFocusChange",
  "explorer.confirmDelete": false,
  "terminal.integrated.fontSize": 13,
  "workbench.startupEditor": "none"
}
```

## 总结

好的编辑器配置能让你**少用鼠标、多用键盘**，思路不被打断。花半小时配置好，以后每天都能受益。
