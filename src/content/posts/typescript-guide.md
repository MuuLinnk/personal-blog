---
title: TypeScript 入门指南：从 JavaScript 到 TS
date: 2026-05-06
description: 面向 JavaScript 开发者的 TypeScript 快速上手指南。
tags:
  - TypeScript
  - 前端
slug: typescript-guide
---

## 为什么需要 TypeScript

JavaScript 是动态类型语言，变量可以随时改变类型。这在小型项目中很灵活，但在大型项目中容易隐藏 bug。

```js
// JavaScript - 运行时才发现问题
function add(a, b) {
  return a + b;
}

add(1, "2"); // "12" - 不是我们想要的结果！
```

TypeScript 在编译阶段就能捕获这类错误：

```ts
function add(a: number, b: number): number {
  return a + b;
}

add(1, "2"); // ❌ 编辑器里就直接报错了
```

## 基础类型

```ts
let isDone: boolean = false;
let count: number = 42;
let name: string = "TypeScript";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// 联合类型
let id: string | number = "abc123";

// 可选属性
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}`;
}
```

## 接口（Interface）

接口定义对象的结构：

```ts
interface User {
  id: number;
  name: string;
  email: string;
  age?: number;          // 可选属性
  readonly createdAt: Date; // 只读属性
}

const user: User = {
  id: 1,
  name: "张三",
  email: "zhangsan@example.com",
  createdAt: new Date(),
};
```

## 泛型（Generics）

泛型让函数和类可以处理多种类型：

```ts
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

firstElement([1, 2, 3]);    // 返回 number
firstElement(["a", "b"]);    // 返回 string

// 泛型约束
function getLength<T extends { length: number }>(item: T): number {
  return item.length;
}

getLength("hello");  // 5
getLength([1, 2, 3]); // 3
```

## 实用工具类型

TypeScript 内置了很多有用的工具类型：

```ts
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;
// { title: string; completed: boolean }

type TodoInput = Omit<Todo, "completed">;
// { title: string; description: string }

type TodoOptional = Partial<Todo>;
// 所有属性变成可选

type TodoRequired = Required<Todo>;
// 所有属性变成必选
```

## 与 React 配合

```tsx
interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, variant = "primary", onClick }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {label}
    </button>
  );
};
```

## 配置文件 tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

## 总结

- 类型系统帮你**提前发现错误**，而不是等到运行时
- 无需一次性给所有代码加类型，可以**渐进式迁移**
- 编辑器自动补全和跳转定义让**开发效率翻倍**
- 学习曲线平缓，投入产出比极高

如果你正在写 JavaScript，强烈建议试试 TypeScript。
