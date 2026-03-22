import { AppSidebar } from '@/components/app/sidebar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-[1600px] gap-6 px-4 py-4 sm:px-6 lg:px-8">
      <AppSidebar />
      <main className="flex-1 pt-16 lg:pt-0">{children}</main>
    </div>
  );
}
