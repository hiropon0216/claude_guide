# 公式情報ソースマップ

作成日: 2026-06-13

この教材は Anthropic / Claude の公式情報を主な根拠にする。HTML 化の直前に再確認する。

## Claude 全般

| 教材で使う章 | 公式ページ | 用途 |
| --- | --- | --- |
| Claude 全体像 | https://docs.anthropic.com/en/docs/intro-to-claude | Claude の概要、得意領域、導入説明 |
| Claude 全体像 | https://docs.anthropic.com/en/docs/about-claude/models | モデル選択、モデルラインナップ |
| Claude 全体像 | https://docs.anthropic.com/en/docs/about-claude/pricing | 価格とコスト説明 |
| Claude 基本操作 | https://docs.anthropic.com/en/docs/build-with-claude/vision | 画像入力やマルチモーダル利用 |
| API と拡張 | https://docs.anthropic.com/en/docs/get-started | API 利用の基本 |
| API と拡張 | https://docs.anthropic.com/en/docs/build-with-claude/tool-use/overview | Tool use と agentic loop の説明 |

## プロンプト設計

| 教材で使う章 | 公式ページ | 用途 |
| --- | --- | --- |
| プロンプト設計 | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview | プロンプト設計の入口 |
| プロンプト設計 | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting | 例示、構造化、実務プロンプト |
| プロンプト設計 | https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/prompt-generator | Console のプロンプト支援機能 |

## Claude Code 基礎

| 教材で使う章 | 公式ページ | 用途 |
| --- | --- | --- |
| Claude Code 入門 | https://docs.anthropic.com/en/docs/claude-code/overview | Claude Code の概要 |
| Claude Code 入門 | https://docs.anthropic.com/en/docs/claude-code/quickstart | インストール、ログイン、初回利用 |
| Claude Code 入門 | https://docs.anthropic.com/en/docs/claude-code/common-workflows | 日常開発ワークフロー |
| Claude Code 入門 | https://docs.anthropic.com/en/docs/claude-code/best-practices | 実務で成果を出す使い方 |

## CLI と対話モード

| 教材で使う章 | 公式ページ | 用途 |
| --- | --- | --- |
| CLI 完全ガイド | https://docs.anthropic.com/en/docs/claude-code/cli-reference | CLI コマンド、フラグ |
| CLI 完全ガイド | https://docs.anthropic.com/en/docs/claude-code/interactive-mode | ショートカット、シェルモード、背景実行 |
| CLI 完全ガイド | https://docs.anthropic.com/en/docs/claude-code/commands | セッション内コマンド |
| CLI 完全ガイド | https://docs.anthropic.com/en/docs/claude-code/environment-variables | 環境変数 |
| CLI 完全ガイド | https://docs.anthropic.com/en/docs/claude-code/troubleshooting | `/doctor`、`claude doctor`、不具合対応 |

## 設定、権限、文脈管理

| 教材で使う章 | 公式ページ | 用途 |
| --- | --- | --- |
| プロジェクト文脈 | https://docs.anthropic.com/en/docs/claude-code/memory | `CLAUDE.md` と memory |
| プロジェクト文脈 | https://docs.anthropic.com/en/docs/claude-code/settings | settings、managed settings |
| セキュリティ | https://docs.anthropic.com/en/docs/claude-code/permissions | permission mode |
| セキュリティ | https://docs.anthropic.com/en/docs/claude-code/security | セキュリティと権限管理 |

## 応用機能

| 教材で使う章 | 公式ページ | 用途 |
| --- | --- | --- |
| 応用機能 | https://docs.anthropic.com/en/docs/claude-code/skills | Skills |
| 応用機能 | https://docs.anthropic.com/en/docs/claude-code/sub-agents | Subagents |
| 応用機能 | https://docs.anthropic.com/en/docs/claude-code/hooks-guide | Hooks の考え方 |
| 応用機能 | https://docs.anthropic.com/en/docs/claude-code/hooks | Hooks reference |
| 応用機能 | https://docs.anthropic.com/en/docs/claude-code/mcp | MCP |
| 応用機能 | https://docs.anthropic.com/en/docs/claude-code/plugins | Plugins |
| 応用機能 | https://docs.anthropic.com/en/docs/claude-code/sdk | Agent SDK |
| 応用機能 | https://docs.anthropic.com/en/docs/claude-code/github-actions | GitHub Actions |

## HTML 化前に再確認する項目

- 最新モデル名
- 価格
- Claude Code のインストール方法
- CLI コマンドとフラグ
- permission mode の名称
- managed settings のキー
- Skills、Subagents、Hooks、MCP、Plugins の仕様
- ベータ、プレビュー、非推奨機能

## 教材側での扱い方

公式ページをそのまま訳すのではなく、現場で使う順番に再構成する。

例:

- Quickstart の内容は「初回セットアップ」へ
- CLI reference は「コマンド早見表」と「実務フラグ」へ
- Interactive mode は「日常操作」と「トラブル回避」へ
- Settings / permissions / security は「チーム導入」と「ガバナンス」へ
- Hooks / MCP / Skills / Subagents は「応用設計」へ
