import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Users, RefreshCw, ShieldCheck, MessageSquare, ChevronRight, BellRing, ZoomIn } from 'lucide-react';
import Footer from '@/components/Footer';
import { MotionContainer, PageTransition } from '@/components/MotionContainer';

export default function UseCases() {
  // SharePoint 日常辦公情境資料庫
  const scenarios = [
    {
      id: 'create-team-site',
      icon: <Users className="w-6 h-6" />,
      title: '建立 SharePoint 專屬小組',
      description: '需要一個地方集中管理專案檔案與進度？只需幾個點擊，就能從零開始為您的團隊打造一個安全且專屬的雲端協作空間。',
      steps: [
        { 
          stepNumber: 1, 
          title: '啟動建立精靈', 
          desc: '首先請您登入 Microsoft 365 並進入 SharePoint 首頁。接著點擊畫面左上角的「+ 建立網站」按鈕，此時系統會彈出一個選擇視窗，請您直接點選「小組網站 (Team Site)」來開啟建站精靈。', 
          imagePath: '/templates/image.png' 
        },
        { 
          stepNumber: 2, 
          title: '命名與隱私設定', 
          desc: '進入設定畫面後，選取範本選擇「標準小組」。接著為您的網站輸入一個易於識別的網站名稱。在隱私權設定的部分，強烈建議選擇「私人 - 只有成員可以存取這個網站」以確保內部專案資料的絕對安全，最後確認網站的預設語言為繁體中文，即可點擊下一步繼續。', 
          imagePath: '/templates/image2.png' 
        },
        { 
          stepNumber: 3, 
          title: '邀請團隊成員', 
          desc: '在新增成員的畫面中，您可以直接輸入部門同事的姓名或電子郵件來發送邀請。您可以視需求決定賦予他們可修改網站架構的「擁有者」權限，或是僅能編輯檔案的「成員」權限，所有設定完成後點擊完成按鈕，您的專屬小組網站就立刻誕生了。', 
          imagePath: '/templates/image3.png' 
        },
      ],
    },
    {
      id: 'embed-teams',
      icon: <MessageSquare className="w-6 h-6" />,
      title: '將 SharePoint 無縫嵌入 Teams',
      description: '讓團隊不需要在通訊軟體和瀏覽器之間切換視窗！直接在 Teams 頻道裡面就能瀏覽網站公告與編輯檔案。',
      steps: [
        { 
          stepNumber: 1, 
          title: '取得網站連結', 
          desc: '請先打開您的網頁瀏覽器，導覽至您想要嵌入的 SharePoint 網站首頁或是特定的文件庫頁面，接著將瀏覽器網址列上的完整 URL 連結複製下來備用。', 
          imagePath: '/templates/image4.png' 
        },
        { 
          stepNumber: 2, 
          title: '在 Teams 新增索引標籤', 
          desc: '接著請打開 Microsoft Teams 應用程式，進入您所屬團隊的特定頻道中。在頻道畫面上方功能表的最右側，點擊帶有加號的「新增索引標籤」按鈕，選擇「應用程式」，並在彈出的應用程式清單中直接搜尋並且選擇 SharePoint 圖示。', 
          imagePath: '/templates/image5.png' 
        },
        { 
          stepNumber: 3, 
          title: '發佈跨平台頁籤', 
          desc: '在最後的設定視窗中請選擇「從任何 SharePoint 網站新增頁面或清單」的選項，將您剛剛複製好的網址貼上並點擊儲存。設定完成後，Teams 頻道的上方就會多出一個全新的專屬頁籤，往後團隊成員只要點擊它，就能不切換視窗，直接在熟悉的 Teams 介面裡面流暢地瀏覽與操作整個 SharePoint 網站內容。', 
          imagePath: '/templates/image6.png' 
        },
      ],
    },
    {
      id: 'file-alerts',
      icon: <BellRing className="w-6 h-6" />,
      title: '掌握檔案變動的即時通知',
      description: '團隊成員上傳了新檔案或是誤刪了重要文件卻沒人知道？透過設定檔案庫的警示功能，只要有任何風吹草動，系統都會第一時間發信通知您。',
      steps: [
        { 
          stepNumber: 1, 
          title: '開啟文件庫警示設定', 
          desc: '請先進入您想要監控的 SharePoint 文件庫頁面。接著在畫面右上角的工具列中，點擊帶有三個點的「其他」圖示，並從下拉選單中選擇「通知我」的選項，系統便會彈出詳細的通知設定面板。', 
          imagePath: '/templates/image7.png' 
        },
        { 
          stepNumber: 2, 
          title: '設定觸發通知的條件', 
          desc: '在設定面板中，您可以精確指定想要收到通知的變更類型。您可以選擇在任何變更發生時都收到通知，或是僅針對有人新增文件、有人修改文件或有人刪除文件等特定動作來觸發警示，這能有效幫助您過濾掉不必要的雜訊。', 
          imagePath: '/templates/image8.png' 
        },
        { 
          stepNumber: 3, 
          title: '決定通知的接收頻率', 
          desc: '最後一步是設定您希望收到通知的時間頻率。如果您需要即時掌握狀況，可以選擇立刻傳送電子郵件；若是為了減少日常信件量，則可以改為要求系統傳送每日摘要或每週摘要，確認所有設定無誤後點擊確定，這套自動化守衛就正式啟動了。', 
          imagePath: '/templates/image9.png' 
        },
      ],
    },
    {
      id: 'manage-permissions',
      icon: <ShieldCheck className="w-6 h-6" />,
      title: '精準配置網站與檔案權限',
      description: '網站中有機密報表不能讓所有人看見？透過 SharePoint 強大且細緻的權限階層設計，您可以輕鬆掌控誰有權利編輯，誰又只能夠純瀏覽。',
      steps: [
        { 
          stepNumber: 1, 
          title: '進入網站權限管理', 
          desc: '在網站首頁的右上角，點擊齒輪圖示開啟設定選單，接著選擇「網站權限」。在這裡，您可以清楚看到目前被分類為擁有完全控制權的網站擁有者、具備編輯權限的網站成員，以及僅限檢視的網站訪客三大群組名單。', 
          imagePath: '/templates/image10.png' 
        },
        { 
          stepNumber: 2, 
          title: '新增或調整群組成員', 
          desc: '若您想要邀請同事並限制他只能閱讀，只需點擊邀請人員，輸入對方的電子郵件後，務必將權限等級調整為「僅限檢視（訪客）」。相反地，若要移除某人的編輯權限，也能在這個畫面中直接將他的層級降格或是完全移除。', 
          imagePath: '/templates/image11.png' 
        },
        { 
          stepNumber: 3, 
          title: '單獨設定資料夾權限', 
          desc: '如果您只需要針對特定的機密資料夾設限，請在文件庫中點擊該資料夾旁邊的共用圖示，進入「管理存取權」的進階設定。在這裡您可以停止繼承整個網站的權限，並單獨移除特定成員的編輯資格，確保重要檔案受到最嚴密的保護。', 
          imagePath: '/templates/image12.png' 
        },
      ],
    },
    {
      id: 'sync-to-local',
      icon: <RefreshCw className="w-6 h-6" />,
      title: '將雲端文件庫同步至本機',
      description: '習慣使用電腦的檔案總管來管理資料？透過 OneDrive 引擎，一鍵將 SharePoint 文件庫同步到您的電腦中，離線也能存取！',
      steps: [
        { 
          stepNumber: 1, 
          title: '進入網站文件庫', 
          desc: '請先開啟您經常使用的 SharePoint 網站，並點擊左側導覽列的文件選項。進入文件庫後，請再次確認畫面中顯示的內容，正是您想要同步到電腦裡進行管理的資料夾目錄。', 
          imagePath: '/templates/image13.png' 
        },
        {  
          stepNumber: 2, 
          title: '啟動同步功能', 
          desc: '接著在文件庫上方的工具列中，點擊三個點，並點擊「同步處理」按鈕。此時您的瀏覽器通常會跳出一個安全性提示，詢問您是否要開啟 Microsoft OneDrive，請您放心點選允許或開啟來授權系統執行同步作業。', 
          imagePath: '/templates/image14.png' 
        },
        { 
          stepNumber: 3, 
          title: '在檔案總管中查看', 
          desc: '最後，請打開您電腦的檔案總管，在左側的快速存取欄位中，您會發現多出了一個以貴公司名稱為名的新圖示。點開它之後就能看見剛剛同步的 SharePoint 資料夾，往後您可以像平常一樣直接在這裡拖曳或編輯檔案，系統皆會在背景自動幫您同步所有的變更。', 
          imagePath: '/templates/image15.png' 
        },
      ],
    },
  ];

  const [activeId, setActiveId] = useState<string>(scenarios[0].id);
  // 新增：用來儲存被點擊放大的圖片路徑
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  
  const activeScenario = scenarios.find(s => s.id === activeId) || scenarios[0];

  // 新增：當彈出視窗開啟時，鎖定背景的滾動
  useEffect(() => {
    if (fullscreenImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [fullscreenImage]);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        {/* Header Section */}
        <div className="bg-primary/5 border-b border-border pt-16 pb-16">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">全體員工必學：協作辦公神技</h1>
              <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
                不需要懂程式碼！我們精選了 5 個每個企業員工都一定用得到的 SharePoint 實務情境。從左側選單挑選您感興趣的主題，跟著右側的圖文詳解，讓您第一次建網站、管檔案就上手。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* Master-Detail Layout */}
        <div className="container py-12 flex-grow">
          <div className="flex flex-col lg:flex-row gap-10">
            
            {/* 左側 Sidebar (Master) */}
            <div className="lg:w-1/5 flex-shrink-0">
              <div className="sticky top-24 flex lg:flex-col overflow-x-auto lg:overflow-visible gap-3 pb-4 lg:pb-0 scrollbar-hide">
                {scenarios.map((scenario) => {
                  const isActive = activeId === scenario.id;
                  return (
                    <button
                      key={scenario.id}
                      onClick={() => setActiveId(scenario.id)}
                      className={`flex-shrink-0 lg:w-full text-left p-4 rounded-2xl flex items-center gap-4 transition-all duration-200 border ${
                        isActive 
                          ? 'bg-primary text-primary-foreground border-primary shadow-md scale-[1.02]' 
                          : 'bg-card text-foreground border-border hover:border-primary/40 hover:bg-muted/50'
                      }`}
                    >
                      <div className={`p-2 rounded-xl flex-shrink-0 ${isActive ? 'bg-primary-foreground/20' : 'bg-primary/10 text-primary'}`}>
                        {scenario.icon}
                      </div>
                      <div className="flex-grow hidden sm:block">
                        <h3 className="font-bold text-sm leading-tight">{scenario.title}</h3>
                      </div>
                      {isActive && <ChevronRight className="w-5 h-5 hidden lg:block opacity-70 flex-shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 右側 Content (Detail) */}
            <div className="lg:w-4/5">
              <Card className="border-border bg-card shadow-lg rounded-3xl overflow-hidden min-h-[600px]">
                {/* 標題區塊 */}
                <div className="bg-muted/30 p-8 md:p-10 border-b border-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 text-primary rounded-xl">
                      {activeScenario.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{activeScenario.title}</h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {activeScenario.description}
                  </p>
                </div>

                {/* 時間軸教學步驟 */}
                <div className="p-8 md:p-12">
                  <div className="relative border-l-2 border-primary/20 ml-5 space-y-16">
                    {activeScenario.steps.map((step, index) => (
                      <div key={index} className="relative pl-10 animate-in fade-in slide-in-from-bottom-4 duration-500" style={{ animationFillMode: 'both', animationDelay: `${index * 150}ms` }}>
                        
                        {/* 圓形數字標籤 */}
                        <div className="absolute -left-[17px] top-0 w-8 h-8 bg-background border-2 border-primary text-primary rounded-full flex items-center justify-center font-bold text-sm shadow-sm z-10">
                          {step.stepNumber}
                        </div>
                        
                        {/* 步驟內容 */}
                        <div>
                          <h4 className="text-xl font-bold text-foreground mb-4">{step.title}</h4>
                          <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                            {step.desc}
                          </p>
                          
                          {/* 圖片展示 (加入可點擊、Hover 遮罩特效) */}
                          <div 
                            className="relative rounded-2xl border border-border overflow-hidden bg-white shadow-sm cursor-pointer group"
                            onClick={() => setFullscreenImage(step.imagePath)}
                          >
                            <img 
                              src={step.imagePath} 
                              alt={step.title} 
                              className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                            />
                            {/* Hover 時浮現的放大提示遮罩 */}
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className="bg-background/95 text-foreground px-5 py-2.5 rounded-full flex items-center gap-2 font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <ZoomIn className="w-5 h-5 text-primary" /> 點擊放大圖片
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </div>
        <Footer />
      </div>

      {/* 全螢幕圖片放大視窗 (Lightbox) */}
      {fullscreenImage && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200" 
          onClick={() => setFullscreenImage(null)}
        >
          {/* 右上角的關閉提示 */}
          <div className="absolute top-6 right-6 text-white/80 text-sm font-bold bg-black/50 px-4 py-2 rounded-full pointer-events-none">
            點擊任意處關閉
          </div>
          
          <img 
            src={fullscreenImage} 
            alt="全螢幕預覽" 
            className="max-w-full max-h-full object-contain shadow-2xl animate-in zoom-in-95 duration-300 rounded-lg" 
            onClick={(e) => e.stopPropagation()} 
          />
        </div>
      )}
    </PageTransition>
  );
}