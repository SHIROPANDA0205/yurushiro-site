/**
 * 事業者情報。
 *
 * 「ゆるしろ」は活動名、「AI LINK CRAFT」は個人事業の屋号です。
 * このデータは金融機関の口座審査や取引先の確認に使われる前提のため、
 * とくに「事業内容」の一文は開業届の「事業の概要」と一字一句そろえています。
 * 文言を変える場合は、開業届の記載も必ず合わせて見直してください。
 */

export type BusinessItem = {
  label: string;
  value: string;
  /** 指定した場合、value の前に mailto リンクとして差し込まれます。 */
  email?: string;
};

type Business = {
  /** 屋号。フッターの著作表示でも使用します。 */
  tradeName: string;
  /** セクション見出しの下に入るリード文。活動名と屋号を結びつける役割。 */
  lead: string;
  items: BusinessItem[];
};

export const business: Business = {
  tradeName: "AI LINK CRAFT",
  lead: "AI LINK CRAFT は、代表・ゆるしろが個人事業として運営する屋号です。ご契約・お支払いはこの屋号で承ります。",
  items: [
    { label: "屋号", value: "AI LINK CRAFT" },
    {
      label: "代表者",
      value: "ゆるしろ（本名はお問い合わせいただいた際に開示いたします）",
    },
    { label: "開業", value: "2026年8月1日" },
    {
      label: "事業内容",
      value:
        "Webサイトの企画・制作・運用保守、業務効率化ツールおよび業務システムの受託開発、AIを活用した業務自動化の支援",
    },
    {
      label: "所在地",
      value: "お問い合わせいただいた際に開示いたします（請求書・契約書に記載）",
    },
    {
      label: "連絡先",
      value: "／お問い合わせフォーム",
      email: "yurushiro.contact@gmail.com",
    },
    { label: "対応エリア", value: "全国（オンラインで対応いたします）" },
  ],
};
