import React from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents = ({ headings }: TableOfContentsProps) => {
  return (
    <div className="bg-gray-50 p-4 rounded-lg sticky top-4">
      <h3 className="text-lg font-semibold mb-3">目次</h3>
      <ul className="space-y-1">
        {headings.map((heading) => (
          <li 
            key={heading.id}
            className={`${heading.level === 3 ? "ml-4" : ""}`}
          >
            <a 
              href={`#${heading.id}`}
              className="text-blue-600 hover:underline block py-1"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents; 