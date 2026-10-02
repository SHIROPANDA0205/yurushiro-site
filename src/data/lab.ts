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

/**
 * ポートフォリオの系統。
 *
 * tech はカードに出すタグ、stack は一覧をまとめる見出しです。
 * タグ全部で分けると「HTML」「RAG」まで欄が増えて見にくくなるので、
 * 作品の主系統だけをここに置きます。
 *
 * 新しい系統が必要になったら、この配列に1行足してください。
 */
export const repositoryStacks = ["Dify", "Next.js", "JavaScript"] as const;

export type RepositoryStack = (typeof repositoryStacks)[number];

/** 公開しているリポジトリ */
export type Repository = {
  /** 作品名。見出しに出るのはこちら */
  title: string;
  /** GitHub上のリポジトリ名。URLの組み立てにも使う */
  name: string;
  description: string;
  /** 一覧の見出し。repositoryStacks から1つ選ぶ */
  stack: RepositoryStack;
  tech: string[];
  /** 省略すると githubAccount + name のURLになります */
  url?: string;
  /**
   * 一覧の小さいサムネと、詳細ページのメイン画像。
   * public/images/ に置いて "/images/xxx.png" を指定。
   * 自分の作品なので実際の画面を載せて構いません（本業の実績とは扱いが違います）。
   * 省略した場合はグラデーションのプレースホルダーが出ます。
   */
  thumbnail?: string | null;
  thumbnailAlt?: string;
  /** 詳細ページ用。書いた項目だけが出ます。一覧は description だけで足ります */
  approach?: string[];
  highlight?: { title: string; body: string }[];
};

/** 一覧・詳細のURL。name を足すだけでページが増えます */
export function repoPath(name: string) {
  return `/lab/${name}`;
}

/** GitHubのURL。url を省略したらアカウント + name */
export function repoGithubUrl(repo: Pick<Repository, "name" | "url">) {
  return repo.url ?? `${githubAccount}/${repo.name}`;
}

