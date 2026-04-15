import { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { ArrowRight, Lightbulb, Mail, Save, Clock, MessageSquare, FileText, Calendar, X, Maximize2, ZoomIn, Sparkles, ShieldCheck, Languages } from 'lucide-react';
import Footer from '@/components/Footer';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

export default function UseCases() {
  const [selectedScenario, setSelectedScenario] = useState<any>(null);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedScenario || fullscreenImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedScenario, fullscreenImage]);

  // 您的日常辦公自動化情境資料庫
  const scenarios = [
    {
      id: 'save-attachments',
      icon: <Save className="w-8 h-8 text-blue-500" />,
      title: '自動儲存郵件附件到 OneDrive',
      description: '每次收到含附件的郵件都要手動下載另存新檔？這個流程會自動幫您把附件備份到指定的 OneDrive 資料夾。',
      steps: [
        { 
          stepNumber: 1, 
          title: '建立流程與觸發器', 
          desc: '1. 登入 SharePoint，點擊左側「建立」>「自動化雲端流程」。\n2. 搜尋並選擇觸發器：「新電子郵件送達時 (V3)」。\n3. 點擊卡片上的「顯示進階選項」，並確保「加入附件」這個選項設定為「是」。', 
          imagePath: '/templates/image4.png' 
        },
        { 
          stepNumber: 2, 
          title: '新增 OneDrive 動作', 
          desc: '1. 點擊下方的「+ 新步驟」。\n2. 在搜尋框輸入「商務用OneDrive」。\n3. 選擇 OneDrive for Business 底下的「建立檔案」動作。', 
          imagePath: '/templates/image5.png' 
        },
        { 
          stepNumber: 3, 
          title: '配置檔案路徑與動態內容', 
          desc: '1. 在「資料夾路徑」點擊右側小資料夾圖示選擇儲存位置。\n2. 點擊「檔案名稱」欄位，在右側動態內容(閃電圖示)點選新電子郵件送達時的「附件名稱」。\n3. 最後點擊「檔案內容」欄位，在右側點選動態內容(閃電圖示)點選新電子郵件送達時的「附件內容」即完成。', 
          imagePath: '/templates/image6.png' 
        },
      ],
    },
    {
      id: 'vip-email-alert',
      icon: <Mail className="w-8 h-8 text-orange-500" />,
      title: 'Outlook郵件 Teams 通知',
      description: '每天信件如雪片般飛來，擔心漏看重要人物的信？當收到特定對象來信時，立刻發送 Teams 訊息提醒自己。',
      steps: [
        { 
          stepNumber: 1, 
          title: '設定特定寄件者觸發', 
          desc: '1. 登入 SharePoint，點擊左側「建立」>「自動化雲端流程」。\n2. 搜尋並選擇觸發器：「新電子郵件送達時 (V3)。\n3. 點選卡片「進階參數」，在「從」欄位中，輸入您的主管或重要客戶的電子郵件地址。', 
          imagePath: '/templates/image7.png' 
        },
        {  
          stepNumber: 2, 
          title: '新增 Teams 發布動作', 
          desc: '1. 點擊「+ 新步驟」。\n2. 搜尋「Microsoft Teams」。\n3. 選擇「在聊天室或管道中張貼訊息」。', 
          imagePath: '/templates/image8.png' 
        },
        { 
          stepNumber: 3, 
          title: '設定通知內容', 
          desc: '該卡片參數設定:\n1.「張貼為」選擇「流程機器人」。\n2.「張貼於」選擇「與流程機器人聊天」。\n3. 在「Recipient」輸入您自己的信箱。\n4. 在「訊息」欄位中，您可以打字：「老闆來信啦！主旨：」，然後點擊右側動態內容(閃電圖示)的「主旨」插入，這樣就能收到即時提醒！', 
          imagePath: '/templates/image9.png' 
        },
      ],
    },
    {
      id: 'daily-reminder',
      icon: <Clock className="w-8 h-8 text-green-500" />,
      title: '早上定時發送天氣與提醒',
      description: '讓系統成為您的專屬秘書，每天早上 8:30 準時發送今天的當地天氣預報到您的信箱。',
      steps: [
        { 
          stepNumber: 1, 
          title: '設定排程觸發器', 
          desc: '1. 登入 SharePoint，點擊左側「建立」>「已排程的雲端流程」。\n2. 為流程命名，將「重複間隔」設定為「1 天」。\n3. 建立後，點擊該觸發器，將時區設為台北，將「到這些時數」設為「8」，「到這些分鐘」設為「30」。', 
          imagePath: '/templates/image10.png' 
        },
        { 
          stepNumber: 2, 
          title: '取得當天天氣', 
          desc: '1. 點擊「+ 新步驟」。\n2. 搜尋「MSN 天氣」，選擇「取得今日預報」> 「建立新項目」。\n3. 在「位置」欄位中輸入您的所在城市（例如：淡水區,台灣），並將單位選擇為「計量 」。', 
          imagePath: '/templates/image11.png' 
        },
        { 
          stepNumber: 3, 
          title: '發送專屬早安郵件', 
          desc: '1. 點擊「+ 新步驟」。\n2. 搜尋「傳送電子郵件 (V2)」。\n3. 卡片設定：收件者填寫自己，主旨填寫「早安！今天的專屬提醒」。\n4. 在本文中設定如下：\n今日天氣狀況：[條件]\n溫度預測：今日最高溫約[Temperture High]度，最低溫為[Temperature Low]度\n降雨機率：今天的降雨機率大約是 [Rain Chance] %\n貼心提醒：[日摘要]', 
          imagePath: '/templates/image12.png' 
        },
      ],
    },
    {
      id: 'ai-email-summary',
      icon: <Sparkles className="w-8 h-8 text-purple-500" />,
      title: '長郵件重點 AI 自動摘要',
      description: '每天收到的技術週報或會議記錄太長沒時間細讀？讓 AI 自動幫您整理出繁體中文重點摘要並傳送到 Teams。',
      steps: [
        { 
          stepNumber: 1, 
          title: '設定郵件觸發', 
          desc: '1. 登入 SharePoint，選擇觸發器：「新電子郵件送達時 (V3)」。\n2. 可點擊「顯示進階參數」，在「主旨篩選」輸入「週報」或「摘要」，讓流程精準過濾信件。', 
          imagePath: '/templates/image13.png' 
        },
        { 
          stepNumber: 2, 
          title: '建立自訂 AI 摘要指令', 
          desc: '1. 點擊「+ 新步驟」，選擇 AI Builder 的「執行提示」動作。\n2. 在「提示」選單選「+ 新建自訂提示」，並在指示窗完整輸入：『請將以下文字摘要成「繁體中文」的條列重點：[文字輸入]』。\n3. 點擊「+ 新新增內容」選取「文字輸入」產生標籤，點擊「儲存提示」。\n4. 回到流程頁面，在「Input Text」欄位點擊閃電圖示放入郵件的「本文」動態內容。', 
          imagePath: '/templates/image14.png' 
        },
        { 
          stepNumber: 3, 
          title: '發送至 Teams 預覽', 
          desc: '1. 搜尋並選擇「在聊天室或管道中張貼訊息」。\n2. 參數設定：張貼為「流程機器人」、張貼於「與流程機器人聊天」、Recipient 輸入個人信箱。\n3. 在「訊息」欄位點擊右側閃電圖示，找到前一步驟執行提示輸出的「文字 (Text)」標籤，即可完成中文摘要通知！', 
          imagePath: '/templates/image15.png' 
        },
      ],
    },
    {
      id: 'sharepoint-approval',
      icon: <ShieldCheck className="w-8 h-8 text-indigo-500" />,
      title: '文件上傳自動跑核准流程',
      description: '不用再寫 Email 詢問！只要將檔案上傳到指定資料夾，系統會自動通知主管審核。核准後，檔案會自動從「審查區」搬移到「已核准區」。',
      steps: [
        { 
          stepNumber: 1, 
          title: '建立檔案時 (僅限屬性)', 
          desc: '1. 點擊「建立」>「自動化雲端流程」，選擇觸發器 -「建立檔案時 (僅限屬性)」。\n2. 選擇 SharePoint 網站並指向您的「文件審查」資料夾。', 
          imagePath: '/templates/image18.png' 
        },
        { 
          stepNumber: 2, 
          title: '啟動並等待核准', 
          desc: '1. 搜尋「核准」，選擇「啟動並等待核准」。\n2. 核准類型選擇「核准/拒絕 - 第一個回應」。\n3. 指派至填寫主管 Email，並插入動態標籤「名稱」。', 
          imagePath: '/templates/image19.png' 
        },
        { 
          stepNumber: 3, 
          title: '條件與移動檔案', 
          desc: '1. 插入「條件」，左側選「結果」，中間選等於，右側手打「Approve」。\n2. 在如果是區塊新增「移動檔案」，將文件搬移至「已核准」目錄。', 
          imagePath: '/templates/image20.png' 
        },
      ],
    },
    {
      id: 'ai-email-translation-boris',
      icon: <Languages className="w-8 h-8 text-emerald-500" />,
      title: '郵件 AI 自動摘要與翻譯',
      description: '利用自訂 AI 提示詞，當收到外語或長郵件時，系統自動將內容翻譯並摘要為繁體中文條列重點，直接推送到您的 Teams 聊天室。',
      steps: [
        { 
          stepNumber: 1, 
          title: '設定郵件收件觸發', 
          desc: '1. 建立自動化雲端流程，觸發器選擇「新電子郵件送達時 (V3)」。\n2. 在參數中確保已連線至您的 Outlook 帳戶，以便接收即時郵件通知。', 
          imagePath: '/templates/image23.png' 
        },
        { 
          stepNumber: 2, 
          title: '建立 AI Builder 執行提示', 
          desc: '1. 新增「執行提示」動作，在提示下拉選單中選取您建立的自訂提示。\n2. 提示內容設定為：『請將以下文字摘要成「繁體中文」的條列重點：[文字輸入]』。\n3. 在「文字輸入」欄位中，插入郵件的「本文」動態標籤，讓 AI 讀取郵件內容。', 
          imagePath: '/templates/image24.png' 
        },
        { 
          stepNumber: 3, 
          title: 'Teams 格式化訊息通知', 
          desc: '1. 新增動作「在聊天室或管道中張貼訊息」。\n2. 參數設定：張貼為『流程機器人』、張貼於『與流程機器人聊天』、Recipient 輸入您自己的帳號。\n3. 在「訊息」欄位中，插入動態標籤『主旨』，接著輸入『 - 翻譯內容: 』，最後插入執行提示輸出的『Text』標籤。', 
          imagePath: '/templates/image25.png' 
        },
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        
        {/* Header */}
        <div className="bg-primary/5 border-b border-border py-20">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">全體員工必備：日常辦公神技</h1>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                自動化不是工程師的專利！我們精選了 6 個每個上班族都一定用得到的日常情境。跟著超詳細的「保母級」圖文步驟，讓您第一次使用就上手，立刻省下大把時間。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-24">
          <div className="max-w-5xl mx-auto space-y-36">
            
            {/* 情境卡片網格 */}
            <section>
              <div className="grid md:grid-cols-2 gap-8">
                {scenarios.map((scenario, idx) => (
                  <MotionContainer key={scenario.id} direction="up" delay={idx * 0.05}>
                    <HoverScale>
                      <Card className="border-border bg-card h-full flex flex-col hover:border-primary/40 hover:shadow-xl transition-all duration-300">
                        <CardHeader className="pb-4">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-muted rounded-xl shadow-inner">
                              {scenario.icon}
                            </div>
                            <CardTitle className="text-xl font-bold">{scenario.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                            {scenario.description}
                          </p>
                        </CardContent>
                        <CardFooter className="pt-4 border-t border-border mt-auto bg-muted/20">
                          <Button 
                            className="w-full gap-2 font-bold" 
                            onClick={() => setSelectedScenario(scenario)}
                          >
                            <Maximize2 className="w-4 h-4" /> 開始跟著做
                          </Button>
                        </CardFooter>
                      </Card>
                    </HoverScale>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* 其他區塊保持不變 */}
            <MotionContainer direction="up">
              <section className="pt-10 border-t border-border">
                <h2 className="text-3xl font-bold text-foreground mb-12 text-center">為什麼選擇 SharePoint？</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { title: '節省時間', desc: '把重複性的複製貼上交給機器人，每週多出數小時。', icon: '⏱️' },
                    { title: '專注重要工作', desc: '減少瑣碎的手動操作，將腦力發揮在更有價值的地方。', icon: '🎯' },
                    { title: '無需寫程式', desc: '全視覺化操作，只要會點擊滑鼠，任何人都能輕鬆建立流程。', icon: '🖱️' },
                    { title: '減少人為失誤', desc: '系統自動處理，再也不怕漏信、漏存檔案或忘記通知。', icon: '✓' },
                    { title: '無縫整合工具', desc: '完美串聯 Teams、Outlook、Excel 等您每天都在用的辦公軟體。', icon: '🔗' },
                    { title: '免費開始使用', desc: '內建於 Microsoft 365，多數日常情境完全不需額外付費授權。', icon: '🎁' }
                  ].map((benefit, idx) => (
                    <MotionContainer key={idx} direction="up" delay={idx * 0.05}>
                      <HoverScale>
                        <Card className="border-border bg-card text-center h-full hover:border-primary/20 transition-colors">
                          <CardContent className="pt-8">
                            <div className="text-4xl mb-4">{benefit.icon}</div>
                            <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                            <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                          </CardContent>
                        </Card>
                      </HoverScale>
                    </MotionContainer>
                  ))}
                </div>
              </section>
            </MotionContainer>
          </div>
        </div>
        <Footer />
      </div>

      {/* Modal 視窗邏輯 */}
      {selectedScenario && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="absolute inset-0" onClick={() => setSelectedScenario(null)}></div>
          <div className="relative w-full max-w-5xl max-h-[90vh] bg-background rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-border animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-border bg-card z-10 sticky top-0">
              <div className="flex items-center gap-4">
                <div className="p-2 bg-muted rounded-lg hidden sm:block">
                  {selectedScenario.icon}
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">{selectedScenario.title}</h2>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{selectedScenario.description}</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setSelectedScenario(null)} className="rounded-full hover:bg-destructive/10 hover:text-destructive">
                <X className="w-6 h-6" />
              </Button>
            </div>

            <div className="overflow-y-auto p-6 md:p-10 space-y-24 bg-background">
              {selectedScenario.steps.map((step: any) => (
                <div key={step.stepNumber} className="flex flex-col lg:flex-row gap-10 items-start group">
                  <div className="lg:w-2/5 space-y-4 pt-2">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-sm flex-shrink-0">
                        {step.stepNumber}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">{step.title}</h3>
                    </div>
                    <div className="text-muted-foreground leading-relaxed pl-11 space-y-4">
                      {step.desc.split('\n').map((line: string, i: number) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </div>
                  <div className="lg:w-3/5 w-full">
                    <div className="relative bg-white aspect-[16/9] rounded-xl border border-border flex items-center justify-center overflow-hidden shadow-sm cursor-pointer group/img" onClick={() => setFullscreenImage(step.imagePath)}>
                      <img src={step.imagePath} alt={`步驟 ${step.stepNumber}`} className="w-full h-full object-contain transition-transform duration-500 group-hover/img:scale-[1.02]" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-opacity">
                        <div className="bg-background/90 text-foreground px-4 py-2 rounded-full flex items-center gap-2 font-bold shadow-lg">
                          <ZoomIn className="w-5 h-5" /> 點擊放大
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center pt-10 border-t border-border">
                 <Button size="lg" onClick={() => setSelectedScenario(null)} className="px-10 rounded-full font-bold">教學結束，關閉視窗</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox 部分 */}
      {fullscreenImage && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in" onClick={() => setFullscreenImage(null)}>
          <img src={fullscreenImage} alt="全螢幕" className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </PageTransition>
  );
}