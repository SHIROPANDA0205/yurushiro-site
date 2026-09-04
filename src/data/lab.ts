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
  /** 作品名。見出しに出るのはこちら */
  title: string;
  /** GitHub上のリポジトリ名。URLの組み立てにも使う */
  name: string;
  description: string;
  /** 何のために作ったか。READMEに書かない意図をここに書く */
  reason?: string;
  tech: string[];
  /** 省略すると githubAccount + name のURLになります */
  url?: string;
  /**
   * 画面のスクリーンショット。public/images/ に置いて "/images/xxx.png" を指定。
   * 自分の作品なので実際の画面を載せて構いません（本業の実績とは扱いが違います）。
   * 省略した場合はグラデーションのプレースホルダーが出ます。
   */
  thumbnail?: string | null;
  thumbnailAlt?: string;
};

export const repositories: Repository[] = [
  {
    title: "金沢観光案内AIチャットボット",
    name: "kanazawa-tourism-ai-chatbot",
    description:
      "金沢観光ガイドをナレッジとして登録し、観光客の質問に答えるRAGチャットボットです。営業時間や料金の案内、関連スポットの提案まで対応します。",
    reason:
      "AIに何でも答えさせると、事実でないことを自信ありげに答えてしまいます。ナレッジに無い情報は推測で答えないようプロンプトを設計し、その抑え方を確かめた場所です。",
    tech: ["Dify", "OpenAI API", "RAG", "プロンプト設計"],
    thumbnail: "/images/repo-kanazawa-chatbot.svg",
    thumbnailAlt:
      "ナレッジにある質問には答え、無い質問には推測せず答えないよう設計した流れの図",
  },
  {
    title: "AI LINK CRAFT オフィシャルサイト",
    name: "yurushiro-site",
    description:
      "このサイトのリポジトリ。実績データを追記するだけでページとsitemapが増える構成にしています。",
    reason:
      "更新が止まらないサイトにするには、書く手間をどこまで減らせるかが要になると考え、データ駆動の構造を試した場所です。",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/images/repo-yurushiro-site.png",
    thumbnailAlt: "AI LINK CRAFT オフィシャルサイトのトップページ",
  },
];

/**
 * 学習の分野。
 *
 * 講座を追加するときは、ここから1つ選ぶだけです。
 * 迷う余地をなくすことを優先して、あえて階層は作っていません。
 *
 * 分野が増えたら、この配列に1行足してください。表示は上から順に並びますが、
 * 件数の多い分野が自動的に前に来ます（「その他」だけは常に最後）。
 *
 * ある分野が20件近くまで育って中身を分けたくなったら、そのときに
 * その分野だけ細分化すれば十分です。先に細かく決めておく必要はありません。
 */
export const learningCategories = [
  "AI",
  "プログラミング",
  "ローコード",
  "インフラ・クラウド",
  "コンサル・上流工程",
  "その他",
] as const;

export type LearningCategory = (typeof learningCategories)[number];

/** どこにも当てはまらない講座の受け皿。一覧では常に最後に置く */
const FALLBACK_CATEGORY: LearningCategory = "その他";

export type Learning = {
  title: string;
  provider: string;
  /** 例: "2026.02"。分からない場合は省略できます */
  completedAt?: string;
  category: LearningCategory;
  /** 学んだこと。書ける講座だけで構いません */
  learned?: string[];
  /** 学んだことを実際に活かした場所 */
  applied?: string;
};

export const learnings: Learning[] = [
  {
    title:
      "体系的に学ぶ 要件定義の教科書｜思考を加速させる実践演習と要件定義への生成AI活用術",
    provider: "Udemy",
    category: "コンサル・上流工程",
  },
  {
    title:
      "【超実践】ビジネス要件分析・基本設計・詳細設計をやり抜く実践ワーク講座",
    provider: "Udemy",
    category: "コンサル・上流工程",
  },
  {
    title:
      "DX実践講座 - 業務改革編 - 施策立案とプロジェクトマネジメントの実践テクニック",
    provider: "Udemy",
    category: "コンサル・上流工程",
  },
  {
    title: "新任リーダーのためのITプロジェクト管理入門",
    provider: "Udemy",
    category: "コンサル・上流工程",
  },
  {
    title:
      "未経験からwebディレクターになる！プロが教える超短期型育成コース：案件獲得〜提案〜納品までのフローを徹底解説",
    provider: "Udemy",
    category: "コンサル・上流工程",
  },
  {
    title: "独学で身につけるPython〜基礎編〜【業務効率化・自動化で残業を無くそう！】",
    provider: "Udemy",
    category: "プログラミング",
  },
  {
    title: "独学で身につけるPython〜応用編〜【業務効率化・自動化で残業を無くそう！】",
    provider: "Udemy",
    category: "プログラミング",
  },
  {
    title:
      "独学で身につけるPython〜Excel自動化編〜【業務効率化・自動化で残業を無くそう！】",
    provider: "Udemy",
    category: "プログラミング",
  },
  {
    title:
      "ゼロから始めるAPI超入門：Web技術の基礎からAPIの活用事例までを学び、実際にAPIを体験できる短期集中コース",
    provider: "Udemy",
    category: "プログラミング",
  },
  {
    title: "【最短合格】動画で学ぶ！PL-900完全攻略講座｜模擬テスト付き",
    provider: "Udemy",
    category: "ローコード",
  },
  {
    title:
      "【2026年版】AZ-900 Microsoft Azure Fundamentals模擬試験問題集（6回分420問）",
    provider: "Udemy",
    category: "インフラ・クラウド",
    applied: "Microsoft Certified: Azure Fundamentals の取得",
  },
];

/** 受講年月がある講座を新しい順に。無いものは後ろへ回す */
function byRecent(a: Learning, b: Learning) {
  if (a.completedAt && b.completedAt) {
    return b.completedAt.localeCompare(a.completedAt);
  }
  if (a.completedAt) return -1;
  if (b.completedAt) return 1;
  return 0;
}

/**
 * 分野ごとの一覧。
 * 0件の分野は出さず、件数が多い分野から並べる。
 * ただし「その他」は寄せ集めなので、件数にかかわらず最後に置く。
 */
export const learningsByCategory = learningCategories
  .map((category) => ({
    category,
    items: learnings.filter((item) => item.category === category).sort(byRecent),
  }))
  .filter((group) => group.items.length > 0)
  .sort((a, b) => {
    if (a.category === FALLBACK_CATEGORY) return 1;
    if (b.category === FALLBACK_CATEGORY) return -1;
    return b.items.length - a.items.length;
  });

/** いま学んでいるテーマ */
export const learningTopics: string[] = [
  "LLMを組み込んだアプリケーション設計",
  "AIエージェントによる開発の自動化",
  "クラウドインフラの設計",
];
