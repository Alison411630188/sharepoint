import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Zap, FileText, LifeBuoy, Lightbulb } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

/**
 * Home Page - Enterprise SharePoint Portal Style
 * Design Philosophy: Modern Enterprise
 * - Professional hero section with enterprise aesthetic
 * - Clear value proposition with feature cards
 * - Smooth transitions and subtle hover effects
 * - Information hierarchy using typography and spacing
 */

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663505850654/muAFUuW7DUmEfTGA9nSUFP/hero-background-MJdEPAPehfPYavCSRFyevq.webp';

export default function Home() {
  const sections = [
    {
      id: 'knowledge-base',
      icon: BookOpen,
      title: '知識庫',
      description: '系統化的 Power Automate 入門指南與操作教學，幫助您快速掌握自動化技巧。',
      href: '/knowledge-base',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
    },
    {
      id: 'scenario-gallery',
      icon: Lightbulb,
      title: '案例庫',
      description: '精選的實戰應用情境，展示如何在日常工作中應用 Power Automate。',
      href: '/scenario-gallery',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50',
    },
    {
      id: 'document-center',
      icon: FileText,
      title: '文件中心',
      description: '下載教材、範本和最佳實踐文件，加速您的學習進程。',
      href: '/document-center',
      color: 'text-amber-600',
      bgColor: 'bg-amber-50',
    },
    {
      id: 'support',
      icon: LifeBuoy,
      title: '技術支援',
      description: '常見問題解答、故障排除指南和技術支援資源。',
      href: '/support',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <section
        className="relative min-h-[500px] flex items-center justify-center py-20 overflow-hidden"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 container max-w-3xl px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            SharePoint 實戰學院
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            企業內部協作平台。掌握 SharePoint 技巧，提升團隊協作效率，打造高效的文件管理系統。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/knowledge-base">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                開始學習
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <Link href="/scenario-gallery">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white/90 hover:bg-white">
                查看案例
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              探索學習資源
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              我們提供全面的 SharePoint 學習資源，從基礎入門到進階應用，幫助您成為協作平台專家。
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <Link key={section.id} href={section.href}>
                  <a>
                    <Card className="h-full hover:shadow-lg hover:border-primary/50 transition-all duration-300 cursor-pointer group">
                      <CardHeader>
                        <div className={`w-12 h-12 ${section.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                          <Icon className={`w-6 h-6 ${section.color}`} />
                        </div>
                        <CardTitle className="text-lg text-card-foreground">{section.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {section.description}
                        </p>
                        <div className="mt-4 flex items-center text-primary text-sm font-medium">
                          瞭解更多 <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </a>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Power Automate Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            為什麼選擇 SharePoint？
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: '提升效率',
                desc: '集中管理文件，減少重複工作，讓您的團隊專注於核心業務。',
              },
              {
                icon: '🔗',
                title: '無縫整合',
                desc: '完美整合 Teams、Outlook、OneDrive 等 Microsoft 365 應用。',
              },
              {
                icon: '🎯',
                title: '易於使用',
                desc: '直觀的介面設計，無需技術背景即可快速上手。',
              },
              {
                icon: '💰',
                title: '成本效益',
                desc: '內建於 Microsoft 365，無需額外投資即可開始使用。',
              },
              {
                icon: '🛡️',
                title: '安全可靠',
                desc: '企業級安全性與版本控制，保護您的重要文件。',
              },
              {
                icon: '📈',
                title: '可擴展性',
                desc: '從小型團隊到大型企業，滿足各種協作需求。',
              },
            ].map((benefit, idx) => (
              <Card key={idx} className="border-border bg-card hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '200+', label: '學習資源' },
              { number: '40+', label: '實戰案例' },
              { number: '5000+', label: '用戶' },
              { number: '98%', label: '滿意度' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">
            準備好開始了嗎？
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            加入我們的學習社群，探索 SharePoint 的無限可能。
          </p>
          <Link href="/knowledge-base">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              立即開始
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
