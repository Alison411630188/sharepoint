import { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, FolderDown, AlertTriangle, ArrowRight, CheckCircle2, X, Image as ImageIcon } from 'lucide-react';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';
import Footer from '@/components/Footer';

// 定義步驟型別
interface Step {
  name: string;
  desc: string;
  imageUrl?: string;
}

const templates = [
  {
    id: 1,
    category: '辦公通訊篇',
    title: '主管信件強提醒',
    description: '當收到特定寄件者（如老闆或重要客戶）的郵件時，自動在 Teams 發送一則通知給自己，確保不漏接重要訊息。',
    icon: <Mail className="w-8 h-8 text-blue-500" />,
    tags: ['Outlook', 'Teams', '入門推薦'],
    trigger: '收到新電子郵件時',
    action: '在 Teams 貼出訊息',
    steps: [
      { 
        name: 'Step 1. 偵測特定郵件', 
        desc: '選擇觸發程序「收到新電子郵件時 (V3)」。點開「顯示進階選項」，在「寄件者」欄位輸入主管的 Email 地址。',
        imageUrl: '/templates/image.png' 
      },
      { 
        name: 'Step 2. 搜尋並選取 Teams 動作', 
        desc: '點擊「新增動作」，搜尋「Microsoft Teams」的「在聊天或頻道中張貼訊息」。參數設定：【張貼為】設為「流程機器人」、【張貼於】設為「與流程機器人聊天」、【Recipient】填入「您的 Email 地址」。',
        imageUrl: '/templates/image2.png'
      },
      { 
        name: 'Step 3. 設定通知訊息內容', 
        desc: '在【訊息 (Message)】欄位中，點擊右側閃電圖示插入【主旨】標籤。建議手動輸入文字如：「🔔 主管來信提醒：」，讓通知顯示更清楚。',
        imageUrl: '/templates/image3.png'
      }
    ] as Step[]
  },
  {
    id: 2,
    category: '檔案管理篇',
    title: '信件附件自動歸檔',
    description: '每天處理大量發票或報表附件？流程能在收到含附件的新信件時，自動將檔案存入 OneDrive。',
    icon: <FolderDown className="w-8 h-8 text-emerald-500" />,
    tags: ['Outlook', 'OneDrive', '超省時'],
    trigger: '收到新電子郵件時 (具備附件)',
    action: '建立檔案 (OneDrive)',
    steps: [
      { 
        name: 'Step 1. 篩選含附件郵件', 
        desc: '設定觸發程序時，務必將進階選項中的「包含附件」與「僅具有附件」都設為【是】。',
      },
      { 
        name: 'Step 2. 處理附件清單', 
        desc: '新增動作「套用到各項 (Apply to each)」，在輸出框選取【附件】清單。',
      },
      { 
        name: 'Step 3. 設定儲存參數', 
        desc: '在迴圈內新增「建立檔案」。【檔案名稱】選【附件名稱】，【檔案內容】選【附件內容】。',
      }
    ] as Step[]
  }
];

