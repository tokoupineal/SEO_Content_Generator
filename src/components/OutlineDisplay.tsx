interface OutlineDisplayProps {
  outline: string;
}

export default function OutlineDisplay({ outline }: OutlineDisplayProps) {
  if (!outline) return null;
  
  return (
    <div className="w-full">
      <h2 className="text-xl font-bold mb-4">構成案</h2>
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
        <pre className="whitespace-pre-wrap">{outline}</pre>
      </div>
    </div>
  );
} 