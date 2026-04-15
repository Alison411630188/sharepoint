import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BarChart2,
  TrendingUp,
  AlertTriangle,
  Users,
  Zap,
  Lightbulb,
  CheckCircle2,
  Clock,
  ArrowRight,
} from 'lucide-react';
import Footer from '@/components/Footer';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

interface AnalyticsCardData {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  insights: string[];
}

interface UseCaseData {
  icon: React.ReactNode;
  title: string;
  content: string;
  steps: string[];
}

const ImagePlaceholder: React.FC<{ label?: string }> = ({
  label = '此處請替換為 SharePoint 流程實際截圖',
}) => (
  <div className="w-full h-44 bg-muted border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-2 text-muted-foreground select-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-9 h-9 text-muted-foreground/50"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
    <span className="text-xs font-medium text-center px-4 text-muted-foreground">{label}</span>
  </div>
);

const ANALYTICS_DATA: AnalyticsCardData[] = [
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    title: '流程執行統計',
    subtitle: '監控流程的執行頻率和成功率',
    description:
      '追蹤每個流程的執行次數、成功率和失敗率。這些指標幫助您了解自動化的效果，並識別需要改進的地方。',
    insights: [
      '成功率低於 95% 的流程需要檢查錯誤日誌',
      '執行頻率異常可能表示觸發器設定有問題',
      '對比不同流程的成功率，找出最穩定的自動化模式',
    ],
  },
  {
    icon: <Clock className="w-6 h-6 text-purple-500" />,
    title: '流程執行時間',
    subtitle: '優化流程效能和成本',
    description:
      '分析流程的平均執行時間。更快的執行時間意味著更低的成本和更好的使用者體驗。識別耗時的步驟並進行優化。',
    insights: [
      '執行時間超過 5 分鐘的流程可能需要優化',
      '使用並行操作減少總執行時間',
      '長時間執行的流程會增加成本，需要重點關注',
    ],
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
    title: '錯誤和失敗',
    subtitle: '快速識別和解決問題',
    description:
      '監控流程的失敗情況。常見的失敗原因包括連接器授權問題、資料格式錯誤或外部服務故障。',
    insights: [
      '「連接器授權失敗」通常需要重新授權連接器',
      '「超時」錯誤表示流程執行時間過長',
      '建立錯誤處理機制，例如發送通知或記錄日誌',
    ],
  },
  {
    icon: <Users className="w-6 h-6 text-green-500" />,
    title: '使用者活動',
    subtitle: '了解團隊的自動化採用情況',
    description:
      '追蹤有多少使用者建立和使用流程。這幫助您了解自動化在組織中的採用程度，並識別需要培訓的領域。',
    insights: [
      '低採用率可能表示需要更多培訓和支援',
      '識別高級使用者並讓他們成為內部專家',
      '定期舉辦工作坊提高整體自動化能力',
    ],
  },
];

const USE_CASES: UseCaseData[] = [
  {
    icon: <CheckCircle2 className="w-6 h-6 text-blue-500" />,
    title: '監控關鍵流程的健康狀況',
    content:
      '每天檢查最重要流程的執行統計，確保自動化持續正常運作。',
    steps: [
      '在 SharePoint 首頁查看「最近 24 小時」的流程執行摘要',
      '點擊任何失敗的流程查看詳細的錯誤訊息',
      '根據錯誤類型採取相應的修正措施',
    ],
  },
  {
    icon: <Zap className="w-6 h-6 text-purple-500" />,
    title: '優化流程效能',
    content:
      '定期分析執行時間，找出瓶頸並進行優化以降低成本。',
    steps: [
      '查看執行歷史，找出執行時間最長的流程',
      '分析每個步驟的執行時間，識別耗時的操作',
      '使用並行操作或移除不必要的步驟來優化',
    ],
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-orange-500" />,
    title: '建立流程改進計劃',
    content:
      '基於分析結果制定改進策略，提高自動化的投資回報率。',
    steps: [
      '收集團隊反饋和使用者問題',
      '優先考慮高影響、低成本的改進',
      '定期回顧改進效果並調整策略',
    ],
  },
];

