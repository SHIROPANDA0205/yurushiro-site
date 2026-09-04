/**
 * 案件の進め方（4ステップ）。/ と /services で使用します。
 */
export type ProcessStep = {
  number: string;
  title: string;
  /**
   * トップページのフロー表示用の短い説明（2行程度）。
   * 詳しい説明は description に置き、/services 側で使います。
   */
  summary: string;
  /** 目安の期間。決まっていない工程は空にしてください */
  duration?: string;
  description: string;
  /** この工程でお渡しするもの */
  deliverable?: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "ヒアリング",
    duration: "無料",
    summary: "困りごとを伺います。要件が固まっていない段階でも構いません。",
    description:
      "何を実現したいのか、いま何に困っているのかを伺います。まだ要件が固まっていない段階でも構いません。オンラインで30〜60分ほど、まずはお話を聞かせてください。",
    deliverable: "課題の整理メモ",
  },
  {
    number: "02",
    title: "ご提案・お見積り",
    duration: "3〜5日",
    summary: "進め方・スケジュール・費用をまとめてご提示します。",
    description:
      "伺った内容をもとに、進め方・スケジュール・費用をまとめてご提案します。一度に全部作るのではなく、優先順位をつけて段階的に進める案もあわせてお出しします。",
    deliverable: "提案書・見積書",
  },
  {
    number: "03",
    title: "制作",
    duration: "案件により変動",
    summary: "区切りごとに動くものをご確認いただきながら進めます。",
    description:
      "着手後は、区切りごとに実際に動くものをご確認いただきながら進めます。最後にまとめて見せる形にはせず、途中で方向を変えられる状態を保ちます。",
    deliverable: "確認用の環境",
  },
  {
    number: "04",
    title: "納品・運用",
    duration: "継続対応",
    summary: "公開まで対応し、その後の改善のご相談も承ります。",
    description:
      "公開作業まで対応します。納品して終わりではなく、公開後の調整や、運用のなかで出てきた改善のご相談も継続して承ります。",
    deliverable: "成果物一式・操作説明",
  },
];
