import { Link } from 'wouter';

/**
 * Footer Component - Enterprise SharePoint Portal Style
 * Design Philosophy: Modern Enterprise
 * - Clean, professional footer with clear information hierarchy
 * - Subtle background color for visual separation
 */

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-20">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-foreground mb-4">關於</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Power Automate 實戰學院是企業內部協作與知識共享的專業平台。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">快速連結</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <a className="text-muted-foreground hover:text-primary transition-colors">首頁</a>
                </Link>
              </li>
              <li>
                <Link href="/knowledge-base">
                  <a className="text-muted-foreground hover:text-primary transition-colors">知識庫</a>
                </Link>
              </li>
              <li>
                <Link href="/scenario-gallery">
                  <a className="text-muted-foreground hover:text-primary transition-colors">案例庫</a>
                </Link>
              </li>
              <li>
                <Link href="/document-center">
                  <a className="text-muted-foreground hover:text-primary transition-colors">文件中心</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-foreground mb-4">資源</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Microsoft 文件
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  最佳實踐
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  常見問題
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-foreground mb-4">聯絡我們</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: support@example.com</li>
              <li>電話: +886 2 XXXX-XXXX</li>
              <li>工作時間: 週一至週五 09:00-18:00</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; 2026 Power Automate 實戰學院. 保留所有權利。</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary transition-colors">隱私政策</a>
              <a href="#" className="hover:text-primary transition-colors">使用條款</a>
              <a href="#" className="hover:text-primary transition-colors">網站地圖</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
