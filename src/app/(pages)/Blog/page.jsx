import Link from 'next/link';

// Sample blog posts data
const blogPosts = [
  {
    id: '1',
    title: 'My First Blog Post',
    excerpt: 'This is a summary of my first blog post. It covers the basics of blogging.',
    date: '2024-09-10',
  },
  {
    id: '2',
    title: 'Next.js Basics',
    excerpt: 'An introduction to Next.js and its key features. Perfect for beginners.',
    date: '2024-09-11',
  },
  // Add more posts as needed
];

const BlogPage = () => {
  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {blogPosts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p><strong>Date:</strong> {post.date}</p>
            <p>{post.excerpt}</p>
            <Link href={`/posts/${post.id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogPage;