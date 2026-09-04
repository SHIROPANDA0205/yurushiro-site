import {
  plainText,
  splitPhrases,
  splitReadable,
  splitSentences,
} from "@/lib/readableText";

type ReadableTextProps = {
  text: string;
  className?: string;
  /**
   * lines = 文ごとに改行し、文の中は句の切れ目で折り返す
   * phrases = 指定した切れ目だけ折り返す（見出し向け）
   */
  mode?: "lines" | "phrases";
  /** lines のとき、この字数を超えた文は読点でも分ける */
  maxChars?: number;
};

function Phrase({ text }: { text: string }) {
  return <span className="ja-phrase">{text}</span>;
}

/**
 * 日本語を意味の切れ目で改行する。
 *
 * 文（。の単位）は必ず次の行へ送る。
 * 文の中の句は、幅が足りるときは同じ行に並べ、足りないときだけ折り返す。
 */
export default function ReadableText({
  text,
  className = "",
  mode = "lines",
  maxChars = 24,
}: ReadableTextProps) {
  if (mode === "phrases") {
    const phrases = splitPhrases(text);
    if (phrases.length <= 1) {
      return <span className={className}>{plainText(text)}</span>;
    }

    return (
      <span className={className}>
        {phrases.map((phrase, index) => (
          <Phrase key={`${index}-${phrase}`} text={phrase} />
        ))}
      </span>
    );
  }

  const sentences = splitSentences(text);

  if (sentences.length === 0) {
    return <span className={className}>{plainText(text)}</span>;
  }

  return (
    <span className={className}>
      {sentences.map((sentence, index) => {
        const phrases = splitReadable(sentence, maxChars);

        return (
          <span key={`${index}-${sentence}`} className="block">
            {phrases.map((phrase, phraseIndex) => (
              <Phrase key={`${phraseIndex}-${phrase}`} text={phrase} />
            ))}
          </span>
        );
      })}
    </span>
  );
}
