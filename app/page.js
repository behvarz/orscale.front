"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import translations, { defaultLanguage, supportedLanguages } from "../lib/translations";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700"] });
let introShown = false;

export default function Home() {
  const [visible, setVisible] = useState(introShown);
  const [lang, setLang] = useState(defaultLanguage);

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0];
    const matched = supportedLanguages.includes(browserLang)
      ? browserLang
      : defaultLanguage;
    setLang(matched);

    if (introShown) {
      setVisible(true);
      return undefined;
    }

    introShown = true;
    const timer = setTimeout(() => {
      setVisible(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const t = translations[lang];

  return (
    <main className="flex flex-col flex-1 relative">
      {/* Header */}
      <div
        className={`transition-opacity duration-2000 ease-in-out ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header menu={t.menu} slogan="LIMIT SCOPE, OR SCALE BEYOND." />
      </div>

      {/* Hero */}
      <section className="flex-1 flex flex-col items-center justify-center text-center px-4 space-y-6">
        {/* Ana logo Orbitron fontu ile */}
        <Link href="/" aria-label="Go to homepage">
          <h1
            className={`${orbitron.className} text-5xl md:text-7xl font-extrabold tracking-tight 
              bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 
              bg-clip-text text-transparent drop-shadow-lg 
              transition-opacity duration-1000 ease-in-out delay-200 ${
                visible ? "opacity-100" : "opacity-0"
              }`}
          >
            OrScale
          </h1>
        </Link>

        {/* Slogan */}
        <p
          className={`text-lg md:text-2xl text-slate-300 max-w-xl mx-auto transition-opacity duration-2000 ease-in-out delay-400 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          Limit Scope, or Scale Beyond.
        </p>

        {/* Chatbot */}
        <div
          className={`w-full max-w-2xl mt-12 transition-opacity duration-2000 ease-in-out delay-600 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          <Chatbot translations={t.chatbot} />
        </div>
      </section>

      {/* Footer */}
      <div
        className={`transition-opacity duration-2000 ease-in-out delay-800 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Footer footer={t.footer} />
      </div>
    </main>
  );
}
