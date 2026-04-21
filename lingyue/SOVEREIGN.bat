@echo off
title LING YUE: SOVEREIGN TERMINAL
cls
echo ==========================================
echo    LING YUE: SOVEREIGN AWAKENING V1.0
echo ==========================================
echo [1] 启动全量生态系统 (Start Ecosystem)
echo [2] 运行完整性自检 (Integrity Check)
echo [3] 开启开发者中枢 (Developer Hub)
echo [4] 查看始源手册 (Read Manual)
echo [5] 退出 (Exit)
echo ==========================================
set /p opt="请选择指令 [1-5]: "

if %opt%==1 (
    python c:\lingyue\LAUNCHER.py
)
if %opt%==2 (
    python c:\lingyue\scripts\check_integrity.py
    pause
    goto start
)
if %opt%==3 (
    start c:\lingyue\SOVEREIGN_HUB.html
    goto start
)
if %opt%==4 (
    notepad c:\lingyue\docs\Sovereign_Manual_V1.md
    goto start
)
if %opt%==5 (
    exit
)

:start
goto :eof
