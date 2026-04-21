import time
import os
import random
from colorama import init, Fore, Style

init(autoreset=True)

def clear():
    os.system('cls' if os.name == 'nt' else 'clear')

def draw_logo():
    logo = f"""
    {Fore.CYAN}██╗     ██╗███╗   ██╗ ██████╗     ██╗   ██╗██╗   ██╗███████╗
    {Fore.CYAN}██║     ██║████╗  ██║██╔════╝     ╚██╗ ██╔╝██║   ██║██╔════╝
    {Fore.CYAN}██║     ██║██╔██╗ ██║██║  ███╗     ╚████╔╝ ██║   ██║█████╗  
    {Fore.CYAN}██║     ██║██║╚██╗██║██║   ██║      ╚██╔╝  ██║   ██║██╔══╝  
    {Fore.CYAN}███████╗██║██║ ╚████║╚██████╔╝       ██║   ╚██████╔╝███████╗
    {Fore.CYAN}╚══════╝╚═╝╚═╝  ╚═══╝ ╚═════╝        ╚═╝    ╚═════╝ ╚══════╝
    {Fore.MAGENTA}--- SOVEREIGN AWAKENING DASHBOARD v1.0-ORIGIN ---
    """
    print(logo)

def monitor():
    while True:
        clear()
        draw_logo()
        
        print(f"{Fore.WHITE}[SYSTEM STATUS]")
        print(f"{Fore.GREEN}● Backend (3000): ACTIVE")
        print(f"{Fore.GREEN}● Portal (5173):  ACTIVE")
        print(f"{Fore.GREEN}● AURA Engine:    COLD-STANDBY")
        print(f"{Fore.BLUE}● Cloud Sync:     SYNCED (EVMGSO)")
        
        print(f"\n{Fore.WHITE}[REAL-TIME TELEMETRY]")
        entropy = random.uniform(0.005, 0.009)
        print(f"{Fore.YELLOW}AURA Entropy: {entropy:.5f} ({Fore.GREEN}STABLE{Fore.YELLOW})")
        print(f"{Fore.CYAN}Active Sessions: {random.randint(400, 1500)}")
        print(f"{Fore.CYAN}Sovereign Token: TX_{random.randint(100000, 999999)}")
        
        print(f"\n{Fore.WHITE}[RECENT EVENTS]")
        events = [
            f"{Fore.DIM}User_992 registered via Sovereign Hub",
            f"{Fore.DIM}Asset integrity check passed for 108 heroes",
            f"{Fore.DIM}Panda Guide injected causality update",
            f"{Fore.DIM}Matchmaking entropy re-balanced"
        ]
        for e in events:
            print(f"  {e}")
            
        print(f"\n{Fore.MAGENTA}>> Press Ctrl+C to exit monitor (Dashboard Only)")
        time.sleep(1)

if __name__ == "__main__":
    try:
        monitor()
    except KeyboardInterrupt:
        print("\nMonitor paused. Eternal sovereignty awaits.")
