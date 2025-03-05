"use client";

import { FormEvent } from "react";

interface KeywordFormProps {
  keywords: string;
  setKeywords: (value: string) => void;
  isLoading: boolean;
  onSubmit: (e: FormEvent) => void;
}

export default function KeywordForm({ keywords, setKeywords, isLoading, onSubmit }: KeywordFormProps) {
  return (
    <form onSubmit={onSubmit} className="w-full mb-8">
      <div className="flex flex-col gap-4">
        <label htmlFor="keywords" className="text-lg font-medium">
          キーワード入力
        </label>
        <input
          id="keywords"
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="キーワードを入力してください"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 disabled:bg-blue-400 transition-colors"
        >
          {isLoading ? "生成中..." : "案を生成"}
        </button>
      </div>
    </form>
  );
} 