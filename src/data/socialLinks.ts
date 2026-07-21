/**
 * SNSリンク。url を実際のアカウントURLに変更してください。
 * enabled を false にすると、そのアイコンは表示されません。
 * 現状は X（旧Twitter）のみ連携しています。
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
    url: "https://github.com/your-account",
    enabled: false,
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

/** 有効な X アカウント（フローティングボタン用） */
export const xLink = socialLinks.find((link) => link.id === "x" && link.enabled);
