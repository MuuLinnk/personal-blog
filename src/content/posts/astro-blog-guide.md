---
title: Astro 入门指南：30 分钟搭建个人博客
date: 2026-05-12
description: 从零开始使用 Astro 搭建一个轻量快速的个人博客。
tags:
  - 前端
  - Astro
slug: astro-blog-guide
---

## Astro 是什么

Astro 是一个现代化的静态站点生成器（SSG），专为内容型网站设计。它的核心理念是 **"默认情况下零 JavaScript"**，只在需要交互的地方按需加载 JS。

## 为什么选择 Astro

1. **极致的性能**：输出纯 HTML，没有多余的 JS 包袱
2. **灵活的框架选择**：可以在同一个项目中混用 React、Vue、Svelte 组件
3. **内置 Markdown 支持**：开箱即用，支持 MDX
4. **内容集合**：类型安全的 Markdown 内容管理
5. **简单易学**：`.astro` 文件语法接近 HTML，学习成本极低

## 快速开始

```bash
npm create astro@latest my-blog
cd my-blog
npm install
npm run dev
```

运行后访问 `http://localhost:4321` 就能看到你的第一个 Astro 页面。

## 页面路由

Astro 采用基于文件的路由系统：

```
src/pages/
├── index.astro          → /
├── about.astro          → /about
├── posts/
│   └── [slug].astro     → /posts/xxx
└── tags/
    └── [tag].astro      → /tags/xxx
```

`[slug]` 是动态路由参数，可以在组件中通过 `Astro.params.slug` 获取。

## 内容集合

定义 `src/content/config.ts`：

```ts
import { defineCollection, z } from 'astro:content';

const posts = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

export const collections = { posts };
```

## 部署

构建命令：

```bash
npm run build
```

输出目录是 `dist/`，可以直接部署到 Vercel、Netlify 或 GitHub Pages。

## 总结

Astro 是我目前最推荐的静态博客方案。它足够简单，又足够强大。如果你也想搭建个人博客，强烈建议试试 Astro。
