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
        q: 'SharePoint 和 Power Apps 有什麼區別？',
        a: 'SharePoint 是自動化工具，用於自動化工作流程。Power Apps 是應用程式開發工具，用於建立業務應用程式。兩者可以結合使用，但功能不同。',
      },
      {
        q: 'SharePoint 是否免費？',
        a: 'SharePoint 提供免費版本，包含基本功能。多數企業可以免費開始使用。進階功能和更高的執行限制需要付費授權。',
      },
      {
        q: '我需要程式背景才能使用 SharePoint 嗎？',
        a: '完全不需要！SharePoint 使用拖拉介面和預先建立的連接器，任何人都可以建立自動化流程。',
      },
    ],
  },
  {
    category: '雲端流程',
    items: [
      {
        q: '如何建立我的第一個雲端流程？',
        a: '訪問 https://flow.microsoft.com，登入您的 Microsoft 帳戶，點擊「建立」並選擇流程類型（自動化、即時或排程）。然後設定觸發器和動作。',
      },
      {
        q: '什麼是觸發器？',
        a: '觸發器是啟動流程的事件。例如，「收到郵件」是 Outlook 連接器的觸發器。當該事件發生時，流程就會自動執行。',
      },
      {
        q: '什麼是動作？',
        a: '動作是流程執行的具體工作。例如，「發送郵件」、「建立任務」或「複製檔案」。一個流程可以包含多個動作。',
      },
      {
        q: '連接器是什麼？',
        a: '連接器是 SharePoint 與其他應用程式的橋樑。例如，Outlook 連接器讓您在流程中使用郵件功能。SharePoint 支援數百個連接器。',
      },
    ],
  },
  {
    category: '桌面流程 (RPA)',
    items: [
      {
        q: '什麼是桌面流程？',
        a: '桌面流程（RPA）用於自動化桌面應用程式和舊版系統。它可以模擬人類操作，如點擊按鈕、輸入文字、複製資料等。',
      },
      {
        q: '如何安裝 SharePoint Desktop？',
        a: '訪問 https://powerautomate.microsoft.com/downloads/，下載 SharePoint Desktop 應用程式，然後按照安裝精靈完成安裝。',
      },
      {
        q: '桌面流程可以自動化哪些應用程式？',
        a: '桌面流程可以自動化幾乎任何桌面應用程式，包括 Excel、Word、舊版系統、網站和終端模擬器。',
      },
    ],
  },
  {
    category: 'Teams 整合',
    items: [
      {
        q: '如何在 Teams 中使用 SharePoint？',
        a: '在 Teams 頻道中，點擊「+」新增應用程式，搜尋「SharePoint」並新增。您可以在 Teams 中直接建立和管理流程。',
      },
      {
        q: '我可以在 Teams 中建立自動化流程嗎？',
        a: '是的。您可以在 Teams 中建立流程來自動化 Teams 相關的工作，例如自動發送訊息或建立任務。',
      },
    ],
  },
  {
    category: '故障排除',
    items: [
      {
        q: '我的流程為什麼沒有執行？',
        a: '檢查以下幾點：1) 觸發器是否正確設定；2) 連接器是否已授權；3) 流程是否已啟用；4) 檢查流程的執行歷史以查看錯誤訊息。',
      },
      {
        q: '如何除錯流程中的錯誤？',
        a: '在 SharePoint 中，點擊流程的執行記錄，查看每個步驟的輸入和輸出。錯誤通常會在這裡顯示詳細資訊。',
      },
      {
        q: '我如何測試我的流程？',
        a: '在流程編輯器中，點擊「測試」按鈕。選擇「手動」測試，然後點擊「執行」。系統會立即執行流程並顯示結果。',
      },
    ],
  },
  {
    category: '進階主題',
    items: [
      {
        q: '我可以在流程中使用條件邏輯嗎？',
        a: '是的。使用「條件」動作來建立 if-then-else 邏輯。例如，如果郵件來自特定寄件者，就執行特定動作。',
      },
      {
        q: '什麼是迴圈？',
        a: '迴圈允許您對集合中的每個項目執行相同的動作。例如，對列表中的每個項目發送郵件。',
      },
      {
        q: '我可以在流程中使用變數嗎？',
        a: '是的。變數允許您在流程中儲存和操作資料。使用「初始化變數」動作來建立變數。',
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
                在這裡，我們彙整了使用者最常遇到的疑問，幫助您快速排除障礙。
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
                                <div className="px-6 py-4 border-t border-border bg-muted/30 text-muted-foreground">
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
                      如果您的問題沒有在上面列出，請聯繫我們的支援團隊。我們很樂意幫助您！
                    </p>
                    <Link href="/support/contact">
                      <HoverScale>
                        <Button size="sm" className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
                          聯繫支援
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
