import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/60 p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div initial={{ opacity: 0, y: 16, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 10 }} className="w-full max-w-xl">
            <Card className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-semibold text-white">{title}</h3>
                <button onClick={onClose} className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:bg-white/5 hover:text-white" aria-label="Close modal">
                  <X className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-6">{children}</div>
            </Card>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
