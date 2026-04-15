import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, MessageCircle, Mail, Phone, Clock, Search } from 'lucide-react';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * Support Page - Enterprise SharePoint Portal Style
 * Design Philosophy: Modern Enterprise
 * - Comprehensive FAQ section with search functionality
 * - Multiple support channels (email, phone, chat)
 * - Professional support interface
 */

export default function Support() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      category: '基本問題',
      questions: [
        {
          q: 'SharePoint 需要程式背景嗎？',
          a: '完全不需要！SharePoint 提供了直觀的介面，任何人都可以建立和管理網站。我們的知識庫提供詳細的逐步指南。',
        },
        {
          q: 'SharePoint 網站和文件庫有什麼區別？',
          a: 'SharePoint 網站是整個協作空間，文件庫是網站中的文件存存位置。您可以在一個網站中有多個文件庫。',
        },
        {
          q: 'SharePoint 的成本是多少？',
          a: '多數企業可免費使用基本功能。進階功能需要付費授權。詳情請联絡您的 IT 部門。',
        },
      ],
    },
    {
      category: '網站建立',
      questions: [
        {
          q: '如何開始建立我的第一個網站？',
          a: '訪問您的 SharePoint 管理中心，登入您的 Microsoft 帳戶，選擇網站類型並開始建立。我們的知識庫有詳細教程。',
        },
        {
          q: '如何在網站中管理權限？',
          a: '權限用於控制護該有訪問、编輯和削除權限。在網站訪問權限設置中配置。',
        },
        {
          q: '如何測試我的網站？',
          a: '使用「測試」按鈕進行手動測試。提供必要的輸入值，檢查流程是否按預期運行。',
        },
      ],
    },
    {
      category: '故障排除',
      questions: [
        {
          q: '我的流程為什麼沒有運行？',
          a: '檢查觸發器是否正確配置、連接是否有效、是否有任何錯誤消息。查看流程的運行歷史以了解詳情。',
        },
        {
          q: '如何查看流程的運行歷史？',
          a: '在流程詳情頁面，點擊「28 天運行歷史」查看所有運行記錄、成功/失敗狀態和詳細日誌。',
        },
        {
          q: '如何處理流程中的錯誤？',
          a: '使用「條件」或「切換」動作來處理不同的情況。添加「應用於每個」來處理多個項目。',
        },
      ],
    },
    {
      category: '整合與連接',
      questions: [
        {
          q: '如何連接 SharePoint？',
          a: '在流程中新增 SharePoint 動作，選擇網站，然後選擇列表或文件庫。首次使用需要授權。',
        },
        {
          q: '我可以連接哪些應用程式？',
          a: 'SharePoint 支援 500+ 個應用程式連接器，包括 Microsoft 365、Salesforce、Slack 等。',
        },
        {
          q: '如何使用 AI Builder？',
          a: '在流程中新增「執行提示」動作，選擇或建立自訂提示，然後配置輸入和輸出。',
        },
      ],
    },
  ];

  const filteredFaqs = faqs.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Header Section */}
      <section className="bg-secondary/30 border-b border-border py-16">
        <div className="container">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-foreground">技術支援</h1>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl">
            我們的支援團隊隨時準備幫助您。瀏覽常見問題或聯絡我們。
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          {/* Support Channels */}
          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: Mail,
                title: '電子郵件',
                description: '發送詳細問題',
                contact: 'support@example.com',
                response: '通常在 24 小時內回覆',
              },
              {
                icon: Phone,
                title: '電話',
                description: '立即獲得幫助',
                contact: '+886 2 XXXX-XXXX',
                response: '工作時間：週一至週五 09:00-18:00',
              },
              {
                icon: MessageCircle,
                title: '線上聊天',
                description: '實時支援',
                contact: '點擊右下角聊天按鈕',
                response: '工作時間內立即回應',
              },
            ].map((channel, idx) => {
              const Icon = channel.icon;
              return (
                <Card key={idx} className="border-border hover:shadow-md transition-shadow">
                  <CardContent className="pt-6">
                    <Icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="font-bold text-foreground mb-2">{channel.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{channel.description}</p>
                    <div className="bg-secondary/50 rounded-lg p-3 mb-3">
                      <p className="text-sm font-medium text-foreground">{channel.contact}</p>
                    </div>
                    <p className="text-xs text-muted-foreground">{channel.response}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              常見問題
            </h2>

            {/* Search Box */}
            <div className="max-w-2xl mx-auto mb-12">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="搜尋問題..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-border rounded-lg bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            {/* FAQs */}
            <div className="max-w-3xl mx-auto space-y-8">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((category) => (
                  <div key={category.category}>
                    <h3 className="text-xl font-bold text-foreground mb-6 pb-3 border-b border-border">
                      {category.category}
                    </h3>
                    <div className="space-y-4">
                      {category.questions.map((faq, idx) => (
                        <Card key={idx} className="border-border hover:shadow-sm transition-shadow">
                          <CardContent className="pt-6">
                            <h4 className="font-bold text-foreground mb-3">{faq.q}</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">找不到相關問題。請嘗試其他搜尋詞。</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            其他資源
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
    {
      icon: Clock,
      title: '知識庫',
      description: '瀏覽完整的 SharePoint 教程和指南',
      link: '/knowledge-base',
    },
    {
      icon: Search,
      title: '案例庫',
      description: '查看實戰協作情境',
      link: '/scenario-gallery',
    },
    {
      icon: ArrowRight,
      title: '文件中心',
      description: '下載 SharePoint 教材和範本',
      link: '/document-center',
    },
            ].map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <Link key={idx} href={resource.link}>
                  <Card className="border-border hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="pt-6">
                      <Icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="font-bold text-foreground mb-2">{resource.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{resource.description}</p>
                      <div className="text-primary text-sm font-medium flex items-center">
                        前往 <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            仍然需要幫助？
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            我們的支援團隊隨時準備幫助您解決任何問題。
          </p>
          <Button>
            聯絡支援
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
