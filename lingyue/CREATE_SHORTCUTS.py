import os
import subprocess

def create_sovereign_shortcut():
    print("--- LING YUE: CREATING SOVEREIGN DESKTOP SHORTCUT ---")
    
    desktop = os.path.join(os.environ['USERPROFILE'], 'Desktop')
    path = os.path.join(desktop, "Ling Yue Sovereign.lnk")
    target = r"c:\lingyue\SOVEREIGN.bat"
    workdir = r"c:\lingyue"
    
    # PowerShell command to create shortcut
    ps_script = f"""
    $WshShell = New-Object -ComObject WScript.Shell
    $Shortcut = $WshShell.CreateShortcut("{path}")
    $Shortcut.TargetPath = "{target}"
    $Shortcut.WorkingDirectory = "{workdir}"
    $Shortcut.Description = "Ling Yue: Sovereign Awakening Master Entry"
    $Shortcut.Save()
    """
    
    try:
        subprocess.run(["powershell", "-Command", ps_script], check=True)
        print(f"[SUCCESS] Sovereign Shortcut manifested on Desktop: {path}")
    except Exception as e:
        print(f"[ERROR] Failed to manifest shortcut: {e}")

if __name__ == "__main__":
    create_sovereign_shortcut()
