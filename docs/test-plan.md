# テスト計画

- Repo: `indoor-environment-sensor-server`
- Domain: IoT
- Rank: 57 / P3 / Score 53
- Idea No: 4
- アイデア名: 室内環境センサー蓄積サーバー
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\IoT\indoor-environment-sensor-server`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/indoor-environment-sensor-server-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
