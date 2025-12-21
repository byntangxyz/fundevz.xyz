"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      // Extract text content from React elements
      const textContent =
        typeof text === "string"
          ? text
          : Array.isArray(text)
          ? text
              .map((item) =>
                typeof item === "string" ? item : item?.props?.children || ""
              )
              .join("\n")
          : text?.props?.children || String(text);

      await navigator.clipboard.writeText(textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="absolute top-2 right-2 p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 transition-all duration-200 group z-10"
      aria-label="Copy code"
    >
      {copied ? (
        <Check className="w-4 h-4 text-green-400" />
      ) : (
        <Copy className="w-4 h-4 text-gray-400 group-hover:text-white" />
      )}
    </button>
  );
}
