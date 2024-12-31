import { NextPage } from 'next';
import BlogPost from './my-blog/components/BlogPost';
import { blogPosts } from './my-blog/data/blogPosts';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-100">
      <h1 className="text-4xl font-bold p-4 text-center bg-green-500 text-white">Dynamic Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto p-4">
        {blogPosts.map((post) => (
          <BlogPost
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            imageUrl={post.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
