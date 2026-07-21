"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { inquiryTypes } from "@/data/contact";
import { submitContact, type ContactFormData } from "@/lib/contact";

type Errors = Partial<Record<"name" | "email" | "message" | "consent", string>>;

const initialForm: ContactFormData = {
  name: "",
  email: "",
  company: "",
  inquiryType: inquiryTypes[0],
  message: "",
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * CONTACT セクション。
 * 入力チェック付きの問い合わせフォームです。
 * 送信処理は src/lib/contact.ts の submitContact に分離されており、
 * Formspree / GAS / Resend などに後から差し替えられます。
 */
export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );

  const update = (key: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "お名前を入力してください。";
    if (!form.email.trim()) {
      next.email = "メールアドレスを入力してください。";
    } else if (!EMAIL_PATTERN.test(form.email.trim())) {
      next.email = "メールアドレスの形式が正しくありません。";
    }
    if (!form.message.trim())
      next.message = "お問い合わせ内容を入力してください。";
    if (!consent)
      next.consent = "個人情報の取り扱いへの同意にチェックしてください。";
    return next;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    try {
      const result = await submitContact(form);
      setStatus(result.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (hasError: boolean) =>
    `w-full rounded-xl border bg-base-soft px-4 py-3 text-sm text-ink placeholder:text-ink-soft/60 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/60 ${
      hasError ? "border-red-400" : "border-ink/10"
    }`;

  return (
    <section
      id="contact"
      aria-label="お問い合わせ"
      className="scroll-mt-20 bg-base-soft py-20 sm:py-28"
    >
      <div className="mx-auto max-w-content px-4 sm:px-6">
        <SectionTitle
          eyebrow="CONTACT"
          title="まずは気軽にお話ししましょう。"
          lead="ご相談・雑談・アイデアの壁打ち、なんでも歓迎です。通常2〜3日以内にご返信します。"
        />

        <Reveal className="mx-auto max-w-2xl">
          {status === "done" ? (
            <div
              role="status"
              className="flex flex-col items-center gap-4 rounded-card border border-ink/5 bg-primary-soft p-10 text-center shadow-card"
            >
              <CheckCircle2 className="h-12 w-12 text-primary" aria-hidden="true" />
              <p className="font-serif text-xl font-bold tracking-[0.06em] text-ink">
                送信が完了しました。
              </p>
              <p className="leading-relaxed text-ink-soft">
                お問い合わせありがとうございます。
                <br />
                内容を確認のうえ、ご入力いただいたメールアドレスへご返信します。
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              noValidate
              className="space-y-6 rounded-card border border-ink/5 bg-primary-soft p-6 shadow-card sm:p-10"
            >
              {/* お名前 */}
              <div>
                <label htmlFor="contact-name" className="mb-1.5 block text-sm font-bold text-ink">
                  お名前 <RequiredBadge />
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "error-name" : undefined}
                  className={inputClass(Boolean(errors.name))}
                  placeholder="山田 太郎"
                />
                <FieldError id="error-name" message={errors.name} />
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor="contact-email" className="mb-1.5 block text-sm font-bold text-ink">
                  メールアドレス <RequiredBadge />
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "error-email" : undefined}
                  className={inputClass(Boolean(errors.email))}
                  placeholder="example@example.com"
                />
                <FieldError id="error-email" message={errors.email} />
              </div>

              {/* 会社名 */}
              <div>
                <label htmlFor="contact-company" className="mb-1.5 block text-sm font-bold text-ink">
                  会社名または屋号{" "}
                  <span className="ml-1 text-xs font-medium text-ink-soft">任意</span>
                </label>
                <input
                  id="contact-company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={form.company}
                  onChange={(e) => update("company", e.target.value)}
                  className={inputClass(false)}
                  placeholder="株式会社〇〇"
                />
              </div>

              {/* 相談内容の種類 */}
              <div>
                <label htmlFor="contact-type" className="mb-1.5 block text-sm font-bold text-ink">
                  相談内容の種類
                </label>
                <select
                  id="contact-type"
                  name="inquiryType"
                  value={form.inquiryType}
                  onChange={(e) => update("inquiryType", e.target.value)}
                  className={inputClass(false)}
                >
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* お問い合わせ内容 */}
              <div>
                <label htmlFor="contact-message" className="mb-1.5 block text-sm font-bold text-ink">
                  お問い合わせ内容 <RequiredBadge />
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "error-message" : undefined}
                  className={inputClass(Boolean(errors.message))}
                  placeholder="ご相談内容をご記入ください。「まだ漠然としている」段階でも大丈夫です。"
                />
                <FieldError id="error-message" message={errors.message} />
              </div>

              {/* 同意チェック */}
              <div>
                <label className="flex cursor-pointer items-start gap-3 text-sm text-ink">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    aria-invalid={Boolean(errors.consent)}
                    aria-describedby={errors.consent ? "error-consent" : undefined}
                    className="mt-0.5 h-5 w-5 shrink-0 rounded border-ink/20 text-primary accent-[#AB8A56] focus:ring-2 focus:ring-primary/60"
                  />
                  <span>
                    個人情報の取り扱いに同意します <RequiredBadge />
                    <span className="mt-1 block text-xs text-ink-soft">
                      ご入力いただいた情報は、お問い合わせへの対応のみに使用します。
                    </span>
                  </span>
                </label>
                <FieldError id="error-consent" message={errors.consent} />
              </div>

              {status === "error" && (
                <p role="alert" className="text-sm font-medium text-red-500">
                  送信できませんでした。時間をおいて再度お試しください。
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-shine inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-sm font-bold text-base transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-bright focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60 sm:text-base"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                {status === "sending" ? "送信中..." : "送信する"}
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}

function RequiredBadge() {
  return (
    <span className="ml-1 rounded bg-accent-soft px-1.5 py-0.5 text-xs font-semibold text-accent">
      必須
    </span>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-xs font-medium text-red-500">
      {message}
    </p>
  );
}
