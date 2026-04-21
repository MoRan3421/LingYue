--- Ling Yue Standard API (LingScript)
--- Inspired by Roblox Luau

--- @class Instance
--- @field Name string
--- @field Parent Instance
local Instance = {}

--- Creates a new instance of a class
--- @param class_name string
--- @return Instance
function Instance.new(class_name) 
    -- Handled by C Core
end

--- @class Game
local Game = {}

--- Returns a service by name
--- @param service_name string
--- @return any
function Game:GetService(service_name)
    -- Handled by C Core
end

--- Core Events
Game.ItemAdded = {} -- Event

return {
    Game = Game,
    Instance = Instance
}
