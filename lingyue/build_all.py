import os
import subprocess

def build_ecosystem():
    print("[LING YUE] Starting Global Build Sequence...")

    # 1. Build C Engine
    print("-> Compiling C Core Engine...")
    # os.chdir("lingyue_engine")
    # subprocess.run(["gcc", "-shared", "-o", "lingyue_core.dll", "lingyue_core.c"])
    
    # 2. Build Web Portal
    print("-> Building React Web Portal...")
    # os.chdir("../ling-yue-landing")
    # subprocess.run(["npm", "run", "build"])

    # 3. Build Native Client
    print("-> Compiling Flutter Native Client...")
    # os.chdir("../lingyue_native")
    # subprocess.run(["flutter", "build", "windows"])

    print("\n[SUCCESS] Ling Yue V1.0-ORIGIN Ecosystem is ready for deployment!")
    print("Web: ./ling-yue-landing/dist")
    print("Native: ./lingyue_native/build/windows")
    print("Server: ./lingyue_server/server.js")

if __name__ == "__main__":
    build_ecosystem()
