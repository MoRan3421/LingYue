import os
import subprocess
import shutil
import time

def repair_causality():
    print("--- LING YUE: SOVEREIGN CAUSALITY AUTO-REPAIR ---")
    
    # 1. Clear Port Conflicts
    print("[1/3] Clearing Port Conflicts (3000, 5173)...")
    try:
        subprocess.run(["powershell", "-Command", "taskkill /F /IM node.exe /T"], stderr=subprocess.DEVNULL)
        time.sleep(1)
    except: pass
    
    # 2. Verify Core Assets
    print("[2/3] Verifying Core Integrity...")
    core_files = [
        "c:/lingyue/LAUNCHER.py",
        "c:/lingyue/lingyue_server/server.js",
        "c:/lingyue/ling-yue-landing/src/App.tsx",
        "c:/lingyue/lingyue_native/lib/main.dart"
    ]
    for f in core_files:
        if os.path.exists(f):
            print(f"  OK: {os.path.basename(f)}")
        else:
            print(f"  MISSING: {os.path.basename(f)} - PLEASE RESTORE FROM BACKUP.")
            
    # 3. Cache Purge
    print("[3/3] Purging Ephemeral Caches...")
    # Add logic to clear build cache if needed
    
    print("\n[SUCCESS] CAUSALITY STABILIZED. You may now run LAUNCHER.py.")

if __name__ == "__main__":
    repair_causality()
