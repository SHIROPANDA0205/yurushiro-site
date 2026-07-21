/**
 * プロフィール情報。
 * 顔写真を追加する場合は public/images/ に画像を置き、
 * photoSrc にパス（例: "/images/profile.jpg"）を設定してください。
 * Hero セクションのファーストビューに大きく表示されます。
 */
export type ProfileItem = {
  label: string;
  value: string;
};

export type Hobby = {
  /** lucide-react のアイコン名に対応するキー（About.tsx 内でマッピング） */
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

export const profile = {
  name: "ゆるしろ",
  photoSrc: null as string | null,
  photoAlt: "ゆるしろのプロフィール写真",
  items: [
    { label: "活動名", value: "ゆるしろ" },
    { label: "年代", value: "20代後半" },
    { label: "職業", value: "ITエンジニア" },
    { label: "得意分野", value: "ローコード開発、Claude Codeを活用した開発" },
    { label: "興味分野", value: "AI活用、Web制作、業務効率化" },
    { label: "将来の目標", value: "起業して、さまざまな方と仕事をすること" },
  ] as ProfileItem[],
  bio: [
    "現在は大手IT企業でローコード開発に携わりながら、ITパスポート、基本情報技術者、Oracle、AWS、Azureなど、幅広い分野の資格取得を通じて、技術の土台を一つずつ積み重ねてきました。",
    "大きな転機となったのは、AIの急速な進化です。",
    "「これからは、技術をどれだけ知っているかだけではなく、AIをどのように活用し、誰のために役立てるかが問われる時代になる」",
    "そう感じ、本業のかたわら、Claude Codeを中心としたAI活用開発を始めました。",
    "AIによって、これまで時間のかかっていた作業や、専門的な知識が必要だった開発も、以前より早く形にできるようになっています。だからこそ、これから最後に選ばれる理由は、「何ができるか」だけではなく、「誰と一緒に仕事をしたいか」だと考えています。",
    "私にとって、技術やAIはあくまで手段のひとつです。",
    "本当に大切にしているのは、相手の話に丁寧に耳を傾け、何を実現したいのか、どこに悩んでいるのかを一緒に整理しながら、同じ目線で形にしていくことです。",
    "一方的に作って終わるのではなく、対話を重ね、一緒に考え、一緒につくる。その過程で生まれる信頼やつながりこそが、良い仕事につながると信じています。",
    "私は人と話すことが好きで、さまざまな価値観や経験を持つ方と関わることに大きな魅力を感じています。仕事を通じて生まれたご縁を大切にし、「またこの人と一緒に仕事がしたい」と思っていただける存在を目指しています。",
    "将来は起業し、AIとの協働を通じて、多くの方と出会い、新しい価値を生み出していきたいと考えています。",
    "まだ形になっていないアイデアや、何から始めればよいか分からない相談でも構いません。まずはお話を伺いながら、一緒に可能性を考えていけたら嬉しいです。",
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
      title: "早稲田大学 教育学部 生物学科 入学",
    },
    {
      date: "2021.03",
      category: "education",
      title: "早稲田大学 教育学部 生物学科 卒業",
    },
    {
      date: "2021.04",
      category: "education",
      title: "早稲田大学大学院 先進理工学研究科 生命理工学専攻 入学",
    },
    {
      date: "2023.03",
      category: "education",
      title: "早稲田大学大学院 先進理工学研究科 生命理工学専攻 修了",
    },
    {
      date: "2023.04",
      category: "work",
      title: "Sky株式会社 入社",
    },
    {
      date: "2025.07",
      category: "work",
      title: "Sky株式会社 退職",
    },
    {
      date: "2026.01",
      category: "work",
      title: "大手IT企業 入社",
      description: "現在に至る",
    },
  ] as CareerEvent[],
  certifications: [
    "ITパスポート試験",
    "基本情報技術者試験",
    "ORACLE MASTER Bronze DBA",
    "ORACLE MASTER Silver DBA",
    "ORACLE MASTER Silver SQL",
    "Oracle認定Javaプログラマ Bronze SE",
    "Oracle認定Javaプログラマ Silver SE",
    "AWS Certified Cloud Practitioner",
    "AWS Certified Solutions Architect – Associate",
    "AWS Certified AI Practitioner",
    "Microsoft Certified: Azure Fundamentals",
    "JSTQB Foundation Level",
  ],
};
