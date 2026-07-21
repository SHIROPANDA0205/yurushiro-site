/**
 * 問い合わせフォームの送信処理。
 * Formspree 経由で yurushiro.contact@gmail.com に届きます。
 *
 * 設定:
 * 1. https://formspree.io でアカウント作成（受信メールで登録）
 * 2. New Form を作成し、Form ID（例: xyzabcde）を取得
 * 3. .env.local と Vercel の環境変数に NEXT_PUBLIC_FORMSPREE_ID を設定
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
  const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

  if (!formId) {
    console.error("NEXT_PUBLIC_FORMSPREE_ID が未設定です。");
    return { ok: false };
  }

  try {
    const res = await fetch(`https://formspree.io/f/${formId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        company: data.company || "（未記入）",
        inquiryType: data.inquiryType,
        message: data.message,
        _replyto: data.email,
        _subject: `【ゆるしろ】お問い合わせ: ${data.inquiryType} / ${data.name}`,
      }),
    });

    return { ok: res.ok };
  } catch (error) {
    console.error("Contact form submission failed:", error);
    return { ok: false };
  }
}
