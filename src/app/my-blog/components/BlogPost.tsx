import React from 'react';
import Link from 'next/link';

interface BlogPostProps {
  id: number;
  title: string;
  excerpt: string;
  imageUrl: string;
}

const BlogPost: React.FC<BlogPostProps> = ({ id, title, excerpt, imageUrl }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={imageUrl} alt={title} />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">{title}</div>
          <p className="mt-2 text-gray-500">{excerpt}</p>
          <Link href={`/blog/${id}`} className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
