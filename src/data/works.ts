/**
 * WORKS セクションのデータ。
 * 実績を追加する場合は、この配列にオブジェクトを追加するだけでカードが増えます。
 *
 * - thumbnailSrc: public/images/ に画像を置き "/images/xxx.png" を指定。
 *   未設定（null）の場合はグラデーションのプレースホルダーが表示されます。
 * - detailUrl / githubUrl / siteUrl: 未設定の場合、対応するボタンは表示されません。
 * - comingSoon: true にすると「Coming Soon」表示のカードになります。
 */
export type Work = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  role: string;
  thumbnailSrc?: string | null;
  thumbnailAlt?: string;
  detailUrl?: string;
  githubUrl?: string;
  siteUrl?: string;
  comingSoon?: boolean;
};

export const works: Work[] = [
  {
    id: "portfolio",
    title: "個人ポートフォリオサイト",
    description:
      "人柄が伝わることをコンセプトにした、このポートフォリオサイトです。AIを活用してスピーディーに制作しました。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    role: "企画・デザイン・実装",
    thumbnailSrc: "/images/works-portfolio.jpg",
    thumbnailAlt: "個人ポートフォリオサイトのモックアップ",
  },
  {
    id: "popup-site",
    title: "POPUP情報サイト",
    description:
      "期間限定のPOPUPイベント情報をまとめて閲覧できる情報サイト。スマートフォンでの見やすさを重視しました。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    role: "企画・実装",
    thumbnailSrc: "/images/works-popup.jpg",
    thumbnailAlt: "POPUP情報サイトのモックアップ",
  },
  {
    id: "claude-code-dev",
    title: "Claude Codeを活用したWeb開発",
    description:
      "Claude Codeを活用した開発フローの構築と、AIとの協働による効率的なWeb開発の実践例です。",
    tech: ["Claude Code", "Next.js", "TypeScript"],
    role: "開発・プロンプト設計",
    thumbnailSrc: "/images/works-claude-code.jpg",
    thumbnailAlt: "Claude Codeを活用したWeb開発のイメージ",
  },
  {
    id: "coming-soon",
    title: "Coming Soon",
    description: "新しい実績を準備中です。お楽しみに。",
    tech: [],
    role: "",
    comingSoon: true,
  },
];
