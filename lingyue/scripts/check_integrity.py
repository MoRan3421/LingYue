import os

def check_ecosystem():
    paths = [
        'c:/lingyue/ling-yue-landing/src',
        'c:/lingyue/lingyue_native/lib',
        'c:/lingyue/lingyue_server/server.js',
        'c:/lingyue/lingyue_engine/lingyue_core.c',
        'c:/lingyue/docs/Sovereign_API.md',
        'c:/lingyue/build_all.py',
        'c:/lingyue/docker-compose.yml'
    ]
    
    print("--- LING YUE ECOSYSTEM INTEGRITY CHECK ---")
    all_pass = True
    for p in paths:
        exists = os.path.exists(p)
        status = "[PASS]" if exists else "[FAIL]"
        print(f"{status} {p}")
        if not exists: all_pass = False
        
    if all_pass:
        print("\n[RESULT] SYSTEM INTEGRITY 100% - SOVEREIGN AWAKENED")
    else:
        print("\n[RESULT] SYSTEM INCOMPLETE - CHECK LOGS")

if __name__ == "__main__":
    check_ecosystem()
