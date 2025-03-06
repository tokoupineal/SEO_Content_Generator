"use client";

import { useState } from "react";
import Header from "../components/Header";
import KeywordInput from "../components/KeywordInput";
import ArticleDisplay from "../components/ArticleDisplay";

// 記事データの型定義
export type ArticleData = {
  title: string;
  headings: {
    id: string;
    text: string;
    level: number;
  }[];
  content: string;
};

export default function Home() {
  const [article, setArticle] = useState<ArticleData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const generateArticle = async (keyword: string) => {
    setIsLoading(true);
    
    // 実際のAPIリクエストはここに実装します
    // 現在はモックデータを使用
    setTimeout(() => {
      const mockArticle: ArticleData = {
        title: `${keyword}に関する完全ガイド`,
        headings: [
          { id: "intro", text: "はじめに", level: 2 },
          { id: "what-is", text: `${keyword}とは何か`, level: 2 },
          { id: "benefits", text: `${keyword}のメリット`, level: 2 },
          { id: "how-to", text: `${keyword}の活用方法`, level: 2 },
          { id: "examples", text: "実例紹介", level: 3 },
          { id: "tips", text: "実践のためのヒント", level: 3 },
          { id: "conclusion", text: "まとめ", level: 2 },
        ],
        content: `<h1>${keyword}に関する完全ガイド</h1>
        <h2 id="intro">はじめに</h2>
        <p>この記事では${keyword}について詳しく解説します。</p>
        <h2 id="what-is">${keyword}とは何か</h2>
        <p>${keyword}は現代のデジタルマーケティングにおいて重要な要素です。</p>
        <h2 id="benefits">${keyword}のメリット</h2>
        <p>${keyword}を活用することで、様々なメリットが得られます。</p>
        <h2 id="how-to">${keyword}の活用方法</h2>
        <p>効果的な${keyword}の活用方法をご紹介します。</p>
        <h3 id="examples">実例紹介</h3>
        <p>成功している企業の${keyword}活用事例をいくつか見ていきましょう。</p>
        <h3 id="tips">実践のためのヒント</h3>
        <p>${keyword}を実践する際のヒントをご紹介します。</p>
        <h2 id="conclusion">まとめ</h2>
        <p>${keyword}についての理解を深めていただけたでしょうか。</p>`
      };
      
      setArticle(mockArticle);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <KeywordInput onGenerate={generateArticle} isLoading={isLoading} />
        </div>
        
        {article && (
          <div className="mt-8">
            <ArticleDisplay article={article} />
          </div>
        )}
      </main>
    </div>
  );
} 