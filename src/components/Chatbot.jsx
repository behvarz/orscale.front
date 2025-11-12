"use client";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";

const ERROR_FALLBACK =
  "OrScale Assistant bir hata ile karsilasti. Lutfen daha sonra yeniden deneyin veya info@orscale.com ile iletisime gecin.";

export default function Chatbot({ translations }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);

  // Reset welcome message when language changes
  useEffect(() => {
    setMessages([{ role: "assistant", content: translations.welcome }]);
  }, [translations]);

  // Keep the latest message in view
  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text) return;

    const newMsg = { role: "user", content: text };
    setMessages((prev) => [...prev, newMsg]);
    setInput("");
    setLoading(true);

    try {
      const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL?.replace(/\/$/, "");
      if (!baseUrl) {
        throw new Error("NEXT_PUBLIC_API_BASE_URL is not defined");
      }

      const res = await fetch(`${baseUrl}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, newMsg] }),
      });

      const payload = await res.json().catch(() => ({}));
      if (!res.ok || !payload.reply) {
        throw new Error(payload?.error || "Backend error");
      }

      const formatted = payload.reply.replace(/\. /g, ".\n");
      setMessages((prev) => [...prev, { role: "assistant", content: formatted }]);
    } catch (err) {
      console.error("Chatbot error", err);
      setMessages((prev) => [...prev, { role: "assistant", content: ERROR_FALLBACK }]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-4 shadow-2xl">
      <div ref={listRef} className="h-64 overflow-y-auto space-y-8 pr-1">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] ${
              m.role === "user" ? "ml-auto text-right" : "mr-auto text-left"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-xl text-sm leading-relaxed whitespace-pre-line ${
                m.role === "user"
                  ? "bg-gradient-to-r from-blue-400 to-cyan-300 text-slate-900 font-medium"
                  : "bg-slate-800 text-slate-100"
              }`}
            >
              <ReactMarkdown>{m.content}</ReactMarkdown>
            </div>
          </div>
        ))}
        {loading && (
          <div className="px-3 py-2 rounded-xl text-sm bg-slate-700 text-slate-300 w-fit mr-auto">
            ... {translations.thinking}
          </div>
        )}
      </div>

      <div className="mt-3 flex items-center gap-2">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder={`${translations.send}...`}
          className="flex-1 resize-none h-12 rounded-xl bg-slate-800 border border-slate-700 px-3 py-2 outline-none"
        />
        <button
          onClick={send}
          disabled={loading}
          className="h-12 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 text-slate-900 px-4 font-semibold hover:opacity-90 transition"
          type="button"
        >
          {loading ? "..." : translations.send}
        </button>
      </div>

      <p className="mt-2 text-xs text-slate-400 text-center">OrScale AI Assistant</p>
    </div>
  );
}