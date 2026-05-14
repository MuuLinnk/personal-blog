---
title: Git 常用命令速查
date: 2026-05-08
description: 收藏用的 Git 命令速查表，涵盖日常开发中最常用的操作。
tags:
  - Git
  - 效率
slug: git-cheatsheet
---

## 基础操作

```bash
git init                    # 初始化仓库
git clone <url>             # 克隆仓库
git add <file>              # 暂存文件
git add .                   # 暂存所有改动
git commit -m "message"     # 提交
git push                    # 推送到远程
git pull                    # 拉取远程更新
```

## 分支管理

```bash
git branch                  # 查看分支
git branch <name>           # 创建分支
git checkout <name>         # 切换分支
git checkout -b <name>      # 创建并切换
git merge <name>            # 合并分支
git branch -d <name>        # 删除分支
```

## 查看历史

```bash
git log                     # 提交历史
git log --oneline           # 简洁模式
git log --graph             # 图形化分支
git diff                    # 查看改动
git status                  # 当前状态
```

## 撤销操作

```bash
git reset HEAD <file>       # 取消暂存
git checkout -- <file>      # 丢弃工作区改动
git reset --soft HEAD^      # 撤销 commit（保留改动）
git reset --hard HEAD^      # 撤销 commit（丢弃改动）
git revert <commit>         # 安全撤销（生成新 commit）
```

## 实用技巧

```bash
git stash                   # 暂存当前工作
git stash pop               # 恢复暂存
git cherry-pick <commit>    # 选择性合并某次提交
git rebase <branch>         # 变基
git tag <name>              # 打标签
```

## 配置

```bash
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
git config --global core.editor "code --wait"
```

> 建议把这些命令打印出来贴在桌边，用到的时候快速查阅。
