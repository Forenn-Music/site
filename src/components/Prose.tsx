interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

export default function Prose({ children, className = '' }: ProseProps) {
  return (
    <article className={`prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-code:text-gray-800 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded ${className}`}>
      {children}
    </article>
  );
}
