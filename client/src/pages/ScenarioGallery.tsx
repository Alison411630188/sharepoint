import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Mail, Save, Clock, MessageSquare, FileText, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * Scenario Gallery Page - Enterprise SharePoint Portal Style
 * Design Philosophy: Modern Enterprise
 * - Real-world automation scenarios organized by category
 * - Clear use case descriptions and benefits
 * - Professional card-based layout with category badges
 */

export default function ScenarioGallery() {
  const scenarios = [
    {
      id: 1,
      icon: Save,
      title: '自動儲存郵件附件到 OneDrive',
      category: '郵件自動化',
      description: '每次收到含附件的郵件都要手動下載另存新檔？這個流程會自動幫您把附件備份到指定的 OneDrive 資料夾。',
      benefits: ['節省時間', '避免遺漏', '自動備份'],
      difficulty: 'beginner',
    },
    {
      id: 2,
      icon: Mail,
      title: 'Outlook 郵件 Teams 通知',
      category: '郵件自動化',
      description: '每天信件如雪片般飛來，擔心漏看重要人物的信？當收到特定對象來信時，立刻發送 Teams 訊息提醒自己。',
      benefits: ['即時提醒', '不漏重要信', '提升效率'],
      difficulty: 'beginner',
    },
    {
      id: 3,
      icon: Clock,
      title: '早上定時發送天氣與提醒',
      category: '排程自動化',
      description: '讓系統成為您的專屬秘書，每天早上 8:30 準時發送今天的當地天氣預報到您的信箱。',
      benefits: ['定時提醒', '個性化內容', '提升體驗'],
      difficulty: 'intermediate',
    },
    {
      id: 4,
      icon: MessageSquare,
      title: '長郵件重點 AI 自動摘要',
      category: 'AI 自動化',
      description: '每天收到的技術週報或會議記錄太長沒時間細讀？讓 AI 自動幫您整理出繁體中文重點摘要並傳送到 Teams。',
      benefits: ['節省時間', 'AI 智能', '重點提取'],
      difficulty: 'advanced',
    },
    {
      id: 5,
      icon: FileText,
      title: '文件上傳自動跑核准流程',
      category: 'SharePoint 自動化',
      description: '不用再寫 Email 詢問！只要將檔案上傳到指定資料夾，系統會自動通知主管審核。核准後，檔案會自動搬移到已核准區。',
      benefits: ['自動流程', '提升效率', '追蹤審核'],
      difficulty: 'intermediate',
    },
    {
      id: 6,
      icon: Lightbulb,
      title: '郵件 AI 自動摘要與翻譯',
      category: 'AI 自動化',
      description: '利用自訂 AI 提示詞，當收到外語或長郵件時，系統自動將內容翻譯並摘要為繁體中文條列重點。',
      benefits: ['多語言支援', 'AI 翻譯', '智能摘要'],
      difficulty: 'advanced',
    },
  ];

  const categories = [
    { name: '郵件自動化', count: 2, color: 'bg-blue-100 text-blue-800' },
    { name: '排程自動化', count: 1, color: 'bg-green-100 text-green-800' },
    { name: 'AI 自動化', count: 2, color: 'bg-purple-100 text-purple-800' },
    { name: 'SharePoint 自動化', count: 1, color: 'bg-amber-100 text-amber-800' },
  ];

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      beginner: 'bg-green-100 text-green-800',
      intermediate: 'bg-blue-100 text-blue-800',
      advanced: 'bg-purple-100 text-purple-800',
    };
    return colors[difficulty as keyof typeof colors] || colors.beginner;
  };

  const getDifficultyLabel = (difficulty: string) => {
    const labels = {
      beginner: '初級',
      intermediate: '中級',
      advanced: '進階',
    };
    return labels[difficulty as keyof typeof labels] || '初級';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header Section */}
      <section className="bg-secondary/30 border-b border-border py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">案例庫</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            精選的實戰應用情境，展示如何在日常工作中應用 Power Automate。每個案例都包含詳細的步驟指南。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          {/* Categories */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-6">按分類瀏覽</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {categories.map((cat) => (
                <Card key={cat.name} className="border-border hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="pt-6">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium mb-3 ${cat.color}`}>
                      {cat.name}
                    </div>
                    <div className="text-2xl font-bold text-foreground">{cat.count}</div>
                    <p className="text-sm text-muted-foreground">個案例</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Scenarios Grid */}
          <div className="space-y-6">
            {scenarios.map((scenario) => {
              const Icon = scenario.icon;
              return (
                <Card key={scenario.id} className="border-border hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-secondary rounded-lg flex items-center justify-center">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="flex flex-wrap items-start gap-2 mb-3">
                          <h3 className="text-lg font-bold text-foreground flex-1">{scenario.title}</h3>
                          <Badge className={getDifficultyColor(scenario.difficulty)}>
                            {getDifficultyLabel(scenario.difficulty)}
                          </Badge>
                        </div>
                        
                        <Badge variant="outline" className="mb-3">
                          {scenario.category}
                        </Badge>

                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {scenario.description}
                        </p>

                        {/* Benefits */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {scenario.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-1 text-sm text-primary">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                              {benefit}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Action */}
                      <div className="flex-shrink-0">
                        <Button className="w-full md:w-auto">
                          查看詳情
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              還有更多案例正在準備中...
            </p>
            <Button variant="outline">
              查看所有案例
            </Button>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            成功故事
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                company: '行銷部門',
                result: '每週節省 5 小時',
                description: '通過自動化郵件分類和報告生成，行銷團隊將手動工作減少了 70%。',
              },
              {
                company: '人力資源部',
                result: '流程審核時間縮短 80%',
                description: '自動化招聘流程和文件管理，使 HR 團隊能夠專注於人才發展。',
              },
              {
                company: '財務部門',
                result: '錯誤率降低 95%',
                description: '自動化發票處理和支出報告，確保準確性和合規性。',
              },
            ].map((story, idx) => (
              <Card key={idx} className="border-border">
                <CardHeader>
                  <CardTitle className="text-lg">{story.company}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-primary mb-3">
                    {story.result}
                  </div>
                  <p className="text-muted-foreground">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            想要建立自己的自動化流程？
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            查看我們的知識庫，學習如何建立適合您業務需求的自動化流程。
          </p>
          <Link href="/knowledge-base">
            <a>
              <Button>
                開始學習
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
