import { Switch, Route } from "wouter";
import { Toaster } from "sonner";
import NotFound from "@/pages/NotFound";
import Home from "@/pages/Home";
import WhatIsAutomate from "@/pages/basics/WhatIsAutomate";
import OperationGuide from "@/pages/tutorials/OperationGuide";
import ChartOverview from "@/pages/dashboard/ChartOverview";

import FAQ from "@/pages/support/FAQ";
import Contact from "@/pages/support/Contact";
import UseCases from "@/pages/scenarios/UseCases";

// 👇 1. 將引入的元件名稱與路徑，更新為 HubSite (中樞網站)
import HubSite from "@/pages/HubSite"; 
import ScrollToTop from "@/components/ScrollToTop";

import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Layout from "./components/Layout";

function Router() {
  return (
    <Layout>
      <ScrollToTop />

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/basics/what-is-automate" component={WhatIsAutomate} />
        <Route path="/tutorials/operation-guide" component={OperationGuide} />
        
        {/* 👇 2. 將路由網址更新為更專業的 /hub-site */}
        <Route path="/hub-site" component={HubSite} />
        
        <Route path="/dashboard" component={ChartOverview} />
        <Route path="/support/faq" component={FAQ} />
        <Route path="/support/contact" component={Contact} />
        <Route path="/scenarios/use-cases" component={UseCases} />

        <Route path="/404" component={NotFound} />
        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider switchable>
      <ErrorBoundary>
        <Router />
        <Toaster />
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;