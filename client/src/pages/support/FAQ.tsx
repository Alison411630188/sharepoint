import { useState } from 'react';
import { ChevronDown, HelpCircle, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import Footer from '@/components/Footer';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  category: string;
  items: Array<{
    q: string;
    a: string;
  }>;
}

const faqData: FAQItem[] = [
  {
    category: '基礎概念',
    items: [
      {
        q: 'SharePoint 和 OneDrive 有什麼區別？',
        a: 'OneDrive 是專屬個人的雲端保險箱，適合存放尚未準備好公開的私人草稿或個人工作檔案。而 SharePoint 則是專為企業打造的強大協作樞紐，適合用來集中管理跨部門共用的專案檔案，或是建立向全公司佈達資訊的專屬入口網站。',
      },
      {
        q: '建立 SharePoint 網站需要懂程式設計嗎？',
        a: '完全不需要！SharePoint 提供了非常直觀的視覺化編輯介面與豐富的網頁組件。您只需要像拼積木一樣，在畫面上拖曳圖片、文字或是快速連結區塊，就能輕鬆搭建出具備專業質感的企業入口網站。',
      },
      {
        q: '外部人員（客戶或廠商）可以使用我們的 SharePoint 嗎？',
        a: '可以的。只要貴公司的系統管理員有開放外部共用功能，您就能透過設定安全的專屬共用連結，邀請外部的合作夥伴檢視或共同編輯特定的檔案與資料夾，確保溝通無礙的同時也兼顧資料安全。',
      },
    ],
  },
  {
    category: '網站架構與權限',
    items: [
      {
        q: '小組網站和通訊網站該選哪一個？',
        a: '如果您需要的是一個讓特定部門內部進行私密專案協作與檔案共同編輯的空間，請選擇「小組網站」。若您的目標是建立一個讓全公司都能觀看最新公告、HR 規章或是福委會活動的官方佈告欄，那麼單向資訊傳遞的「通訊網站」將會是您的最佳選擇。',
      },
      {
        q: '如何讓特定機密資料夾只有少數人能看見？',
        a: '您可以在該特定的機密資料夾上點選管理存取權，並選擇停止繼承外層網站的權限。這麼一來，您就能為這個資料夾換上一道獨立的電子門鎖，並單獨移除其他成員的檢視或編輯資格，打造出絕對安全的專屬空間。',
      },
      {
        q: '網站的擁有者、成員與訪客有什麼不同？',
        a: '網站「擁有者」具備最高管理權限，可以自由修改網站架構與增刪成員名單。網站「成員」則是協作的主力，可以自由地在文件庫中新增、編輯與刪除檔案。而「訪客」層級則僅擁有純閱讀的權限，他們只能夠瀏覽網頁與下載檔案，無法對網站內容做出任何更改。',
      },
    ],
  },
  {
    category: '檔案與文件庫管理',
    items: [
      {
        q: '如何將雲端檔案同步到我的電腦裡？',
        a: '只要進入您的 SharePoint 文件庫，點擊上方的同步處理按鈕並允許開啟 OneDrive 應用程式，系統就會在背景自動進行連結。完成後，您就能直接在電腦的檔案總管中存取與編輯這些雲端資料，享受如同操作本機檔案般的順暢體驗。',
      },
      {
        q: '如果不小心覆蓋了重要的報表內容該怎麼辦？',
        a: '別擔心，SharePoint 具備強大的版本控制機制。每當檔案被儲存時，系統都會在背景自動留下一筆紀錄。您只需在檔案旁邊點擊版本歷程記錄，就能輕鬆預覽並一鍵還原到過去的任何一個時間點，再也不用害怕資料被意外竄改。',
      },
      {
        q: '有人把檔案誤刪了，還可以救回來嗎？',
        a: '可以的。在 SharePoint 中被刪除的任何檔案與資料夾，都會先被移至網站專屬的資源回收筒保留一段時間（通常預設為 93 天）。只要在這段寬限期內，任何人都可以隨時前往資源回收筒將誤刪的檔案安全地還原至原本的位置。',
      },
    ],
  },
  {
    category: 'Teams 完美整合',
    items: [
      {
        q: '如何在 Teams 中直接查看 SharePoint 的檔案？',
        a: '其實每一個 Teams 團隊群組的背後，都自動連接著一個專屬的 SharePoint 小組網站。當您在 Teams 頻道的「檔案」頁籤中上傳或編輯的任何文件，實際上就是直接儲存在 SharePoint 的文件庫中，兩邊的資料是完全同步且無縫接軌的。',
      },
      {
        q: '可以把整個 SharePoint 網站放到 Teams 裡面嗎？',
        a: '沒問題！您只需要在 Teams 頻道畫面的最上方點擊新增索引標籤（帶有加號的圖示），接著搜尋並加入 SharePoint 應用程式，最後貼上您的網站網址即可。這樣一來，團隊同仁就能不切換視窗，直接在熟悉的 Teams 介面裡瀏覽完整的內部網站。',
      },
    ],
  },
  {
    category: '頁面排版與設計',
    items: [
      {
        q: '什麼是網頁組件 (Web Parts)？',
        a: '網頁組件就像是拼湊出精美網頁的視覺化積木。無論您是想要放上醒目的重點輪播大圖、建立常用的快速連結按鈕區塊，還是嵌入一段宣傳影片，都可以透過自由拖曳這些不同功能的網頁組件，快速豐富您的網站內容。',
      },
      {
        q: '首頁發佈後如果覺得排版不好看，還可以修改嗎？',
        a: '隨時都可以。只要點擊網站畫面右上角的編輯按鈕，整個頁面就會立刻回到帶有網格線的編輯模式，讓您可以重新調整各個組件的上下順序或是替換圖片。所有的調整確認完畢後再次點擊重新發佈，大家就會立刻看到最新的漂亮版面。',
      },
    ],
  },
];

