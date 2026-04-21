import os
import zipfile
from datetime import datetime

def backup_system():
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_name = f"c:/lingyue/backups/LingYue_Sovereign_Backup_{timestamp}.zip"
    
    if not os.path.exists('c:/lingyue/backups'):
        os.makedirs('c:/lingyue/backups')
        
    folders_to_backup = [
        'c:/lingyue/data',
        'c:/lingyue/docs',
        'c:/lingyue/lingyue_server',
        'c:/lingyue/scripts'
    ]
    
    print(f"--- 始源归档序列开启: {timestamp} ---")
    with zipfile.ZipFile(backup_name, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for folder in folders_to_backup:
            for root, dirs, files in os.walk(folder):
                for file in files:
                    file_path = os.path.join(root, file)
                    arcname = os.path.relpath(file_path, 'c:/lingyue')
                    zipf.write(file_path, arcname)
                    
    print(f"\n[SUCCESS] 归档圆满完成: {backup_name}")

if __name__ == "__main__":
    backup_system()
