/**
 * SERVICES セクションのデータ。
 * icon は Services.tsx 内で lucide-react のアイコンにマッピングされます。
 */
export type Service = {
  icon: "code" | "message" | "blocks";
  title: string;
  note?: string;
  description: string;
};

export const services: Service[] = [
  {
    icon: "code",
    title: "Claude Codeを活用した開発",
    description:
      "Claude Codeを活用した開発方法、プロンプト作成、開発の進め方などを支援します。AIと協働しながら、スピーディーで質の高い開発を行います。",
  },
  {
    icon: "message",
    title: "ChatGPT活用支援",
    description:
      "ChatGPTの基本的な使い方から、仕事や日常での活用方法、プロンプトの作成まで、目的に合わせてサポートします。",
  },
  {
    icon: "blocks",
    title: "ローコード開発",
    description:
      "ローコードツールを活用し、要件整理から実装まで、スピーディーにシステムやアプリケーションを構築します。",
  },
];
