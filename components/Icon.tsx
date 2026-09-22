import {
  Anchor,
  BedDouble,
  Box,
  Boxes,
  Brush,
  CakeSlice,
  Car,
  ClipboardList,
  Croissant,
  Droplets,
  Factory,
  Flame,
  Milk,
  PackageOpen,
  Phone,
  Receipt,
  Recycle,
  Route,
  ScrollText,
  Ship,
  ShoppingBasket,
  Sparkles,
  SprayCan,
  Stethoscope,
  UtensilsCrossed,
  WashingMachine,
  Wheat,
  type LucideIcon,
} from 'lucide-react';

import type { IconName } from '@/content/site';

/**
 * `content/site.ts` içindeki `IconName` anahtarlarının lucide karşılıkları.
 * Record tipi sayesinde eksik bir anahtar derleme hatası verir.
 */
const registry: Record<IconName, LucideIcon> = {
  boxes: Boxes,
  truck: Route,
  receipt: Receipt,
  sprayCan: SprayCan,
  droplets: Droplets,
  packageOpen: PackageOpen,
  shoppingBasket: ShoppingBasket,
  wheat: Wheat,
  recycle: Recycle,
  washingMachine: WashingMachine,
  scrollText: ScrollText,
  box: Box,
  sparkles: Sparkles,
  hotel: BedDouble,
  restaurant: UtensilsCrossed,
  flame: Flame,
  cake: CakeSlice,
  bread: Croissant,
  hospital: Stethoscope,
  milk: Milk,
  car: Car,
  brush: Brush,
  ship: Ship,
  anchor: Anchor,
  factory: Factory,
  phone: Phone,
  clipboard: ClipboardList,
  route: Route,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  const Glyph = registry[name];
  return <Glyph className={className} strokeWidth={strokeWidth} aria-hidden />;
}
