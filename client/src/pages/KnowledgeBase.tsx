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
      title: 'Power Automate 基礎概念',
      description: '瞭解 Power Automate 是什麼、為什麼需要它，以及它如何融入 Microsoft 365 生態。',
      difficulty: 'beginner',
      duration: '15 分鐘',
      lessons: 5,
      topics: ['基本概念', '雲端流程', '桌面流程'],
    },
    {
      id: 2,
      title: '建立您的第一個流程',
      description: '一步步指導您建立第一個自動化流程，從觸發器到動作的完整流程。',
      difficulty: 'beginner',
      duration: '30 分鐘',
      lessons: 8,
      topics: ['觸發器', '動作', '測試流程'],
    },
    {
      id: 3,
      title: '雲端流程進階技巧',
      description: '掌握條件、迴圈、變數等進階功能，建立更複雜的自動化流程。',
      difficulty: 'intermediate',
      duration: '45 分鐘',
      lessons: 12,
      topics: ['條件分支', '迴圈', '變數與表達式'],
    },
    {
      id: 4,
      title: '與 Microsoft 365 整合',
      description: '學習如何將 Power Automate 與 Teams、Outlook、SharePoint 等工具整合。',
      difficulty: 'intermediate',
      duration: '50 分鐘',
      lessons: 10,
      topics: ['Teams 整合', 'Outlook 整合', 'SharePoint 整合'],
    },
    {
      id: 5,
      title: 'AI Builder 與自動化',
      description: '探索 AI Builder 如何增強您的自動化流程，實現智能自動化。',
      difficulty: 'advanced',
      duration: '60 分鐘',
      lessons: 8,
      topics: ['AI 模型', '文本分析', '文檔處理'],
    },
    {
      id: 6,
      title: '流程最佳實踐與故障排除',
      description: '學習業界最佳實踐、常見錯誤及其解決方案，確保流程穩定運行。',
      difficulty: 'advanced',
      duration: '40 分鐘',
      lessons: 7,
      topics: ['最佳實踐', '性能優化', '故障排除'],
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
          <p className="text-lg text-muted-foreground max-w-2xl">
            系統化的學習路徑，從基礎入門到進階應用。按照您的進度選擇合適的課程。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          {/* Filter/Info Bar */}
          <div className="mb-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <p className="text-muted-foreground">
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
                            <p className="text-muted-foreground mb-4">{module.description}</p>
                            
                            {/* Topics */}
                            <div className="flex flex-wrap gap-2 mb-4">
                              {module.topics.map((topic) => (
                                <Badge key={topic} variant="secondary" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                            </div>

                            {/* Meta Info */}
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
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
              建議學習路徑
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: '初級路徑',
                  description: '適合完全新手',
                  modules: ['基礎概念', '第一個流程'],
                  duration: '45 分鐘',
                },
                {
                  title: '中級路徑',
                  description: '適合有基礎的使用者',
                  modules: ['進階技巧', 'M365 整合'],
                  duration: '95 分鐘',
                },
                {
                  title: '進階路徑',
                  description: '適合想深入學習的使用者',
                  modules: ['AI Builder', '最佳實踐'],
                  duration: '100 分鐘',
                },
              ].map((path, idx) => (
                <Card key={idx} className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">{path.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{path.description}</p>
                    <div className="space-y-2 mb-6">
                      {path.modules.map((mod) => (
                        <div key={mod} className="flex items-center gap-2 text-sm">
                          <div className="w-2 h-2 bg-primary rounded-full"></div>
                          {mod}
                        </div>
                      ))}
                    </div>
                    <div className="text-xs text-muted-foreground mb-4">
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
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            瀏覽我們的常見問題或聯絡技術支援團隊。
          </p>
          <Link href="/support">
            <a>
              <Button>
                前往技術支援
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
