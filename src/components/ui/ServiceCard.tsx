import { ArrowRight, Blocks, MessageCircle, Terminal } from "lucide-react";
import type { Service } from "@/data/services";

const icons: Record<Service["icon"], typeof Terminal> = {
  code: Terminal,
  message: MessageCircle,
  blocks: Blocks,
};

/**
 * SERVICES セクションのカード。
 * 「相談する」リンクで CONTACT セクションへ移動します。
 */
export default function ServiceCard({
  service,
  index,
}: {
  service: Service;
  index: number;
}) {
  const Icon = icons[service.icon];
  const number = String(index + 1).padStart(2, "0");

  return (
    <div className="flex h-full flex-col rounded-card border border-ink/5 bg-primary-soft p-7 shadow-card transition-all duration-300 hover:border-gold/40 hover:shadow-card-hover">
      <div className="flex items-center justify-between">
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gold text-base">
          <Icon className="h-7 w-7" aria-hidden="true" />
        </span>
        <span className="font-serif-en text-sm italic text-gold">{number}</span>
      </div>

      <h3 className="mt-5 font-serif text-lg font-bold leading-snug tracking-[0.04em] text-ink">
        {service.title}
        {service.note && (
          <span className="ml-2 rounded-full bg-accent-soft px-2.5 py-0.5 align-middle text-xs font-semibold text-accent">
            {service.note}
          </span>
        )}
      </h3>

      <p className="mt-3 flex-1 font-serif text-sm leading-relaxed text-ink-soft">
        {service.description}
      </p>

      <a
        href="#contact"
        className="group mt-6 inline-flex items-center gap-1.5 self-start rounded-full text-sm font-bold text-primary transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-label={`${service.title}について相談する`}
      >
        相談する
        <ArrowRight
          aria-hidden="true"
          className="h-4 w-4 transition-transform group-hover:translate-x-1"
        />
      </a>
    </div>
  );
}
