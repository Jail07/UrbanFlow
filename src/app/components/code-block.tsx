interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language = "python" }: CodeBlockProps) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-[#1F2937] bg-[#0B0F1A] my-4">
      <div className="flex items-center justify-between px-4 py-2 bg-[#111827] border-b border-[#1F2937]">
        <span className="text-xs text-gray-500 uppercase">{language}</span>
        <button className="text-xs text-[#00C2FF] hover:text-[#00E5A8] transition-colors">
          Copy
        </button>
      </div>
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-300 font-mono">
          {code}
        </code>
      </pre>
    </div>
  );
}
