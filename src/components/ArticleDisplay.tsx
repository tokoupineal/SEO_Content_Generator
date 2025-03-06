import React from "react";
import { Card } from "@/components/ui/card";
import TableOfContents from "./TableOfContents";
import { ArticleData } from "@/app/page";

interface ArticleDisplayProps {
  article: ArticleData;
}

const ArticleDisplay = ({ article }: ArticleDisplayProps) => {
  return (
    <Card className="w-full p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{article.title}</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/4">
          <TableOfContents headings={article.headings} />
        </div>
        
        <div className="md:w-3/4">
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </div>
      </div>
    </Card>
  );
};

export default ArticleDisplay; 