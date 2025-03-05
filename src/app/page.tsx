"use client";

import { useState } from "react";
import KeywordForm from "@/components/KeywordForm";
import OutlineDisplay from "@/components/OutlineDisplay";
import LoadingSpinner from "@/components/LoadingSpinner";
import { generateOutline } from '@/utils/api';

export default function Home() {
  const [keywords, setKeywords] = useState("");
  const [outline, setOutline] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!keywords.trim()) return;
    
    setIsLoading(true);
    setOutline("");
    
    try {
      // APIユーティリティ関数を使用
      const result = await generateOutline(keywords);
      setOutline(result);
    } catch (error) {
      console.error("Error generating outline:", error);
      setOutline("エラーが発生しました。もう一度お試しください。");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">キーワードから案ジェネレーター</h1>
      
      <KeywordForm 
        keywords={keywords}
        setKeywords={setKeywords}
        isLoading={isLoading}
        onSubmit={handleSubmit}
      />

      {isLoading && <LoadingSpinner />}
      
      <OutlineDisplay outline={outline} />
    </main>
  );
} 