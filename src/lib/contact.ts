/**
 * 問い合わせフォームの送信処理。
 *
 * 現在は仮実装（1秒待って成功を返すだけ）です。
 * 実際に送信できるようにするには、この関数の中身を
 * 利用するサービスに合わせて書き換えてください。
 *
 * --- Formspree の例 ---
 * const res = await fetch("https://formspree.io/f/【フォームID】", {
 *   method: "POST",
 *   headers: { "Content-Type": "application/json", Accept: "application/json" },
 *   body: JSON.stringify(data),
 * });
 * return { ok: res.ok };
 *
 * --- Google Apps Script の例 ---
 * const res = await fetch("【GASのWebアプリURL】", {
 *   method: "POST",
 *   body: JSON.stringify(data),
 * });
 * return { ok: res.ok };
 *
 * --- Resend の例 ---
 * Resend はAPIキーを使うため、Next.js の Route Handler
 * （src/app/api/contact/route.ts）を作成し、サーバー側から送信してください。
 * このファイルからは fetch("/api/contact", ...) を呼び出す形になります。
 */

export type ContactFormData = {
  name: string;
  email: string;
  company: string;
  inquiryType: string;
  message: string;
};

export async function submitContact(
  data: ContactFormData
): Promise<{ ok: boolean }> {
  // 仮実装: 送信内容をコンソールに出力し、1秒後に成功を返す
  console.log("Contact form submitted (mock):", data);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { ok: true };
}
