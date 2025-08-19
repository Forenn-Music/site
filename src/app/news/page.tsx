import Link from "next/link";
import { getPaginatedPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const dynamic = "force-static";

export default async function NewsIndex({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const params = await searchParams;
  const page = Number(params?.page ?? "1");
  const { posts, totalPages, page: currentPage } = getPaginatedPosts(page, 12);

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-4xl font-bold text-gray-900 mb-4">
          News
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Stay up to date with our latest releases, tour announcements, and behind-the-scenes content.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="space-y-8 mb-12">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No posts found.</p>
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-12">
          {currentPage > 1 && (
            <Link
              href={`/news?page=${currentPage - 1}`}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Previous
            </Link>
          )}
          
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
            <Link
              key={pageNum}
              href={`/news?page=${pageNum}`}
              className={`px-4 py-2 rounded-lg border transition-colors ${
                pageNum === currentPage
                  ? "bg-gray-900 text-white border-gray-900"
                  : "border-gray-300 hover:bg-gray-50"
              }`}
            >
              {pageNum}
            </Link>
          ))}
          
          {currentPage < totalPages && (
            <Link
              href={`/news?page=${currentPage + 1}`}
              className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Next
            </Link>
          )}
        </div>
      )}
    </main>
  );
}
