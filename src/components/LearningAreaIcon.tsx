import { BookOpen, Hand, Keyboard, Layers } from "lucide-react";
const icons = { keyboard: Keyboard, book: BookOpen, layers: Layers, hand: Hand } as const;
export function LearningAreaIcon({ name }: { name: keyof typeof icons }) {
  const Icon = icons[name];
  return <Icon aria-hidden className="h-6 w-6 text-brand-ink" />;
}
