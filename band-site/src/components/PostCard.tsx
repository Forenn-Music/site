import Link from 'next/link';
import Image from 'next/image';
import { PostMeta } from '@/lib/posts';

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  const coverSrc = post.cover ? `/content/posts/${post.slug}/${post.cover}` : null;
  const date = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <Link 
      href={`/news/${post.slug}`} 
      className="group block rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200"
    >
      <div className="space-y-4">
        {coverSrc && (
          <div className="aspect-video overflow-hidden rounded-lg">
            <Image
              src={coverSrc}
              alt={post.title}
              width={600}
              height={400}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        )}
        
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <time dateTime={post.date}>{date}</time>
            {post.tags && post.tags.length > 0 && (
              <>
                <span>•</span>
                <span className="bg-gray-100 px-2 py-1 rounded-full text-xs">
                  {post.tags[0]}
                </span>
              </>
            )}
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          
          {post.excerpt && (
            <p className="text-gray-600 line-clamp-3">
              {post.excerpt}
            </p>
          )}
        </div>
        
        <div className="text-sm font-medium text-blue-600 group-hover:text-blue-700">
          Read more →
        </div>
      </div>
    </Link>
  );
}
