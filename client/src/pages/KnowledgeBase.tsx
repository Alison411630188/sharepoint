import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, BookOpen, Clock, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * Knowledge Base Page - Enterprise SharePoint Portal Style
 * Design Philosophy: Modern Enterprise
 * - Organized learning modules with difficulty levels
 * - Clear progression path from beginner to advanced
 * - Professional card-based layout
 */

export default function KnowledgeBase() {
  const modules = [
    {
      id: 1,
      title: 'SharePoint 兩大核心網站解析',
      description: '深入了解小組網站與通訊網站的核心差異，幫助您在建立網站前做出最正確的架構選擇。',
      difficulty: 'beginner',
      duration: '15 分鐘',
      lessons: 3,
      topics: ['小組網站', '通訊網站', '架構規劃'],
    },
    {
      id: 2,
      title: '打造專屬小組網站 (Team Site)',
      description: '專為部門協作設計。學習如何建立安全且封閉的專案空間，並與 Microsoft Teams 進行深度整合。',
      difficulty: 'beginner',
      duration: '30 分鐘',
      lessons: 5,
      topics: ['檔案協作', 'Teams連動', '專案管理'],
    },
    {
      id: 3,
      title: '建置企業通訊網站 (Communication Site)',
      description: '專為資訊佈達設計。掌握如何設計美觀的企業入口網或跨部門佈告欄，確保資訊有效傳遞給全體員工。',
      difficulty: 'intermediate',
      duration: '40 分鐘',
      lessons: 6,
      topics: ['入口網設計', '最新消息發佈', '版面配置'],
    },
    {
      id: 4,
      title: '權限設定與資料安全管理',
      description: '無論是封閉的小組或是公開的通訊網站，精準的權限控管都是確保企業資料安全與共用原則的基石。',
      difficulty: 'intermediate',
      duration: '35 分鐘',
      lessons: 5,
      topics: ['網站擁有者', '訪客權限', '共用連結'],
    },
    {
      id: 5,
      title: '進階網頁元件 (Web Parts) 應用',
      description: '熟悉各種實用的網頁元件，將枯燥的文字轉化為生動的視覺化圖表、快速連結與動態輪播看板。',
      difficulty: 'advanced',
      duration: '50 分鐘',
      lessons: 8,
      topics: ['英雄網頁元件', '快速連結', '重點強調'],
    },
    {
      id: 6,
      title: '網站生命週期與效能優化',
      description: '學習網站的長期維護策略，包括儲存空間管理、過期資料封存以及提昇網頁載入速度的最佳實務。',
      difficulty: 'advanced',
      duration: '45 分鐘',
      lessons: 4,
      topics: ['空間管理', '效能檢測', '最佳實務'],
    },
  ];

  const getDifficultyBadge = (difficulty: string) => {
    const config = {
      beginner: { label: '初級', color: 'bg-green-100 text-green-800' },
      intermediate: { label: '中級', color: 'bg-blue-100 text-blue-800' },
      advanced: { label: '進階', color: 'bg-purple-100 text-purple-800' },
    };
    return config[difficulty as keyof typeof config] || config.beginner;
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header Section */}
      <section className="bg-secondary/30 border-b border-border py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">知識庫</h1>
          </div>
          <p className="text-lg text-foreground/80 max-w-2xl">
            系統化的 SharePoint 學習路徑，從認識基礎網站架構到進階企業應用。請根據您的實務需求選擇合適的課程。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          {/* Filter/Info Bar */}
          <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-foreground/80">
                共 <span className="font-bold text-foreground">{modules.length}</span> 個學習模組
              </p>
            </div>
            <div className="flex gap-2">
              <Badge variant="outline">全部</Badge>
              <Badge variant="outline">初級</Badge>
              <Badge variant="outline">中級</Badge>
              <Badge variant="outline">進階</Badge>
            </div>
          </div>

          {/* Learning Path */}
          <div className="space-y-6">
            {modules.map((module, idx) => {
              const difficulty = getDifficultyBadge(module.difficulty);
              return (
                <Card key={module.id} className="hover:shadow-lg transition-shadow border-border">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                      {/* Left Content */}
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center flex-shrink-0 text-primary font-bold">
                            {idx + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-foreground mb-2">{module.title}</h3>
                            <p className="text-foreground/80 mb-4">{module.description}</p>
                            
                            {/* Topics */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {module.topics.map((topic) => (
                                <Badge key={topic} variant="secondary" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                            </div>

                            {/* Meta Info */}
                            <div className="flex flex-wrap gap-4 text-sm text-foreground/80">
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {module.duration}
                              </div>
                              <div className="flex items-center gap-1">
                                <BookOpen className="w-4 h-4" />
                                {module.lessons} 堂課
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Right Side */}
                      <div className="flex flex-col items-start md:items-end gap-4 flex-shrink-0">
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${difficulty.color}`}>
                          {difficulty.label}
                        </div>
                        <Button className="w-full md:w-auto">
                          開始學習
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Learning Path Visualization */}
          <div className="mt-20 pt-20 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
              實務應用學習路徑
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: '部門協作路徑',
              description: '專注於部門內部的私密溝通與專案檔案管理。',
              modules: ['兩大核心網站解析', '打造專屬小組網站'],
              duration: '45 分鐘',
            },
            {
              title: '資訊佈達路徑',
              description: '適合負責全公司公告或建立入口網的人員。',
              modules: ['兩大核心網站解析', '建置企業通訊網站'],
              duration: '55 分鐘',
            },
            {
              title: '進階管理員路徑',
              description: '深入了解權限控管、版面設計與長期維護。',
              modules: ['權限設定', '網頁元件應用', '效能優化'],
              duration: '130 分鐘',
            },
              ].map((path, idx) => (
                <Card key={idx} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{path.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-foreground/80 mb-4">{path.description}</p>
                    <div className="space-y-2 mb-6">
                      {path.modules.map((mod) => (
                        <div key={mod} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {mod}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-foreground/80 mb-4">
                      預計時長：{path.duration}
                    </div>
                    <Button variant="outline" className="w-full">
                      開始路徑
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-secondary/30">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            需要額外幫助？
          </h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            瀏覽我們的常見問題或聯絡 SharePoint 系統管理團隊。
          </p>
          <Link href="/support">
            <Button>
              前往技術支援
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}