import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../../services/BlogServices';
import './style.css'; // Optional for additional styling

interface Blog {
  id: number;
  title: string;
  content: string;
  images: { url: string }[];
}

const BlogListPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await getAllBlogs();
        setBlogs(response.data);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Failed to fetch blogs');
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="blog-list-container">
      <h1 className="page-title">Chuyện Nhà</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            {blog.images[0] && (
              <img
                src={blog.images[0].url}
                alt={blog.title}
                className="blog-image"
              />
            )}
            <div className="blog-content">
              <h2 className="blog-title">
                <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
              </h2>
              <p className="blog-excerpt">
                {blog.content.length > 150
                  ? `${blog.content.slice(0, 150)}...`
                  : blog.content}
              </p>
              <Link to={`/blog/${blog.id}`} className="read-more">
                Đọc tiếp
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListPage;

