import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Mail, Save, Clock, MessageSquare, FileText, Lightbulb, Zap } from 'lucide-react';
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
      title: '集中文件管理與統一存取',
      category: '文件管理',
      description: '使用 SharePoint 文件庫集中存存各部門的文件、設計稿和永管文件，實現統一管理。',
      benefits: ['統一存取', '永管保護', '版本控制'],
      difficulty: 'beginner',
    },
    {
      id: 2,
      icon: Mail,
      title: 'Teams 频道與 SharePoint 網站整合',
      category: 'Teams 整合',
      description: '將 SharePoint 網站作為 Teams 频道的中心，讓永管、永管與流程直接在 Teams 中使用，實現無縫協作。',
      benefits: ['無縫整合', '提升效率', '協作便利'],
      difficulty: 'beginner',
    },
    {
      id: 3,
      icon: Clock,
      title: '永管與版本控制策略',
      category: '文件保護',
      description: '設置文件永管策略，確保重要文件不會被意外削除。追蹤每個版本的變更，需要時可以恢複。',
      benefits: ['重要文件保護', '版本追蹤', '恢複功能'],
      difficulty: 'intermediate',
    },
    {
      id: 4,
      icon: MessageSquare,
      title: '水平權限控制與安全管理',
      category: '安全管理',
      description: '設置權限級別，控制不同使用者的訪問、编輯和削除權限。實現細粒化的安全管理。',
      benefits: ['細粒化權限', '安全控制', '實施容易'],
      difficulty: 'intermediate',
    },
    {
      id: 5,
      icon: FileText,
      title: '內容类別与搜索優化',
      category: '內容管理',
      description: '使用內容类別組織文件、標籤和上位組織，提高搜索效率。讓使用者快速找到所需文件。',
      benefits: ['搜索效率', '內容組織', '學習曲線低'],
      difficulty: 'advanced',
    },
    {
      id: 6,
      icon: Lightbulb,
      title: '定時保管與清理策略',
      category: '文件管理',
      description: '設置自動保管策略，清理過旧文件。根據保管時間自動將文件移到保管區，節省存存空間。',
      benefits: ['自動保管', '空間節省', '管理粗易'],
      difficulty: 'intermediate',
    },
  ];

  const categories = [
    { name: '文件管理', count: 2, color: 'bg-blue-100 text-blue-800' },
    { name: 'Teams 整合', count: 1, color: 'bg-green-100 text-green-800' },
    { name: '文件保護', count: 1, color: 'bg-purple-100 text-purple-800' },
    { name: '安全管理', count: 1, color: 'bg-amber-100 text-amber-800' },
    { name: '內容管理', count: 1, color: 'bg-pink-100 text-pink-800' },
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
              <Zap className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">案例庫</h1>
          </div>
          <p className="text-lg text-foreground/80 max-w-2xl">
            真實的 SharePoint 協作案例，使用者分享他們的成功故事。探索各種不同的使用情景。
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
                    <p className="text-sm text-foreground/80">個案例</p>
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

                        <p className="text-foreground/80 mb-4 leading-relaxed">
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
            <p className="text-foreground/80 mb-6">
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
                  <p className="text-foreground/80">{story.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            查看我們的學習資源
          </h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            查看我們的知識庫，學習如何建立適合您業務需求的 SharePoint 協作系統。
          </p>
          <Link href="/knowledge-base">
            <Button>
              開始學習
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
