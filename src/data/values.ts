/**
 * VALUES セクションのデータ。
 * icon は Values.tsx 内で lucide-react のアイコンにマッピングされます。
 */
export type ValueItem = {
  icon: "users" | "pen" | "rocket" | "handshake" | "repeat";
  title: string;
  description: string;
};

export const values: ValueItem[] = [
  {
    icon: "users",
    title: "人との出会いを大切にする",
    description:
      "新しい出会いから、思いもよらないアイデアや可能性が生まれると考えています。",
  },
  {
    icon: "pen",
    title: "一緒に考え、一緒につくる",
    description:
      "一方的に作るのではなく、対話を重ねながら、一緒に良いものをつくります。",
  },
  {
    icon: "rocket",
    title: "挑戦し続ける",
    description:
      "できるか分からないことでも、まずは一歩踏み出す姿勢を大切にしています。",
  },
  {
    icon: "handshake",
    title: "誠実なコミュニケーション",
    description:
      "分かりやすく、正直に、相手の立場に立ったコミュニケーションを心がけます。",
  },
  {
    icon: "repeat",
    title: "また一緒に仕事がしたいと思われる存在になる",
    description:
      "納品して終わりではなく、長く信頼していただける関係を目指します。",
  },
];
