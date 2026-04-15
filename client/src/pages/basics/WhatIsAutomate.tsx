import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Lightbulb, Users, Cpu, Workflow, Clock } from 'lucide-react';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';
import Footer from '@/components/Footer';

export default function WhatIsAutomate() {
  const coreFeatures = [
    {
      icon: <Workflow className="w-8 h-8 text-primary" />,
      title: '流程自動化',
      desc: '在應用程式和服務之間建立自動化工作流程，無需程式背景',
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: '團隊協作',
      desc: '與團隊成員共用流程，提高整個組織的工作效率',
    },
    {
      icon: <Cpu className="w-8 h-8 text-primary" />,
      title: 'RPA 機器人流程自動化',
      desc: '自動化桌面應用程式和舊版系統的重複性工作',
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: '節省時間',
      desc: '減少手動操作，釋放勞動力專注於更有價值的工作',
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        
        {/* Header */}
        <div className="bg-primary/5 border-b border-border py-16">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">SharePoint 是什麼？</h1>
              {/* 🌟 關鍵修正：精簡這裡的字數，讓它剛好折成 2 行 */}
              <p className="text-xl text-muted-foreground max-w-2xl">
                Microsoft SharePoint 是一個雲端自動化服務，幫助您在最喜愛的應用程式和服務之間建立自動化工作流程，輕鬆提升團隊生產力。
              </p>
              <div className="mt-8">
                <Link href="/tutorials/operation-guide">
                  <HoverScale>
                    <Button size="lg" className="gap-2 text-primary-foreground">
                      開始操作教學 <ArrowRight className="w-4 h-4" />
                    </Button>
                  </HoverScale>
                </Link>
              </div>
            </MotionContainer>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-20">
          <div className="max-w-4xl mx-auto">
            
            {/* Core Concept */}
            <section className="mb-20">
              <MotionContainer direction="up">
                <h2 className="text-3xl font-bold text-foreground mb-8">核心概念</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      想像您每天都需要檢查郵件、複製特定資訊到 Excel、然後發送通知給團隊。這些重複性的工作會浪費寶貴的時間。SharePoint 就是為了解決這個問題而設計的——它可以自動完成這些工作流程，讓您專注於更重要的事情。
                    </p>
                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded">
                      <p className="text-foreground font-semibold">
                        SharePoint = 自動化 + 整合 + 效率 + 無代碼
                      </p>
                      <p className="text-muted-foreground mt-2 text-sm">
                        一個工具，幫助您的團隊自動化重複性工作、連接不同的應用程式、提高整體工作效率。
                      </p>
                    </div>
                  </div>
                  <div className="bg-muted aspect-video rounded-2xl border border-border flex items-center justify-center text-muted-foreground">
                    <img
                      src="https://d2xsxph8kpxj0f.cloudfront.net/310519663505850654/muAFUuW7DUmEfTGA9nSUFP/Designer_1df260e3.png"
                      alt="核心概念示意圖"
                      className="w-full h-auto max-h-[400px] object-contain rounded-md shadow-sm border border-border hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                </div>
              </MotionContainer>
            </section>

            {/* Core Features */}
            <section className="mb-20">
              <MotionContainer direction="up">
                <h2 className="text-3xl font-bold text-foreground mb-10 text-center">SharePoint 的核心功能</h2>
              </MotionContainer>
              <div className="grid md:grid-cols-2 gap-6">
                {coreFeatures.map((feature, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                    <HoverScale>
                      <Card className="border-border bg-card hover:shadow-lg transition h-full">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              {feature.icon}
                            </div>
                            <CardTitle className="text-lg text-card-foreground">{feature.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{feature.desc}</p>
                        </CardContent>
                      </Card>
                    </HoverScale>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* Key Concepts Grid */}
            <section className="mb-20">
              <MotionContainer direction="up">
                <h2 className="text-3xl font-bold text-foreground mb-10">關鍵名詞解釋</h2>
              </MotionContainer>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: '雲端流程 (Cloud Flows)', desc: '在雲端執行的自動化工作流程，包括自動化、即時和排程三種類型。' },
                  { title: '桌面流程 (Desktop Flows)', desc: '機器人流程自動化 (RPA)，用於自動化桌面應用程式和舊版系統。' },
                  { title: '連接器 (Connectors)', desc: '連接 SharePoint 與其他應用程式和服務的橋樑，如 Outlook、Teams 等。' },
                  { title: '觸發器 (Trigger)', desc: '啟動流程的事件，例如收到電子郵件或檔案被建立。' }
                ].map((concept, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.05}>
                    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors shadow-sm">
                      <p className="font-bold text-primary mb-2">{concept.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{concept.desc}</p>
                    </div>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* Tip Box */}
            <MotionContainer direction="up">
              <section className="mb-20 bg-primary/10 border-l-4 border-primary p-8 rounded-r-xl">
                <div className="flex gap-4">
                  <Lightbulb className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg text-foreground mb-2">💡 新手提示</p>
                    <p className="text-muted-foreground mb-3">
                      SharePoint 設計得非常直觀，您不需要複雜的培訓就能開始使用。最好的學習方式是：選擇一個簡單的重複性工作 → 建立一個自動化流程 → 測試並調整。
                    </p>
                    <p className="text-muted-foreground/80 text-sm">
                      SharePoint 提供免費版本，包含基本功能。多數企業可以免費開始使用，進階功能才需要付費授權。
                    </p>
                  </div>
                </div>
              </section>
            </MotionContainer>

            {/* Next Step */}
            <MotionContainer direction="up">
              <div className="text-center py-12 border-t border-border">
                <h3 className="text-xl font-bold mb-6 text-foreground">了解了概念，來看看具體如何操作！</h3>
                <Link href="/tutorials/operation-guide">
                  <HoverScale>
                    <Button size="lg" variant="outline" className="px-10 bg-background text-foreground hover:bg-muted">
                      前往操作指南
                    </Button>
                  </HoverScale>
                </Link>
              </div>
            </MotionContainer>

          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
}