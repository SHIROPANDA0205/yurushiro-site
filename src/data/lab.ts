/**
 * LAB（/lab）のデータ。
 *
 * 仕事としての実績（works.ts）とは分け、日々の開発の取り組み・
 * 個人開発・学習の記録をここに置きます。
 *
 * すべて手動更新です。増やすときは各配列に追記してください。
 */

/** GitHubのアカウントURL。リポジトリのリンクはこれを基点に組み立てます */
export const githubAccount = "https://github.com/SHIROPANDA0205";

/** 開発の進め方そのものに関する取り組み */
export type Practice = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageSrc?: string | null;
  imageAlt?: string;
};

export const practices: Practice[] = [
  {
    id: "claude-code-workflow",
    title: "Claude Codeを使った開発フローの構築",
    description:
      "設計・実装・レビューのどこをAIに任せ、どこを自分で判断するかを切り分けながら、AIと協働する開発の進め方を組み立てています。プロンプトを都度書き直すのではなく、プロジェクトの前提をドキュメントとして残し、同じ判断基準で継続できる形にすることを重視しています。",
    tags: ["Claude Code", "AI協働開発", "開発フロー"],
    imageSrc: "/images/works-claude-code.jpg",
    imageAlt: "Claude Codeを活用した開発のイメージ",
  },
];

/** 公開しているリポジトリ */
export type Repository = {
  /** GitHub上のリポジトリ名 */
  name: string;
  description: string;
  /** 何のために作ったか。READMEに書かない意図をここに書く */
  reason?: string;
  tech: string[];
  /** 省略すると githubAccount + name のURLになります */
  url?: string;
};

export const repositories: Repository[] = [
  {
    name: "yurushiro-site",
    description:
      "このサイトのリポジトリ。実績データを追記するだけでページとsitemapが増える構成にしています。",
    reason:
      "更新が止まらないサイトにするには、書く手間をどこまで減らせるかが要になると考え、データ駆動の構造を試した場所です。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
];

/**
 * 学習の記録。Udemyなどの講座を受けたら、ここに追記していきます。
 *
 * 例:
 * {
 *   title: "講座名",
 *   provider: "Udemy",
 *   completedAt: "2026.08",
 *   learned: ["学んだこと1", "学んだこと2"],
 *   applied: "実際にどこで使ったか",
 * }
 */
export type Learning = {
  title: string;
  provider: string;
  /** 例: "2026.08" */
  completedAt: string;
  learned: string[];
  /** 学んだことを実際に活かした場所 */
  applied?: string;
};

export const learnings: Learning[] = [];

/** いま学んでいるテーマ */
export const learningTopics: string[] = [
  "LLMを組み込んだアプリケーション設計",
  "AIエージェントによる開発の自動化",
  "クラウドインフラの設計",
];
