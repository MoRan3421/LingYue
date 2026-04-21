#ifndef LINGYUE_CORE_H
#define LINGYUE_CORE_H

#ifdef _WIN32
#define LINGYUE_API __declspec(dllexport)
#else
#define LINGYUE_API
#endif

#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// Engine initialization
LINGYUE_API int lingyue_init();
LINGYUE_API void lingyue_shutdown();

// Skill System
typedef struct {
    int id;
    float cooldown;
    float range;
    char type[32];
} Skill;

LINGYUE_API Skill lingyue_skill_get(int skill_id);
LINGYUE_API void lingyue_skill_cast(int entity_id, int skill_id);

// Lua Scripting
LINGYUE_API int lingyue_run_script(const char* script_content);
LINGYUE_API const char* lingyue_get_last_error();

// Instance Management (Roblox-like)
LINGYUE_API void* lingyue_instance_new(const char* class_name);
LINGYUE_API void lingyue_instance_set_property(void* instance, const char* prop_name, const char* value);

// Matchmaking EVMGSO-AURA
LINGYUE_API float lingyue_aura_calculate_fairness(int player_id, float skill_level);
LINGYUE_API int lingyue_aura_find_match(int player_id);

// Map Management
LINGYUE_API void lingyue_map_load(const char* map_id);
LINGYUE_API void* lingyue_map_get_object(int object_id);

// Asset Security
LINGYUE_API int lingyue_validate_asset_tx(int amount);

#endif // LINGYUE_CORE_H
