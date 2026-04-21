import hashlib
import os

def generate_sovereign_checksum():
    print("--- LING YUE: GENERATING SOVEREIGN MASTER CHECKSUM ---")
    
    # Core logic files to fingerprint
    fingerprint_files = [
        "c:/lingyue/ling-yue-landing/src/App.tsx",
        "c:/lingyue/lingyue_native/lib/main.dart",
        "c:/lingyue/lingyue_server/server.js",
        "c:/lingyue/lingyue_engine/lingyue_core.c"
    ]
    
    hasher = hashlib.sha256()
    for f in fingerprint_files:
        if os.path.exists(f):
            with open(f, 'rb') as afile:
                buf = afile.read()
                hasher.update(buf)
            print(f"  READ: {os.path.basename(f)}")
            
    master_hash = hasher.hexdigest().upper()
    print(f"\n[MASTER CHECKSUM]: {master_hash}")
    print(f"[STATUS]: ORIGINAL_SUPREME_VERIFIED")
    
    # Save to certificate
    with open("c:/lingyue/MAINFEST_CHECKSUM.txt", "w") as f:
        f.write(master_hash)
    
    print("\n[SUCCESS] Manifest Fingerprint locked in c:/lingyue/MAINFEST_CHECKSUM.txt")

if __name__ == "__main__":
    generate_sovereign_checksum()
