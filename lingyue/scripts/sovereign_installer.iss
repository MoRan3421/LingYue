; Sovereign Installer Script for Ling Yue
; REQUIRES INNO SETUP TO COMPILE

[Setup]
AppName=Ling Yue: Sovereign Awakening
AppVersion=1.0.0
DefaultDirName={pf}\LingYueStudio\LingYue
DefaultGroupName=Ling Yue
OutputBaseFilename=LingYue_Sovereign_Setup
Compression=lzma
SolidCompression=yes

[Files]
; Portals & Backend
Source: "c:\lingyue\ling-yue-landing\dist\*"; DestDir: "{app}\portal"; Flags: recursesubdirs
Source: "c:\lingyue\lingyue_server\*"; DestDir: "{app}\server"; Flags: recursesubdirs
; Native App
Source: "c:\lingyue\lingyue_native\build\windows\runner\Release\*"; DestDir: "{app}"; Flags: recursesubdirs
; Documentation
Source: "c:\lingyue\docs\*"; DestDir: "{app}\docs"

[Icons]
Name: "{group}\Ling Yue Sovereign"; Filename: "{app}\lingyue_native.exe"
Name: "{commondesktop}\Ling Yue Sovereign"; Filename: "{app}\lingyue_native.exe"

[Run]
Filename: "{app}\lingyue_native.exe"; Description: "启动灵约 (Launch Ling Yue)"; Flags: nowait postinstall skipifsilent
