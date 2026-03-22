import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastProvider } from '@/hooks/useToast';
import { HomePage } from '@/pages/HomePage';
import { DashboardPage } from '@/pages/DashboardPage';
import { TrendsPage } from '@/pages/TrendsPage';
import { PlannerPage } from '@/pages/PlannerPage';
import { IdeasPage } from '@/pages/IdeasPage';
import { WorkspacePage } from '@/pages/WorkspacePage';
import { PricingPage } from '@/pages/PricingPage';
import { NotFoundPage } from '@/pages/NotFoundPage';

export default function App() {
  return (
    <ToastProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/trends" element={<TrendsPage />} />
        <Route path="/planner" element={<PlannerPage />} />
        <Route path="/ideas" element={<IdeasPage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ToastProvider>
  );
}
