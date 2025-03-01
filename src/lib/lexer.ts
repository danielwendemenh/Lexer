export type Token = {
  type: string;
  value: string;
};

const tokenPatterns: { type: string; regex: RegExp }[] = [
  { type: "keyword", regex: /\b(let|const|if|else|function|return)\b/ },
  { type: "identifier", regex: /[a-zA-Z_$][a-zA-Z0-9_$]*/ },
  { type: "number", regex: /\b\d+(\.\d+)?\b/ },
  { type: "string", regex: /(['"])(?:(?=(\\?))\2.)*?\1/ },
  { type: "operator", regex: /[+\-*/=<>!]+/ },
  { type: "punctuation", regex: /[{}();,]/ },
  { type: "comment", regex: /\/\/(.*)|\/\*[\s\S]*?\*\// },
];

export function tokenize(input: string): Token[] {
  let tokens: Token[] = [];
  let remaining: string = input;

  while (remaining) {
    let matchFound = false;
    for (let pattern of tokenPatterns) {
      let match: RegExpMatchArray | null = remaining.match(pattern.regex);
      if (match && match.index === 0) {
        tokens.push({ type: pattern.type, value: match[0] });
        remaining = remaining.slice(match[0].length);
        matchFound = true;
        break;
      }
    }
    if (!matchFound) remaining = remaining.slice(1);
  }
  return tokens;
}
