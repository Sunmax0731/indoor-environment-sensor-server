export const productProfile = {
  "repo": "indoor-environment-sensor-server",
  "title": "室内環境センサー蓄積サーバー",
  "domain": "IoT",
  "version": "0.1.0-alpha.1",
  "rank": 57,
  "tier": "P3",
  "score": 53,
  "publicTarget": "GitHub Release / 自宅LAN",
  "overview": "温湿度、気圧、照度、CO2風データ、M5Stackセンサー値をRaspberry Piに蓄積する。",
  "problem": "センサー値がその場表示だけで終わり、傾向や異常原因を追えない。",
  "differentiation": "生活ログとデバイスログを同じ時間軸で確認する。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/simulator",
    "src/device-adapter",
    "src/host-adapter"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "実機なしで検証できるようsample telemetry、mock device、dry-run CLI、Web dashboardに閉じる。",
    "家庭LAN公開時は認証、端末allowlist、危険操作の二段階確認、ログ、復旧手順を必須にする。",
    "カメラ、ファイル、MQTT、自動化、バックアップ、OCR、音声/RSS保存は読み取り、匿名サンプル、dry-runを既定にする。"
  ]
};
