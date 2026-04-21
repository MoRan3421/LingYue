# LingScript: 始源开发者指南 (Developer Guide)

欢迎来到灵约 (Ling Yue) 的可编程核心。通过 LingScript (基于 Lua)，您可以自定义英雄、技能及地图逻辑。

## 1. 核心 API (Core API)

### Game:GetService(serviceName)
获取全局服务。
- `Matchmaking`: 处理 AURA 熵值计算。
- `MapManager`: 加载 3.5D 模型。
- `AssetStore`: 调用 9 道资产。

### Instance.new(className)
创建一个新的始源实体。
- `Hero`: 创建 3D 英雄。
- `VFX`: 创建技能特效。

## 2. 英雄开发示例 (Hero Example)

```lua
-- 创建始源武僧
local Monk = Instance.new("Hero")
Monk.Name = "SovereignMonk"
Monk.Class = "Fire" -- 业火

-- 定义技能
function Monk:OnCastQ()
    local burst = Instance.new("VFX")
    burst.Type = "Explosion"
    burst.Color = "#F472B6" -- 粉蓝紫主题色
    burst.Damage = 1420
end
```

## 3. 资产同步 (Syncing)
所有通过脚本产生的变动均会实时同步至 `lingyue_server` 的因果数据库中。

## 4. 9 道资产调用
```lua
local assets = Game:GetService("AssetStore")
if assets:GetBalance("功德") > 1000 then
    -- 允许执行某些高阶操作
end
```