export default function ChartOverview() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

        {/* Header */}
        <div className="bg-primary/5 border-b border-border py-16">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                SharePoint 流程分析與監控
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                了解如何監控流程執行情況、分析效能指標、識別問題並持續改進您的自動化工作流程。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-20">
          <div className="max-w-5xl mx-auto">

            {/* Step 1: 如何查看流程分析 */}
            <MotionContainer direction="up">
              <section className="mb-20">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Step 1．如何查看流程分析
                </h2>
                <p className="text-muted-foreground mb-8">
                  SharePoint 提供內建的分析功能，幫助您監控所有流程的健康狀況。
                </p>

                <HoverScale>
                  <Card className="border-border bg-card hover:shadow-xl transition-shadow overflow-hidden">
                    <CardHeader className="bg-muted/50 border-b border-border pb-6">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-background rounded-xl shadow-sm">
                          <BarChart2 className="w-6 h-6 text-blue-500" />
                        </div>
                        <CardTitle className="text-xl text-card-foreground">訪問分析儀表板</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* 步驟說明 */}
                        <div className="space-y-4">
                          {[
                            {
                              step: '登入 SharePoint',
                              detail:
                                '訪問 https://flow.microsoft.com，使用您的 Microsoft 帳戶登入。',
                            },
                            {
                              step: '選擇流程',
                              detail:
                                '從「我的流程」列表中選擇您想要分析的流程。',
                            },
                            {
                              step: '查看分析',
                              detail:
                                '點擊流程名稱進入詳細頁面，您會看到執行歷史和分析圖表。',
                            },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm">
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <div>
                                <p className="font-semibold text-foreground">{item.step}</p>
                                <p className="text-muted-foreground mt-0.5">{item.detail}</p>
                              </div>
                            </div>
                          ))}

                          <div className="flex items-start gap-2 bg-primary/5 border-l-4 border-primary p-3.5 rounded-r-xl text-sm text-muted-foreground mt-2">
                            <Lightbulb className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>
                              <strong className="text-foreground">提示：</strong>
                              分析資料通常延遲 5-10 分鐘更新。
                            </span>
                          </div>
                        </div>

                        {/* 截圖佔位符 */}
                        <div className="flex flex-col gap-2">
                          <ImagePlaceholder label="此處請替換為 SharePoint 分析儀表板實際截圖" />
                          <p className="text-xs text-muted-foreground text-center">
                            ↑ SharePoint 分析儀表板
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </HoverScale>
              </section>
            </MotionContainer>

            {/* Step 2: 四大核心分析指標 */}
            <section className="mb-20">
              <MotionContainer direction="up">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Step 2．四大核心分析指標
                </h2>
                <p className="text-muted-foreground mb-8">
                  每種指標提供不同的洞察，幫助您全面了解流程的效能。
                </p>
              </MotionContainer>

              <div className="grid md:grid-cols-2 gap-8">
                {ANALYTICS_DATA.map((chart, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                    <HoverScale>
                      <Card className="border-border bg-card h-full hover:shadow-xl transition-shadow overflow-hidden">
                        <CardHeader className="bg-muted/50 border-b border-border pb-6">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-background rounded-xl shadow-sm">
                              {chart.icon}
                            </div>
                            <div>
                              <CardTitle className="text-xl text-card-foreground">{chart.title}</CardTitle>
                              <p className="text-sm text-muted-foreground mt-0.5">{chart.subtitle}</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6 flex flex-col gap-5">
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {chart.description}
                          </p>

                          <ImagePlaceholder label={`此處請替換為「${chart.title}」圖表截圖`} />

                          <div>
                            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-3">
                              重點洞察：
                            </p>
                            <div className="space-y-2">
                              {chart.insights.map((insight, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm">
                                  <span className="text-primary mt-1">•</span>
                                  <span className="text-muted-foreground">{insight}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </HoverScale>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* Step 3: 實務應用場景 */}
            <section className="mb-20">
              <MotionContainer direction="up">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Step 3．實務應用場景
                </h2>
                <p className="text-muted-foreground mb-8">
                  看看如何在實際工作中運用這些分析指標。
                </p>
              </MotionContainer>

              <div className="space-y-6">
                {USE_CASES.map((useCase, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                    <HoverScale>
                      <Card className="border-border bg-card hover:shadow-lg transition-shadow overflow-hidden">
                        <CardHeader className="bg-muted/50 border-b border-border pb-6">
                          <div className="flex items-center gap-4">
                            <div className="p-3 bg-background rounded-xl shadow-sm">
                              {useCase.icon}
                            </div>
                            <CardTitle className="text-lg text-card-foreground">{useCase.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent className="pt-6">
                          <p className="text-muted-foreground mb-6">{useCase.content}</p>
                          <div>
                            <p className="text-sm font-bold text-foreground mb-3">具體步驟：</p>
                            <ol className="space-y-2">
                              {useCase.steps.map((step, i) => (
                                <li key={i} className="flex items-start gap-3 text-sm">
                                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0">
                                    {i + 1}
                                  </span>
                                  <span className="text-muted-foreground">{step}</span>
                                </li>
                              ))}
                            </ol>
                          </div>
                        </CardContent>
                      </Card>
                    </HoverScale>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* Best Practices */}
            <MotionContainer direction="up">
              <section className="mb-20 bg-primary/10 border-l-4 border-primary p-8 rounded-r-lg">
                <div className="flex gap-4">
                  <Lightbulb className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg text-foreground mb-4">💡 分析最佳實踐</p>
                    <ul className="space-y-3 text-muted-foreground">
                      <li>• <strong className="text-foreground">定期檢查：</strong>每週查看一次流程分析，及早發現問題</li>
                      <li>• <strong className="text-foreground">設定警報：</strong>當失敗率超過閾值時自動通知</li>
                      <li>• <strong className="text-foreground">記錄基準：</strong>建立效能基準，追蹤改進進度</li>
                      <li>• <strong className="text-foreground">與團隊分享：</strong>定期向團隊報告自動化成果</li>
                    </ul>
                  </div>
                </div>
              </section>
            </MotionContainer>

            {/* CTA */}
            <MotionContainer direction="up">
              <div className="text-center py-12 border-t border-border">
                <h3 className="text-xl font-bold mb-6 text-foreground">準備好開始監控您的流程了嗎？</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/support/faq">
                    <HoverScale>
                      <Button size="lg" variant="outline" className="px-10 bg-background text-foreground hover:bg-muted">
                        查看常見問題
                      </Button>
                    </HoverScale>
                  </Link>
                  <Link href="/support/contact">
                    <HoverScale>
                      <Button size="lg" className="px-10 text-primary-foreground gap-2">
                        獲取幫助 <ArrowRight className="w-4 h-4" />
                      </Button>
                    </HoverScale>
                  </Link>
                </div>
              </div>
            </MotionContainer>

          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
}
