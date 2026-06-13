# 教材監査メモ

作成日: 2026-06-13

## 監査観点

ユーザーからの依頼に基づき、以下の観点で初版HTMLを厳しめに確認した。

- これだけでClaude / Claude Codeを使いこなす基礎として十分か
- 説明が抽象的で、現場で何をすればよいか不明な箇所がないか
- CLI、slash commands、権限、文脈管理、拡張機能に抜けがないか
- 最新の公式情報と矛盾しないか

## 結論

初版は教材の骨格としては有効だったが、「使いこなす」と言えるほどの情報量ではなかった。

特に不足していたのは以下。

- Claudeの最新モデル選択の考え方
- Claude Code CLIのフラグと運用例
- slash commandsの利用タイミング
- permission modes、allow / ask / deny、設定スコープ
- `CLAUDE.md` と auto memory の違い
- 実務ワークフローの完了条件
- Skills、Subagents、Hooks、MCP、GitHub Actions、Agent SDK の選定基準

## 更新内容

### 1. 教材冒頭に監査結果を追加

「この教材だけで十分か」という問いに直接答えるセクションを追加した。

初版の弱点と補強後の判断基準を明示し、API実装、料金試算、社内ポリシー、個別MCPサーバー設定は別教材で深掘りする前提も示した。

### 2. Claude全体像を補強

2026-06-13時点の公式情報をもとに、Claude Fable 5、Opus 4.8、Sonnet 4.6、Haiku 4.5 の使い分けを追加した。

モデル名、料金、提供状況は更新されやすいため、教材更新時に必ず公式ページで再確認する旨も明記した。

### 3. 抽象的な依頼を具体化

「このコード直して」「良い感じにレビューして」「ドキュメント作って」のような曖昧な依頼を、範囲、成果物、検証方法を含む依頼へ変換する表を追加した。

### 4. プロンプト設計を補強

公式のPrompt Engineering / Prompting best practicesに合わせ、成功条件、評価、例示、長文入力、XMLタグの扱いを追加した。

### 5. Claude Code CLIを大幅補強

以下を追加または具体化した。

- インストール手順
- 対話、初期指示付き対話、非対話、継続、再開
- `--output-format`
- `--permission-mode`
- `--tools`
- `--worktree`
- `--mcp-config`
- `--strict-mcp-config`
- `--append-system-prompt`
- `--system-prompt`
- `--safe-mode`
- 背景実行と `claude agents`
- Windows PowerShell / CMD / Git for Windows の注意

### 6. slash commandsを追加

公式Commands referenceをもとに、以下の利用タイミングを追加した。

- `/init`
- `/memory`
- `/permissions`
- `/plan`
- `/diff`
- `/code-review`
- `/review`
- `/security-review`
- `/context`
- `/compact`
- `/clear`
- `/agents`
- `/fork`
- `/batch`
- `/tasks`
- `/background`
- `/resume`
- `/branch`
- `/rewind`
- `/doctor`
- `/debug`
- `/schedule`
- `/loop`
- `/teleport`
- `/remote-control`

### 7. 実務ワークフローを具体化

タスク別に、推奨する進め方と完了条件を追加した。

- 新しいコードベース理解
- バグ修正
- リファクタ
- テスト追加
- PR作成

また、計画モードを使う場面と、直接依頼してよい小さい作業の違いも明記した。

### 8. 文脈管理を具体化

`CLAUDE.md`、`CLAUDE.local.md`、`~/.claude/CLAUDE.md`、Managed policy、Auto memory の使い分けを追加した。

### 9. セキュリティと設定を具体化

以下を追加した。

- `--tools`
- `--permission-mode`
- allow / ask / deny
- Bash permission rule
- MCP tool制御
- Managed / User / Project / Local
- Hooksによる強制チェック

### 10. ハンズオンを増強

5演習から8演習へ増やし、最終課題を追加した。

## 残る別教材候補

このHTMLに詰め込みすぎると読みにくくなるため、以下は別教材または第2版で扱う。

- Claude APIの実装
- Messages API、Tool use、Streaming、Batch API
- 料金試算とモデル別コスト設計
- 社内MCPサーバーの具体設定
- Hooks referenceの全イベント詳細
- Enterprise / Team向け管理者設定
- GitHub Actionsの具体的なYAMLテンプレート
- 個別IDE拡張の詳細手順
