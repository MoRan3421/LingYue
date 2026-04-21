# 始源 API 文档 (SOVEREIGN API DOCUMENTATION)

本文档描述了灵约 (Ling Yue) 后端服务的核心接口，用于实现跨端资产同步与 AURA 算力调度。

## 1. 资产同步服务 (Asset Sync)

### GET /api/assets/:playerId
获取玩家的九道资产余额。
- **Response**:
  ```json
  {
    "灵约石": 1420,
    "功德": 5200,
    "业力": 980,
    "因果": 12500
  }
  ```

### POST /api/assets/update
提交资产变动申请。须通过 C 核心的 `lingyue_validate_asset_tx` 校验。
- **Body**: `{ "playerId": "...", "type": "灵约石", "delta": 100 }`

## 2. AURA 匹配引擎 (AURA Matchmaking)

### POST /api/aura/match
请求全球熵值对局。
- **Body**: `{ "playerId": "...", "skillLevel": 42.5 }`
- **Response**: 
  - `status`: "MATCHED" | "RECALCULATING"
  - `entropy`: 当前全局公平系数 (< 0.01)

## 3. 金榜服务 (Leaderboard)

### GET /api/rankings
获取全球始源金榜前 100 名。

---
© 2026 灵约工作室 | 始源永恒
