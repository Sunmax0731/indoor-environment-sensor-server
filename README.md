# indoor-environment-sensor-server

室内環境センサー蓄積サーバー の closed alpha prototype。温湿度、気圧、照度、CO2風データ、M5Stackセンサー値をRaspberry Piに蓄積する。

## Status

- Version: 0.1.0-alpha.1
- Rank: 57 / P3 / Score 53
- Domain: IoT
- Public target: GitHub Release / 自宅LAN
- Manual testing: not run by Codex

## Included

- LAN simulator, mock device, CLI, and web dashboard
- core / validators / report / review-model / CLI / UI の責務分割
- happy-path、missing-required、warning、mixed-batch の代表suite
- QCDS、security/privacy、release evidence、docs ZIP

## Commands

```powershell
npm test
npm run serve -- --port 4173
```

Open `http://localhost:4173/app/` for the closed alpha UI.
