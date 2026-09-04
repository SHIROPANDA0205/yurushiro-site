/**
 * SNS・外部サービスのリンク。
 * enabled を false にすると、そのアイコンは表示されません。
 */
export type SocialLink = {
  id: "github" | "x" | "instagram";
  label: string;
  url: string;
  enabled: boolean;
};

export const socialLinks: SocialLink[] = [
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/SHIROPANDA0205",
    enabled: true,
  },
  {
    id: "x",
    label: "X（旧Twitter）",
    url: "https://x.com/aniprolife",
    enabled: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/your-account",
    enabled: false,
  },
];

/** 表示対象のリンクのみ */
export const activeSocialLinks = socialLinks.filter((link) => link.enabled);

/** 有効な X アカウント（フローティングボタン用） */
export const xLink = socialLinks.find((link) => link.id === "x" && link.enabled);
