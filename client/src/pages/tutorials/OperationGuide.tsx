import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Lightbulb, Cloud, Cpu, Layout, Zap } from 'lucide-react';
import Footer from '@/components/Footer';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

export default function OperationGuide() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        
        {/* Header */}
        <div className="bg-primary/5 border-b border-border py-12">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl font-bold text-foreground mb-4">操作指南：雲端流程 vs 桌面流程</h1>
              <p className="text-lg text-muted-foreground">
                本章節將完整說明 SharePoint 的兩種主要流程類型。您可以根據您的自動化需求選擇最適合的方式。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Comparison Intro */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <h2 className="text-2xl font-bold text-foreground mb-6">選擇您的自動化方式</h2>
                <p className="text-muted-foreground mb-8">
                  Microsoft SharePoint 提供雲端流程與桌面流程，兩者各有優勢。雲端流程適合連接應用程式和服務，桌面流程適合自動化桌面應用程式。
                </p>
              </MotionContainer>

              <Tabs defaultValue="cloud" className="w-full">
                <MotionContainer direction="up" delay={0.1}>
                  <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted text-muted-foreground">
                    <TabsTrigger value="cloud" className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:text-foreground">
                      <Cloud className="w-4 h-4" /> 雲端流程
                    </TabsTrigger>
                    <TabsTrigger value="desktop" className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:text-foreground">
                      <Cpu className="w-4 h-4" /> 桌面流程
                    </TabsTrigger>
                  </TabsList>
                </MotionContainer>

                {/* Cloud Flows Content */}
                <TabsContent value="cloud" className="space-y-8">
                  <MotionContainer direction="up">
                    <div className="bg-muted/50 rounded-xl p-8 border border-border">
                      <h3 className="text-xl font-bold mb-4 text-foreground">什麼是雲端流程？</h3>
                      <p className="text-muted-foreground mb-6">
                        雲端流程是在 Microsoft 雲端平台上執行的自動化工作流程，用於連接不同的應用程式和服務。它們無需安裝任何軟體，直接在瀏覽器中建立和管理。
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <HoverScale>
                          <Card className="border-border bg-card h-full">
                            <CardHeader>
                              <CardTitle className="text-base flex items-center gap-2 text-card-foreground">
                                <Layout className="w-4 h-4 text-primary" /> 三種類型
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                              <ul className="space-y-2">
                                <li>• <strong>自動化流程：</strong> 由事件觸發（如收到郵件）</li>
                                <li>• <strong>即時流程：</strong> 按下按鈕手動觸發</li>
                                <li>• <strong>排程流程：</strong> 按照時間表自動執行</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </HoverScale>
                        <HoverScale>
                          <Card className="border-border bg-card h-full">
                            <CardHeader>
                              <CardTitle className="text-base flex items-center gap-2 text-card-foreground">
                                <Lightbulb className="w-4 h-4 text-primary" /> 適用場景
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                              <ul className="space-y-2">
                                <li>• 連接 Outlook、Teams、SharePoint 等應用</li>
                                <li>• 自動發送通知和郵件</li>
                                <li>• 資料同步和備份</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </HoverScale>
                      </div>
                    </div>
                  </MotionContainer>

                  {/* Cloud Flow Steps */}
                  <MotionContainer direction="up">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-foreground">建立雲端流程的步驟</h3>
                      {[
                        { step: 1, title: '登入 SharePoint', desc: '訪問 https://flow.microsoft.com，使用您的 Microsoft 帳戶登入' },
                        { step: 2, title: '選擇流程類型', desc: '根據需求選擇自動化、即時或排程流程' },
                        { step: 3, title: '設定觸發器', desc: '選擇啟動流程的事件，例如「收到郵件」' },
                        { step: 4, title: '新增動作', desc: '使用連接器新增要執行的動作，如「發送郵件」' },
                        { step: 5, title: '測試並保存', desc: '測試流程是否正常運作，然後保存' }
                      ].map((item) => (
                        <MotionContainer key={item.step} direction="up" delay={item.step * 0.05}>
                          <div className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                                {item.step}
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-foreground">{item.title}</p>
                              <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                          </div>
                        </MotionContainer>
                      ))}
                    </div>
                  </MotionContainer>
                </TabsContent>

                {/* Desktop Flows Content */}
                <TabsContent value="desktop" className="space-y-8">
                  <MotionContainer direction="up">
                    <div className="bg-muted/50 rounded-xl p-8 border border-border">
                      <h3 className="text-xl font-bold mb-4 text-foreground">什麼是桌面流程？</h3>
                      <p className="text-muted-foreground mb-6">
                        桌面流程（RPA - 機器人流程自動化）用於自動化桌面應用程式和舊版系統。它可以模擬人類操作，如點擊按鈕、輸入文字、複製資料等。
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <HoverScale>
                          <Card className="border-border bg-card h-full">
                            <CardHeader>
                              <CardTitle className="text-base flex items-center gap-2 text-card-foreground">
                                <Cpu className="w-4 h-4 text-primary" /> 主要功能
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                              <ul className="space-y-2">
                                <li>• 自動化桌面應用程式操作</li>
                                <li>• 從網站擷取資料</li>
                                <li>• Excel 自動化和資料處理</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </HoverScale>
                        <HoverScale>
                          <Card className="border-border bg-card h-full">
                            <CardHeader>
                              <CardTitle className="text-base flex items-center gap-2 text-card-foreground">
                                <Zap className="w-4 h-4 text-primary" /> 適用場景
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                              <ul className="space-y-2">
                                <li>• 舊版系統自動化</li>
                                <li>• 終端模擬器操作</li>
                                <li>• 複雜的資料轉換</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </HoverScale>
                      </div>
                    </div>
                  </MotionContainer>

                  {/* Desktop Flow Steps */}
                  <MotionContainer direction="up">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold text-foreground">建立桌面流程的步驟</h3>
                      {[
                        { step: 1, title: '安裝 SharePoint Desktop', desc: '下載並安裝 SharePoint Desktop 應用程式到您的電腦' },
                        { step: 2, title: '建立新流程', desc: '開啟應用程式，點擊「新建流程」建立桌面流程' },
                        { step: 3, title: '錄製或設計', desc: '使用錄製功能記錄您的操作，或手動設計流程' },
                        { step: 4, title: '新增動作', desc: '新增點擊、輸入、複製等動作來自動化您的工作' },
                        { step: 5, title: '測試並部署', desc: '測試流程，確保所有操作正確執行' }
                      ].map((item) => (
                        <MotionContainer key={item.step} direction="up" delay={item.step * 0.05}>
                          <div className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors">
                            <div className="flex-shrink-0">
                              <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-primary text-primary-foreground font-bold text-sm">
                                {item.step}
                              </div>
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-foreground">{item.title}</p>
                              <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                          </div>
                        </MotionContainer>
                      ))}
                    </div>
                  </MotionContainer>
                </TabsContent>
              </Tabs>
            </section>

            {/* Comparison Table */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <h2 className="text-2xl font-bold text-foreground mb-8">雲端流程 vs 桌面流程對比</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-3 font-bold text-foreground">特性</th>
                        <th className="text-left p-3 font-bold text-foreground">雲端流程</th>
                        <th className="text-left p-3 font-bold text-foreground">桌面流程</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { feature: '執行位置', cloud: '雲端', desktop: '本機電腦' },
                        { feature: '安裝需求', cloud: '無需安裝', desktop: '需要安裝軟體' },
                        { feature: '應用連接', cloud: '連接雲端應用', desktop: '自動化桌面應用' },
                        { feature: '建立難度', cloud: '簡單', desktop: '中等到複雜' },
                        { feature: '成本', cloud: '免費到付費', desktop: '免費到付費' },
                      ].map((row, idx) => (
                        <tr key={idx} className="border-b border-border hover:bg-muted/50 transition-colors">
                          <td className="p-3 font-semibold text-foreground">{row.feature}</td>
                          <td className="p-3 text-muted-foreground">{row.cloud}</td>
                          <td className="p-3 text-muted-foreground">{row.desktop}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </MotionContainer>
            </section>

            {/* Next Steps */}
            <MotionContainer direction="up">
              <div className="text-center py-12 border-t border-border">
                <h3 className="text-xl font-bold mb-6 text-foreground">準備好開始建立您的第一個流程了嗎？</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/support/faq">
                    <HoverScale>
                      <Button size="lg" variant="outline" className="px-10 bg-background text-foreground hover:bg-muted">
                        查看常見問題
                      </Button>
                    </HoverScale>
                  </Link>
                  <Link href="/support/contact">
                    <HoverScale>
                      <Button size="lg" className="px-10 text-primary-foreground gap-2">
                        獲取幫助 <ArrowRight className="w-4 h-4" />
                      </Button>
                    </HoverScale>
                  </Link>
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