/** 系統見出しのアンカー。件数カードからのジャンプに使う */
export function stackAnchor(stack: string) {
  return stack.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

export const repositories: Repository[] = [
  {
    title: "TODOアプリ",
    name: "js-todo-app",
    description:
      "追加・完了・戻す・削除を、フレームワークなしのJavaScriptで実装したTODOアプリ。",
    stack: "JavaScript",
    tech: ["JavaScript", "HTML", "CSS"],
    thumbnail: "/images/repo-js-todo-app.svg",
    thumbnailAlt:
      "入力したタスクを未完了と完了に分け、完了・戻す・削除できる流れの図",
    approach: [
      "入力欄のテキストを未完了リストの項目として追加する",
      "完了で完了リストへ移し、戻すで未完了リストへ戻す",
      "削除は未完了リストからその項目だけ取り除く",
    ],
    highlight: [
      {
        title: "フレームワークなしで操作を組み立てた",
        body: "追加・完了・戻す・削除を、DOMの生成と付け替えだけで実装しています。ライブラリに頼らず、画面上の要素がどう動くかを追いやすい形にしました。",
      },
    ],
  },
  {
    title: "画像検索AI",
    name: "image-search-ai",
    description:
      "建物の写真をタワー図鑑のナレッジと照合し、確信があるときだけ名称と所在地を返す。",
    stack: "Dify",
    tech: ["Dify", "OpenAI API", "RAG", "プロンプト設計"],
    thumbnail: "/images/repo-image-search-ai.svg",
    thumbnailAlt:
      "建物の写真をナレッジのタワーと照合し、一致すれば答え、確信がなければ答えないという流れの図",
    approach: [
      "アップロードした建物の画像をナレッジのタワー図鑑と照合する",
      "明らかに同じものと判断できた場合だけ、名前・所在地・高さ・特徴を返す",
      "似ている程度では一致とせず、該当なしと回答する",
    ],
    highlight: [
      {
        title: "一致判定を厳しくした",
        body: "ナレッジ検索結果だけを根拠にし、モデル自身の知識で補わないようにしています。確信が持てないときは答えない、という分岐を先に決めています。",
      },
    ],
  },
  {
    title: "金沢観光案内AIチャットボット",
    name: "kanazawa-tourism-ai-chatbot",
    description:
      "金沢の観光ガイドをナレッジ化し、観光客の質問に答えるRAGチャットボット。",
    stack: "Dify",
    tech: ["Dify", "OpenAI API", "RAG", "プロンプト設計"],
    thumbnail: "/images/repo-kanazawa-chatbot.svg",
    thumbnailAlt:
      "質問をナレッジに照らし、記述があれば答え、無ければ答えないという分岐の図",
    approach: [
      "金沢の観光ガイドをナレッジとして登録し、質問にRAGで答える",
      "スポット案内や営業時間など、ナレッジにある範囲だけを返す",
      "ナレッジに無い情報は推測で補わず、答えない",
    ],
    highlight: [
      {
        title: "ハルシネーションを抑えた",
        body: "観光案内スタッフとして丁寧に答えつつ、書いていないことは作らないようプロンプトを設計しています。",
      },
    ],
  },
  {
    title: "AI LINK CRAFT オフィシャルサイト",
    name: "yurushiro-site",
    description:
      "このサイトのリポジトリ。データを追記するだけでページが増える構成。",
    stack: "Next.js",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    thumbnail: "/images/repo-yurushiro-site.png",
    thumbnailAlt: "AI LINK CRAFT オフィシャルサイトのトップページ",
    approach: [
      "文章は src/data に置き、ページはそれを並べるだけにする",
      "実績・学習・ポートフォリオは配列を足すと一覧と詳細が増える",
      "main へのマージで Vercel が本番を更新する",
    ],
    highlight: [
      {
        title: "追記が止まらない形にした",
        body: "画面ごとにHTMLを書き直すのではなく、データの1件がページの1件になるようにしています。画像が用意できない項目はプレースホルダで揃えます。",
      },
    ],
  },
];

/**
 * 系統ごとの一覧。
 * 0件の系統は出さず、配列 repositoryStacks の順に並べます。
 * 件数で並び替えると、1件足しただけで見出しの位置が変わるためです。
 */
export const repositoriesByStack = repositoryStacks
  .map((stack) => ({
    stack,
    items: repositories.filter((item) => item.stack === stack),
  }))
  .filter((group) => group.items.length > 0);

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
    title: "Salesforce完全入門-認定アドミニストレーター(Salesforce Admin)",
    provider: "Udemy",
    completedAt: "2026.09",
    category: "ローコード",
  },
  {
    title:
      "【2026年版】AZ-900 Microsoft Azure Fundamentals模擬試験問題集（6回分420問）",
    provider: "Udemy",
    category: "インフラ・クラウド",
    applied: "Microsoft Certified: Azure Fundamentals の取得",
  },
  {
    title: "これだけは知っておきたい！皆が知っているメジャーなシステム～大企業向け～",
    provider: "Udemy",
    completedAt: "2026.09",
    category: "その他",
  },
  {
    title:
      "【初心者向け】APIとは何か？1時間で開発やマーケティングでAPIが活用される理由と事例を紹介！",
    provider: "Udemy",
    category: "プログラミング",
  },
  {
    title: "Git：はじめてのGitとGitHub",
    provider: "Udemy",
    completedAt: "2026.09",
    category: "プログラミング",
  },
  {
    title: "はじめてのTypeScriptプログラミング入門",
    provider: "Udemy",
    completedAt: "2026.09",
    category: "プログラミング",
  },
  {
    title: "REST WebAPI サービス 設計",
    provider: "Udemy",
    completedAt: "2026.09",
    category: "プログラミング",
  },
  {
    title:
      "【SOA-03】AWSトップ講師によるAWS認定CloudOpsエンジニア・アソシエイト模擬試験問題集（6回分375問）",
    provider: "Udemy",
    completedAt: "2026.09",
    category: "インフラ・クラウド",
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