export default function TemplateGallery() {
  const [selectedTemplate, setSelectedTemplate] = useState<typeof templates[0] | null>(null);
  const [displayImage, setDisplayImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedTemplate) {
      const firstAvailableImage = selectedTemplate.steps.find(s => s.imageUrl)?.imageUrl || null;
      setDisplayImage(firstAvailableImage);
    }
  }, [selectedTemplate]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedTemplate(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background flex flex-col text-foreground">
        {/* Header */}
        <div className="bg-primary/5 py-16 border-b border-border text-center">
            <h1 className="text-4xl font-bold tracking-tight mb-4">實戰範本庫</h1>
            <p className="text-lg text-muted-foreground">手把手教學！點選步驟即可對照右側截圖，精確設定每一個自動化欄位。</p>
        </div>

        {/* 範本卡片 */}
        <div className="container py-12 flex-grow relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {templates.map((template, idx) => (
              <MotionContainer key={template.id} direction="up" delay={idx * 0.1}>
                <HoverScale>
                  <Card className="h-full flex flex-col border-border bg-card hover:border-primary/50 transition-colors shadow-sm">
                    <CardHeader className="pb-4">
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-3 bg-secondary rounded-lg">{template.icon}</div>
                        <Badge variant="secondary" className="bg-primary/10 text-primary">{template.category}</Badge>
                      </div>
                      <CardTitle className="text-xl mb-2">{template.title}</CardTitle>
                      <CardDescription className="text-sm min-h-[40px]">{template.description}</CardDescription>
                    </CardHeader>
                    <CardFooter className="pt-4 border-t border-border mt-auto">
                      <Button variant="outline" className="w-full gap-2" onClick={() => setSelectedTemplate(template)}>
                        查看實作步驟 <ArrowRight className="w-4 h-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                </HoverScale>
              </MotionContainer>
            ))}
          </div>
        </div>
        <Footer />
      </div>

      {/* 🌟 彈出視窗：強制橫向鎖定版 🌟 */}
      {selectedTemplate && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4 md:p-10"
          onClick={() => setSelectedTemplate(null)}
        >
          <MotionContainer direction="up" className="w-full max-w-7xl h-full max-h-[90vh] flex flex-col">
            <div 
              className="bg-card border border-border shadow-2xl rounded-2xl w-full h-full flex flex-col overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border bg-card shrink-0 z-20">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-secondary rounded-xl">{selectedTemplate.icon}</div>
                  <h3 className="text-2xl font-bold">{selectedTemplate.title}</h3>
                </div>
                <button className="p-2 rounded-full hover:bg-secondary transition-colors" onClick={() => setSelectedTemplate(null)}>
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Body: 關鍵修正點：移除 flex-col 和 md: 前綴 */}
              <div className="flex flex-row flex-grow overflow-hidden">
                
                {/* 👈 左側：步驟清單 (固定比例 1/3) */}
                <div className="w-1/3 p-6 overflow-y-auto border-r border-border bg-background/50">
                  <h4 className="font-semibold mb-6 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary" /> 詳細參數設定
                  </h4>
                  <div className="space-y-2">
                    {selectedTemplate.steps.map((step, idx) => {
                      const isActive = displayImage === step.imageUrl;
                      return (
                        <div 
                          key={idx} 
                          className={`p-4 rounded-xl cursor-pointer transition-all border ${
                            isActive ? 'bg-primary/10 border-primary shadow-sm' : 'hover:bg-secondary/40 border-transparent'
                          }`}
                          onClick={() => step.imageUrl && setDisplayImage(step.imageUrl)}
                          onMouseEnter={() => step.imageUrl && setDisplayImage(step.imageUrl)}
                        >
                          <div className="flex items-center gap-3">
                            <div className={`flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold transition-colors ${
                              isActive ? 'bg-primary text-white' : 'bg-secondary text-muted-foreground'
                            }`}>{idx + 1}</div>
                            <h5 className={`text-sm font-bold transition-colors ${isActive ? 'text-primary' : ''}`}>{step.name}</h5>
                          </div>
                          <p className="text-xs text-muted-foreground mt-2 leading-relaxed">{step.desc}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 👉 右側：白色背景展示區 (固定比例 2/3，不再隱藏) */}
                <div className="w-2/3 bg-white relative overflow-hidden flex items-center justify-center border-l border-border/50">
                  {displayImage ? (
                    <img 
                      key={displayImage} 
                      src={displayImage} 
                      alt="教學截圖" 
                      className="w-full h-full object-contain animate-in fade-in duration-300"
                    />
                  ) : (
                    <div className="text-center text-slate-300">
                      <ImageIcon className="w-16 h-16 mb-2 mx-auto opacity-40" />
                      <p className="text-sm">此步驟尚未提供截圖</p>
                    </div>
                  )}
                  <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_40px_rgba(0,0,0,0.02)]"></div>
                </div>

              </div>
            </div>
          </MotionContainer>
        </div>
      )}
    </PageTransition>
  );
}