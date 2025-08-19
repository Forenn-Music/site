import Image from "next/image";
import Link from "next/link";
import { getPostSlugs, getPostHtml } from "@/lib/posts";
import Prose from "@/components/Prose";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

export async function generateStaticParams() {
  return getPostSlugs().map(slug => ({ slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const { meta, html } = await getPostHtml(slug);
  const coverSrc = meta.cover ? `/content/posts/${meta.slug}/${meta.cover}` : null;
  const date = new Date(meta.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <article className="mx-auto max-w-4xl px-4 py-10">
      {/* Back to News */}
      <div className="mb-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to News
        </Link>
      </div>

      {/* Post Header */}
      <header className="mb-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <time dateTime={meta.date}>{date}</time>
            {meta.tags && meta.tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex gap-2">
                  {meta.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 px-3 py-1 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {meta.title}
          </h1>
          
          {meta.excerpt && (
            <p className="text-xl text-gray-600 leading-relaxed">
              {meta.excerpt}
            </p>
          )}
        </div>
      </header>

      {/* Cover Image */}
      {coverSrc && (
        <div className="mb-8">
          <div className="aspect-video rounded-2xl overflow-hidden">
            <Image
              src={coverSrc}
              alt={meta.title}
              width={1280}
              height={720}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      )}

      {/* Post Content */}
      <div className="mb-12">
        <Prose>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </Prose>
      </div>

      {/* Post Footer */}
      <footer className="border-t border-gray-200 pt-8">
        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            Published on {date}
          </div>
          <Link
            href="/news"
            className="text-blue-600 hover:text-blue-700 font-medium"
          >
            View All News →
          </Link>
        </div>
      </footer>
    </article>
  );
}
