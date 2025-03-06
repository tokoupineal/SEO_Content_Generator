import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import LoadingSpinner from "./LoadingSpinner";

interface KeywordInputProps {
  onGenerate: (keyword: string) => void;
  isLoading: boolean;
}

const KeywordInput = ({ onGenerate, isLoading }: KeywordInputProps) => {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (keyword.trim() && !isLoading) {
      onGenerate(keyword.trim());
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-xl">SEO記事を生成</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="keyword">キーワード</Label>
            <Input
              id="keyword"
              placeholder="例: デジタルマーケティング、SEO対策、コンテンツ戦略など"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              disabled={isLoading}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full" 
            disabled={!keyword.trim() || isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <LoadingSpinner className="mr-2" />
                生成中...
              </span>
            ) : (
              "記事を生成する"
            )}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default KeywordInput; 