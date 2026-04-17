import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
            {/* 將原本的 P 改為 S */}
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              S
            </div>
            <span>SharePoint 實戰學院</span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            致力於提供最實用的 Microsoft SharePoint 教學。
          </p>
        </div>

        {/* Learning (核心資源) */}
        <div>
          <h4 className="font-semibold mb-4 text-slate-200">核心資源</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/basics/what-is-sharepoint" className="hover:text-primary transition">
                SharePoint 是什麼
              </Link>
            </li>
            <li>
              <Link href="/tutorials/operation-guide" className="hover:text-primary transition">
                網站架構
              </Link>
            </li>
            <li>
              <Link href="/scenarios/use-cases" className="hover:text-primary transition">
                核心內容
              </Link>
            </li>
          </ul>
        </div>

        {/* Support (支援服務) */}
        <div>
          <h4 className="font-semibold mb-4 text-slate-200">支援服務</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/support/faq" className="hover:text-primary transition">
                常見問題
              </Link>
            </li>
            <li>
              <Link href="/support/contact" className="hover:text-primary transition">
                聯絡我們
              </Link>
            </li>
          </ul>
        </div>

        {/* Official Links (官方連結) */}
        <div>
          <h4 className="font-semibold mb-4 text-slate-200">官方連結</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fm365.cloud.microsoft%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=639119917446815896.NWZlMzE1ZDktYzUyMC00M2I1LTk2M2EtNWU2NTllMmMxZmIxMGJjNDcwZTctMDA4NC00YTQ4LTk1ZDctYmY0N2FiOWNhNWFm&ui_locales=zh-TW&mkt=zh-TW&prompt=select_account&client-request-id=020a395b-e9a8-4d6c-8c74-feb8f40230f7&state=4fNVzUvnqaXKGdvGwPIecCNAdmAOc1UlbrR7Rst9mRfoAUymeXuNWZhWkVPanxF4h4gk-Fg_JyIYTZHV9gYbA09SRHPMdPC3EilO2zFPE6W0EKt6QHtkCIVj3V9BCn0sJcL82yw-oSb6C0nL4b-X_IH5xeDvP9FvVmT4p18yju1-d-9D91S9eZNdSVBR6_U_fVzdIIUG9_-Qt9vJWeMN4-1KJsnycHX7R--oIUrt39rrZj2N0jW7h3ENgjEUuiY0XxmjGgLJ9AYqbzqAycwlIMCp_-c-thuVpyxB2KZ4L6YxuDs24qKHkhUwX5bR0nkKzkqmQjAeD-QLmQ9WABsdL96N_XkoTxMXbE779KkDJ6MwES5AKLyyeofmIDOA5W5UhyzvW2D39GiY1BPTRw4cCh_m2G2cnBbnHHNuudI6SHmTxJmkghJVHOqF5OSUuO9z7UFerf9LIoq9g0ery3FIMFxjUfdOvyG78MozDs0VaOD3kfaB2qTnIqLFmfii7M-jSogi6UyeTdR2wurN6v3Ezw&x-client-SKU=ID_NET8_0&x-client-ver=8.14.0.0">
                SharePoint 網頁版
              </a>
            </li>
            <li>
              <a href="https://learn.microsoft.com/zh-tw/sharepoint/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                Microsoft 官方文檔
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="container mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} SharePoint 實戰學院. All rights reserved.</p>
      </div>
    </footer>
  );
}
