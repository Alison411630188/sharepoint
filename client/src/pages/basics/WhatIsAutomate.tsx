import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Lightbulb, Users, Globe, Files, Shield } from 'lucide-react';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';
import Footer from '@/components/Footer';

export default function WhatIsSharePoint() {
  const coreFeatures = [
    {
      icon: <Files className="w-8 h-8 text-primary" />,
      title: '強大的文件庫管理',
      desc: '擺脫混亂的本地資料夾，享受具備版本控制、共同編輯與離線同步的雲端檔案庫',
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: '無縫團隊協作',
      desc: '為專案或部門打造專屬空間，集中管理檔案、行事曆與任務，並與 Teams 完美整合',
    },
    {
      icon: <Globe className="w-8 h-8 text-primary" />,
      title: '企業入口網站',
      desc: '輕鬆建立美觀的內部通訊網站，向全公司佈達重要資訊與最新動態',
    },
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: '企業級安全控管',
      desc: '精準的權限與共用設定，確保機密專案資料只有被授權的人員才能存取',
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
              <p className="text-xl text-foreground/80 max-w-2xl">
                Microsoft SharePoint 是一個強大的雲端協作與資訊管理平台，幫助企業建立內部網站、集中管理文件，並讓團隊無縫溝通與共享資源。
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
                    <p className="text-foreground/80 mb-6 leading-relaxed">
                      想像您的團隊每天都在透過 Email 傳遞檔案，導致版本混亂，或是新進員工總是找不到過往的專案資料。這些「資訊孤島」會大幅降低工作效率。SharePoint 就是為了解決這個問題而設計的——它提供一個單一、安全的雲端中心，讓企業的檔案、知識和溝通都能有條理地集中管理。
                    </p>
                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded">
                      <p className="text-foreground font-semibold">
                        SharePoint = 團隊協作 + 企業入口網 + 文件庫 + 權限安全
                      </p>
                      <p className="text-foreground/80 mt-2 text-sm">
                        一個平台，幫助您的組織打破資訊穀倉、安全地管理數位資產，並打造專屬的數位辦公室。
                      </p>
                    </div>
                  </div>
                  <div className="bg-muted aspect-video rounded-2xl border border-border flex items-center justify-center text-muted-foreground">
                    {/* 此處圖片路徑保留您原本的設計，若未來有 SharePoint 相關架構圖可直接替換此網址 */}
                    <img
                      src="/templates/sharepoint概念圖.png"
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
                          <p className="text-foreground/80">{feature.desc}</p>
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
                  { title: '小組網站 (Team Site)', desc: '專為特定部門或專案團隊設計的私密協作空間，預設與 Microsoft Teams 群組連動。' },
                  { title: '通訊網站 (Communication Site)', desc: '用於向廣泛受眾（如全公司）發佈資訊的公開網站，適合做為企業入口網或佈告欄。' },
                  { title: '文件庫 (Document Library)', desc: 'SharePoint 中安全儲存與管理檔案的核心容器，支援版本歷程記錄與共同編輯。' },
                  { title: '網頁組件 (Web Parts)', desc: '構成 SharePoint 頁面的視覺化積木，如文字、圖片、快速連結或最新動態，支援拖曳排版。' }
                ].map((concept, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.05}>
                    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors shadow-sm h-full">
                      <p className="font-bold text-primary mb-2">{concept.title}</p>
                      <p className="text-foreground/80 text-sm leading-relaxed">{concept.desc}</p>
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
                    <p className="font-bold text-lg text-foreground mb-2">💡 新手建站提示</p>
                    <p className="text-foreground/80 mb-3">
                      SharePoint 的核心在於「權限與架構」。最好的學習方式是：先釐清您的需求是內部團隊協作還是全公司佈達 → 選擇建立小組或通訊網站 → 規劃好簡單的資料夾階層並設定權限 → 最後再開始上傳檔案並設計頁面外觀。
                    </p>
                    <p className="text-foreground/80/80 text-sm">
                      只要您的企業擁有 Microsoft 365 商業版授權，通常就已經包含了完整的 SharePoint 基礎功能，隨時可以開始建立您的專屬雲端辦公室。
                    </p>
                  </div>
                </div>
              </section>
            </MotionContainer>

            {/* Next Step */}
            <MotionContainer direction="up">
              <div className="text-center py-12 border-t border-border">
                <h3 className="text-xl font-bold mb-6 text-foreground">了解了概念，來看看具體如何選擇網站！</h3>
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