import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Users, Shield, Globe, Cloud } from 'lucide-react';
import Footer from '@/components/Footer';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446932732/47KbkvpLmL9hw6oikty2zt/hero-background-f72QBXASMByD6dkQHLkYv3.webp';
const LEARNING_PATH_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446932732/47KbkvpLmL9hw6oikty2zt/learning-path-XqbuTSKxSYNunr7DGZ28Xu.webp';
const M365_ECOSYSTEM_IMG = '/templates/sharepoint.png';

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        
        {/* Hero Section */}
        <section
          className="relative min-h-[600px] flex items-center justify-center text-center py-20 overflow-hidden"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-background/70 backdrop-blur-[2px]"></div>
          <div className="relative z-10 container max-w-3xl px-4">
            <MotionContainer direction="up" delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                打造企業專屬的雲端數位辦公室
              </h1>
            </MotionContainer>
            <MotionContainer direction="up" delay={0.2}>
              <p className="text-xl text-foreground mb-8">
                專為企業同仁設計的 SharePoint 完整指南。從建立跨部門入口網到集中管理各類營運報表，一站式掌握所有協作技巧。
              </p>
            </MotionContainer>
            <MotionContainer direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/basics/what-is-sharepoint">
                  <HoverScale>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                      了解核心概念
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </HoverScale>
                </Link>
                <Link href="/tutorials/operation-guide">
                  <HoverScale>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto bg-background">
                      查看操作指南
                    </Button>
                  </HoverScale>
                </Link>
              </div>
            </MotionContainer>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <MotionContainer direction="up">
              <h2 className="text-3xl font-bold text-center mb-12">
                為什麼選擇 SharePoint？
              </h2>
            </MotionContainer>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Users className="w-6 h-6 text-primary" />, title: '提升跨部門協作效率', desc: '集中管理專案文件與知識庫，徹底解決檔案版本混亂與資訊落差的痛點。' },
                { icon: <Shield className="w-6 h-6 text-primary" />, title: '企業級的權限與安全', desc: '針對網站、資料夾或單一檔案設定精準的存取權限，確保機密資料安全無虞。' },
                { icon: <Globe className="w-6 h-6 text-primary" />, title: '零程式碼建立入口網', desc: '透過直觀的視覺化網頁組件，任何人都能快速拼湊出美觀的企業或部門通訊網站。' }
              ].map((feature, idx) => (
                <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                  <HoverScale>
                    <Card className="border-border bg-card hover:shadow-lg transition h-full">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          {feature.icon}
                        </div>
                        <CardTitle className="text-card-foreground">{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-foreground/80">{feature.desc}</p>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </MotionContainer>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <MotionContainer direction="left">
                <h2 className="text-3xl font-bold mb-6">
                  系統化學習路徑
                </h2>
                <div className="space-y-6">
                  {[
                    { step: 1, stage: '第一階段', title: '釐清建站架構', desc: '了解小組網站與通訊網站的核心差異，並學習如何根據專案需求選擇正確的網站範本。', link: '/basics/what-is-sharepoint', linkText: '前往入門指南' },
                    { step: 2, stage: '第二階段', title: '檔案管理與協作', desc: '掌握文件庫的進階應用，包含版本控制、共同編輯，以及如何與 Teams 進行深度連動。', link: '/tutorials/operation-guide', linkText: '前往操作指南' },
                    { step: 3, stage: '第三階段', title: '進階排版與權限', desc: '學習使用視覺化網頁組件打造美觀的入口網頁面，並熟悉企業級的站點權限與安全設定。', link: '/support/faq', linkText: '查看常見問題' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-primary">{item.stage}</p>
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-foreground/80">{item.desc}</p>
                        <Link href={item.link} className="text-xs text-primary hover:underline mt-2 inline-block font-semibold">
                          {item.linkText} →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionContainer>
              <MotionContainer direction="right">
                <img src={LEARNING_PATH_IMG} alt="Learning Path" className="w-full rounded-lg shadow-lg opacity-90 dark:opacity-80 transition-opacity" />
              </MotionContainer>
            </div>
          </div>
        </section>

        {/* M365 Ecosystem Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <MotionContainer direction="left">
                <img src={M365_ECOSYSTEM_IMG} alt="M365 Ecosystem" className="w-full rounded-lg shadow-lg opacity-90 dark:opacity-80 transition-opacity" />
              </MotionContainer>
              <MotionContainer direction="right">
                <h2 className="text-3xl font-bold mb-6">
                  與 Microsoft 365 完美整合
                </h2>
                <p className="text-foreground/80 mb-6">
                  SharePoint 扮演著 Microsoft 365 生態系的地基角色。無論您使用 Teams、OneDrive 還是 Office 軟體，底層的檔案管理與協作機制都與 SharePoint 緊密相連。
                </p>
                <ul className="space-y-3">
                  {[
                    '在 Teams 頻道中直接存取並共同編輯 SharePoint 文件庫',
                    '透過 OneDrive 輕鬆將 SharePoint 雲端資料夾同步至本地端',
                    '無縫整合 Word、Excel 與 PowerPoint 實現多人即時協作',
                    '作為企業內部跨部門專案與規範文件的集中儲存樞紐'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </MotionContainer>
            </div>
          </div>
        </section>

        {/* FAQ Preview Section */}
        <section className="py-20">
          <div className="container">
            <MotionContainer direction="up">
              <h2 className="text-3xl font-bold text-center mb-12">
                常見問題快速回答
              </h2>
            </MotionContainer>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { q: '建立 SharePoint 網站需要寫程式碼嗎？', a: '完全不需要！SharePoint 提供直觀的拖曳式介面與豐富的網頁組件，任何人都能像拼積木一樣輕鬆建立網頁。' },
                { q: '小組網站和通訊網站有什麼差別？', a: '小組網站專注於部門內部的私密協作與檔案共享；通訊網站則適合跨部門的公開資訊佈達與建立企業入口網。' },
                { q: '放在 SharePoint 上的資料安全嗎？', a: '非常安全。您可以精確設定網站、文件庫甚至單一檔案的存取權限，確保只有獲得授權的成員才能查看或編輯內容。' },
                { q: '如何開始建立我的第一個網站？', a: '進入 SharePoint 首頁後，點擊左上角的「建立網站」，根據您的需求選擇小組或通訊範本，接著跟隨畫面指引即可快速完成建置。' }
              ].map((faq, idx) => (
                <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                  <Card className="border-border bg-card h-full">
                    <CardHeader>
                      <CardTitle className="text-base text-card-foreground leading-relaxed">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-foreground/80">{faq.a}</p>
                    </CardContent>
                  </Card>
                </MotionContainer>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/support/faq">
                <HoverScale>
                  <Button variant="outline" className="bg-background">
                    查看所有常見問題
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </HoverScale>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground overflow-hidden">
          <div className="container text-center relative">
            <MotionContainer direction="up">
              <h2 className="text-3xl font-bold mb-6">
                準備好開始建置網站了嗎？
              </h2>
              <p className="text-lg mb-8 text-primary-foreground/90">
                只需短短 15 分鐘，您就能釐清 SharePoint 的基礎概念，並準備好建立您的第一個專案協作空間。
              </p>
              <Link href="/basics/what-is-sharepoint">
                <HoverScale>
                  <Button size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    立即開始學習
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </HoverScale>
              </Link>
            </MotionContainer>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}