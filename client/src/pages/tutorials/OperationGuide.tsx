import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, Globe, FileText, Shield, 
  History, RefreshCw, Layout, Image as ImageIcon, 
  Link as LinkIcon, MessageSquare, ArrowRight, PlayCircle
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function OperationTutorial() {
  const [activeTab, setActiveTab] = useState<'team' | 'communication'>('team');

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Header Section */}
      <section className="bg-primary/5 border-b border-border py-16">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <PlayCircle className="w-8 h-8 text-primary" />
            <h1 className="text-4xl font-bold text-foreground">SharePoint 實務操作指南</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
            這是一份專為企業日常辦公設計的完整操作手冊。我們將帶您從零開始，選擇正確的網站架構、熟練掌握雲端文件庫的進階管理技巧，並學習如何運用視覺化組件打造出專業的內部網站頁面。透過這些實務技巧，您將能大幅提升團隊的協作效率與數位化管理能力。
          </p>
        </div>
      </section>

      {/* Section 1: 網站架構選擇 */}
      <section className="py-20 border-b border-border">
        <div className="container max-w-5xl">
          <div className="mb-10">
            <Badge variant="outline" className="mb-3">第一步：奠定基礎</Badge>
            <h2 className="text-3xl font-bold mb-4">選擇最適合的網站架構</h2>
            <p className="text-muted-foreground leading-relaxed">
              建立 SharePoint 網站的第一步，就是根據您的實際需求選擇正確的範本。Microsoft 提供了小組網站與通訊網站兩種核心架構，兩者在權限預設與版面配置上皆有不同的優勢，正確的選擇能讓後續的維護工作事半功倍。
            </p>
          </div>

          <div className="flex bg-secondary/50 p-1 rounded-lg mb-8">
            <button
              onClick={() => setActiveTab('team')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'team'
                  ? 'bg-background shadow-sm text-foreground border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Users className="w-5 h-5" />
              小組網站 (Team Site)
            </button>
            <button
              onClick={() => setActiveTab('communication')}
              className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md font-medium transition-colors ${
                activeTab === 'communication'
                  ? 'bg-background shadow-sm text-foreground border-b-2 border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Globe className="w-5 h-5" />
              通訊網站 (Communication Site)
            </button>
          </div>

          <div className="bg-secondary/20 rounded-xl p-8 border border-border">
            {activeTab === 'team' ? (
              <div className="animate-in fade-in duration-300">
                <h3 className="text-xl font-bold mb-3">打造私密的高效協作空間</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  小組網站是專為特定專案團隊或部門打造的專屬虛擬辦公室。它具備強大的文件庫與版本控制功能，讓團隊成員可以即時共同編輯同一份文件，徹底擺脫檔案版本混亂的困擾。同時，它的權限控管相當嚴密，只有被邀請為群組成員的使用者才能進入並查看內容，確保機密專案資料絕不外流。最重要的是，它預設與 Microsoft Teams 深度整合，讓您能在熟悉的通訊軟體中直接處理網站工作。
                </p>
              </div>
            ) : (
              <div className="animate-in fade-in duration-300">
                <h3 className="text-xl font-bold mb-3">建立專業的企業資訊樞紐</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  通訊網站的主要目的是向廣泛的受眾進行單向的資訊廣播。它非常適合發佈公司最新消息、活動精采回顧或是重要政策宣導，讓全體員工都能在第一時間掌握企業動態。系統提供了豐富且美觀的網頁視覺化元件，讓您不需要撰寫任何程式碼，就能拼湊出具備專業質感的企業入口網頁面。在這裡，通常只有少數管理者擁有發佈權限，而大多數員工則以閱讀和瀏覽為主。
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 2: 文件庫實戰 */}
      <section className="py-20 border-b border-border bg-secondary/10">
        <div className="container max-w-5xl">
          <div className="mb-10">
            <Badge variant="outline" className="mb-3">第二步：核心應用</Badge>
            <h2 className="text-3xl font-bold mb-4">掌握文件庫管理神技</h2>
            <p className="text-muted-foreground leading-relaxed">
              文件庫是整個 SharePoint 平台中最具價值的功能區塊。它不僅僅是一個雲端儲存空間，更是一套具備智慧化管理機制的數位檔案櫃，能大幅改變您與團隊處理日常文件的方式。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <RefreshCw className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">本機同步體驗</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  透過與 OneDrive 的完美結合，您可以將 SharePoint 上的雲端文件庫直接同步到電腦的本機資料夾中。這意味著您可以像平常操作本機檔案一樣，直接在檔案總管中拖曳、分類與開啟文件，而所有變更都會在背景自動且即時地同步回雲端，兼顧了操作的直覺性與雲端的便利性。
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <History className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">自動版本歷程記錄</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  每當您或同事儲存文件時，系統會在背景自動建立一個新的版本紀錄。無論是不小心覆蓋了重要段落，還是需要找回上週的報表數據，您都可以隨時點擊檔案的歷程記錄，輕鬆預覽並一鍵還原到過去的任何一個時間點，再也不需要手動另存一堆帶有日期的備份檔案。
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-md transition-shadow">
              <CardHeader>
                <Shield className="w-8 h-8 text-primary mb-2" />
                <CardTitle className="text-lg">精準的共用與權限</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  想要分享單一檔案給跨部門同事，卻不想讓他們看到整個資料夾？您可以針對個別檔案產生專屬的共用連結，並設定「僅供檢視」或「允許編輯」的權限，甚至能夠設定連結的有效期限與密碼保護，確保每一次的資訊傳遞都在您的絕對掌控之中。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Section 3: 網頁組件與排版 */}
      <section className="py-20">
        <div className="container max-w-5xl">
          <div className="mb-10">
            <Badge variant="outline" className="mb-3">第三步：優化視覺</Badge>
            <h2 className="text-3xl font-bold mb-4">活用網頁組件豐富版面</h2>
            <p className="text-muted-foreground leading-relaxed">
              一個吸引人的網站不僅需要豐富的內容，更需要清晰的視覺動線。SharePoint 將網頁設計簡化為直觀的「網頁組件 (Web Parts)」拼圖遊戲，您只需點擊、拖曳，就能為團隊打造出美觀且高度實用的專屬頁面。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <Layout className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold mb-2">英雄看板 (Hero)</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                這是最適合放在首頁頂端的視覺焦點，能透過高質感的大圖層疊排版，強勢吸引訪客目光，並引導他們點擊最重要的焦點新聞或專案連結。
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <LinkIcon className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold mb-2">快速連結 (Quick Links)</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                將團隊日常最常使用的外部系統、打卡系統或重要規章表單，整理成帶有精美圖示的按鈕矩陣，讓入口網站真正成為同仁辦公的第一站。
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <ImageIcon className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold mb-2">影像圖庫 (Image Gallery)</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                完美的活動紀錄展示區，您可以將公司尾牙、部門聚餐或廠區視察的相片以輪播或磚塊拼貼的方式呈現，快速凝聚團隊向心力。
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border bg-card hover:border-primary/50 transition-colors">
              <MessageSquare className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold mb-2">最新消息 (News)</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                系統會自動彙整並以圖文並茂的卡片形式，依序展示網站內發佈的各項公告與文章，確保重要佈達不會被淹沒在茫茫資訊中。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-6">準備好親自實作了嗎？</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            理論已經裝備完畢，現在就開啟您的 SharePoint 管理中心，嘗試建立您的第一個專案小組網站，並上傳一份測試檔案體驗版本歷程記錄的強大功能吧！
          </p>
          <a href="https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fm365.cloud.microsoft%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=639119917446815896.NWZlMzE1ZDktYzUyMC00M2I1LTk2M2EtNWU2NTllMmMxZmIxMGJjNDcwZTctMDA4NC00YTQ4LTk1ZDctYmY0N2FiOWNhNWFm&ui_locales=zh-TW&mkt=zh-TW&prompt=select_account&client-request-id=020a395b-e9a8-4d6c-8c74-feb8f40230f7&state=4fNVzUvnqaXKGdvGwPIecCNAdmAOc1UlbrR7Rst9mRfoAUymeXuNWZhWkVPanxF4h4gk-Fg_JyIYTZHV9gYbA09SRHPMdPC3EilO2zFPE6W0EKt6QHtkCIVj3V9BCn0sJcL82yw-oSb6C0nL4b-X_IH5xeDvP9FvVmT4p18yju1-d-9D91S9eZNdSVBR6_U_fVzdIIUG9_-Qt9vJWeMN4-1KJsnycHX7R--oIUrt39rrZj2N0jW7h3ENgjEUuiY0XxmjGgLJ9AYqbzqAycwlIMCp_-c-thuVpyxB2KZ4L6YxuDs24qKHkhUwX5bR0nkKzkqmQjAeD-QLmQ9WABsdL96N_XkoTxMXbE779KkDJ6MwES5AKLyyeofmIDOA5W5UhyzvW2D39GiY1BPTRw4cCh_m2G2cnBbnHHNuudI6SHmTxJmkghJVHOqF5OSUuO9z7UFerf9LIoq9g0ery3FIMFxjUfdOvyG78MozDs0VaOD3kfaB2qTnIqLFmfii7M-jSogi6UyeTdR2wurN6v3Ezw&x-client-SKU=ID_NET8_0&x-client-ver=8.14.0.0">
  <Button size="lg" className="bg-background text-primary hover:bg-secondary">
    前往微軟登入入口 <ArrowRight className="ml-2 w-4 h-4" />
  </Button>
</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
