"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { Layout, Sparkles, Workflow } from "lucide-react";
import { services } from "@/data/services";

/** services.ts の icon キーと lucide-react のアイコンの対応 */
const icons = {
  layout: Layout,
  workflow: Workflow,
  sparkles: Sparkles,
} as const;

/**
 * Hero 下部に置く、事業の3本柱。
 *
 * 説明は下の SERVICES セクションが担うため、ここでは名前だけを見せます。
 * ただの飾りにせず、それぞれサービス詳細の該当箇所へ飛べるリンクにしています。
 */
export default function HeroPillars({ delay = 0 }: { delay?: number }) {
  const reduceMotion = useReducedMotion();

  return (
    /*
     * 区切り線は使わない。折り返しが起きたとき、2行目の先頭に線だけが
     * 残ってしまうため（左カラムが狭くなる 1024px 前後とスマートフォンで発生する）。
     * 代わりにアイコンの丸と余白で項目を切り分けている。
     */
    <ul className="mt-12 flex flex-wrap items-center gap-x-2 gap-y-1">
      {services.map((service, index) => {
        const Icon = icons[service.icon];

        return (
          <motion.li
            key={service.slug}
            className="flex items-center"
            initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: delay + index * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Link
              href={`/services#${service.slug}`}
              className="group inline-flex items-center gap-2.5 rounded-full py-1.5 pl-1.5 pr-3.5 transition-colors duration-300 hover:bg-fg/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
            >
              <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line bg-bg text-fg-dim transition-all duration-300 group-hover:border-brand-blue/40 group-hover:bg-brand-blue/[0.06] group-hover:text-brand-blue">
                <Icon
                  aria-hidden="true"
                  className="h-3.5 w-3.5"
                  strokeWidth={1.8}
                />
              </span>

              <span className="relative whitespace-nowrap text-[13px] font-bold text-fg-muted transition-colors duration-300 group-hover:text-fg sm:text-sm">
                {service.shortTitle}
                {/* ホバーで左から伸びるグラデーションの下線 */}
                <span
                  aria-hidden="true"
                  className="grad-surface absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full"
                />
              </span>
            </Link>
          </motion.li>
        );
      })}
    </ul>
  );
}