export default function FAQ() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setExpandedItem(expandedItem === key ? null : key);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        {/* Header */}
        <div className="bg-primary/5 border-b border-border py-16">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
                <HelpCircle className="w-10 h-10 text-primary" /> 常見問題 (FAQ)
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                在這裡，我們彙整了企業同仁在使用 SharePoint 時最常遇到的實務疑問，幫助您快速排除障礙。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-20">
          <div className="max-w-3xl mx-auto">
            {faqData.map((category, catIdx) => (
              <div key={category.category} className="mb-12">
                <MotionContainer direction="up" delay={catIdx * 0.1}>
                  <h2 className="text-xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">
                    {category.category}
                  </h2>
                </MotionContainer>
                
                <div className="space-y-4">
                  {category.items.map((item, idx) => {
                    const itemKey = `${category.category}-${idx}`;
                    const isOpen = expandedItem === itemKey;
                    
                    return (
                      <MotionContainer key={itemKey} direction="up" delay={catIdx * 0.05 + idx * 0.02}>
                        <motion.div
                          className="border border-border rounded-lg overflow-hidden bg-card hover:border-primary/30 transition-colors"
                          initial={false}
                        >
                          <button
                            onClick={() => toggleItem(itemKey)}
                            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                          >
                            <span className="font-semibold text-foreground">{item.q}</span>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <ChevronDown className="w-5 h-5 text-primary" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="px-6 py-4 border-t border-border bg-muted/30 text-muted-foreground leading-relaxed">
                                  {item.a}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </MotionContainer>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Tip Section */}
            <MotionContainer direction="up">
              <div className="mt-16 p-6 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                <div className="flex gap-4">
                  <Lightbulb className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-foreground mb-2">💡 沒有找到答案？</p>
                    <p className="text-muted-foreground">
                      如果您的問題沒有在上面列出，請隨時聯繫系統管理團隊或技術支援中心。我們很樂意為您解答！
                    </p>
                    <Link href="/support/contact">
                      <HoverScale>
                        <Button size="sm" className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                          聯繫支援團隊
                        </Button>
                      </HoverScale>
                    </Link>
                  </div>
                </div>
              </div>
            </MotionContainer>
          </div>
        </div>

        <Footer />
      </div>
    </PageTransition>
  );
}