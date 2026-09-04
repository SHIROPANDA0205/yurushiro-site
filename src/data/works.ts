/**
 * WORKS（制作実績）のデータ。
 *
 * 実績を追加するときは、この配列にオブジェクトを1つ足すだけで
 * 一覧カードと詳細ページ（/works/[slug]）の両方が増えます。
 *
 * - slug は URL になります。半角英数字とハイフンのみ。
 * - 詳細ページの本文（background 以降）は、書いた項目だけが表示されます。
 *   ざっくり見せたいものは summary と画像だけでも成立します。
 * - thumbnail は public/images/ に画像を置いて "/images/xxx.jpg" を指定。
 *   null の場合はグラデーションのプレースホルダーが表示されます。
 */
export type WorkCategory = "client" | "product" | "personal" | "mainjob";

export type Work = {
  slug: string;
  title: string;
  category: WorkCategory;
  /** 一覧カードに出る1〜2文の説明 */
  summary: string;
  period?: string;
  /** クライアント名。非公開の場合は書かない */
  client?: string;
  role: string[];
  /** 規模感。例: "チーム8名 ／ 担当画面12件"。顧客名を出さずに実力を伝えるために使う */
  scale?: string;
  tech: string[];
  thumbnail: string | null;
  thumbnailAlt?: string;
  images?: { src: string; alt: string }[];
  links?: { label: string; url: string }[];

  /* --- ここから詳細ページ（ケーススタディ）用。任意項目 --- */
  /** 背景。どういう状況で始まった案件か */
  background?: string;
  /** 課題。何を解決する必要があったか */
  challenge?: string[];
  /** やったこと */
  approach?: string[];
  /** 特に工夫した点 */
  highlight?: { title: string; body: string }[];
  /** 結果 */
  result?: string[];
  /** 学び・次に活かすこと */
  learning?: string;

  /** true にすると「準備中」のカードになります */
  comingSoon?: boolean;
};

/** カテゴリの表示名。一覧のフィルタにも使用します */
export const workCategoryLabels: Record<WorkCategory, string> = {
  client: "受託案件",
  product: "プロダクト",
  personal: "自主制作",
  mainjob: "本業",
};

export const works: Work[] = [
  {
    slug: "popup-media",
    title: "POPUP情報サイト",
    category: "client",
    summary:
      "ポップアップイベントの会場を提供する企業様からのご依頼。出店したい企業と会場を結ぶBtoBサイトと、開催中のポップアップ情報を集約するBtoC向けページを、1つのサイトとして構築しました。",
    period: "要件定義からリリースまで約1ヶ月以上",
    role: ["要件定義", "設計", "実装", "リリース対応"],
    tech: ["Claude Code", "Next.js", "TypeScript", "Tailwind CSS"],
    thumbnail: "/images/works-popup.jpg",
    thumbnailAlt: "POPUP情報サイトの画面",
    background:
      "エンターテインメント業界でポップアップイベントの会場を提供されているお客様からのご依頼です。出店したい企業と会場をつなぐBtoBの側面と、消費者向けにポップアップ情報を届けるBtoCの側面、この2つを同時に満たすサイトが必要とされていました。",
    challenge: [
      "会場を探している出店企業と、会場を提供する側とを結びつける導線が整理されていなかった",
      "開催中・開催予定のポップアップ情報がWeb上に散らばっており、消費者が探しにくい状態だった",
      "BtoB（会場を探す企業向け）とBtoC（情報を探す消費者向け）という、目的も文体も異なる2つの利用者を1つのサイトで両立させる必要があった",
    ],
    approach: [
      "お客様と要件定義から入り、BtoB・BtoCそれぞれの利用者が何を求めているかを整理した",
      "会場を探す企業向けの問い合わせ導線と、消費者向けのポップアップ情報一覧を、情報設計の段階で明確に分離して設計した",
      "Claude Codeを活用し、要件定義からリリースまでを一貫して対応した",
      "開催期間・場所・カテゴリなどの情報を統一したデータ構造で管理し、掲載情報を追加しやすい状態にした",
    ],
    highlight: [
      {
        title: "BtoBとBtoCを1つのサイトで両立させる設計",
        body: "会場を探す企業と、ポップアップ情報を探す消費者とでは、必要な情報も読み方もまったく異なります。同じサイト内でも導線と見せ方を明確に分けることで、どちらの利用者にとっても迷わない構成にしました。",
      },
    ],
    result: ["お客様から好評をいただきました。"],
    learning:
      "目的の異なる2種類の利用者を1つのサイトでどう両立させるかという設計判断は、その後の案件でも意識するようになった経験です。",
  },
];
