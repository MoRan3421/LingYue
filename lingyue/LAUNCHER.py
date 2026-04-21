import subprocess
import time
import os
import webbrowser

def launch_ecosystem():
    print("--- LING YUE: SOVEREIGN ENGINE LAUNCH SEQUENCE ---")
    
    # 1. Start Backend
    print("[1/3] Awakening Backend (server.js)...")
    backend = subprocess.Popen(["node", "server.js"], cwd="c:/lingyue/lingyue_server")
    time.sleep(2)
    
    # 2. Start Portal
    print("[2/3] Syncing Sovereign Portal (ling-yue-landing)...")
    portal = subprocess.Popen(["npm", "run", "dev"], cwd="c:/lingyue/ling-yue-landing", shell=True)
    time.sleep(3)
    
    # 3. Open Hub
    print("[3/3] Opening Sovereign Hub...")
    webbrowser.open("file:///c:/lingyue/SOVEREIGN_HUB.html")
    
    print("\n[SUCCESS] SYSTEM ASCENDED. Press Ctrl+C to shutdown.")
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        print("\n[SHUTDOWN] Closing Sovereign veins...")
        backend.terminate()
        portal.terminate()

if __name__ == "__main__":
    launch_ecosystem()
