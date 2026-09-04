/**
 * 日本語の長い文を、意味の切れ目で行に分ける。
 * 画面幅まかせの折り返しだと助詞の途中で切れるので、
 * 句点・読点の位置で先に行を決めてしまう。
 */

export function plainText(text: string) {
  return text.replace(/\u2060/g, "").replace(/\u200b/g, "");
}

function charCount(text: string) {
  return Array.from(text).length;
}

/** タイトル用。ゼロ幅スペースで指定した切れ目だけを使う */
export function splitPhrases(text: string) {
  return text
    .replace(/\u2060/g, "")
    .split("\u200b")
    .map((part) => part.trim())
    .filter(Boolean);
}

/** 句点で文に分ける。ゼロ幅スペースは文中の折り返し用に残す */
export function splitSentences(text: string) {
  return text
    .replace(/\u2060/g, "")
    .split(/(?<=。)/)
    .map((part) => part.trim())
    .filter(Boolean);
}

/**
 * 1文を、画面に収まりやすい長さの句に分ける。
 * ゼロ幅スペースと読点を切れ目として使う。
 */
export function splitReadable(text: string, maxChars = 24) {
  const hardParts = text
    .replace(/\u2060/g, "")
    .split("\u200b")
    .flatMap((part) => part.split(/(?<=。)/))
    .map((part) => part.trim())
    .filter(Boolean);

  const lines: string[] = [];

  for (const sentence of hardParts) {
    if (charCount(sentence) <= maxChars) {
      lines.push(sentence);
      continue;
    }

    const clauses = sentence
      .split(/(?<=、)/)
      .map((part) => part.trim())
      .filter(Boolean);

    let buffer = "";
    for (const clause of clauses) {
      const next = `${buffer}${clause}`;
      if (buffer && charCount(next) > maxChars) {
        lines.push(buffer);
        buffer = clause;
      } else {
        buffer = next;
      }
    }
    if (buffer) lines.push(buffer);
  }

  return lines.length > 0 ? lines : [plainText(text)];
}
