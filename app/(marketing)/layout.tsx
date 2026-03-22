import { MarketingNavbar } from '@/components/marketing/navbar';
import { Footer } from '@/components/marketing/footer';

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <MarketingNavbar />
      {children}
      <Footer />
    </div>
  );
}
