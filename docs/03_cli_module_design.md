# CLI章の詳細設計

作成日: 2026-06-13

Claude Code の現場利用では CLI が中核になるため、教材では独立した章として扱う。

## 章タイトル

Claude Code CLI 完全ガイド

## この章の到達目標

- Claude Code CLI の起動、再開、非対話実行ができる
- よく使うコマンドとセッション内コマンドを説明できる
- 権限、ツール制限、system prompt、worktree を使い分けられる
- Windows / PowerShell / WSL での注意点を理解できる
- 不調時に `/doctor` と `claude doctor` で切り分けできる

## セクション案

### 1. CLI を使う理由

説明すること:

- IDE ではなく CLI が強い場面
- 既存の Git、テスト、ビルド、CI と同じ作業場所で動く利点
- Claude Code がファイルを読み、編集し、コマンドを実行すること

演習:

- プロジェクトルートで `claude` を起動し、構造説明を依頼する

### 2. インストールとログイン

説明すること:

- macOS / Linux / WSL のインストール
- Windows PowerShell のインストール
- WinGet / Homebrew の違い
- `claude auth login`
- `claude auth status`
- `claude auth logout`
- Git for Windows と PowerShell の注意

演習:

- `claude auth status` でログイン状態を確認する

### 3. 基本コマンド

必ず扱うコマンド:

```bash
claude
claude "explain this project"
claude -p "explain this function"
cat logs.txt | claude -p "summarize the error"
claude -c
claude -c -p "continue and check type errors"
claude -r "<session>" "finish this task"
claude update
claude install stable
```

現場での説明:

- `claude` は対話セッション
- `claude "query"` は初期プロンプト付き対話
- `claude -p` はスクリプトやワンショット用途
- `-c` は現在ディレクトリの直近会話を継続
- `-r` は特定セッションを再開

### 4. セッション内コマンド

必ず扱うコマンド:

```text
/help
/clear
/exit
/login
/doctor
/compact
/config
```

説明すること:

- `/help` で使えるコマンドを確認する
- `/clear` は会話を整理する
- `/compact` は文脈を圧縮する
- `/doctor` は設定、MCP、コンテキストなどの診断に使う
- `/config` はエディタモードや表示などの設定に使う

### 5. 対話モードの操作

扱う操作:

- `/` でコマンド候補を出す
- Tab で補完
- 上下キーで履歴
- Ctrl+C で中断
- Ctrl+D で終了
- Shift+Tab で permission mode の切り替え
- `! npm test` のようなシェルモード
- バックグラウンド実行

教材での注意:

- ターミナルや OS によってショートカット差分がある
- Windows / WSL では貼り付けや Meta キーの扱いに注意する

### 6. 実務で使うフラグ

優先して扱うフラグ:

```bash
claude --tools "Bash,Edit,Read"
claude --worktree feature-auth
claude --system-prompt "You are a Python expert"
claude --append-system-prompt "Follow the team coding rules"
claude --verbose
claude --safe-mode
claude --model sonnet
claude --permission-mode plan
```

説明する観点:

- `--tools` は使える組み込みツールを制限する
- `--worktree` は分離された作業場所を作る
- `--system-prompt` は既定プロンプトを置き換える
- `--append-system-prompt` は既定プロンプトに追加する
- 置き換えと追加はリスクが違う
- `--safe-mode` は設定、プラグイン、MCP、Hooks などの影響切り分けに使う

### 7. Git と CLI

説明すること:

- 変更内容の確認
- ブランチ作成
- コミット
- コンフリクト解消
- PR レビュー
- 作業前後で人間が確認すべき点

例:

```text
what files have I changed?
review my changes before commit
create a branch for this fix
commit my changes with a descriptive message
help me resolve the merge conflict
```

### 8. 非対話モードと自動化

説明すること:

- `claude -p` はワンショットやパイプ処理に向く
- CI やスクリプトで使う場合は出力形式と権限を明確にする
- 自動実行では tools、MCP、権限、ログを制限する

例:

```bash
git diff | claude -p "review this diff and list only potential bugs"
cat test.log | claude -p "summarize the failing tests and likely cause"
```

### 9. トラブルシュート

扱う内容:

- 起動しない
- ログインできない
- 検索が遅い
- メモリや CPU が重い
- コンテキストが膨らみすぎる
- MCP や Hooks が原因か切り分ける
- Windows / WSL で検索結果が不安定

最初に試すこと:

```bash
claude doctor
```

セッション内で試すこと:

```text
/doctor
/compact
/clear
```

## HTMLでの見せ方

- コマンド表
- 初心者向け「まずこれだけ」カード
- 実務向け「よく使う組み合わせ」カード
- Windows 注意点の警告ボックス
- CLI フラグの用途別フィルター
- 演習チェックリスト

## 章末演習

1. 任意のプロジェクトで `claude` を起動し、構造を説明させる。
2. `claude -p` で README の改善案を出す。
3. `!` シェルモードでテストを実行し、その結果を Claude に要約させる。
4. `/compact` を使い、会話文脈を整理する。
5. Git の差分をレビューさせ、コミット前の確認リストを作る。
