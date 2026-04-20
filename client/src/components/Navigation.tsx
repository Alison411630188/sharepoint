import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import SearchBox from './SearchBox';
import CviLuxLogo from '../assets/CivLux-Logo.png';
import { useTheme } from "../contexts/ThemeContext";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  // 頁面跳轉時滾動到頂部 (主要針對不同頁面的跳轉)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // 👇 1. 新增：電腦版專用的平滑滾動函數
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 👇 2. 新增：手機版專用，點擊後「關閉選單」並「平滑滾動」
  const handleMobileLinkClick = () => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        
        {/* Logo */}
        <Link href="/" onClick={handleLinkClick} className="flex items-center gap-2 font-bold text-lg">
          <img
            src={CviLuxLogo}
            alt="CviLux Logo"
            className="w-16 h-16 object-contain"
          />
          <span className="text-foreground">SharePoint 實戰學院</span>
        </Link>

        {/* Desktop Navigation (電腦版選單) */}
        <div className="hidden md:flex items-center gap-8">
          {/* 👇 3. 電腦版連結全部加上 onClick={handleLinkClick} */}
          <Link href="/basics/what-is-automate" onClick={handleLinkClick} className="text-foreground hover:text-primary transition font-medium">
            入門指南
          </Link>

          <Link href="/tutorials/operation-guide" onClick={handleLinkClick} className="text-foreground hover:text-primary transition font-medium">
            網站架構
          </Link>

          <Link href="/hub-site" onClick={handleLinkClick} className="text-foreground hover:text-primary transition font-medium">
            中樞網站
          </Link>

          <Link href="/scenarios/use-cases" onClick={handleLinkClick} className="text-foreground hover:text-primary transition font-medium">
            核心內容
          </Link>

          <Link href="/support/faq" onClick={handleLinkClick} className="text-foreground hover:text-primary transition font-medium">
            常見問題
          </Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <SearchBox />
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-foreground"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2 sm:gap-4">
          <SearchBox />
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-foreground"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>

          <button
            className="p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation (手機版漢堡選單) */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-4">
            {/* 👇 4. 手機版連結全部加上 onClick={handleMobileLinkClick} */}
            <Link href="/basics/what-is-automate" onClick={handleMobileLinkClick} className="block font-semibold text-foreground">
              入門指南
            </Link>
            <Link href="/tutorials/operation-guide" onClick={handleMobileLinkClick} className="block font-semibold text-foreground">
              網站架構
            </Link>
            
            <Link href="/hub-site" onClick={handleMobileLinkClick} className="block font-semibold text-foreground">
              中樞網站
            </Link>

            <Link href="/scenarios/use-cases" onClick={handleMobileLinkClick} className="block font-semibold text-foreground">
              核心內容
            </Link>
            <Link href="/support/faq" onClick={handleMobileLinkClick} className="block font-semibold text-foreground">
              常見問題
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}