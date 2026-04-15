import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, FileText, Zap } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * Document Center Page - Enterprise SharePoint Portal Style
 * Design Philosophy: Modern Enterprise
 * - Organized document library with categories
 * - Easy download and preview functionality
 * - Professional document management interface
 */

export default function DocumentCenter() {
  const documents = [
    {
      id: 1,
      title: 'Power Automate 快速入門指南',
      description: '全面的入門指南，涵蓋基本概念、界面導覽和第一個流程的建立。',
      category: '入門指南',
      format: 'PDF',
      size: '2.4 MB',
      downloads: 1250,
    },
    {
      id: 2,
      title: '雲端流程最佳實踐',
      description: '業界公認的最佳實踐，幫助您設計高效、可維護的自動化流程。',
      category: '最佳實踐',
      format: 'PDF',
      size: '3.1 MB',
      downloads: 890,
    },
    {
      id: 3,
      title: 'Power Automate 流程範本集',
      description: '預先設計的流程範本，可直接使用或作為您自己流程的基礎。',
      category: '範本',
      format: 'ZIP',
      size: '5.2 MB',
      downloads: 2100,
    },
    {
      id: 4,
      title: '常見錯誤與故障排除指南',
      description: '詳細列出常見錯誤、其原因以及解決方案。',
      category: '故障排除',
      format: 'PDF',
      size: '1.8 MB',
      downloads: 650,
    },
    {
      id: 5,
      title: 'Power Automate 與 AI Builder 整合指南',
      description: '學習如何在您的流程中集成 AI 功能，實現智能自動化。',
      category: 'AI 整合',
      format: 'PDF',
      size: '2.9 MB',
      downloads: 420,
    },
    {
      id: 6,
      title: 'SharePoint 與 Power Automate 協作指南',
      description: '深入瞭解如何使用 Power Automate 增強 SharePoint 工作流程。',
      category: 'SharePoint 整合',
      format: 'PDF',
      size: '3.5 MB',
      downloads: 780,
    },
    {
      id: 7,
      title: 'Teams 自動化工作流程範本',
      description: '針對 Teams 環境優化的自動化流程範本和最佳實踐。',
      category: '範本',
      format: 'ZIP',
      size: '4.1 MB',
      downloads: 1560,
    },
    {
      id: 8,
      title: 'Power Automate 安全性與合規性指南',
      description: '確保您的自動化流程符合企業安全和合規要求。',
      category: '安全性',
      format: 'PDF',
      size: '2.6 MB',
      downloads: 340,
    },
  ];

  const categories = [
    { name: '全部', count: 8 },
    { name: '入門指南', count: 1 },
    { name: '最佳實踐', count: 1 },
    { name: '範本', count: 2 },
    { name: '故障排除', count: 1 },
    { name: 'AI 整合', count: 1 },
    { name: 'SharePoint 整合', count: 1 },
    { name: '安全性', count: 1 },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      '入門指南': 'bg-blue-100 text-blue-800',
      '最佳實踐': 'bg-green-100 text-green-800',
      '範本': 'bg-purple-100 text-purple-800',
      '故障排除': 'bg-amber-100 text-amber-800',
      'AI 整合': 'bg-pink-100 text-pink-800',
      'SharePoint 整合': 'bg-indigo-100 text-indigo-800',
      '安全性': 'bg-red-100 text-red-800',
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header Section */}
      <section className="bg-secondary/30 border-b border-border py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">文件中心</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            下載教材、範本和最佳實踐文件，加速您的 Power Automate 學習進程。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          {/* Categories Filter */}
          <div className="mb-12">
            <h2 className="text-xl font-bold text-foreground mb-6">按分類瀏覽</h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat) => (
                <Button
                  key={cat.name}
                  variant={cat.name === '全部' ? 'default' : 'outline'}
                  className="rounded-full"
                >
                  {cat.name}
                  <span className="ml-2 text-xs opacity-70">({cat.count})</span>
                </Button>
              ))}
            </div>
          </div>

          {/* Documents Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {documents.map((doc) => (
              <Card key={doc.id} className="border-border hover:shadow-lg transition-shadow flex flex-col">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <CardTitle className="text-lg">{doc.title}</CardTitle>
                    </div>
                    <Badge className={getCategoryColor(doc.category)}>
                      {doc.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-muted-foreground mb-6 flex-1">
                    {doc.description}
                  </p>

                  {/* Document Info */}
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4 pb-4 border-t border-border pt-4">
                    <div className="flex gap-4">
                      <span className="flex items-center gap-1">
                        <FileText className="w-4 h-4" />
                        {doc.format}
                      </span>
                      <span>{doc.size}</span>
                    </div>
                    <span className="text-xs">{doc.downloads} 次下載</span>
                  </div>

                  {/* Download Button */}
                  <Button className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    下載
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            推薦資源
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: '快速開始',
                description: '5 分鐘快速入門 Power Automate，立即開始您的自動化之旅。',
                link: '#',
              },
              {
                icon: FileText,
                title: '完整教程',
                description: '從基礎到進階的完整教程，涵蓋所有重要主題。',
                link: '#',
              },
              {
                icon: Download,
                title: '範本庫',
                description: '下載預先設計的流程範本，節省開發時間。',
                link: '#',
              },
            ].map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <Card key={idx} className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold text-foreground mb-2">{resource.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                    <a href={resource.link} className="text-primary text-sm font-medium hover:underline">
                      瞭解更多 →
                    </a>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            常見問題
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: '如何下載文件？',
                a: '點擊任何文件卡片上的「下載」按鈕即可下載。文件將直接保存到您的設備。',
              },
              {
                q: '這些文件是否定期更新？',
                a: '是的，我們定期更新所有文件以反映最新的 Power Automate 功能和最佳實踐。',
              },
              {
                q: '我可以在公司內部分享這些文件嗎？',
                a: '可以。這些文件可在您的組織內部自由分享，用於教育和培訓目的。',
              },
              {
                q: '是否有離線版本可用？',
                a: '是的，所有 PDF 文件都可以離線查看。下載後即可在任何設備上打開。',
              },
            ].map((faq, idx) => (
              <Card key={idx} className="border-border">
                <CardContent className="pt-6">
                  <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground text-sm">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-2xl font-bold mb-4">
            找不到您需要的文件？
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            聯絡我們的技術支援團隊，我們會幫助您找到所需的資源。
          </p>
          <Link href="/support">
            <Button className="bg-white text-primary hover:bg-white/90">
              联絡支援
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
