import {
  BadgeCheck,
  Bot,
  Building2,
  Clapperboard,
  ClipboardCheck,
  Compass,
  Cpu,
  Factory,
  Gamepad2,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  KeyRound,
  Landmark,
  Network,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Users,
  Wrench,
  Zap,
  type LucideIcon,
} from 'lucide-react'

const icons: Record<string, LucideIcon> = {
  BadgeCheck,
  Bot,
  Building2,
  Clapperboard,
  ClipboardCheck,
  Compass,
  Cpu,
  Factory,
  Gamepad2,
  GraduationCap,
  HeartHandshake,
  HeartPulse,
  KeyRound,
  Landmark,
  Network,
  Scale,
  ShieldCheck,
  ShoppingBag,
  Users,
  Wrench,
  Zap,
}

export default function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = icons[name] ?? ShieldCheck
  return <Cmp className={className} aria-hidden="true" />
}
