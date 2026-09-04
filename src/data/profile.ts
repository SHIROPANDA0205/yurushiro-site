/**
 * 代表プロフィール。/company と、トップページの代表セクションで使用します。
 *
 * サイト上では本名を出さない方針です。本名はお問い合わせ後、
 * 見積・契約・請求の段階で開示します（src/data/business.ts も同じ方針）。
 *
 * 顔写真を追加する場合は public/images/ に画像を置き、
 * photoSrc にパス（例: "/images/profile.jpg"）を設定してください。
 */
export type ProfileItem = {
  label: string;
  value: string;
};

export type Hobby = {
  /** lucide-react のアイコン名に対応するキー（Profile 表示側でマッピング） */
  icon: "dumbbell" | "spade" | "book" | "chat";
  label: string;
};

export type CareerEvent = {
  /** 例: "2017.04" */
  date: string;
  category: "education" | "work";
  title: string;
  description?: string;
};

export type CertificationGroup = {
  label: string;
  items: string[];
};

export const profile = {
  name: "ゆるしろ",
  role: "AI LINK CRAFT 代表",
  photoSrc: null as string | null,
  photoAlt: "ゆるしろのプロフィール写真",

  /** トップページの代表セクションに置く、短い自己紹介 */
  lead: "早稲田大学大学院を修了後、大手IT企業でエンジニアとして開発に携わりながら、屋号 AI LINK CRAFT で受託開発を行っています。AIを使うこと自体が目的にならないよう、何を任せて何を人が持つかの線引きから一緒に考えます。",

  items: [
    { label: "活動名", value: "ゆるしろ" },
    { label: "役割", value: "AI LINK CRAFT 代表" },
    { label: "学歴", value: "早稲田大学大学院\u200b先進理工学研究科 修了" },
    { label: "本業", value: "大手IT企業 ITエンジニア" },
    { label: "得意分野", value: "Web制作、\u200b業務効率化ツール開発、\u200bAI活用開発" },
    { label: "対応エリア", value: "全国（オンライン）" },
  ] as ProfileItem[],

  /** /company に載せる本文 */
  bio: [
    "早稲田大学大学院（先進理工学研究科 生命理工学専攻）を修了した、少し異色の経歴を持つエンジニアです。生物学の研究から情報技術の世界に移り、現在は大手IT企業でローコード開発を中心に\u200b業務システムの開発に携わっています。",
    "並行して、ITパスポート、基本情報技術者、Oracle、AWS、Azureなど、分野をまたいで資格を取得してきました。特定の技術に閉じず、案件ごとに適した手段を選べる状態を保つためです。",
    "転機になったのは、AIの進化によって開発の前提が変わったことでした。これまで時間がかかっていた作業や、専門知識が必要だった実装が、以前より早く形にできるようになっています。一方で、何をAIに任せるべきかを判断するところは、依然として人の仕事として残ります。",
    "AI LINK CRAFT では、その線引きを含めてご一緒することを大事にしています。ご要望を受け取ってそのまま作るのではなく、本当に解きたい課題は何なのかを一緒に整理してから手を動かします。",
    "人と話すことが好きで、さまざまな価値観や経験を持つ方と関わることに面白さを感じています。仕事を通じて生まれたご縁を大切にし、「またこの人に頼みたい」と思っていただけることを目標にしています。",
    "まだ形になっていないアイデアや、何から始めればよいか分からない段階のご相談でも構いません。まずはお話を伺うところから始めさせてください。",
  ],

  hobbies: [
    { icon: "dumbbell", label: "筋トレ" },
    { icon: "spade", label: "ポーカー" },
    { icon: "book", label: "自己学習" },
    { icon: "chat", label: "人とのコミュニケーション" },
  ] as Hobby[],

  career: [
    {
      date: "2017.04",
      category: "education",
      title: "早稲田大学\u200b教育学部 生物学科 入学",
    },
    {
      date: "2021.03",
      category: "education",
      title: "早稲田大学\u200b教育学部 生物学科 卒業",
    },
    {
      date: "2021.04",
      category: "education",
      title: "早稲田大学大学院\u200b先進理工学研究科\u200b生命理工学専攻 入学",
    },
    {
      date: "2023.03",
      category: "education",
      title: "早稲田大学大学院\u200b先進理工学研究科\u200b生命理工学専攻 修了",
    },
    { date: "2023.04", category: "work", title: "Sky株式会社 入社" },
    { date: "2025.07", category: "work", title: "Sky株式会社 退職" },
    {
      date: "2026.01",
      category: "work",
      title: "大手IT企業 入社",
      description: "ローコード開発を中心に業務システム開発を担当",
    },
    {
      date: "2026.08",
      category: "work",
      title: "AI LINK CRAFT 開業",
      description: "屋号として開業届を提出",
    },
  ] as CareerEvent[],

  /** 資格は一覧で並べると読みにくいため、分野ごとにまとめています */
  certificationGroups: [
    {
      label: "情報処理・品質",
      items: [
        "ITパスポート試験",
        "基本情報技術者試験",
        "JSTQB Foundation Level",
      ],
    },
    {
      label: "データベース・Java",
      items: [
        "ORACLE MASTER Bronze DBA",
        "ORACLE MASTER Silver DBA",
        "ORACLE MASTER Silver SQL",
        "Oracle認定Javaプログラマ Bronze SE",
        "Oracle認定Javaプログラマ Silver SE",
      ],
    },
    {
      label: "クラウド・AI",
      items: [
        "AWS Certified Cloud Practitioner",
        "AWS Certified Solutions Architect – Associate",
        "AWS Certified AI Practitioner",
        "Microsoft Certified: Azure Fundamentals",
      ],
    },
  ] as CertificationGroup[],
};

/** 資格の総数。プロフィールの見出しに使用します */
export const certificationCount = profile.certificationGroups.reduce(
  (total, group) => total + group.items.length,
  0
);

/**
 * トップページの名刺カードに並べる項目。
 * 幅が狭いので、/company の items より短く言い切る形にしています。
 * 資格の件数は certificationGroups から自動で数えるため、手で直す必要はありません。
 */
export const profileCardItems: ProfileItem[] = [
  { label: "学歴", value: "早稲田大学大学院 修了" },
  { label: "本業", value: "大手IT企業 エンジニア" },
  { label: "資格", value: `${certificationCount}件` },
  { label: "領域", value: "Web制作・業務システム" },
];

/**
 * トップページに載せる自己紹介。
 * /company の bio は全文、こちらは要点だけを3段落に絞ったものです。
 */
export const homeBio: string[] = [
    "早稲田大学大学院（先進理工学研究科）を修了した、少し異色の経歴を持つエンジニアです。生物学の研究から情報技術の世界に移り、現在は大手IT企業でローコード開発を中心に\u200b業務システムの開発に携わっています。",
    "転機になったのは、AIの進化によって開発の前提が変わったことでした。時間のかかっていた作業が早く形にできるようになった一方で、何をAIに任せるべきかの判断は、依然として人の仕事として残ります。",
    "AI LINK CRAFT では、その線引きも含めてご一緒することを大事にしています。ご要望をそのまま形にするのではなく、本当に解きたい課題は何なのかを一緒に整理してから手を動かします。",
];
