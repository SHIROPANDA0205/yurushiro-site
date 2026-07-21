/**
 * ヘッダー / フッターのナビゲーション。
 * id は各セクションの HTML id と一致させてください。
 */
export type NavItem = {
  id: string;
  label: string;
};

export const navigation: NavItem[] = [
  { id: "home", label: "HOME" },
  { id: "about", label: "ABOUT" },
  { id: "message", label: "MESSAGE" },
  { id: "values", label: "VALUES" },
  { id: "services", label: "SERVICES" },
  { id: "works", label: "WORKS" },
  { id: "contact", label: "CONTACT" },
];
