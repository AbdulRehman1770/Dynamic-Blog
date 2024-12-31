import { blogPosts } from '@/app/my-blog/data/blogPosts';
import CommentSection from '@/app/my-blog/components/CommentSection';

interface BlogPostPageProps {
  params: {
    id: string; 
  };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const postId = parseInt(params.id, 10);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return <div>Post not found!</div>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-4xl">
        <div className="md:flex md:flex-row-reverse">
          <div className="md:flex-shrink-0">
            <img className="h-72 w-full object-cover md:h-full md:w-96" src={post.imageUrl} alt={post.title} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">{post.title}</div>
            <p className="mt-2 text-gray-500">{post.content2}</p>
            <div className="mt-4">
              <CommentSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const generateStaticParams = async () => {
  const paths = blogPosts.map((post) => ({
    id: post.id.toString(),
  }));

  return paths;
};

export default BlogPostPage;