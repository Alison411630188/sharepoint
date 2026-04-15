import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Search } from 'lucide-react';

/**
 * Navigation Component - Enterprise SharePoint Portal Style
 * Design Philosophy: Modern Enterprise
 * - Deep blue (#1F5BA8) primary color for professional trust
 * - Clean, minimalist header with clear visual hierarchy
 * - Responsive design with mobile menu support
 * - Subtle hover effects for interactive feedback
 */

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navItems = [
    { label: '首頁', href: '/' },
    { label: '知識庫', href: '/knowledge-base' },
    { label: '案例庫', href: '/scenario-gallery' },
    { label: '文件中心', href: '/document-center' },
    { label: '技術支援', href: '/support' },
  ];

  const isActive = (href: string) => location === href;

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        
        {/* Logo & Brand */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">PA</span>
          </div>
          <div className="hidden sm:block">
            <div className="text-sm font-bold text-foreground leading-tight">Power Automate</div>
            <div className="text-xs text-muted-foreground">實戰學院</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a
                className={`px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(item.href)
                    ? 'text-primary bg-secondary'
                    : 'text-foreground hover:text-primary hover:bg-secondary/50'
                }`}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="text-foreground hover:bg-secondary"
          >
            <Search className="w-5 h-5" />
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:bg-secondary rounded-md transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-primary bg-secondary'
                      : 'text-foreground hover:text-primary hover:bg-secondary/50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
