import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Network, ChevronRight, Lightbulb,
  Image as ImageIcon, CheckCircle2,
  X 
} from 'lucide-react';
import { MotionContainer, PageTransition } from '@/components/MotionContainer';
import Footer from '@/components/Footer';

export default function HubSite() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const tutorialSteps = [
    {
      id: 1,
      title: "開啟網站設定",
      description: "在您的 SharePoint 網站首頁，將滑鼠移至畫面右上角，點擊「齒輪」圖示以開啟設定面板。",
      image: "/templates/image16.jpg" 
    },
    {
      id: 2,
      title: "進入網站資訊",
      description: "在滑出的設定選單中，找到並點選「網站資訊 (Site information)」選項。",
      image: "/templates/image17.jpg" 
    },
    {
      id: 3,
      title: "選擇目標中樞網站",
      description: (
        <div className="flex flex-col items-start gap-4">
          <span>
            在網站資訊面板中向下滑動，找到「中樞網站關聯」區塊。點開下拉式選單，選擇您所屬的部門或專案的中樞網站（例如：ESG 資訊中心），確認選擇無誤後，點擊面板底部的「儲存」按鈕。
          </span>
          <div className="inline-flex items-center whitespace-nowrap font-bold text-red-500 bg-red-50 px-3 py-1.5 rounded-md -ml-2 border border-red-100">
            🚨 注意：必須是中樞網站成員才能設定！！！
          </div>
        </div>
      ),
      image: "/templates/image18.jpg" 
    },
    {
      id: 4,
      title: "驗證全域導覽列",
      description: "網頁自動重新整理後，請檢查網站最上方是否出現了全新的「全域導覽列」，點擊後可跳轉至中樞網站資訊。",
      image: "/templates/image19.jpg"
    },
    {
      id: 5,
      title: "跨網站搜尋",
      description: (
        <div className="flex flex-col gap-2">
          <span>
            在主中樞網站的搜尋列輸入關鍵字時，系統不僅會搜尋當下網站，還能一併撈出所有「已關聯子網站」中的檔案。
          </span>
          <span className="text-primary font-semibold">
            ✨ 如右圖紅框處所示：搜尋結果會標示該檔案位於哪一個專案網站，大幅打破部門間的資訊孤島！
          </span>
        </div>
      ),
      // 請記得把這張圖片存到 public/templates 資料夾，並換成對應的檔名
      image: "/templates/image20.jpg" 
    }
  ];

  return (
    // 👇 2. 加上獨一無二的 key，強制每次切換進來都要播動畫！
    <PageTransition key="hub-site">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative">
        
        {/* Header Section */}
        <div className="bg-primary/5 border-b border-border py-16">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                關聯至中樞網站
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
                將您的獨立小組網站或通訊網站連接至部門的中樞網站，藉此共用企業導覽列、佈景主題外觀，並集中管理最新消息與搜尋結果。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* Main Tutorial Content */}
        <div className="container py-20">
          <div className="max-w-6xl mx-auto">
            <MotionContainer direction="up" delay={0.1}>
              <Card className="border-2 border-border bg-card overflow-hidden">
                <div className="p-8 md:p-12">
                  
                  {/* 頂部：標題區 */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Badge variant="default" className="text-sm px-3 py-1">操作教學</Badge>
                        <span className="flex items-center gap-1.5 text-sm font-medium text-primary">
                          <Network className="w-5 h-5" />
                        </span>
                      </div>
                      <h3 className="font-bold text-3xl text-foreground">
                        設定中樞網站 (Hub Site) 關聯
                      </h3>
                    </div>
                  </div>

                  {/* 實戰小提示 */}
                  <div className="bg-secondary/50 rounded-xl p-6 border border-border/50 flex gap-4 items-start shadow-sm mb-16">
                    <Lightbulb className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      <strong className="text-foreground font-bold">💡 實戰小提示：</strong> 
                      如果您在步驟 3 的下拉選單中找不到任何選項，代表貴公司可能尚未建立中樞網站，或是系統管理員尚未將您加入允許關聯的權限名單中。
                    </p>
                  </div>

                  {/* 步驟列表區塊 */}
                  <div className="space-y-20">
                    {tutorialSteps.map((step, index) => (
                      <div key={step.id} className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start ${index !== tutorialSteps.length - 1 ? 'border-b border-border/50 pb-20' : ''}`}>
                        
                        {/* 左側：步驟文字說明 */}
                        <div className="lg:col-span-5 flex gap-5">
                          <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl border-2 border-primary/20 mt-1">
                            {step.id}
                          </div>
                          <div>
                            <h4 className="font-bold text-xl text-foreground mb-3 mt-2">
                              {step.title}
                            </h4>
                            <div className="text-foreground/80 text-[15px] leading-relaxed">
                              {step.description}
                            </div>
                          </div>
                        </div>

                        {/* 右側：圖片展示區 */}
                        <div className="lg:col-span-7">
                          <div className="w-full rounded-xl overflow-hidden border border-border/60 shadow-sm bg-muted/10">
                            
                            {step.image ? (
                              <div 
                                className="relative group cursor-zoom-in" 
                                onClick={() => setSelectedImage(step.image)}
                              >
                                <img 
                                  src={step.image} 
                                  alt={step.title} 
                                  className="w-full h-auto object-contain border-none transition-transform duration-300 group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center">
                                  <Badge className="opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 text-foreground shadow-sm pointer-events-none backdrop-blur-sm">
                                    點擊放大檢視
                                  </Badge>
                                </div>
                              </div>
                            ) : (
                              <div className="w-full aspect-video flex flex-col items-center justify-center p-8 text-center text-muted-foreground/50 border-2 border-dashed border-border/40 m-0.5 rounded-lg">
                                <ImageIcon className="w-12 h-12 mb-3 opacity-50" />
                                <p className="text-sm font-medium">圖片準備中...</p>
                              </div>
                            )}
                            
                          </div>
                        </div>

                      </div>
                    ))}
                  </div>

                  {/* 結尾成功標示 */}
                  <div className="mt-16 pt-8 border-t border-border/50 flex justify-center">
                    <div className="bg-primary/10 text-primary px-8 py-4 rounded-full flex items-center gap-3 font-bold text-base shadow-sm">
                      <CheckCircle2 className="w-6 h-6" /> 恭喜！您已成功完成中樞網站關聯設定！
                    </div>
                  </div>

                </div>
              </Card>
            </MotionContainer>

            {/* CTA Button */}
            <MotionContainer direction="up" delay={0.2}>
              <div className="mt-12 flex justify-start">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 shadow-sm" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                  回到網頁頂端 <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </MotionContainer>
          </div>
        </div>

        <Footer />

        {/* 圖片放大彈出視窗 (Lightbox) */}
        {selectedImage && (
          <div 
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="放大檢視" 
              className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}

      </div>
    </PageTransition>
  );
}