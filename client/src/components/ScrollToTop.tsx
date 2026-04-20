import { useEffect } from 'react';
import { useLocation } from 'wouter';

export default function ScrollToTop() {
  // 取得目前的網址路徑
  const [pathname] = useLocation();

  useEffect(() => {
    // 只要 pathname 改變，就平滑滾動到最上方
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
}