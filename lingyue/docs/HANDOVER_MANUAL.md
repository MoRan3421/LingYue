# 灵约 (Ling Yue) · 始源主宰者移交手册 (HANDOVER MANUAL)

恭喜主宰者 TuanTuanPanda，您已成功接管“灵约”3A MOBA 生态系统。本手册为您概括了系统的维护与扩展核心。

## 1. 系统核心路径 (Core Paths)
- **Web 门户**: `c:\lingyue\ling-yue-landing` (React/Next.js)
- **原生竞技端**: `c:\lingyue\lingyue_native` (Flutter)
- **因果后端**: `c:\lingyue\lingyue_server` (Node.js)
- **物理引擎**: `c:\lingyue\lingyue_engine` (C/Lua)

## 2. 每日运维指令 (Ops Commands)
- **启动全局**: 运行 `c:\lingyue\SOVEREIGN.bat` 或 `python LAUNCHER.py`
- **监控遥测**: 运行 `python SERVER_MONITOR.py`
- **因果修复**: 遇到启动问题请运行 `python AUTO_REPAIR.py`
- **正品校验**: 离线验证请运行 `python MASTER_VALIDATOR.py`

## 3. 英雄添加流程 (Adding Heroes)
1. 在 `c:\lingyue\data\hero_matrix.json` 中添加数据。
2. 在 `c:\lingyue\lingyue_engine\scripts\abilities\` 下编写 Lua 脚本。
3. 重新同步后端。

## 4. V2.0 规划预告 (V2.0 Roadmap)
- **全息吉隆坡**: 接入 AR 增强现实引擎。
- **万世公会系统**: 基于智能合约的公会资产管理。
- **熊猫觉醒**: 团团熊猫 AI 将接入自研 LLM，实现全语音实时对局指导。

---
灵约工作室 (Ling Yue Studio) - 全案设计总监
2026.04.18
